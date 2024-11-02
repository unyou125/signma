// server.js
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = process.env.PORT || 3000; // Use the port from environment variable or default to 3000

// Set up a proxy route
app.use('/proxy', createProxyMiddleware({
    target: 'http://example.com', // Default target URL
    changeOrigin: true,
    pathRewrite: (path, req) => {
        // Extract the actual URL from the query string
        const query = req.query.url;
        if (query) {
            return query;
        }
        return path; // Fallback to original path if no query is provided
    }
}));

// Serve static files from the public directory
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Proxy server is running at http://localhost:${PORT}`);
});
