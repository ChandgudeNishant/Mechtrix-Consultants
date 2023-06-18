const express = require("express");
const router = express.Router();

const { createAppointment } = require("../controllers/createAppointment");
const { getAppointment } = require("../controllers/getAppointments");
const { createUser , loginUser} = require('../controllers/createUser');

router.post("/createAppointment", createAppointment);
router.get("/getAppointment", getAppointment);
router.post("/createUser",createUser);
router.post('/loginUser', loginUser);

module.exports = router;
