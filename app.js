const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const connectionString  = process.env.DB_STRING;
const postsRoute = require('./routes/posts')

//middle wares
app.use(bodyParser.json());
app.use(cors());



//connectting to db
mongoose.Promise = global.Promise;
mongoose.connect(connectionString, {
	useNewUrlParser: true,
	useUnifiedTopology: true,

},
function(error) {
  if (error) {
      console.log("Error!" + error);
  }
}
)

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});



//importing routes

app.use('/posts', postsRoute)


app.get('/', postsRoute)





app.listen(2000)