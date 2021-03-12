module.exports = {
    readFriends: async (req, res) => {
        const db = req.app.get('db');
        // const {first_name, last_name, profile_pic} = req.params;
        const allFriends = await db.friend.get_all_friends();
        // req.user = {
        //     firstName: allFriends.first_name,
        //     lastName: allFriends.last_name,
        //     profilePic: allFriends.profile_pic
        // }
        return res.status(200).send(allFriends);
    },
    readUser: async (req, res) => {
        const db = req.app.get('db');
        const {username} = req.body;

        const profileUser = await db.user.get_user_profile(username);

        return res.status(200).send(profileUser);
    }
}