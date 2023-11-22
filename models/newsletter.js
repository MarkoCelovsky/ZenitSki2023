const db = require("../utils/databasepg");

module.exports = class Newsletter {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  save() {
    return db.query(
      `
       INSERT INTO zenit.newsletter (full_name, email)
       VALUES ($1, $2);`,
      [this.name, this.email]
    );
  }

  static async findAllNewsletterItems() {
    const result = await db.query(`
        SELECT *
        FROM zenit.newsletter
        ORDER BY timestamp_created DESC
      `);

    return result.rows;
  }
};
