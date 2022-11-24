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

// Parler des agriculteurs cambodgiens qui ont l'air tellement pauvre, mais heureux.
// Ils un super beau sourire challeureux avec les 2-3 dents qui leur reste.
//
// Faire une page à propos de tous les gens que j'ai rencontré.
//
// Raconter que Wood passait la ses aniversaires seuls au temple à réfléchir sur sa dernière année.
// Raconter son histoire.
//
// Écrire 
//
// Parler que la Chine était vraiment gris.
//
// La chine est pollué. Pendant 1 mois que j'étais là, le temps était pas mal toujours gris.
// Comme un smog constant.
//
// Je ne m'en rendais pas tant compte sure le moment.
//
// Mais, quand j'ai quitté la Chine pour le Japon, je n'en revenais à quel point le ciel était bleu et que la végétation était verte!
//
// On le voit bien sur les photos. Je n'ai pas vraiment de belles photos de paysages, elles sont toutes grises...
//
// Adolphe Sax, 46 brevets, mais 3 faillites
// L'emplacement où Jeanne-D'arc a été brulé
//
// En italie, je restais en adoration longtemps devait les magnifiques grand bâtiment.
//
// Je me sentais comme dans assassins's creed!
//
// Très pratique les petites autos à Rome. Le stationnement est très très très difficile.
//
// Le bain en italie. Une petite pensée pour ma blonde qui doit laver le bain avant de le prendre.
//
// Un jeune homme de 18 ans sait reconnaître l'art lorsqu'il en voit. Il sait apprécié les courbes et les formes des oeuvres.

let descritions = {
  vachesCambdoges: 'Pour faire plaisir à mes parents qui sont agriculteurs. Des belles vaches.'
}

// Sur la page d'acceuil afficher chacun des pays avec leur couleur?
// Japon: vert forêt, bleuté
// Nouvelle Zélande: Vert pâle prairie, jaunâtre même un peu
// Italie: Rouge brun tuile
// France: Gris pierre architecture
// Belgique: Vert forêt
// Pays-Bas: Bleu foncé
// Turquie: Bleu blanchâtre
// Bulgarie: Noir
// Polynésie française: Bleu ou vert
// Étais Unis: bleu margin et blanc. Ou blanc et Noir

let tripDetails = {
  thailand: {
    name: 'Thaïlande',
    description: "Mes voyages à l'extérieur du continent ont commencé en Thaïlande. Je suis parti avec un billet d'aller et mon sac à dos seulement.",

    descriptions: {
      activite_01: "Dans une auberge de jeunesse, j'ai recontré un très gentil Thaïlandais qui s'appelle Wood. On a passé une semaine ensemble à voyager. On a traversé la Thaïlande de Bangkok jusqu'à Chiang Rai. C'est lui avec moi sur l'éléphant. Il en avait déjà fait, mais il m'a accompagné parce que c'était moins cher ainsi. Le prix pour les locaux est moins cher que le prix pour les touristes.",
    },
  },
  cambodia: {
    name: 'Cambodge',
    description: 'Lorem ipsum blah foo bar baz foo bar baz.',
  },
  vietnam: {
    name: 'Viêt Nam',
    description: 'Lorem ipsum blah foo bar baz foo bar baz.',
  },
  china: {
    name: 'Chine',
    description: 'Lorem ipsum blah foo bar baz foo bar baz.',
  },
  newzealand: {
    name: 'Nouvelle-Zélande',
    description: 'Lorem ipsum blah foo bar baz foo bar baz.',
  },
  italy: {
    name: 'Italy',
    description: 'Lorem ipsum blah foo bar baz foo bar baz.',
  },
  france: {
    name: 'France',
    description: 'Lorem ipsum blah foo bar baz foo bar baz.',
  },
  belgium: {
    name: 'Belgique',
    description: 'Lorem ipsum blah foo bar baz foo bar baz.',
  },
  netherlands: {
    name: 'Pays-Bas',
    description: 'Lorem ipsum blah foo bar baz foo bar baz.',
  },
}

let trips = {}
Object.keys(tripDetails).forEach(place => {
  trips[place] = {
    place: place,
    descriptions: [], // Default is empty, overwritten by tripDetails
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
