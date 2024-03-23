This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

# Development in Spring 2024 
Learning the structure of the project. No documentation so analysis may take a while

# Structure
## Back-End
The backend is a node.js server and the server is held in ../Server/server.js. This file can be ran using 
```
node server.js
```
The module will start the localhost server and attempt to establish a connection to the Mongoos database. As of March 22nd, 2024, there is no connection.

The server also uses an instance of ```Axios``` which is "promise-based HTTP Client for node.js and the browser".

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
This folder has the following exported components: ```AddOrg```, ```ProfileEditor```, ```ViewOrg```, ```VelocifiedAdminDashboard``` (housed in index.js). 
* AddOrg (named AddOrg.js)
    * This component creates a Modal window to add an organization with a ***name*** and a ***location***. 
* ProfileEditor (named Profileeditor.js)
    * This component uses a table to display information about the current profile that is logged in. There is not much logic that is housed in this module. Purely visual.
* ViewOrg (named ViewOrg.js)
    * This component is similar to AddOrg but instead of sending information away to be processed once it has been entered, the information is just displayed
* VelocifiedAdminDashboard
    * This component is what will display the different modal windows and handle setting up the dashboard for the user and the rest of the site. 

