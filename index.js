const express = require('express');
const OAuthClient = require('intuit-oauth');

// @configurations
const PORT = process.env.PORT || 3000;
const OAUTH_CLIENT_ID = process.env.OAUTH_CLIENT_ID;
const OAUTH_CLIENT_SECRET = process.env.OAUTH_CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

// @oauthClient
let oauthClient = null;

// @app
const app = express();

app.get('/', (req, res) => res.send('intuit-oauth2-express by iRaySpace'));

app.get('/auth', (req, res) => {
    oauthClient = new OAuthClient({
        clientId: OAUTH_CLIENT_ID,
        clientSecret: OAUTH_CLIENT_SECRET,
        redirectUri: REDIRECT_URI,
        environment: 'sandbox'
    });
    const authUri = oauthClient.authorizeUri({
        scope: [OAuthClient.scopes.Accounting]
    });
    res.redirect(authUri);
});

app.get('/authRedirect', async (req, res) => {
    try {
        const authResponse = await oauthClient.createToken(req.url);
        res.send(authResponse);
    } catch (err) {
        console.log(err);
    }
});


app.listen(PORT, () => console.log('App listening'));
