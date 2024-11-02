<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Search</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
        }
        #search-form {
            margin-top: 20px;
        }
    </style>
</head>
<body>

<h1>Web Search</h1>

<div id="search-form">
    <h2>Search the Web</h2>
    <input type="text" id="search-query" placeholder="Search the web" required>
    <button onclick="searchWeb()">Search</button>
    <p id="search-results"></p>
</div>

<script>
    function searchWeb() {
        const query = document.getElementById('search-query').value;
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.open(searchUrl, '_blank');
    }
</script>

</body>
</html>
