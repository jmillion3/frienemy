module.exports = {
    findUser: async (req, res) => {
        const db = req.app.get('db');
        const friend = await db.find_user();
        res.status(200).send(friend);
    },
    addUser: async (req, res) => {
        const db = req.app.get('db');
        const {firstName, lastName, profilePic} = req.body;
        const {userId} = req.session.user;
        if(!req.session.user){
            return res.status(401).send("Please login")
        }
        const posts = await db.add_post([firstName, lastName, profilePic, userId]);
        res.status(200).send(posts)
    }
}