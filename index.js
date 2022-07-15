const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

// middleware 
app.use(cors());
app.use(express.json());

async function run(){
    try{

    }
    finally{

    }
}

run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Heliverse Authentication is Running')
});
  
app.listen(port, () => {
    console.log(`Heliverse listening on port ${port}`)
});