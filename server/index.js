const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
const app = express();
const router = express.Router();
const cors = require('cors');

const apiKey = require("../riot.json");
const axios = require('axios');

const compiler = webpack(webpackConfig);

app.use(express.static(__dirname + '/../dist'));
app.use(cors())
 
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

app.use('/summoner', require('./routes/routes'));

const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('server listening at http://%s:%s', host, port);
});