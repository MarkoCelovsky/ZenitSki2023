const db = require("../utils/databasepg");

module.exports = class Reservation {
  constructor(
    locationId,
    email,
    phoneNumber,
    fullName,
    numberOfPeople,
    passType,
    numberOfDays,
    reservationDate,
    totalAmount
  ) {
    this.locationId = locationId;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.fullName = fullName;
    this.numberOfPeople = numberOfPeople;
    this.passType = passType;
    this.numberOfDays = numberOfDays;
    this.reservationDate = reservationDate;
    this.totalAmount = totalAmount;
  }

  save() {
    return db.query(
      `
        INSERT INTO zenit.reservation (location_id, email, phone_number, full_name, number_of_people, pass_type, number_of_days, reservation_date, total_amount)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
        RETURNING id;
      `,
      [
        this.locationId,
        this.email,
        this.phoneNumber,
        this.fullName,
        this.numberOfPeople,
        this.passType,
        this.numberOfDays,
        this.reservationDate,
        this.totalAmount,
      ]
    );
  }
};
