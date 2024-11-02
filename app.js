// app.js (Add this code snippet)
const path = require('path');

// Serve the HTML file
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});
