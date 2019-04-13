//Variables 
var timeRemaining;      //will hold the amount of ms left to play
var incorrect = 0;      //keeps score
var correct = 0;
questionCounter = -1;   //manages i for array "questions"
var gameTimerInterval;  //holds interval for timer
var questionInterval;   //holds interval for questions

$("#time-remaining").text(timeRemaining)

//Multiple choice questions
//Object constructor
function Question(q, a, b, c, d) {
    this.question = q;
    this.optionA = a;
    this.optionB = b;
    this.optionC = c;
    this.correctAnswer = d;
}

//List of questions
var question1 = new Question ("What is the biggest island of the world?", "Iceland", "Greenland", "Treasure Island", "b");
var question2 = new Question ("What is the diameter of the Earth?", "7917.5 miles", "500 feet", "100,000 miles", "a");
var question3 = new Question ("What is the largest continent of the world?", "South America", "Africa", "Asia", "c");
var question4 = new Question ("What year did Princess Diana die?", "1999", "2005", "1997", "c");
var question5 = new Question ("How many bones are in the human body?", "206", "5", "500", "a");
var question6 = new Question ("Who does the voice for Woody in Toy Story?", "Kurt Cobain", "Tom Hanks", "Prince", "b");
var question7 = new Question ("How much does Chewbacca's costume weigh?", "2 lbs", "8 lbs", "20 lbs", "b");
var question8 = new Question ("How many players are there in a baseball team?", 5, 9, 12, "b");
var question9 = new Question ("Whose house do the Golden Girls live in?", "Blanche's", "Rose's", "Sophia's", "a");
var question10 = new Question ("In Swahili, what does Rafiki mean?", "Wise", "Strange", "Friend", "c");

//Array of questions
var questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];

/*displayQuestion controls the display of question in html and holds the on click event that accepts
and evaluates user's choice*/
function displayQuestion() {
    $("#question-display").html("Q: " + questions[questionCounter].question + "<br> <button value='a'> a." + questions[questionCounter].optionA + "</button>"  + "<br> <button value='b'> b." + questions[questionCounter].optionB + "</button>" + "<br> <button value='c'> c." + questions[questionCounter].optionC + "</button><br>");
    
    $("button").on("click", function() {
        buttonPressed = $(this).val();
        rightAnswer = questions[questionCounter].correctAnswer;
        clearInterval(questionInterval);
        questionInterval = setInterval(nextQuestion, 6000);

        if (rightAnswer === buttonPressed) {
            correct++;
            $("#question-display").html("You're right!")
            nextQuestion();
        }
        else {
            $("#question-display").html("Wrong! the right answer was " + rightAnswer)
            incorrect++;
            nextQuestion();
        }
    });
}

//function nextQuestion moves to the next Question
function nextQuestion () {
    if (questionCounter > -1 && questionCounter < 9) {
        setTimeout(displayQuestion, 2000);
    }
//this is here bc there is a bug that if I start at index 0, it will not show the first question. 
//Also, this allows the first question to be displayed in 5ms versus having the 5 second delay of the other Qs
    else if(questionCounter < 0){               
        setTimeout(displayQuestion, 5);
        questionInterval = setInterval(nextQuestion, 6000);
    }
    questionCounter++;
    if (questionCounter === questions.length) {
        stopQuestions();
    }
}

var startQuiz = function() { 
    clearInterval(questionInterval)
    nextQuestion();
}   

function stopQuestions() {
    clearInterval(questionInterval);
    setTimeout(function(){
        $("#question-display").html("<h2>You got " + correct + " answers correct <br> and " + incorrect + " answers incorrect </h2>");
        clearInterval(gameTimerInterval);
        $("#time-remaining").html("");
        $("#buttons").html("<button id='again'><h2> Play Again? </h2></button>")
    }, 2000) 
}

function startTimer() {
    clearInterval(gameTimerInterval);
    gameTimerInterval = setInterval(decrement, 1000);
  }

timeRemaining = 60;
  
function decrement() {  
    timeRemaining--;
    $("#time-remaining").html("<h2> Time remaining: " + timeRemaining + " seconds </h2>");
    if (timeRemaining === 0) {
        stopTimer();
        stopQuestions();
        alert("Time's Up!");
        $("#time-remaining").html("");
    }
}

function stopTimer() {
    clearInterval(gameTimerInterval);
}
 

$("#start").on("click", function () {
    startQuiz();
    startTimer();
    $("#buttons").html("")
});

$(document).on("click", "#again", function() {
    questionCounter = -1;
    timeRemaining = 60;
    $("#question-display").html("");
    $("#buttons").html("");
    startQuiz();
    startTimer();   
})