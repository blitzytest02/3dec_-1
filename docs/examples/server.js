#!/usr/bin/env node

/**
 * =============================================================================
 * Native Node.js HTTP Server Example
 * =============================================================================
 * 
 * File: docs/examples/server.js
 * 
 * PURPOSE:
 * This is an educational example demonstrating how to create a basic HTTP 
 * server using Node.js's built-in 'http' module. This represents the 
 * foundational approach to building web servers in Node.js before using 
 * frameworks like Express.js.
 * 
 * LEARNING OBJECTIVES:
 * - Understand how to import and use Node.js core modules
 * - Learn the basics of HTTP request/response handling
 * - Implement simple URL-based routing
 * - Configure HTTP response headers and status codes
 * - Start a server and listen on a specific port
 * 
 * WHAT THIS SERVER DOES:
 * - Listens for incoming HTTP requests on port 3000
 * - Returns "Hello world" for requests to the root path (/)
 * - Returns a 404 Not Found response for all other paths
 * 
 * =============================================================================
 */

// =============================================================================
// MODULE IMPORTS
// =============================================================================

/**
 * Import the 'http' module from Node.js core.
 * 
 * The 'http' module provides functionality for creating HTTP servers and 
 * making HTTP requests. It's a built-in module, so no npm installation 
 * is required - it comes bundled with Node.js.
 * 
 * Key features of the http module:
 * - http.createServer(): Creates a new HTTP server instance
 * - http.request(): Makes outgoing HTTP requests
 * - Handles incoming requests via callback functions
 */
const http = require('http');

// =============================================================================
// CONFIGURATION
// =============================================================================

/**
 * Define the port number for the server to listen on.
 * 
 * Port 3000 is commonly used for development servers because:
 * - It's above 1024 (no admin/root privileges required)
 * - It's a well-known convention in the Node.js community
 * - It doesn't conflict with common system services
 * 
 * In production, you might use process.env.PORT to allow
 * the port to be configured via environment variables.
 */
const PORT = 3000;

/**
 * Define the hostname for the server.
 * 
 * 'localhost' (127.0.0.1) means the server only accepts connections
 * from the local machine. This is safe for development.
 * Use '0.0.0.0' to accept connections from any network interface.
 */
const HOSTNAME = 'localhost';

// =============================================================================
// HTTP SERVER CREATION
// =============================================================================

/**
 * Create the HTTP server using http.createServer().
 * 
 * The createServer() method takes a request listener callback function
 * that is automatically added to the 'request' event. This callback
 * is invoked every time the server receives an HTTP request.
 * 
 * CALLBACK PARAMETERS:
 * @param {http.IncomingMessage} req - The request object containing:
 *   - req.url: The request URL path (e.g., '/', '/about')
 *   - req.method: The HTTP method (GET, POST, PUT, DELETE, etc.)
 *   - req.headers: An object containing the request headers
 *   - req.httpVersion: The HTTP version used by the client
 * 
 * @param {http.ServerResponse} res - The response object used to:
 *   - Set HTTP status codes (res.statusCode or res.writeHead)
 *   - Set response headers (res.setHeader or res.writeHead)
 *   - Send data back to the client (res.write, res.end)
 */
const server = http.createServer((req, res) => {
    
    // =========================================================================
    // REQUEST LOGGING (Optional - helpful for debugging)
    // =========================================================================
    
    /**
     * Log each incoming request to the console.
     * This helps during development to see what requests are being made.
     * Format: [HTTP_METHOD] URL_PATH
     */
    console.log(`[${req.method}] ${req.url}`);
    
    // =========================================================================
    // URL ROUTING
    // =========================================================================
    
    /**
     * URL Routing is the process of determining what action to take
     * based on the requested URL path.
     * 
     * In this simple example, we check if the URL exactly matches '/'
     * (the root path). More complex applications would use a routing
     * library or framework (like Express.js) for pattern matching,
     * URL parameters, and middleware support.
     * 
     * The req.url property contains the path portion of the URL,
     * starting from the '/' after the hostname and port.
     * Examples:
     *   - http://localhost:3000/        → req.url = '/'
     *   - http://localhost:3000/about   → req.url = '/about'
     *   - http://localhost:3000/api/v1  → req.url = '/api/v1'
     */
    if (req.url === '/') {
        
        // =====================================================================
        // ROOT PATH HANDLER - Returns "Hello world"
        // =====================================================================
        
        /**
         * Set the HTTP response status code and headers using writeHead().
         * 
         * HTTP STATUS CODE 200:
         * - 200 means "OK" - the request was successful
         * - This is the standard response for successful HTTP requests
         * 
         * CONTENT-TYPE HEADER:
         * - 'text/plain' indicates the response body contains plain text
         * - Other common types: 'text/html', 'application/json', 'text/css'
         * - This header tells the browser/client how to interpret the response
         * 
         * writeHead() must be called before calling res.end() or res.write()
         * to send the response body.
         */
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        
        /**
         * Send the response body and signal the end of the response.
         * 
         * res.end() does two things:
         * 1. Sends the provided data as the response body
         * 2. Signals to the server that the response is complete
         * 
         * The exact string 'Hello world' is returned as per requirements.
         * Note: No trailing newline is added to match exact specification.
         */
        res.end('Hello world');
        
    } else {
        
        // =====================================================================
        // 404 NOT FOUND HANDLER - For all other paths
        // =====================================================================
        
        /**
         * Handle requests to undefined routes with a 404 response.
         * 
         * HTTP STATUS CODE 404:
         * - 404 means "Not Found" - the requested resource doesn't exist
         * - This is the appropriate response when a URL path is not recognized
         * 
         * Good error handling is important for:
         * - User experience: Users know when something goes wrong
         * - Debugging: Helps identify incorrect URLs in client code
         * - Security: Doesn't expose information about server internals
         */
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        
        /**
         * Send an informative error message to help users understand
         * that the requested path was not found.
         */
        res.end('404 Not Found - The requested path does not exist');
    }
});

