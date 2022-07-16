const db = require("./config/database");
const fs = require("fs");

const sql = fs.readFileSync("saledb.sql").toString();

const migrate = async () => {
  // // const updated = process.env.UPDATE
  // // console.log('updated', updated)
  // // if (updated === 'dev') {
  //     const result = await db.query(sql)
  //     console.log('result', result)
  //     process.exit(0)
  // // }
  const result = await db.query(sql);
  console.log("result==========", result);
  process.exit(0);
};

migrate().catch((error) => {
  console.log("Migrate error", error);
  process.exit(1);
});

//is a file to do a command in sql to database
