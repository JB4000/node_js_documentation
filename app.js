import express from 'express';
const app = express();
const PORT = 8080;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('/frontpage/index.html', { root: 'public' });
});

app.listen(PORT, (error) => {
    if(error) {
        console.log("There was an error running the server:", error);
        return;
    }
    console.log("Server running on port:", PORT);
});
