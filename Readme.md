# Development in Spring 2024 
Learning the structure of the project.

# Getting Started
> [!WARNING]
> If you do not have the following config items set up before starting your project, nothing will work the way it is supposed to, if at all. If you are a student working on this project as a capstone assignment, set some time aside to look through all of the files to understand how everything is linked together. I will try my best to explain the overall concepts!

There are 5 main technologies that are used in this project
- `ReactJS` - used to dynamically modify the DOM (Document Object Model - this is the virtual representation of the HTML elements used to build a web page)
- `NodeJS` - used to run JavaScript outside of the web browser
- `ExpressJS` - used to create and manage the API that the project relies on
- `Axios` - used to manage a "promise-based HTTP Client for node.js and the browser"
- `NextJS` - used to... actually I am not so sure why NextJS is included in the project. The main idea of Next is to combine a router, React renderer, and web optimizer all in one. However, we are using an Express router and Axios. So NextJS is mainly for minimizing and exporting the project when finishing production

As a side note, `Cypress` is included in this project as a testing tool. This tool can be used to automate a login process and test if the correct elements are loaded. Can be beneficial for testing each page of the project!

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

# Database

The fundamental way this system works is by having an Admin add documents to the database so that way users can register with a Path and a domain email. If there is no data in the database that is linked the way it is supposed to be i.e Path is associated with a Company and Activities, etc, then you will not be able to access any pages after the login/register page. The project is designed in such a way to deny access to any unauthorized users. Check the models folder in the Server directory to find how objects used in the project are structured and how to enter test data into MongoDB (Atlas or any other variation).
## Vital Objects
When working with the `Learner Dashboard` (other pages use the same/other objects in different/similar ways), there are a few objects that need to be instantiated in the MongoDB database so that way the page can behave properly. The page will use multiple objects that are coupled together. Here is an example of some object instances. 

### User
```
{
    "_id":{"$oid":"66076b2d1a65b8bc5cf0e3cf"},
    "username":"Gabriel Ortega",
    "email":"gabriel71401@gmail.com",
    "pwd":"$2b$10$Ak4D3uG0sAoFz5WhRG4Nv.ZU1ZDTvx.zdIDGEzl5OPNdX8dYxd4.K",
    "company":{"$oid":"660c772a477b234e934a9746"},
    "path":"2753",
    "coach":[],
    "otp":"######",
    "validated":true,
    "access":"user",
    "__v":{"$numberInt":"0"},
    "activities": {
        "660c840c477b234e934a9754":{"completed":false,"notes":"","feedback":"","signoff":false},"660c8418477b234e934a9756":{"completed":false,"notes":"","feedback":"","signoff":false},"660c8420477b234e934a9758":{"completed":true,"notes":"","feedback":"","signoff":false}
    },
    "completion":{"$numberInt":"0"}
}
```
`$oid` is an "ObjectId" that MongoDB gives each document. It is how specific objects are referenced. 
`activities` is an object with keys that correspond to specific activities and the values are fields tied to that activity

### Path
```
{
    "_id":{"$oid":"660c83d4477b234e934a9751"},
    "pathId":"2753",
    "pathName":"Capstone Path",
    "activities":[
        {"$oid":"660c8420477b234e934a9754"},
        {"$oid":"660c8420477b234e934a9756"},
        {"$oid":"660c8420477b234e934a9758"}
        ],
    "seats":{"$numberInt":"15"},
    "__v":{"$numberInt":"0"},
    "company":{"$oid":"660c772a477b234e934a9746"},
    "completed":{"$numberInt":"2"},
    "pathOverview":"overview of path: NewTestPath",
    "proficiencyDefinition":"prof def NewTestPath",
    "total":{"$numberInt":"20"}}
```
> [!NOTE]
> Notice how the `pathId` matches the `path` key in the User object

### Activity
```
{
    "_id":{"$oid":"661c9895903b8cbc9268b278"},
    "activityName":"Understand Object Structure",
    "activityDescription":"Databases hold information differently, figure out how to store this info",  "date":{"$date":{"$numberLong":"1712096268784"}},
    "day":{"$numberInt":"1"},
    "path":{"$oid":"660c83d4477b234e934a9751"},
    "__v":{"$numberInt":"0"},
    "completed":true,
    "feedback":"feedback for Test 1",
    "notes":"notes for Test 1",
    "update":"update for Test 1",
    "signoff":"signoff Test 1"
}
```
> [!NOTE]
> Notice how the `path` ObjectId of this activity matches the `oid` of the Path object above

> [!IMPORTANT]
> If you are struggling with configuring the project and are okay with looking at random test data and not necessarily the logic of the project, you can use hardcoded data! You can change and add as you please. When you do this, make sure to disable the useEffect hooks on the respective page that you are working with. These functions are meant to verify access for each page and access the database instance to load necessary information.


# Structure
## Back-End
The backend is a node.js server and the server is held in ../Server/server.js.

The module will start the localhost server (when running locally) and attempt to establish a connection to a database (this project uses MongoDB currently, as of March 29th there is a free instance of Mongo Atlas DB which is a cloud hosted instance of a database).

Most interactions happen in the following process:
1. An `index.js` file is rendered 
    - Most pages in the React application are index.js files that are composed of other components. For instance, the Admin folder has 4 different main componenets, but the file that puts it all together is the index.js file. I am unsure if this is standard with React apps but this is how this project is structured.
2. A React Hook (useEffect), which is essentially middleware, will take place and use the existing API to get all necessary information needed for the index being rendered
3. The API will return all of the information and the page will dynamically load the info. 

(React) index.js -> (Axios) API Call -> (Express) Route -> (Javascript) Route Controller Method

> Example: Login Process
1. User will input login info (Client_Service/src/pages/login/index.js)
2. User will click "Log In" button. (Client_Service/src/pages/login/index.js)
3. The event handler `handleLogin` will be ran which will run `authorizeLogin`
4. `authorizeLogin` is an async function that will use an `Axios` instance to      request information from an API endpoint, specifically `"/user/login"`
    - The `Axios` instance is located in (Client_Service/src/services/ApiService.js)
    - This instance will then target the routes that were set up by `Express.js`. These routes can be found in (Server/routes). Since the endpoint starts with `"/user"`, you will look at the `UserRoutes.js` file to find API endpoints associated with any user processes. If you were to have an endpoint that started with `"/path"`, you would look at the `PathRoutes.js`, etc. 
    - The route has an associated controller that will handle any requests from the `Axios` instance. You will find associated controllers in (Server/controllers)
5. The endpoint will use the respective controller to run the `authorizeLogin` function which will find a user with the entered login info and either return the entire User object or an error. 
6. At this point, the rest of the page will load with information attached to the User object. 



## Front-End
The front end is mostly React and ExpressJS. There are 8 main folders that hold components. 
* admin
    - The admin can add Organizations and modify Organizations
* coach
* dashboard
    - This is the LEARNER dashboard. The Learner can view activities, milestones, and messages associated with the path that they are currerntly on.
* forget
* login
* manager
    - The manager can manage Paths, Activities, and Messages
* register
* validate

 

