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


// run the code bruhhhhh you bloody idiot!!!!
startQuiz();

// first show every questions
function startQuiz(){
    // store each one questions
    const allQuestion = questionsOptions[currentIndex].question;
    questionEl.textContent = allQuestion;

    // clear previous options before shoeing new options 
    lists.innerHTML = '';

    // create list to show each one text 
    for(let eachOneOption of questionsOptions[currentIndex].answers){

        // create list
        const createLi = document.createElement('li');
        createLi.textContent = eachOneOption.text;
        lists.appendChild(createLi);
    }
}


// color which one is wrong and which one is the right one 
lists.addEventListener('click', function(event){
    // stop if user not clicking on li
    if(event.target.tagName !== 'LI'){
        return;
    }
    
    // store clicked li 
    const selectedLi = event.target;

    // get each one answer data from array 
    const currentQuestions = questionsOptions[currentIndex].answers;

    // get each one li 
    const allLi = lists.children;

    // check if current answer data matches li's selected option (each one option with each one answer data)
    for(let eachOneData of currentQuestions){
        // checking each one correct orr wrong answer
        if(eachOneData.correct === true){
            // loop through all list to find out exact correct/wrong answer
            for(let allOption of allLi){
                // for right answer
                if(allOption.textContent === eachOneData.text){
                    allOption.style.background = ' rgba(117, 255, 117, 0.72)';
                    allOption.style.color = '#222222e0'
                    allOption.style.border = 'none';
                }
            }
        }

        // for wrong answer
        if(eachOneData.text === selectedLi.textContent){
            if(eachOneData.correct === false){
                selectedLi.style.background = "rgba(255, 111, 111, 0.712)";
                selectedLi.style.color = '#222222e0';
                selectedLi.style.border = 'none';
            }
        }
    }
})


// next button to get another question and options
btn.addEventListener('click', function(){
    currentIndex++;

    // call the function to do the same work again
    if(currentIndex >= questionsOptions.length){
        questionEl.textContent = "Quiz শেষ! ধন্যবাদ 🎉";
        lists.innerHTML = "";
        btn.style.display = 'none';
        return;
    }else{
        startQuiz();
    }

})