import createError from 'http-errors';
import express from 'express';
import path from 'path';
import logger from 'morgan';
import { fileURLToPath } from 'url';
import http from 'http';
import debugModule from 'debug';
import fs from 'fs';
const debug = debugModule('todos:server');
//import _ from 'lodash';

//import { enableLiveReload } from './src/livereload.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Sur la page d'acceuil afficher chacun des pays avec leur couleur?
// Thailande: brun sable
// Cambodge: Gris brunâtre temple
// Vietnam: bleu clair, turquoise
// Chine: Vert et rouge? (Background vert fôret avec cadres rouges)
// Japon: vert forêt, bleuté
// Nouvelle Zélande: Vert pâle prairie, jaunâtre même un peu
// Italie: Rouge brun tuile
// France: Gris pierre architecture
// Belgique: Vert forêt
// Pays-Bas: Bleu foncé
// Turquie: Bleu blanchâtre
// Bulgarie: Noir
// Polynésie française: Bleu ou vert
let places = ['thailand']

let tripDetails = {
  thailand: {
    name: 'Thaïlande',
    description: 'Ma première destination a été la Thaïlande.',
    color: '#603616',
    backgroundColor: '#fbdfaa',
  },
}

let trips = {}
places.forEach(place => {
  trips[place] = {
    place: place,
    ...tripDetails[place],
    image: place+'.jpg',
    images: fs.readdirSync(path.join(__dirname, 'public', place)),
  }
})

var app = express();

//enableLiveReload(app)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.locals.locale = 'fr'

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res, next) {
  res.locals.trips = Object.values(trips)
  res.render('index')
})

app.get('/t/:name', function(req, res, next) {
  res.locals.trip = trips[req.params.name]
  res.render('trip')
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {

  if (typeof err === 'string') {
    res.locals.message = err;
    res.locals.error = {};
  } else {
    res.locals.message = err.message;
    res.locals.error = err;
  }

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

var server = http.createServer(app);
// Listen on provided port, on all network interfaces.
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    return val; // named pipe
  }

  if (port >= 0) {
    return port; // port number
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
