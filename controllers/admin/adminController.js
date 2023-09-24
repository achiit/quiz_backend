const Question = require('../../models/Question');

class AdminController {
    static async addQuestion(req, res) {
        const { questionText, options, correctOptionIndex } = req.body;
        try {
            await Question.create(questionText, options, correctOptionIndex);
            res.status(201).json({ message: 'Question added successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    }
}

module.exports = AdminController;
