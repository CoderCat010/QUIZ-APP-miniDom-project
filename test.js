const questionsOptions = [
    // QUESTIONS: 1
    {
        question: 'Which is largest animal in the world?',
        answers: [
            {text: 'Shark', correct: false}, 
            {text: 'Blue Whale', correct: true}, 
            {text: 'Elephant', correct: false}, 
            {text: 'Giraffe', correct: false} 
        ]
    },
    
    // QUESTIONS: 2
    {
        question: 'Which is largest desert in the world?',
        answers: [
            {text: 'Kalahari', correct: false}, 
            {text: 'Gobi', correct: false}, 
            {text: 'Shahara', correct: false}, 
            {text: 'Antarctica', correct: true} 
        ]
    },

    // QUESTIONS: 3
    {
        question: 'What is JavaScript?',
        answers: [
            {text: 'Language', correct: true}, 
            {text: 'Framework', correct: false}, 
            {text: 'Database', correct: false}, 
            {text: 'Library', correct: false} 
        ]
    },

    // QUESTIONS: 4
    {
        question: 'Which one is a framework?',
        answers: [
            {text: 'React', correct: false}, 
            {text: 'Vue', correct: true}, 
            {text: 'Angular', correct: false}, 
            {text: 'JS', correct: false} 
        ]
    },

    // QUESTIONS: 5
    {
        question: 'Which is the largest ocean in the world?',
        answers: [
            {text: 'Atlantic Ocean', correct: false}, 
            {text: 'Pacific Ocean', correct: false}, 
            {text: 'Indian Ocean', correct: false}, 
            {text: 'Arctic Ocean', correct: true} 
        ]
    }
];

// current index to start from first array item
let currentIndex = 0;

// question 
const questionEl = document.getElementById("questions");

// get options list 
const lists = document.getElementById('answer-options');

// next button
const btn = document.getElementById('nextBtn');

// first show every questions
function startQuiz(){
    // store each one questions
    const allQuestion = questionsOptions[currentIndex].question;
    questionEl.textContent = allQuestion;
}