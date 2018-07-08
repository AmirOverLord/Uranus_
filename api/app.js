import express from 'express';
import Middleware from './Middleware/Core';
import Validate from 'express-validation';
import compression from 'compression';
import path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import config from './config/config';
//import helmet from 'helmet';

let app = express();
// secure apps by setting various HTTP headers
//app.use(helmet);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// compress all responses
app.use(compression());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Apisecret, Authorization");
  next();
});

// Middleware Authorization
//app.use((req, res, next) => Middleware.APISecret(req, res, next));
//app.use((req, res, next) => Middleware.User(req, res, next));

// Routers
import account from './Routes/account';
import character from './Routes/character';
import status from './Routes/status';
import post from './Routes/post';
// test
import test from './routes/test';

// Routers Set .
app.use('/account', account);
app.use('/character', character);
app.use('/status', status);
app.use('/post', post);
// test
app.use('/test', test);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  err.message = 'Not Found Route.';
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
   console.log(err);
  if (err instanceof Validate.ValidationError) {
       res.status(err.status);
      return res.json(err);
  }

  // render the error page
  res.status(err.status || 500);
  res.send(err.message);
});

export default app;