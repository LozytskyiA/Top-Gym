import 'dotenv/config';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import config from "./ormconfig";
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

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
