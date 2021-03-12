module.exports = {
    getScore: async (req, res) => {
        const db = req.app.get('db');
        const {score} = req.body;

        const totalScore = await db.friend.get_score(score);

        return res.status(200).send(totalScore);
    }
    // addFriend: async (req, res) => {

    // },
    // readFriends: async (req, res) => {
        
    // },
    // updateFriend: async (req, res) => {

    // },
    // readFriend: (req, res) => {

    // },
    // deleteFriend: (req, res) => {

    // }
}