const express = require('express');
const { v4: uuidv4 } = require('uuid');  // Import UUID package
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());  // For parsing application/json
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');  // Allow only from your frontend
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');  // Allowed HTTP methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');  // Allowed headers
  next();
});

// Handle preflight requests (OPTIONS)
app.options('*', (req, res) => {
  res.sendStatus(200);  // Respond OK to all OPTIONS requests
});

let todos = {};  // In-memory storage for todos

// Example routes
app.get('/', (req, res) => {
  res.send('Server is running successfully!');
});

// GET /todos: Return all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// GET /todos/:id - Fetch a specific todo by its ID
app.get('/todos/:id', (req, res) => {
  const todoId = req.params.id;  // Get the ID from the URL parameters
  
  // Check if the todo exists
  if (todos[todoId]) {
    res.status(200).json(todos[todoId]);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

// POST /todos: Add a new todo
app.post('/todos', (req, res) => {
  const newTodo = req.body;  // Get the data from the request body
  const todoId = uuidv4();   // Generate a unique ID

  // Add the ID to the new todo object
  const todoWithId = {
    ...newTodo,
    _id: todoId
  };

  // Store the todo in the in-memory object
  todos[todoId] = todoWithId;

  console.log('Received new todo:', todoWithId);
  
  // Send the new todo with ID in the response
  res.status(201).json(todoWithId);
});

// PUT /todos/:id - Update a specific todo by its ID
app.put('/todos/:id', (req, res) => {
  const todoId = req.params.id;
  const updatedTodo = req.body;

  if (todos[todoId]) {
    // Merge the old todo with the updated fields
    todos[todoId] = { ...todos[todoId], ...updatedTodo };
    res.status(200).json(todos[todoId]);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

// DELETE /todos/:id - Delete a specific todo by its ID
app.delete('/todos/:id', (req, res) => {
  const todoId = req.params.id;

  if (todos[todoId]) {
    delete todos[todoId];
    res.status(204).send();
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
