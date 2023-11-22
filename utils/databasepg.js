const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "zenituser40",
  port: 5432,
  database: "zenitKK40",
  password: "zenitpass40",
});

//master password is = Pa$$w0rd

module.exports = pool;

//postup na vytvorenie db v postgresql

// 1) vytvorite server s menom zenit

// 2) v login/group roles vytvorime uzivatela s menom zenituser40 a v sekcii privileges mu dame vsetky prava

// 3) pre server vytvorime databazu s menom zenitKK40 a ako vlastnika uvedieme zenituser40

// 4) otvorime databazu a zvolime query tool a tam vlozime sql subor
