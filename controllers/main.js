const Location = require("../models/location");
const Newsletter = require("../models/newsletter");
const Reservation = require("../models/reservation");

exports.getIndex = async (req, res, next) => {
  try {
    const locations = await Location.findAllLocations();
    res.render("index", {
      pageTitle: "Home",
      path: "/home",
      locations: locations || [],
    });
  } catch (err) {
    res.render("index", {
      pageTitle: "Home",
      path: "/home",
      locations: [],
    });
  }
};

exports.getForm = async (req, res, next) => {
  const locations = await Location.findAllLocations();

  try {
    res.render("form", {
      pageTitle: "Form",
      path: "/form",
      locations: locations || [],
      today: new Date(),
    });
  } catch (err) {
    res.render("index", {
      pageTitle: "Home",
      path: "/home",
      locations: [],
    });
  }
};

exports.getFormWithLocation = async (req, res, next) => {
  const lid = req.params.lid;
  const locations = await Location.findAllLocations();

  const selected = locations.find((loc) => loc.id === +lid);

  try {
    res.render("formlocation", {
      pageTitle: "Form",
      path: "/form",
      locations: locations || [],
      selectedLocation: selected,
      today: new Date(),
    });
  } catch (err) {
    res.render("index", {
      pageTitle: "Home",
      path: "/home",
      locations: [],
    });
  }
};

exports.postNewsLetter = async (req, res, next) => {
  try {
    const data = req.body;
    const newsletter = new Newsletter(data.name, data.email);
    await newsletter.save();
    res.redirect("/");
  } catch (err) {
    res.redirect("/");
  }
};

exports.postNewReservationData = async (req, res, next) => {
  try {
    const {
      location,
      email,
      phone,
      fullName,
      numberOfPeople,
      passType,
      numberOfDays,
      reservationDate,
      totalAmount,
    } = req.body;

    const reservation = new Reservation(
      location,
      email,
      phone,
      fullName,
      [numberOfPeople],
      passType,
      numberOfDays,
      reservationDate,
      totalAmount
    );

    await reservation.save();
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
};
