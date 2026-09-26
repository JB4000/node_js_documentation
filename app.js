import express from 'express';
const app = express();
const PORT = 8080;


app.get('/', (req, res) => {
    res.send({ data: "response from app.js GET /"});
});



app.listen(PORT, (error) => {
    if(error) {
        console.log("There was an error running the server:", error);
        return;
    }
    console.log("Server running on port:", PORT);
});