let questionList = ['How old is Joe Biden?', 'What is 2 + 2?', 'Where do we live?'];
let answerList = ['81', '4', 'NY State'];
let score = 0;
let questionIndex = 0;

const question = document.querySelector('.question-container');
const button = docuement.querySelector('.button-container');
const input = document.querySelector('#input-field');
let scoreContainer = document.querySelector('.score-container');

question.textContent = questionList[questionIndex];

let submitFunction = () =>{
    button.addEventListener('click', () =>{
        if(input.value === answerList[questionIndex]){
            questionIndex += 1;
            score += 1;
            question.textContent = questionList[questionIndex];
            scoreContainer.textContent = "Score: " + score; 
        } else{
            score -= 1;
            scoreContainer.textContent = "Score: " + score; 
        }
        //Put Endgame Function Here
        endGame(); 
    });
}

let endGame = () =>{
    if(questionIndex > 2){
        scoreContainer.textContent = "Final Score: " + score; 
        question.textContent = "Congratulations: play again!";
        input.style.display = "none";
        button.style.display = "none";
    }
}

submitFunction();