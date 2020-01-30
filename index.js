const express = require('express');
const OAuthClient = require('intuit-oauth');

// @configurationsq
const PORT = process.env.PORT || 3000;
const OAUTH_CLIENT_ID = process.env.OAUTH_CLIENT_ID;
const OAUTH_CLIENT_SECRET = process.env.OAUTH_CLIENT_SECRET;

// @app
const app = express();
app.get('/', (req, res) => res.send('intuit-oauth2-express by iRaySpace'));
app.get('/auth', (req, res) => {
    const oauthClient = new OAuthClient({
        clientId: OAUTH_CLIENT_ID,
        clientSecret: OAUTH_CLIENT_SECRET,
        environment: 'sandbox',
        redirectUri: 'https://developer.intuit.com/v2/OAuth2Playground/RedirectUrl'
    });
    const authUri = oauthClient.authorizeUri({
        scope: [OAuthClient.scopes.Accounting]
    });
    res.redirect(authUri);
});
app.get('/authRedirect', (req, res) => {
    res.send('in progress');
});


app.listen(PORT, () => console.log('App listening'));
