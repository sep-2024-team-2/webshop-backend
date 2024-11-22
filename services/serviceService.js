const Service = require("../models/service");

//CRUD

exports.getAll = async () => {
  try {
    const services = await Service.findAll();
    return services;
  } catch (error) {
    throw new Error("Error fetching services: " + error.message);
  }
};

exports.create = async (name, description, price) => {
  try {
    const newService = await Service.create({ name, description, price });
    return newService;
  } catch (error) {
    throw new Error("Error creating service: " + error.message);
  }
};

exports.update = async (id, name, description, price) => {
  try {
    const updatedService = await Service.update(
      { name, description, price },
      { where: { id } }
    );
    return updatedService;
  } catch (error) {
    throw new Error("Error updating service: " + error.message);
  }
};

exports.delete = async (id) => {
  try {
    const result = await Service.destroy({ where: { id } });
    return result;
  } catch (error) {
    throw new Error("Error deleting service: " + error.message);
  }
};