// =============================================================================
// START SERVER
// =============================================================================

/**
 * Start the server and begin listening for incoming connections.
 * 
 * The listen() method binds the server to the specified port and hostname,
 * then starts accepting incoming connections.
 * 
 * PARAMETERS:
 * @param {number} PORT - The port number to listen on (3000)
 * @param {string} HOSTNAME - The hostname to bind to ('localhost')
 * @param {Function} callback - Function called once the server is ready
 * 
 * The callback function is invoked when the server has successfully
 * bound to the port and is ready to accept connections. This is the
 * appropriate place to log a startup message.
 * 
 * IMPORTANT: The server runs until the process is terminated (Ctrl+C)
 * or an unhandled error occurs.
 */
server.listen(PORT, HOSTNAME, () => {
    /**
     * Server startup confirmation message.
     * 
     * This message is displayed once the server is ready to accept requests.
     * It includes the full URL where the server can be accessed.
     */
    console.log('='.repeat(60));
    console.log('Native Node.js HTTP Server Started');
    console.log('='.repeat(60));
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
    console.log('');
    console.log('Available endpoints:');
    console.log(`  GET /  →  Returns "Hello world"`);
    console.log('');
    console.log('Press Ctrl+C to stop the server');
    console.log('='.repeat(60));
});

// =============================================================================
// ERROR HANDLING
// =============================================================================

/**
 * Handle server errors gracefully.
 * 
 * The 'error' event is emitted when an error occurs on the server.
 * Common errors include:
 * - EADDRINUSE: Port is already in use by another process
 * - EACCES: Permission denied (ports below 1024 require root/admin)
 * 
 * Without this handler, uncaught errors would crash the process.
 */
server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
        console.error(`Error: Port ${PORT} is already in use.`);
        console.error('Please either:');
        console.error('  1. Stop the other process using this port');
        console.error('  2. Use a different port number');
    } else {
        console.error('Server error:', error.message);
    }
    process.exit(1);
});

// =============================================================================
// USAGE DOCUMENTATION
// =============================================================================

/**
 * HOW TO RUN THIS SERVER:
 * =======================
 * 
 * 1. Open a terminal/command prompt
 * 
 * 2. Navigate to the project root directory
 * 
 * 3. Run the server using Node.js:
 *    $ node docs/examples/server.js
 * 
 * 4. You should see the startup message:
 *    "Server running at http://localhost:3000/"
 * 
 * 
 * HOW TO TEST THE ENDPOINTS:
 * ==========================
 * 
 * Using curl (command line):
 * --------------------------
 *    $ curl http://localhost:3000/
 *    Hello world
 * 
 *    $ curl http://localhost:3000/nonexistent
 *    404 Not Found - The requested path does not exist
 * 
 * Using a web browser:
 * --------------------
 *    Open http://localhost:3000/ in your browser
 *    You should see "Hello world" displayed
 * 
 * 
 * STOPPING THE SERVER:
 * ====================
 *    Press Ctrl+C in the terminal where the server is running
 * 
 * 
 * EXPECTED OUTPUT:
 * ================
 * When you run `curl localhost:3000/`, you should receive:
 *    Hello world
 * 
 * When you run `curl localhost:3000/evening`, you should receive:
 *    404 Not Found - The requested path does not exist
 *    (The /evening endpoint is implemented in the Express.js example: app.js)
 */
