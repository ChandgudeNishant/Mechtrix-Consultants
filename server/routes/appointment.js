const express = require("express");
const router = express.Router();

const { createAppointment } = require("../controllers/createAppointment");
const { getAppointment } = require("../controllers/getAppointments");

router.post("/createAppointment", createAppointment);
router.get("/getAppointment", getAppointment);

module.exports = router;
