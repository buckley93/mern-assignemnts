require('./config/mongoose.config');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./routes/authors.routes')(app);
app.listen(8000, () => console.log(`listening on port: ${port}`));