import Users from '../models/authModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { body, validationResult } from 'express-validator';

export const registerValidation = [
  body('email').isEmail().withMessage('Invalid email address'),
  body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
  body('fullName').isLength({ min: 6 }).withMessage('Full name must be at least 6 characters long'),
  body('phone')
    .isLength({ min: 13 })
    .withMessage('Phone number must be at least 13 characters long'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorArray = errors.array();
      return res.status(400).json({ message: errorArray[0].msg });
    }
    next();
  },
];

export const login = async (req, res) => {
  try {
    const user = await Users.findOne({ email: req.body.email });

    if (!user) {
      return res.status(400).json({ message: 'Failed to login' });
    }

    const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash);

    if (!isValidPass) {
      return res.status(400).json({ message: 'Login or password is incorrect' });
    }

    const token = jwt.sign(
      {
        _id: user._id,
      },
      'secretKey',
      {
        expiresIn: '30d',
      }
    );

    const { passwordHash, ...userData } = user._doc;

    res.status(200).json({ success: true, user: userData, token, login: true });
  } catch (error) {
    res.status(500).json({ message: 'Failed to login', error, login: false });
  }
};

export const signup = async (req, res) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 10);

    // const doc = new Users({
    //   email: req.body.email,
    //   passwordHash: hash,
    //   phone: req.body.phone,
    //   fullName: req.body.fullName,
    // });

    // const user = await doc.save();

    const user = await Users.create({
      email: req.body.email,
      passwordHash: hash,
      phone: req.body.phone,
      fullName: req.body.fullName,
    });

    const token = jwt.sign(
      {
        _id: user._id,
      },
      'secretKey',
      {
        expiresIn: '30d',
      }
    );

    const { passwordHash, ...userData } = user._doc;

    res.status(200).json({ success: true, user: userData, token, signup: true });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create user', error, signup: false });
  }
};
