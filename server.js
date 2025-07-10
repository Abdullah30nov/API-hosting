// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Middleware lagao
server.use(middlewares);
server.use(jsonServer.bodyParser);

// Main API routes
server.use(router);

// Render ke liye dynamic port
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
