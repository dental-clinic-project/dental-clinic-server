const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');

exports.registerValidation = [
  body('email').isEmail().withMessage('Invalid email address'),
  body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
  body('fullName').isLength({ min: 3 }).withMessage('Full name must be at least 3 characters long'),
  body('phone')
    .isLength({ min: 13 })
    .withMessage('Phone number must be at least 13 characters long'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

exports.login = (req, res) => {
  const token = jwt.sign(
    {
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
      fullName: req.body.fullName,
    },
    'secretKey'
  );

  res.json({
    success: true,
    token,
  });
};

exports.signup = (req, res) => {
  res.status(200).json({ success: true });
};
