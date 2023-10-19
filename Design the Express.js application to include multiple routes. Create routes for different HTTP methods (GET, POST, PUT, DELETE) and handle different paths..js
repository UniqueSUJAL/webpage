const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// GET route for the root path "/"
app.get('/', (req, res) => {
  res.send('Hello, this is the root path!');
});

// POST route for "/data"
app.post('/data', (req, res) => {
  // Access POST data in the request body
  const data = req.body;
  res.json({ message: 'Data received', data });
});

// PUT route for "/update/:id" to update data by ID
app.put('/update/:id', (req, res) => {
  const id = req.params.id;
  // Access PUT data in the request body
  const newData = req.body;
  res.json({ message: `Updated data with ID ${id}`, newData });
});

// DELETE route for "/delete/:id" to delete data by ID
app.delete('/delete/:id', (req, res) => {
  const id = req.params.id;
  res.json({ message: `Deleted data with ID ${id}` });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
