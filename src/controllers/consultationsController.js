import Consultations from "../models/consultationsModel.js";

export const validateConsultation = async (req, res, next) => {
  try {
    const consultation = await Consultations.findOne({ date: req.body.date });

    if (consultation === null) {
      req.body.consultation = await Consultations.create(req.body);
      next();
    } else {
      req.body.consultation = consultation;
      next();
    }
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err || "Feailed to get Consultation data",
    });
  }
};

export const getConsultation = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: req.body.consultation,
  });
};

export const validateForAppointment = async (req, res, next) => {
  const consultation = await Consultations.findById(req.params.id);

  const timeIsBusy = consultation.consultations.includes(req.body.time);

  console.log(timeIsBusy, "line 34");

  if (!timeIsBusy) {
    consultation.consultations.push(req.body.time);
    req.body.consultation = consultation;

    await Consultations.findByIdAndUpdate(consultation._id, consultation);
    next();
  } else {
    res.status(404).json({
      status: "fail",
      message: "Feailed to add Consultation data, time is busy",
    });
  }
};

export const appointmentForConsultation = (req, res) => {
  res.status(200).json({
    status: "success",
    data: req.body.consultation,
  });
};
