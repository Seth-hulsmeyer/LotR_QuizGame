// time interval variable 
var timer = document.querySelector("time");
var secondsLeft = 250;
function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    // timer.textContent = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      alert("You're out of time! Please try again.");
        return;
    }

  }, 1000);
}

//global variables including array of question objects
var currentQuestion = 0;
var questionArray = [
    //array of objects, each object reps question package (question, answers array, and correct answer string)
    {question: "Who are Durin's Folk?", 
    imgSource: "./assets/LOTR1.jpg", 
    choices: ["Men", "Hobbits", "Dwarves", "Elves"], 
    answer: "Dwarves"},

    {question: "What kind of creatures are the spawn of Ungoliant?", 
    imgSource: "./assets/LOTR2.jpg", 
    choices: ["Hill Giants", "Giant Spiders", "Uruk-hai", "Balrogs"], 
    answer: "Giant Spiders"},

    {question: "What do the Elves call the Hobbits?", 
    imgSource: "./assets/LOTR3.png", 
    choices: ["The Periannath", "The Mellon", "The Uruloki", "The Onodrim"], 
    answer: "The Periannath"},

    {question: "What are the Palantiri, and how many are there?",
     imgSource: "./assets/LOTR4.jpg", 
     choices: ["Seven Warning-Beacons", "Nine Rings of Power given to Men", "Three Jewels created by Feanor", "Seven Seeing-Stones"], 
     answer: "Seven Seeing-stones"},

    {question: "Which character said 'Nine companions. So be it. You shall be the fellowship of the ring.'?", 
    imgSource: "./assets/LOTR5.jpg", 
    choices: ["Gandalf", "Arwen", "Elrond", "Tom Bombadil"], 
    answer: "Elrond"},

    {question: "After Sauron, who geld the One Ring?", 
    imgSource: "./assets/LOTR6.jpg", 
    choices: ["It fell into a river and was lost", "Isildur", "Elrond", "Gollum"], 
    answer: "Isildur"},

    {question: "How many years did Frodo have the ring before he left the Shire?", 
    imgSource: "./assets/LOTR7.jpg", 
    choices: ["17", "29", "8", "21"], 
    answer: "17"},

    {question: "Where is Legolas from?", 
    imgSource: "./assets/LOTR8.jpg", 
    choices: ["Lothlorian", "Rivendell", "Mirkwood", "Fangorn Forest"], 
    answer: "Lothlorian"},

    {question: "On Weathertop, with what type of blade was Frodo stabbed?", 
    imgSource: "./assets/LOTR9.jpg", 
    choices: ["Mithril", "Melkor", "Morgul", "Mithrandir"], 
    answer: "Morgul"},

    {question: "What is the name of the sword held in this picture?", 
    imgSource: "./assets/LOTR10.jpg", 
    choices: ["Sting", "Narsil", "Glamdring", "Anduril"], 
    answer: "Anduril"},
];

var mainElement = document.getElementById("questionContainer");
function displayQuestion(){
    mainElement.innerHTML = "";
    var questionText = document.createElement("h2");
    questionText.innerText = questionArray[currentQuestion].question;
    mainElement.append(questionText);

    //NEED TO GET IMAGES TO APPEND
    var imageEL = document.createElement("img")
    imageEL.setAttribute("src", questionArray[currentQuestion].imgSource);
    mainElement.append(imageEL);

    var lineBreak = document.createElement("br")
    mainElement.append(lineBreak);

    for(i = 0; i < questionArray[currentQuestion].choices.length; i++){
        var choicesBtn = document.createElement("button");
        choicesBtn.innerText = questionArray[currentQuestion].choices[i];
        choicesBtn.className = "btn";
        choicesBtn.attributes = questionArray[currentQuestion].answer;
        mainElement.append(choicesBtn);
}}

// //NEED TO GET QUESTIONS TO CYCLE THROUGH
setTime();
displayQuestion();
//click handler to cycle through questions after any button is clicked
document.getElementById("questionContainer").addEventListener("click", function(event){
  event.preventDefault();
    //if clicked choice !== answer subtract seconds from timer, and cycle to next question
    if(event.target.matches("button")){
    currentQuestion++;
    displayQuestion();
    };
    //go through the object to find the attribute
  
      


  
    //console log event
})
