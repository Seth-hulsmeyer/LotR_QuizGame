// time interval variable 
// current question index to append next question to 
var currentQuestion = 0;
var questionArray = [
    //array of objects, each object reps question package (question, answers array, and correct answer string)
    {question: "what color is the sky?", imgSource: "./images/LOTR1", choices: ["green", "red", "blue", "white"], answer: "blue"},
    {question: ""}
];

var mainEl = document.getElementById("questionContainer");
function displayQuestion(){
    var questionText = document.createElement("h2");
    questionText.innerText = questionArray[currentQuestion].question;
    mainEl.append(questionText);


// mainEl.appendChild("<img scr='" + questionArray[currentQuestion].imgSource + "'/>");

for(i = 0; i < questionArray[currentQuestion].choices.length; i++){
    var choicesBtn = document.createElement("button");
    choicesBtn.innerText = questionArray[currentQuestion].choices[i];
    choicesBtn.className = "btn";
    //need to add data- attribute
    choicesBtn.attributes = questionArray[currentQuestion].answer;
    mainEl.append(choicesBtn);
}}
displayQuestion();
//click handler
document.querySelector(".btn").addEventListener("click", function(event){
    //go through the object to find the attribute
    if(event.currentTarget.attribute)
    //console log event
})
// questionArray[currentQuestion].question;