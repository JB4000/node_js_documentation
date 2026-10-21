import express from 'express';
const app = express();

import {
    homeHtml,
    frontendHtml,
    javascriptHtml,
    nodejsHtml,
    expressHtml,
    restApiHtml,
    securityHtml,
    modulesHtml
} from "./templatingEngine/renderedPages.js";

const PORT = 8080;


app.use(express.static('public'));
app.use('/pico', express.static('node_modules/@picocss/pico/css'))
app.use('/highlight', express.static('node_modules/@highlightjs/cdn-assets'));


app.get("/", (req, res) => {
    res.send(homeHtml);
});

app.get("/javascript", (req, res) => {
    res.send(javascriptHtml);
});

app.get("/nodejs", (req, res) => {
    res.send(nodejsHtml);
});

app.get("/express", (req, res) => {
    res.send(expressHtml);
});

app.get("/rest-api", (req, res) => {
    res.send(restApiHtml);
});

app.get("/frontend", (req, res) => {
    res.send(frontendHtml);
});

app.get("/security", (req, res) => {
    res.send(securityHtml);
});

app.get("/modules-deployment", (req, res) => {
    res.send(modulesHtml);
});


app.listen(PORT, (error) => {
    if(error) {
        console.log("There was an error running the server:", error);
        return;
    }
    console.log("Server running on port:", PORT);
});
