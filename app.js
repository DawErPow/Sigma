const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const path = require('path');
const connectToDatabase = require('./database/connect');
const cors = require('./middlewares/cors');
const app = express();
const PORT = 3001;
const {apiRouter} = require("./routes/apiRouter");
const {pagesRouter} = require("./routes/pages")

connectToDatabase();

app.use(
  cors, 
  cookieParser(),
  bodyParser.json(),
  pagesRouter,
  express.static(path.join(__dirname, 'public')),
  apiRouter,
);

app.listen(PORT);



