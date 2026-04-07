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

// question 
const questionEl = document.getElementById("questions");

// get options list 
const lists = document.getElementById('answer-options');

// next button
const btn = document.getElementById('nextBtn');

let currentIndex = 0;
startQuiz();


// start quiz 
function startQuiz(){
    // start from 0 index of question's option
    let currentQuestion = questionsOptions[currentIndex];

    // set existing index number's question
    questionEl.textContent = currentQuestion.question;

    // clear old options
    lists.innerHTML = "";

    // loop through all options ans set in li 
    for(let values of currentQuestion.answers){
        // create list to add options inside that list
        const createLi = document.createElement('li');
        createLi.innerText = values.text;
        lists.appendChild(createLi)
    }
}


// starting event delegation on ul list
lists.addEventListener('click', function(event){
    // check if user clicking in li 
    if(event.target.tagName != 'LI')return;

    // store li where user clicked
    const selected = event.target;

    // get current question answers
    const answers = questionsOptions[currentIndex].answers;

    // get all li from ul
    const allLi = lists.children;

    
})





