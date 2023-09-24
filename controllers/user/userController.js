const Question = require('../../models/Question');

class UserController {
    static async getAllUserQuestions(req, res) {
        try {
            const questions = await Question.getAll();
            res.status(200).json(questions[0]);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    }
}

module.exports = UserController;
