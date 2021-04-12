const express = require("express")
const app = express();

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

const allMyRoutes = require("./server/routes/jokes.routes");
allMyRoutes(app);

app.listen(8000, () => console.log("the server is on port 8000"));