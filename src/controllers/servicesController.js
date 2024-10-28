import Services from "../models/servicesModel.js";

export const getServices = async (req, res) => {
  try {
    const services = await Services.find();
    const updateServices = services.map((service) => ({
      _id: service._id,
      service: service.service,
      description: service.description,
      path: service.path,
    }));

    res.status(200).json({
      status: "success",
      results: updateServices.length,
      data: {
        services: updateServices,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err || "Failed to get services data",
    });
  }
};

export const getService = async (req, res) => {
  try {
    const validatePath = "/services/" + req.params.service;
    const service = await Services.findOne({ path: validatePath });

    res.status(200).json({
      status: "success",
      data: {
        name: service.service,
        description: service.card.cardDescription,
        image: service.card.cardImage,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err || "Failed to get service data",
    });
  }
};
