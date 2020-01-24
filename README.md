# Game Of Thrones Battle Web App

This is a **MERN** project hosted with the help of **heroku**.  
This is a website to search for battles based on location, then search for for the battle and then see who won or lost and then get full details of that battle.  
The Back End is made using **NodeJS & ExpressJS** using **MongoDB** as database.  
The Front End is made using **ReactJS & Redux** for state management.  
The **screenshots** for the website in **Mobile** and **PC** has been attached above in the folder of the **screenshot**

## Quick Start

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd frontend
npm install

# Run both Backend & Frontend from root
npm run dev
```

## Packages Installed

### These are the list of packages used in Back End

- express
- mongoose
- config

**Express** is used with NodeJS to divert users to different parts of the web applications based on the request made.  
**Mongoose** represents a much cleaner interface for querying MongoDB.  
**Config** is a set of default parameters, and extend them for different deployment environment.

**Note:** _body-parser is not used since it is provided by express._

### Backend routes

These are the routes available currently:

- /list
- /count
- /search

**/list** gives the list of location of all battles.  
**/list/autocomplete** gives autocomplete suggestions.  
**/count** gives total number of battles occurred.  
**/search** return list of battle with search filter.

### These are the list of packages used in Front End

- react
- react-router-dom
- redux
- react-redux
- redux-thunk
- redux-devtools-extension
- axios

**React** is a JavaScript library for building user interfaces.  
**react-router-dom** is used for routing.  
**redux** is used for state management.  
**react-redux** subscribes to the Redux store, checks to see if the data your component wants has changed, and re-renders your component.  
**redux-thunk** is used to write action creators that return a function instead of an action.  
**redux-devtools-extension** is used to copy the text to the clipboard.  
**axios** is used to make request like post, get, put, delete, etc.

**Note:** _redux-devtools-extension is turned on even in the hosted site. If you want you can turn it off by removing the composeWithDevTools in store.js inside frontend/src/store._

## Project Info

### Author

> Akhil Nayak

### License

> This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License.

### Special Thanks

Thanks CareerNinja for battles.csv file that contained all the data.  
Thanks [WallPaper Access](https://wallpaperaccess.com/game-of-thrones) for the background pic in details page.

#### If you have any suggestion or doubt do let me know

#### ThankYou.Peace
