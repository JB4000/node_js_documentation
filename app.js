import express from 'express';
const app = express();
const PORT = 8080;

app.use(express.static('public'));
app.use('/pico', express.static('node_modules/@picocss/pico/css'))

app.get('/', (req, res) => {
    res.sendFile('/frontpage/index.html', { root: 'public' });
});

app.get('/javascript', (req, res) => {
    res.sendFile('javascript/javascript.html', { root: 'public' });
});

app.get('/nodejs', (req, res) => {
    res.sendFile('nodejs/nodejs.html', { root: 'public' });
});

app.get('/express', (req, res) => {
    res.sendFile('express/express.html', { root: 'public' });
});

app.get('/rest-api', (req, res) => {
    res.sendFile('rest-api/rest-api.html', { root: 'public' });
});

app.get('/frontend-security', (req, res) => {
    res.sendFile('frontend-security/frontend-security.html', { root: 'public' });
});

app.get('/modules-deployment', (req, res) => {
    res.sendFile('modules-deployment/modules-deployment.html', { root: 'public' });
});

app.listen(PORT, (error) => {
    if(error) {
        console.log("There was an error running the server:", error);
        return;
    }
    console.log("Server running on port:", PORT);
});
