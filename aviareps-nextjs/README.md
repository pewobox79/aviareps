Run the Example Locally
    1. Install Node.js and npm from https://nodejs.org.
    2. Install all required npm packages by running npm install or npm I from the command line in the project root folder (where the package.json is located).
    3. Start the app by running npm run dev from the command line in the project root folder, this will compile the app and start the Next.js server.
    4. Open to the app at the URL http://localhost:3000.

Next.js Tutorial Project Structure
The project is organised into the following folders:

    • components
Global components are in the root /components folder and feature specific components are in subfolders (e.g./components/account,/components/users).

    • data
JSON flat files for storing the app data.

    • helpers
Anything that doesn't fit into the other folders and doesn't justify having its own folder. Front-end React helpers are in the root /helpers folder and back-end API helpers are in the /helpers/api subfolder.

    • pages
 The /pages folder contains all routed pages with the route to each page defined by its file name. The /pages/api folder contains all API route handlers which are also routed based on each file name. 

    • services
Services handle all http communication with backend apis for the React front-end application, each service encapsulates the api calls for a content type (e.g. users) and exposes methods for performing various operations (e.g. CRUD operations). 

    • styles
CSS stylesheets used for Aviaresp-login form app.

Data saved to JSON files
I'm storing data for users in a JSON flat file located at /data/users.json, the data is accessed and managed via the users-repo which supports all basic CRUD operations.

Home Page
Path: /pages/index.jsx
The home page displays a welcome message to the logged in user and a link to the users section, also shows Aviaresp industries that you can click and go to official live site of Aviaresp.

Alert Component
Path: /components/Alert.jsx
The alert component controls the adding & removing of bootstrap alerts in the UI, it maintains an array of alerts that are rendered in the template returned by the React component.

Link Component
Path: /components/Link.jsx
A custom link component that wraps the Next.js link component to make it work more like the standard link component from React Router.

Nav Component
Path: /components/Nav.jsx
The nav component displays the main navigation in the example. The custom NavLink component automatically adds the active class to the active nav item so it is highlighted in the UI.

Spinner Component
Path: /components/Spinner.jsx
A simple bootstrap loading spinner component.

Next.js JWT Middleware
Path: /helpers/api/jwt-middleware.js
The JWT middleware uses the express-jwt library to validate JWT tokens in requests sent to protected API routes, if a token is invalid an error is thrown which causes the global error handler to return a 401 Unauthorized response. The middleware is added to the Next.js request pipeline in the API handler wrapper function.

Next.js Login Page
Path: /pages/account/login.jsx
The login page contains a form built with the React Hook Form library that contains username and password fields for logging into Aviaresp project.

Next.js Register Page
Path: /pages/account/register.jsx
The register page contains a simple registration form built with the React Hook Form library with fields for first name, last name, username and password.

NextSEO

SEO stands for Search Engine Optimization. In the simplest of terms, good SEO optimizes your visibility online. This means that the more people see your website, the more your online traffic increases, and the better your chances to provide your product or service to a greater number of people.