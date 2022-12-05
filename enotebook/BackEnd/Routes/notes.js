const express = require("express");
const Notes = require("../models/Notes");
const router = express.Router();
const { body, validationResult } = require("express-validator");

// Create a User using: POST "/api/auth/". Doesn't require Auth

router.post(
  "/",
  [
    body("title").isLength({ min: 3 }),
    body("description").isLength({ min: 10 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    Notes.create({
      title: req.body.title,
      description: req.body.description,
      tag: req.body.tag,
    })
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        res.json({
          error: `the email ${req.body.email} already exists`,
          message: err.message,
        });
      });
  }
);
module.exports = router;
