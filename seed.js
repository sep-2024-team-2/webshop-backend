const Service = require("./models/service");

const seedDatabase = async () => {
  try {
    await Service.bulkCreate([
      {
        name: "Televizija",
        price: 2000,
        description: "Paket kanala za celu porodicu",
      },
      {
        name: "Telefonija",
        price: 1000,
        description: "Besplatni minuti u mreži",
      },
      {
        name: "Internet",
        price: 3000,
        description: "Brzi internet do 100 Mbps",
      },
    ]);
    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

module.exports = seedDatabase;
