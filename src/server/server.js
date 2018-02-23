const express = require('express');
const path = require('path');
const helmet = require('helmet');

const app = express();
const port = 8080;

app.use(helmet());
app.use(express.static(path.join(__dirname, '../../dist')));

app.listen(port, () => {
  console.log(`En Route server listening on port ${port}`); // eslint-disable-line no-console
});
