import Services from '../models/servicesModel.js';

export const getServices = async (req, res) => {
  try {
    const services = await Services.find();
    res.status(200).json({
      status: 'success',
      results: services.length,
      data: {
        services,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err || 'Feailed to get services data',
    });
  }
};
