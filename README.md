# TVMAZE API application

### Framework choice : Vue.js
This is the first VueJS project created by me. I wanted to use this framework since this is a great chance for me to learn about it and to see how it compares with React , Angular, and Svelte and if it's worth using it on other projects.
I spent 4 hours reading about Vuejs and testing some of its features and then it took me another 2 hours to create this project.

![Alt text](src/assets/architecture.png?raw=true "Title")

## Architecture explanation
A standard File Structure where used since Vue has no documentation specifying a particular structure, it does provide a good starting place from the codebase generated with Vue CLI.

### Assets
In this directory, we are going to store all assets files. Here we want to save fonts, icons, images, styles etc.

### Components 
The components folder holds all reusable components of the application.

### Design
This can hold your SCSS files. this folder is not really necessary but good for those devs out there who like to keep everything clean as possible so if you are not a fan of SCSS then don’t worry about the design folder.

### Router
Inside this directory you can store all files related to vue-router. 

### Services
This folder is needed to store your services. For example, you can create and save an API connections service, localStorage manager service, etc.

### Store
This is vuex store directory where you can save all vuex related files and vuex mutations which is very similar to events: each mutation has a string type and a handler.

### Views
This is the second most important folder in our application. Here we store all entry points for applications’ routes.

## Run the solution
`npm : 6.14.11`
`node : v14.15.5`
`cypress : 8.3.0`

Install solution dependencies 

### `npm install`

Run the app on http://localhost:8080

### `npm run serve`

This will test search/home/and api using cypress

### `cypress run`


## Dependencies used:

- bulma Css
- axios
- vue-router
