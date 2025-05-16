const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Configure EJS and static files
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index', { 
    title: 'DevOps Dashboard',
    features: ['EC2 Management', 'S3 Browser', 'Lambda Explorer']
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});