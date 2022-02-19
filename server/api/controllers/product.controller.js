const pool = require("./../../postgresql");

const getProducts = async (req, res, next) => {
  try {
    await pool.query("SELECT * FROM product").then((results) => {
      console.log(results);
      res.status(200).json(results.rows != null ? results.rows : null);
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const getProduct = async (req, res, next) => {
  const id = req.params.id;
  try {
    await pool
      .query("SELECT * FROM product WHERE ID =" + id)
      .then((results) => {
        res.status(200).json(results.rows[0]);
      });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const updateProduct = async (req, res, next) => {
  const query = `UPDATE "product"
                 SET "name" = $2, 
                     "description"=$3, 
                     "flex"=$4,
                     "frame"=$5,
                     "weight"=$6,
                     "stringing"=$7,
                     "colors"=$8,
                     "itemcode"=$9,
                     "origin"=$10,
                     "price"=$11,
                     "imageurl"=$12
                 WHERE "id" =$1`;

  const {
    id,
    name,
    description,
    flex,
    frame,
    weight,
    stringing,
    colors,
    itemcode,
    price,
    origin,
    imageurl,
  } = req.body;

  try {
    await pool
      .query(query, [
        id,
        name,
        description,
        flex,
        frame,
        weight,
        stringing,
        colors,
        itemcode,
        origin,
        price,
        imageurl,
      ])
      .then((results) => {
        res.status(200).json();
      });
  } catch (error) {
    res.status(500).json(error);
  }
};

const createProduct = async (req, res, next) => {
  const query = `INSERT INTO product(name, imageurl, price, description, flex, frame, weight, stringing ,colors, itemcode, origin, producttypeid, productbrand)
  VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`;

  const {
    name,
    description,
    flex,
    frame,
    weight,
    stringing,
    colors,
    itemcode,
    origin,
    price,
    imageurl,
  } = req.body;
  try {
    await pool
      .query(query, [
        name,
        imageurl,
        price,
        description,
        flex,
        frame,
        weight,
        stringing,
        colors,
        itemcode,
        origin,
        1,
        1,
      ])
      .then((results) => {
        res.status(200).json();
      });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const deleteProduct = async (req, res, next) => {
  const id = req.params.id;

  try {
    await pool.query("DELETE FROM product WHERE ID =" + id).then((results) => {
      res.status(200).json();
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = {
  getProduct,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
