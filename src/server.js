require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');
const { PORT, IS_PRODUCTION, TMDB_BEARER_TOKEN } = require('./config');
const configureRoutes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

configureRoutes(app);

if (require.main === module) {
  app.listen(PORT, () => {
    if (!IS_PRODUCTION) {
      console.log(`AIOLists Stremio Addon running on port ${PORT}`);
      console.log(`Admin panel: http://localhost:${PORT}/configure`);
    }
  });
}

module.exports = app;
