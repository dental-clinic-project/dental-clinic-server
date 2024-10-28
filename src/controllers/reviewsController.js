import Reviews from "../models/reviewsModel.js";

export const getReviews = async (req, res) => {
  try {
    const reviews = await Reviews.find();
    res.status(200).json({
      status: "success",
      data: {
        reviews,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err || "Feailed to get reviews data",
    });
  }
};

export const addReviews = async (req, res) => {
  try {
    const review = await Reviews.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        review,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err || "Feailed to add reviews data",
    });
  }
};
