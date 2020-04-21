const express = require('express');
const bodyParser = require('body-parser');
const { createConnection } = require('net');
import config from "./ormconfig";

const app = express();
app.use(bodyParser.json());
app.use(require('./routes/users.routes'));

createConnection(config);

app.listen(5000, () => {
  console.log(`App listening on the port ${5000}`);
});
