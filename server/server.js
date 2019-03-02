const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const morgan = require('morgan');
var mongoose = require('mongoose')
require('mongoose-moment')(mongoose);
const config = require('./db');
const eventRoute = require('./routes/eventRoute');
const app = express();
const port = process.env.PORT || '3001';


mongoose.connect(config.DB, { useNewUrlParser: true })
  .then(
    () => { console.log('Database is connected'); },
    err => console.log(`Can not connect to the database: ${err}`),
  );

app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use('/api/events', eventRoute);
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/calendar.html'));
  //__dirname : It will resolve to your project folder.
});
app.use((req, res) => {
  res.status(404);
  res.send('error 404');
});

app.use((err, req, res, next) => {
  res.status(500);
  console.log(`ERROR: ${err}`);
  res.send(`ERROR 500: ${err}`);
});


app.use(express.static(__dirname + '/View'));

app.get('/', (req, res, next) => {
  res.render("calendar.html")
})

app.listen(port, () => {
  console.log(`Express server started on ${port}`);
});