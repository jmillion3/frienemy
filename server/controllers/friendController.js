module.exports = {
    getScores: async (req, res) => {
        const db = req.app.get('db');
        const posts = await db.get_scores();
        res.status(200).send(posts);
    },
    addScore: async (req, res) => {
        const db = req.app.get('db');
        const {score} = req.params;

        const firstScore = await db.score.add_score(score);

        return res.status(200).send(firstScore);
    }

    // getScore: async (req, res) => {
    //     const db = req.app.get('db');
    //     const {score} = req.body;

    //     const totalScore = await db.friend.get_score(score);

    //     return res.status(200).send(totalScore);
    // }
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