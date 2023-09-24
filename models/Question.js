const pool = require('../db');

class Question {
    static create(questionText, options, correctOptionIndex) {
        return pool.execute(
            'INSERT INTO admin_questions (question_text, option1, option2, option3, option4, correct_option_index) VALUES (?, ?, ?, ?, ?, ?)',
            [questionText, options[0], options[1], options[2], options[3], correctOptionIndex]
        );
    }

    static getAll() {
        return pool.query('SELECT * FROM admin_questions');
    }
}

module.exports = Question;
