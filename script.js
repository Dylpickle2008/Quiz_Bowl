let questionList = ['How old is Joe Biden?', 'What is 2 + 2?', 'Where do we live?', 'What is the capital of CA?', 'Who has the most world series titles?', 'What is the tallest building in the world?', 'Who is the most infamous Mongol leader?', 'Who was the first US president?', 'What is the largest country by area?', 'Approximately, how old is the Earth?'];
let answerList = ['81', '4', 'New York', 'Sacramento', 'Yankees', 'Burj Khalifa', 'Genghis Khan', 'George Washington', 'Russia', '4.6 billion years'];
let score = 0;
let questionIndex = 0;

const question = document.querySelector('.question-container');
const button = document.querySelector('.button-container');
const input = document.querySelector('#input-field');
let scoreContainer = document.querySelector('.score-container');

console.log(question); 
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
    if(questionIndex > 9){
        scoreContainer.textContent = "Final Score: " + score; 
        question.textContent = "Congratulations: play again!";
        input.style.display = "none";
        button.style.display = "none";
    }
}

submitFunction();