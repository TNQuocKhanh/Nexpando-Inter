const db = require("../config/database");

exports.getProducts = async (req, res) => {
  try {
    const sql = `SELECT * FROM product order by id;`;
    const { rows } = await db.query(sql);
    res.status(201).send({
      message: "Show list of products sucessfully",
      body: { rows },
    });
  } catch (error) {
    console.log("Error", error);
  }
};

exports.createProduct = async (req, res) => {
  const { cate_id, name, price, description } = req.body;
  console.log("What we POST ====>", req.body);
  const sqltest = `INSERT INTO product(cate_id, name, price, description) VALUES ('${cate_id}', '${name}','${price}', '${description}')`;
  // console.log('test->>>>>',sqltest);
  const { rows } = await db.query(sqltest);
  if (rows === null) {
    res.status(500).send({
      message: "Please enter your infomation...",
    });
  } else {
    res.status(200).send({
      message: "Product added successfully!",
      body: {
        product: { cate_id, name, price, description },
      },
    });
  }
};

exports.updateProduct = async (req, res) => {
  const { cate_id, name, price, description } = req.body;
  console.log("log---------------->", req.body);
  const id = req.params.productId;
  const sqlupdate = `UPDATE product SET cate_id= '${cate_id}', name = '${name}', description = '${description}', price = '${price}' WHERE id = ${id}`;
  const { rows } = await db.query(sqlupdate);
  if (rows === null) {
    res.status(500).send({
      message: "Please enter your infomation...",
    });
  } else {
    res.status(200).send({
      message: "Product added successfully!",
      body: {
        product: { cate_id, name, price, description },
      },
    });
  }
};

exports.deleteProduct = async (req, res) => {
  const id = req.params.productId;
  const { rows } = await db.query(`select id from product where id = $1`, [id]);
  // console.log('test rows -----> ',{rows})
  if (rows.length > 0 && rows[0]) {
    await db.query("DELETE from product where id = $1", [id]);
    res.status(201).send({
      message: `Product was removed successfully!`,
    });
  } else {
    res.status(503).send({
      message: `Product added not exist!`,
    });
  }
  console.log("row ---->", rows);
  res.status(201).send();
};

exports.get10Products = async (req, res, next) => {
  const sql = `select count(*) from product;`;
  const { rows } = await db.query(sql);
  console.log(rows[0].count);

  let perPage = 10;
  let page = req.params.page || 1;
  let offset = perPage * (page - 1);

  let totalPage = Math.ceil(rows[0].count / perPage);
  console.log("PAGE", page);
  console.log("TOTAL", totalPage);

  try {
    const sql = `SELECT * FROM product offset ${offset} limit ${perPage};`;
    const { rows } = await db.query(sql);
    res.status(201).send({
      message: "Show 10 products sucessfully",
      body: { rows },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.countTotalProduct = async (req, res) => {
  try {
    const sql = `select count(*) from product;`;
    const { rows } = await db.query(sql);
    res.status(201).send({
      message: "Show list of products sucessfully",
      body: { rows },
    });
  } catch (error) {
    console.log("Error", error);
  }
};
