/**
 * Express.js Application Example
 * ==============================
 * 
 * This file demonstrates how to create a web server using Express.js 5.2.1,
 * a popular web application framework for Node.js. Express provides a robust
 * set of features for building web applications and APIs with cleaner syntax
 * compared to the native Node.js HTTP module.
 * 
 * Learning Objectives:
 * - Understand how to import and initialize Express.js
 * - Learn how to define HTTP GET routes
 * - Understand request and response objects in Express
 * - Learn how to start an Express server on a specific port
 * 
 * Prerequisites:
 * - Node.js 22.x LTS (or higher) installed
 * - npm (Node Package Manager) available
 * - Express.js installed: npm install express@5.2.1
 * 
 * File: docs/examples/app.js
 * Tutorial: Node.js Server Tutorial - Express.js Section
 */

// ============================================================================
// STEP 1: Import the Express.js Framework
// ============================================================================
// 
// Express.js is a minimal and flexible Node.js web application framework that
// provides a robust set of features for web and mobile applications.
// 
// We use require() to import the Express module. This returns a function that,
// when called, creates an Express application instance.
// 
// Version: Express.js 5.2.1 (latest stable release)
// Documentation: https://expressjs.com/
// ============================================================================
const express = require('express');

// ============================================================================
// STEP 2: Create an Express Application Instance
// ============================================================================
// 
// Calling express() creates a new Express application. This application object
// is the central piece of your Express server - it has methods for:
// - Routing HTTP requests (GET, POST, PUT, DELETE, etc.)
// - Configuring middleware
// - Rendering HTML views
// - Registering template engines
// 
// The 'app' variable is conventionally used to reference the Express instance.
// ============================================================================
const app = express();

// ============================================================================
// STEP 3: Define the Server Port
// ============================================================================
// 
// The PORT constant specifies which port the server will listen on for incoming
// HTTP requests. Port 3000 is commonly used for development servers.
// 
// In production environments, you might use:
//   const PORT = process.env.PORT || 3000;
// This allows the port to be configured via environment variables.
// 
// Common port numbers:
// - 80: Default HTTP port
// - 443: Default HTTPS port
// - 3000, 8080: Common development ports
// ============================================================================
const PORT = 3000;

// ============================================================================
// STEP 4: Define the Root Route - "Hello world"
// ============================================================================
// 
// app.get() defines a route handler for HTTP GET requests to the specified path.
// 
// Syntax: app.get(path, callback)
// 
// Parameters:
// - path: The URL path to match (e.g., '/' for the root/home page)
// - callback: A function that handles the request and sends a response
// 
// The callback function receives two arguments:
// - req (Request): Contains information about the HTTP request
//   - req.params: URL parameters
//   - req.query: Query string parameters
//   - req.body: Request body (requires body-parsing middleware)
//   - req.headers: HTTP headers
// 
// - res (Response): Used to send a response back to the client
//   - res.send(): Sends a response of various types
//   - res.json(): Sends a JSON response
//   - res.status(): Sets the HTTP status code
//   - res.redirect(): Redirects to another URL
// 
// When a GET request is made to '/', Express will execute this callback
// and send "Hello world" as the response.
// ============================================================================
app.get('/', (req, res) => {
    // res.send() automatically:
    // - Sets the Content-Type header based on the response type
    // - Sets the Content-Length header
    // - Ends the response
    res.send('Hello world');
});

// ============================================================================
// STEP 5: Define the Evening Route - "Good evening"
// ============================================================================
// 
// This demonstrates adding a second route to our Express application.
// Express makes it easy to define multiple routes - simply call app.get()
// (or app.post(), app.put(), etc.) for each endpoint you want to create.
// 
// Route: GET /evening
// Response: "Good evening" (plain text)
// 
// Express routes are matched in the order they are defined. When a request
// comes in, Express checks each route handler in sequence until it finds
// a match. Once a match is found and a response is sent, the routing stops.
// 
// Route paths can also include:
// - Route parameters: '/users/:id' captures the id value
// - Query strings: '/search?q=term' accessible via req.query
// - Regular expressions for more complex matching
// ============================================================================
app.get('/evening', (req, res) => {
    // Send the greeting response for the /evening endpoint
    // The response is automatically sent with:
    // - HTTP Status: 200 OK
    // - Content-Type: text/html (default for strings)
    res.send('Good evening');
});

