/*Problems:
Only taking "c" as correct answer if do .append. Takes correct answer but only shows one Q with .html


*/

//Variables 
var timeRemaining = 5000;   //Player has limited time to answer Qs
var incorrect = 0;     //Counter for Qs answered
var correct = 0;
var noAnswer = 0;

$("#time-remaining").text(timeRemaining/1000)


//Multiple choice questions, can only choose one answer
//ATTEMPT ONE

//Object constructor
function Question(q, a, b, c, d) {
    this.question = q;
    this.optionA = a;
    this.optionB = b;
    this.optionC = c;
    this.correctAnswer = d;
}

//List of questions
var question1 = new Question ("What is 2+2", 2, 4, 6, "b");
var question2 = new Question ("What color is the sky?", "blue", "pink", "green", "a");
var question3 = new Question ("What sound do dogs make?", "meow", "chirp chirp", "arf arf", "c");

//Creating an array from the Qs
var questions = [question1, question2, question3]


// console.log(questions[1].question + questions[1].optionA + questions[1].optionB + questions[1].optionC);

// var rightAnswer = questions[i].correctAnswer;  


for (var i = 0;  i < questions.length; i++) {
    //this commented out part has only the "a" as a button and not the whole answer
    // $("#question-display").append("Q: " + questions[i].question + "<br> <button value='a'> a. </button>" + questions[i].optionA + "<br> <button value='b'> b. </button>" + questions[i].optionB + "<br> <button value='c'> c. </button>" + questions[i].optionC + "<br>");
    // rightAnswer = questions[i].correctAnswer;  
    // console.log("Q: " + questions[i].question + "<br> <button value='a'> a. </button>" + questions[i].optionA + "<br> <button value='b'> b. </button>" + questions[i].optionB + "<br> <button value='c'> c. </button>" + questions[i].optionC + "<br>")   
    // console.log("for loop rightAnswer: " + rightAnswer);
    // console.log("for loop question[i]: " + questions[i].correctAnswer);


    $("#question-display").html("Q: " + questions[i].question + "<br> <button value='a'> a." + questions[i].optionA + "</button>"  + "<br> <button value='b'> b." + questions[i].optionB + "</button>" + "<br> <button value='c'> c." + questions[i].optionC + "</button><br>");
    rightAnswer = questions[i].correctAnswer;  
    console.log("Q: " + questions[i].question + "<br> <button value='a'> a." + questions[i].optionA + "</button>"  + "<br> <button value='b'> b." + questions[i].optionB + "</button>" + "<br> <button value='c'> c." + questions[i].optionC + "</button><br>")
    console.log("for loop rightAnswer: " + rightAnswer);
    console.log("for loop question[i]: " + questions[i].correctAnswer);
    
    
    
    
   
}

$("button").on("click", function() {
    buttonPressed = $(this).val();
    console.log("You pressed: " + buttonPressed);
       
    // console.log("this button " + buttonPressed);
    if (rightAnswer === buttonPressed) {
        correct++;
        $("#correct").text(correct);
        console.log("if correct: " + correct);
        console.log("if rightAnswer: " + rightAnswer);
        //add timing things to move on to the next page after however many seconds
    }
    else if (rightAnswer !== buttonPressed) {
        incorrect++;
        console.log("incorrect: " + incorrect);
        $("#incorrect").text(incorrect);
        console.log("The right answer was: " + rightAnswer);
        
        
    }

    else {
        noAnswer++;
        console.log("No answer");
        $("#unanswered").text(noAnswer);
    }

});




//Game ends when timer runs out

//At the end of the game, will display number of questions answered correctly and incorrectly



//These will not update if not placed within the onclick/if else code blocks???
// $("#correct").text(correct);
// $("#incorrect").text(incorrect);
// $("#unanswered").text(noAnswer);

