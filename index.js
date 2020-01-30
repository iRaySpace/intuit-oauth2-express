const express = require('express')

// @configurations
const PORT = process.env.PORT || 3000;

// @app
const app = express()
app.get('/', (req, res) => res.send('intuit-oauth2-express by iRaySpace'));
app.listen(PORT, () => console.log('App listening'));
