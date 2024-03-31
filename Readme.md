# Development in Spring 2024 
Learning the structure of the project. No documentation so analysis may take a while

## Getting Started
> [!WARNING]
> If you do not have the following config items set up before starting your project, nothing will work the way it is supposed to, if at all. 


This project uses `Node.js` as the foundation of the project. Node is used to run JavaScript outside of the web browser. `Express.js` is also used to create and manage the API that the project relies on. API requests are made using `Axios` which is "promise-based HTTP Client for node.js and the browser".

To start, download all node dependencies in each top level folder of the project (Server and Client_Service)
```
npm install
```

For local development (hosting on your own machine and not in a server):

* Backend Server - Express.JS / Axios
    - In your terminal, navigate to the Server directory, then run the following command: 
    ```
    npm run dev
    ```
* Client Service - Next.JS / React
    - In your terminal, open a **Different Window**, then navigate to the Client_Service directory, and run the following command: 
    ```
    npm run dev
    ```

> If you have any issues with the server or the React App, ensure that your ports are not overlapping and that they are introduced correctly in server.js/ApiService.js

For both of these, the commands will target the respective `package.json` file that node uses to manage the project. If you open the file, you will notice a key labeled "scripts" with a nested key "dev" with a corresponding value that looks like a command. That is what is actually being executed.

> Database

The fundamental way this system works is by having an Admin add documents to the database so that way users can register with a Path and a domain email. If there is no data in the database that is linked the way it is supposed to be i.e Path is associated with a Company and Activities, etc, then you will not be able to access any pages after the login/register page. The project is designed in such a way to deny access to any unauthorized users. Check the models folder in the Server directory to find how objects used in the project are structured and how to enter test data into MongoDB (Atlas or any other variation).


# Structure
## Back-End
The backend is a node.js server and the server is held in ../Server/server.js.

The module will start the localhost server (when running locally) and attempt to establish a connection to a database (this project uses MongoDB currently, as of March 29th there is a free instance of Mongo Atlas DB which is a cloud hosted instance of a database).

Most interactions happen in the following process:
1. An `index.js` file is rendered 
    - Most pages in the React application are index.js files that are composed of other components. For instance, the Admin folder has 4 different main componenets, but the file that puts it all together is the index.js file. I am unsure if this is standard with React apps but this is how this project is structured.
2. A React Hook (useEffect), which is essentially middleware, will take place and use the existing API to get all necessary information needed for the index being rendered
3. The API will return all of the information and the page will dynamically load the info. 

> Example: Login Process
> 1. User will input login info (Client_Service/src/pages/login/index.js)
> 2. User will click "Log In" button. (Client_Service/src/pages/login/index.js)
> 3. The event handler `handleLogin` will be ran which will run `authorizeLogin`
> 4. `authorizeLogin` is an async function that will use an `Axios` instance to      request information from an API endpoint, specifically `"/user/login"`
    - The `Axios` instance is located in (Client_Service/src/services/ApiService.js)
    - This instance will then target the routes that were set up by `Express.js`. These routes can be found in (Server/routes). Since the endpoint starts with `"/user"`, you will look at the `UserRoutes.js` file to find API endpoints associated with any user processes. If you were to have an endpoint that started with `"/path"`, you would look at the `PathRoutes.js`, etc. 
    - The route has an associated controller that will handle any requests from the `Axios` instance. You will find associated controllers in (Server/controllers)
> 5. The endpoint will use the respective controller to run the `authorizeLogin` function which will find a user with the entered login info and either return the entire User object or an error. 
> 6. At this point, the rest of the page will load with information attached to the User object. 

## Front-End
The front end is mostly React. There are 8 main folders that hold components. 
* admin
* coach
* dashboard 
* forget
* login
* manager
* register
* validate

### Admin
This folder has the following exported components: `AddOrg`, `ProfileEditor`, `ViewOrg`, `VelocifiedAdminDashboard` (housed in index.js). 
* AddOrg (named AddOrg.js)
    * This component creates a Modal window to add an organization with a ***name*** and a ***location***. 
* ProfileEditor (named Profileeditor.js)
    * This component uses a table to display information about the current profile that is logged in. There is not much logic that is housed in this module. Purely visual.
* ViewOrg (named ViewOrg.js)
    * This component is similar to AddOrg but instead of sending information away to be processed once it has been entered, the information is just displayed
* VelocifiedAdminDashboard
    * This component is what will display the different modal windows and handle setting up the dashboard for the user and the rest of the site. 

