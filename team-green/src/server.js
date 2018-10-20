import 'dotenv/config';
import 'ignore-styles';
import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';

import Fleet from './client/components/Fleet';

const server = express();

server.use(express.static(path.join('dist')));

server
  .set('view engine', 'ejs')
  .set('views', path.resolve('dist'));

server.get('/*', (req, res) => {
  res.render('index', {
    teamGreen: renderToString(<Fleet />)
  });
});

server.listen(process.env.PORT, () => {
  console.log(`TeamGreen app is listening on port: ${process.env.NODE_ENV}`);
});
