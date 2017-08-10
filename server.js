const path = require('path');
const webpack = require('webpack');
const Express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config');

const app = new Express();
const port = 3000;

const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, error => {
  if (error) {
    console.error(error);
  } else {
    console.log(`Server is listening on port ${port}`);
  }
});