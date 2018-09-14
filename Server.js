var App = require('./Components/App.js').default;
var express = require('express');
var app = express();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
import {StaticRouter} from 'react-router-dom';
import { request } from 'http';


function htmlTemplate(reactDOM) {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
    </head>
    <body>
        <div id="app">${reactDOM}</div>
        <script src="bundle.js"></script>
    </body>
    </html>
    `;
}

app.use(express.static('dist'));
app.get('/', function(req, res) {
    const context = {};
    console.log('Creating htmlstring');
    const htmlString = ReactDOMServer.renderToString(<StaticRouter
        context = {context} location = {request.url}>
        <App/>
    </StaticRouter>);
    console.log('created htmlString');
    res.send(htmlTemplate(htmlString));
});


var PORT = 5000;
app.listen(PORT, function() {
    console.log('http://localhost:'+PORT);
});