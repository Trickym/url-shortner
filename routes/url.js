const express = require("express");
const router = express.Router();
const { nanoid } = require("nanoid");
const createDB = require("../config/db");
const URL = require("../models/urlModel");

createDB.sync().then(() => {
  console.log("DB Running!");
});

const baseURL = `http://localhost:3001/shorten-url`;

router.post(`/`, async (req, res) => {
  try {
    const { long_url } = req.body;
    console.log(req.body);
    const short_id = nanoid(4);
    const short_url = await URL.create({
      long_url,
      short_url: short_id,
    });
    return res
      .status(201)
      .json({ status: "OK", short_url: `${baseURL}/${short_id}` });
  } catch (error) {
    return res
      .status(400)
      .json({ status: "FAILED", message: "Something went wrong!" });
  }
});

router.get(`/:short_id`, async (req, res) => {
  let short_id = req.params.short_id;
  console.log(short_id, "sieieie");
  try {
    let url = await URL.findOne({
      where: {
        short_url: short_id,
      },
    });
    if (!url) {
      return res.status(400).json({ status: "FAILED", message: "Not Found" });
    }
    console.log("Found", url.dataValues?.long_url);
    return res.redirect(url.dataValues?.long_url);
  } catch (error) {}
});

module.exports = router;
