/**
 * Authentication Route Handlers
 *
 * This file defines and exports the HTTP methods (GET and POST)
 * required for handling authentication requests using NextAuth.js
 * within a Next.js application.
 *
 * Next.js (from version 13.2) recommends using Route Handlers for handling
 * REST-like requests in the App Router (`app/`). These handlers are exported
 * to enable NextAuth.js to manage requests at `/api/auth/*` routes.
 *
 * By delegating the logic to the `handlers` object, authentication-related
 * functionality is modular, maintainable, and easy to extend.
 */

// Import handlers for GET and POST requests from the authentication module.
// These handlers encapsulate the logic for processing authentication-related requests.
import { handlers } from '@/modules/auth/lib/auth'

// Export the GET and POST methods from the handlers object.
// These exports are required by NextAuth.js to handle incoming requests properly
// when initializing authentication routes using Route Handlers.
export const { GET, POST } = handlers
