"use strict";

/** Database for lunchly */

const { Client } = require("pg");

const DB_URI = process.env.NODE_ENV === "test"
    ? "postgresql:///lunchly_test" //TODO: update test db name
    : "postgresql:///lunchly"; //TODO: update production db name

let db = new Client({
  connectionString: DB_URI,
});

db.connect();


module.exports = db;
