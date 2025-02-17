// Quiz Data
const quizzes = [
    {
        id: 0,
        title: "General Knowledge",
        questions: [
            {
                question: "What is the capital of France?",
                options: ["Berlin", "Madrid", "Paris", "Lisbon"],
                correct: 2
            },
            {
                question: "Who wrote 'Hamlet'?",
                options: ["Shakespeare", "Tolstoy", "Homer", "Hemingway"],
                correct: 0
            },
            {
                question: "Which planet is known as the Red Planet?",
                options: ["Venus", "Mars", "Jupiter", "Saturn"],
                correct: 1
            }
        ]
    },
    {
        id: 1,
        title: "Science Quiz",
        questions: [
            {
                question: "What is the chemical symbol for water?",
                options: ["O2", "H2O", "CO2", "HO"],
                correct: 1
            },
            {
                question: "How many bones are in the human body?",
                options: ["206", "208", "210", "204"],
                correct: 0
            },
            {
                question: "Which gas do plants absorb from the atmosphere?",
                options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
                correct: 2
            }
        ]
    }
];

// Load Quiz
function loadQuiz() {
    const urlParams = new URLSearchParams(window.location.search);
    const quizId = parseInt(urlParams.get('id'));
    const quiz = quizzes.find(q => q.id === quizId);

    if (quiz) {
        document.getElementById('quiz-title').textContent = quiz.title;
        const quizForm = document.getElementById('quiz-form');

        quiz.questions.forEach((question, index) => {
            const questionElement = document.createElement('div');
            questionElement.classList.add('question-block');

            questionElement.innerHTML = `
                <h3>${index + 1}. ${question.question}</h3>
                ${question.options.map((option, optIndex) => `
                    <label>
                        <input type="radio" name="question${index}" value="${optIndex}">
                        ${option}
                    </label><br>
                `).join('')}
            `;

            quizForm.appendChild(questionElement);
        });
    }
}

// Calculate score and provide feedback
function calculateScore() {
    const urlParams = new URLSearchParams(window.location.search);
    const quizId = parseInt(urlParams.get('id'));
    const quiz = quizzes.find(q => q.id === quizId);

    let score = 0;
    quiz.questions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && parseInt(selectedOption.value) === question.correct) {
            score++;
        }
    });

    return score;
}

// Handle quiz submission and redirect to result page
document.getElementById('submit-btn').addEventListener('click', function () {
    const score = calculateScore();
    const totalQuestions = quizzes[0].questions.length;

    // Redirect to result.html and pass the score and total questions as query parameters
    window.location.href = `result.html?score=${score}&total=${totalQuestions}`;
});

// Load the quiz on page load
if (window.location.pathname.includes('quiz.html')) {
    loadQuiz();
}

