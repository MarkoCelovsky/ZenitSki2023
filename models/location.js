const db = require("../utils/databasepg");

module.exports = class Location {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  static async findAllLocations() {
    const result = await db.query(`
        SELECT *
        FROM zenit.location
        ORDER BY price ASC
      `);

    return result.rows;
  }
};
