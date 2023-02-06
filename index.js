const express = require("express");
const shortenUrl = require("./routes/url");
const app = express();
const PORT = 3001;
//accept json and body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(`/shorten-url`, shortenUrl);
app.listen(PORT, () => {
  console.log("URL SHORTENER App is running at ", PORT);
});
