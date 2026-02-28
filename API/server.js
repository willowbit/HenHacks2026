// Import the Express module
const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

// Define a route for GET requests
app.get('/people:hash', (req, res) => {
    
    let fart = fs.readFileSync('hashes.txt', { encoding: 'utf8', flag: 'r' })
    fart = fart.split('\n');
    console.log(fart)
    let success = false;
    for (x of fart) {
        if (x == req.params.hash.slice(1)) {
            success = true;
            break;
        } else {
            success = false;
        }
    }
    if (success) {
        res.json({response: 'OKAY'})
    } else {
        res.json({response: 'INVALID'})
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});