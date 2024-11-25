const bcrypt = require("bcrypt");
const User = require("../models/users");

exports.getAllUsers = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    throw new Error("Error fetching users: " + error.message);
  }
};

exports.createUser = async (username, password, email, role = "user") => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      password: hashedPassword,
      email,
      role,
    });
    return newUser;
  } catch (error) {
    throw new Error("Error creating user: " + error.message);
  }
};

exports.updateUser = async (id, updates) => {
  try {
    const updatedUser = await User.update(updates, { where: { id } });
    return updatedUser;
  } catch (error) {
    throw new Error("Error updating user: " + error.message);
  }
};

exports.deleteUser = async (id) => {
  try {
    const result = await User.destroy({ where: { id } });
    return result;
  } catch (error) {
    throw new Error("Error deleting user: " + error.message);
  }
};

exports.findByUsername = async (username) => {
  try {
    const user = await User.findOne({ where: { username } });
    return user;
  } catch (error) {
    throw new Error("Error finding user: " + error.message);
  }
};
