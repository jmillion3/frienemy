const bcrypt = require('bcrypt');

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db');
        const {email, username, password, first_name, last_name, phone, profile_pic} = req.body;
        // console.log("body:", req.body);
        const foundUser = await db.user.check_user(email);
        if(foundUser[0]){
            return res.status(409).send("User already exists. Please login.")
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const [newUser] = await db.user.add_user([email, username, hash, first_name, last_name, phone, profile_pic])
        req.session.user = {
            userId: newUser.user_id,
            email: newUser.email,
            username: newUser.username,
            firstName: newUser.first_name,
            lastName: newUser.last_name,
            phone: newUser.phone,
            profilePic: newUser.profile_pic
        }
        res.status(200).send(req.session.user)
    },
    login: async (req, res) => {
        const db = req.app.get('db');
        const {username, password} = req.body;
        // console.log("body:", req.body);
        const [foundUser] = await db.user.check_user(username);
        if(!foundUser){
            return res.status(401).send('Incorrect login information')
        }
        const authenticated = bcrypt.compareSync(password, foundUser.password);
        if(authenticated){
            req.session.user = {
                userId: foundUser.user_id,
                username: foundUser.username,
                email: foundUser.email
            }
            res.status(200).send(req.session.user)
        } else {
            res.status(401).send('Incorrect login information')
        }
    },
    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    },
    getUserSession: (req, res) => {
        if(req.session.user){
            res.status(200).send(req.session.user);
        } else {
            res.status(401).send('Please login');
        }
    }
}