var readlineSync = require ("readline-sync")
var question = readlineSync.question("What is your Name? ")
var answer = readlineSync.question("Hello "+question)
console.log("Let's see how much you know about MCU.👀")
console.log("---------------")
console.log("---------------")
var score = 0

//-----------------------------------------------//


function play(question, answer)

{
  var userAnswer = readlineSync.question(question)
  if (userAnswer === answer)
  {
    console.log("You are right!😊👍")
    score++
  }
  else
  {
    console.log("You are wrong!😕😒")
  }
console.log("Current score: "+ score)
console.log("---------------")
console.log("---------------")
}
//-----------------------------------------------//




var questions =[
questionOne = {
  question: "how many Avengers movies are there?",
  answer: "four"
},

questionTwo = {
  question: "Is Tony Stark Captain America?",
  answer: "no"
},
questionThree ={
  question:"True or False: Wanda Maximoff is Black Widow.",
  answer : "True"
},
questionFour ={
  question:"How many Infinity Stones are there?",
  answer : "six"
},
questionfive ={
  question:" What is Loki's title?",
  answer : "god of mischief"
},
questionSix ={
  question:"And finally, how many Marvel Disney+ shows are there currently?",
  answer : "four"}]
//-----------------------------------------------------//


for(var i=0; i<questions.length; i++)
{
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer) 
}
var highScores = [
  {
    name: "Rohan",
    score: 5,
  },

  {
    name: "Poonam",
    score: 4,
  },
]
function showScores() {
  console.log("Awesome! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}
showScores();