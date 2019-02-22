const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

const cors = require('cors')

var corsOptions = {
  origin: '*', //http://localhost:3000\$/  ['http://localhost:3000/', 'http://localhost:3000/people', 'http://localhost:3000/person']
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions))


var  Person = require('./api/models/pocModel');
     
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/StatePoC');

// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/pocRoutes');
routes(app);

app.listen(port, () => {
  console.log('Server started!');
});

app.use(function (req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'});
});

// app.route('/api/cats').get((req, res) => {
//     res.send({
//         cats: [{ name: 'lilly' }, { name: 'lucy' }]
//       });
// });

// app.route('/api/cats/:name').get((req, res) => {
//     const requestedCatName = req.params['name']
//     res.send({ name: requestedCatName });
// });

// app.use(bodyParser.json());
// app.route('api/cats').post((req, res) => {
//     res.send(201, req.body);
// });

// app.route('/api/cats/:name').put((req, res) => {
//     res.send(200, req.body);
//   });


// app.route('/api/cats/:name').delete((req, res) => {
//     res.sendStatus(204);
//   });