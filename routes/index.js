const express = require("express");

const router = express.Router();
const mainController = require("../controllers/main");

router.get("/", mainController.getIndex);
router.post("/post-newsletter", mainController.postNewsLetter);
router.get("/form/:lid", mainController.getFormWithLocation);
router.get("/form", mainController.getForm);
router.get("/new-reservation", mainController.postNewsLetter);
router.post("/new-reservation-data", mainController.postNewReservationData);

module.exports = router;
