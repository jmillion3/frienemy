require('dotenv').config();
// * require dependencies
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const cors = require('cors');

// * import variables
const app = express();
app.use(cors());
const {SESSION_SECRET, SERVER_PORT, CONNECTION_STRING} = process.env
const userCtrl = require('./controllers/userController');
const profileCtrl = require('./controllers/profileController');
const friendCtrl = require('./controllers/friendController')
// const search = require('./controllers/searchController');

// * top level middleware
app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 8
    }
}))

// * invoke massive to connect to db
massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then( db => {
    app.set('db', db)
    console.log('Hey! Connected to db!')
})

// * Endpoints
// auth/user
app.post(`/auth/register`, userCtrl.register);
app.post(`/auth/login`, userCtrl.login);
app.post(`/auth/logout`, userCtrl.logout);
app.get(`/auth/user`, userCtrl.getUser);
// profile
app.get('/profile/main', profileCtrl.readFriends)
app.get(`/profile/:username`, profileCtrl.readUser)
// friend
app.get('/friend/score', friendCtrl.getScores)
// app.post('/friend/score/:id', friendCtrl.addScore)
// app.post(`/friend/?first=${}?last=${}`, auth.emailMiddleware, rank.createRank);


// * nodemon listens for changes
app.listen(SERVER_PORT, () => console.log(`It's over ${SERVER_PORT}!`))

