const User = require("../models/users");
exports.login = async (req, res) => {
  const { email, password } = req.body;

  console.log("Received email:", email);

  try {
    const emailTrimmed = email.trim().toLowerCase();

    const user = await User.findOne({ where: { email: emailTrimmed } });
    // const allUsers = await User.findAll();
    // console.log("All users in the database:", allUsers);
    // const user1 = await User.findOne({ where: { email: "user1@example.com" } });
    // console.log("User found:", user1);

    if (!user) {
      console.log("User not found for email:", email);
      return res.status(400).json({ message: "User not found!" });
    }

    if (user.password !== password) {
      console.log("Invalid password for email:", email);
      return res.status(400).json({ message: "Invalid credentials!" });
    }

    res.status(200).json({ message: "Login successful!", user });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