// ============================================================================
// STEP 6: Start the Express Server
// ============================================================================
// 
// app.listen() binds and listens for connections on the specified port.
// This method is identical to Node.js's http.Server.listen().
// 
// Syntax: app.listen(port, [callback])
// 
// Parameters:
// - port: The port number to listen on (3000 in our case)
// - callback: Optional function called once the server starts listening
// 
// The callback function is useful for:
// - Confirming the server started successfully
// - Logging the server URL for easy access
// - Performing initialization tasks after server startup
// 
// Once this is called, the server begins accepting HTTP connections and
// routing requests to the appropriate handlers defined above.
// ============================================================================
app.listen(PORT, () => {
    // Log a message confirming the server is running
    // Template literal (backticks) allows embedding the PORT variable
    console.log(`Express server running at http://localhost:${PORT}`);
    console.log('Available endpoints:');
    console.log(`  GET http://localhost:${PORT}/        → "Hello world"`);
    console.log(`  GET http://localhost:${PORT}/evening → "Good evening"`);
});

// ============================================================================
// USAGE DOCUMENTATION
// ============================================================================
// 
// Installation:
//   1. Ensure Node.js 22.x LTS is installed:
//      $ node --version
//      v22.x.x
// 
//   2. Initialize a new npm project (if not already done):
//      $ npm init -y
// 
//   3. Install Express.js 5.2.1:
//      $ npm install express@5.2.1
// 
// Running the Server:
//   $ node docs/examples/app.js
// 
// Expected Output:
//   Express server running at http://localhost:3000
//   Available endpoints:
//     GET http://localhost:3000/        → "Hello world"
//     GET http://localhost:3000/evening → "Good evening"
// 
// Testing the Endpoints:
// 
//   Test the Hello World endpoint:
//   $ curl http://localhost:3000/
//   Hello world
// 
//   Test the Good Evening endpoint:
//   $ curl http://localhost:3000/evening
//   Good evening
// 
//   Or open these URLs in your web browser:
//   - http://localhost:3000/
//   - http://localhost:3000/evening
// 
// Stopping the Server:
//   Press Ctrl+C in the terminal where the server is running
// 
// ============================================================================

// ============================================================================
// COMPARISON: Express.js vs Native HTTP Server (server.js)
// ============================================================================
// 
// This Express.js implementation offers several advantages over the native
// HTTP server implementation in server.js:
// 
// 1. CLEANER ROUTING:
//    - Native HTTP: Manual URL parsing with if/else statements
//    - Express: Declarative route definitions with app.get(), app.post(), etc.
// 
// 2. BUILT-IN RESPONSE METHODS:
//    - Native HTTP: res.writeHead() + res.end()
//    - Express: res.send(), res.json(), res.status() - automatic headers
// 
// 3. MIDDLEWARE SUPPORT:
//    - Native HTTP: Manual implementation required
//    - Express: app.use() for middleware (body parsing, logging, auth, etc.)
// 
// 4. REQUEST PARSING:
//    - Native HTTP: Manual parsing of query strings, body, etc.
//    - Express: Built-in req.query, req.params, req.body (with middleware)
// 
// 5. ERROR HANDLING:
//    - Native HTTP: Manual try/catch and error response setup
//    - Express: Built-in error handling middleware support
// 
// 6. CODE ORGANIZATION:
//    - Native HTTP: All logic in one callback
//    - Express: Modular routes, separate route files, router instances
// 
// Example Comparison - Hello World Response:
// 
// Native HTTP (server.js):
//   if (req.url === '/') {
//       res.writeHead(200, { 'Content-Type': 'text/plain' });
//       res.end('Hello world');
//   }
// 
// Express (this file):
//   app.get('/', (req, res) => {
//       res.send('Hello world');
//   });
// 
// For simple servers, either approach works well. However, as your application
// grows, Express.js provides a more scalable and maintainable architecture.
// 
// ============================================================================
