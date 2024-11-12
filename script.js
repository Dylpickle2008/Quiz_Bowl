const button = docuement.querySelector('.questions');
const input = document.querySelector('.#input-field');
const score = document.querySelector('.score');

const questionSwitch = document.getElementById('question-switch');

submitSwitch.addEventListener("click", () => {
    document.getElementById('name').value = '';

    currentQuestionIndex = (currentQuestionIndex + 1) % questionsArray.length; 
    document.querySelector('.questions').textContent = questionsArray[currentQuestionIndex];
});

const questionsArray = [
    "What is your name?",
    "What is your age?",
];

let currentQuestionIndex = 0;