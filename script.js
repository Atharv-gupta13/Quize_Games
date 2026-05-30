const questions = [

    {
        ques : "Which is the largest animal in the world?",
        ans : [
            {text : "Shark", correct : false},
            {text : "Lion", correct : false},
            {text : "Blue Whale", correct : true},
            {text : "Elephant", correct : false},
        ]
    },

    {
        ques : "Which planet is known as the Red Planet?",
        ans : [
            {text : "Earth", correct : false},
            {text : "Mars", correct : true},
            {text : "Jupiter", correct : false},
            {text : "Venus", correct : false},
        ]
    },

    {
        ques : "Who is known as the Father of Computers?",
        ans : [
            {text : "Charles Babbage", correct : true},
            {text : "Newton", correct : false},
            {text : "Tesla", correct : false},
            {text : "Einstein", correct : false},
        ]
    },

    {
        ques : "Which language is used for web development?",
        ans : [
            {text : "Python", correct : false},
            {text : "JavaScript", correct : true},
            {text : "C++", correct : false},
            {text : "Java", correct : false},
        ]
    },

    {
        ques : "What does HTML stand for?",
        ans : [
            {text : "Hyper Text Markup Language", correct : true},
            {text : "High Text Machine Language", correct : false},
            {text : "Hyperlinks Tool Markup", correct : false},
            {text : "Home Text Markup", correct : false},
        ]
    },

    {
        ques : "Which country is famous for the Eiffel Tower?",
        ans : [
            {text : "Italy", correct : false},
            {text : "France", correct : true},
            {text : "Germany", correct : false},
            {text : "Spain", correct : false},
        ]
    }

];


// question and buttons
const ques = document.getElementById("question");

const btns = [
    document.getElementById("option1"),
    document.getElementById("option2"),
    document.getElementById("option3"),
    document.getElementById("option4")
];

const nextBtn = document.getElementById("next-btn");
const scoreText = document.getElementById("score");


// variables
let score = 0;
let index = 0;


// random 5 questions
let randomQues = questions
    .sort(() => Math.random() - 0.5)
    .slice(0,5);


// show question
function showQuestion(){

    reset();

    let current = randomQues[index];

    ques.innerHTML = current.ques;

    current.ans.forEach((answer,i) => {

        btns[i].innerHTML = answer.text;

        // button click
        btns[i].onclick = () => {

            // correct answer
            if(answer.correct){

                btns[i].style.backgroundColor = "#90EE90";

                score++;

                scoreText.innerHTML = `Score : ${score}`;
            }

            // wrong answer
            else{
                btns[i].style.backgroundColor = "#FFB6C1";
            }

            // disable all buttons
            btns.forEach(btn => {
                btn.disabled = true;
            });

            nextBtn.style.display = "block";
        };

    });

}


// reset buttons
function reset(){

    nextBtn.style.display = "none";

    btns.forEach(btn => {

        btn.disabled = false;

        btn.style.backgroundColor = "white";

    });

}


// next button
nextBtn.onclick = () => {

    index++;

    // next question
    if(index < randomQues.length){

        showQuestion();
    }

    // quiz finished
    else{

        ques.innerHTML = `Quiz Finished <br> Final Score : ${score}/5`;

        btns.forEach(btn => {
            btn.style.display = "none";
        });

        nextBtn.style.display = "none";
    }

};


// start quiz
showQuestion();