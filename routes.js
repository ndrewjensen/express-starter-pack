"use strict";

/** Routes for Lunchly */

const express = require("express");

//TODO: update Class names
const UpdateThisClassName = require("./models/dbClassTemplate");
const UpdateThisOneToo = require("./models/reservation");

const router = new express.Router();

/** Homepage: show list of customers. */

router.get("/", async function (req, res, next) {
  return res.render("index.html",
  );
});

// ...all other routes

module.exports = router;