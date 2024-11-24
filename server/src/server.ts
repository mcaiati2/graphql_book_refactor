import express from 'express';
import path from 'node:path';

import dotenv from 'dotenv';

dotenv.config();

import db from './config/connection.js';


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// if we're in production, serve client/build as static assets and ensure the index.html file is served for the React Router to handle UI views
if (process.env.PORT) {
  const __dirname = path.dirname(new URL(import.meta.url).pathname);

  app.use(express.static(path.join(__dirname, '../../client/dist')));
  app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
  })
}

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
