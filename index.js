const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('intuit-oauth2-express by iRaySpace'));
app.listen(port, () => console.log('App listening'));
