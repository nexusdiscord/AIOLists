require('dotenv').config();

// Debug environment variable loading
console.log(`[DEBUG] Server startup - TMDB_BEARER_TOKEN env var exists: ${!!process.env.TMDB_BEARER_TOKEN}`);
console.log(`[DEBUG] Server startup - TMDB_BEARER_TOKEN length: ${process.env.TMDB_BEARER_TOKEN ? process.env.TMDB_BEARER_TOKEN.length : 'null/undefined'}`);

const express = require('express');
const cors = require('cors');
const path = require('path');
const { TMDB_BEARER_TOKEN } = require('./config');
const configureRoutes = require('./routes');

console.log(`[DEBUG] Server startup - Config TMDB_BEARER_TOKEN: ${TMDB_BEARER_TOKEN ? 'SET' : 'NULL/UNDEFINED'}`);
console.log(`[DEBUG] Server startup - Config TMDB_BEARER_TOKEN length: ${TMDB_BEARER_TOKEN ? TMDB_BEARER_TOKEN.length : 'null/undefined'}`);

// Mendefinisikan Express app TANPA listen (tidak ada app.listen!)
function createApp() {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.static(path.join(__dirname, '..', 'public')));
  configureRoutes(app);
  return app;
}

module.exports = createApp;
