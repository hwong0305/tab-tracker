const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes');

const { sequelize } = require('./models');

const app = express();

app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(cors());

app.use('/', routes);

sequelize.sync({ force: true }).then(() => {
    app.listen(5000, () => console.log('Now listening on Port 5000'));
});
