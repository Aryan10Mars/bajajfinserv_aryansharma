const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/bfhl', (req, res) => {
    try {
        const data = req.body.data;

        
        if (!Array.isArray(data)) {
            return res.status(400).json({ is_success: false, error: "Invalid input format" });
        }

        
        const numbers = data.filter(item => /^\d+$/.test(item));
        const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));
        const lowercaseAlphabets = alphabets.filter(char => char === char.toLowerCase());
        const highestLowercase = lowercaseAlphabets.length > 0 ? [lowercaseAlphabets.sort().pop()] : [];

        
        const response = {
            is_success: true,
            user_id: "Aryan Sharmaa", 
            email: "aryan.sharma2021a@vitstudent.ac.in", 
            roll_number: "21BBS0106",
            numbers: numbers,
            alphabets: alphabets,
            highest_lowercase_alphabet: highestLowercase
        };

        res.json(response);
    } catch (error) {
        res.status(500).json({ is_success: false, error: error.message });
    }
});

app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
