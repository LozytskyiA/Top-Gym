import 'dotenv/config';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import config from "./ormconfig";
const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const passport = require('passport');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: 'Stark',
    store: new FileStore(),
    cookie: {
      path: '/',
      httpOnly: true,
      maxAge: 60 * 60 * 1000
    },
    resave: false,
    saveUninitialized: false,
  })
)

require('./config.passport');
app.use(passport.initialize());
app.use(passport.session());

app.use(require('./routes/auth.routes'));
app.use(require('./routes/users.routes'));
app.use(require('./routes/program.routes'));

(async () => {
  try {
    await createConnection(config);
  } catch (error) {
    console.log('Error while connecting to the database', error);
    return error;
  }
  app.listen(process.env.PORT || 5000, () => {
    console.log(`Started`);
  });
})();
