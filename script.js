// time interval variable 
// current question index to append next question to 
var currentQuestion = 0;
var questionArray = [
    //array of objects, each object reps question package (question, answers array, and correct answer string)
    {question: "what color is the sky?", imgSource: "./images/LOTR1", choices: ["green", "red", "blue", "white"], answer: "blue"},
    {question: "Q2", imgSource: ".images/LOTR2", choices: ["1", "2", "3", "4"], answer: "1"},
    {question: "Q3", imgSource: ".images/LOTR3", choices: ["5", "6", "7", "8"], answer: "5"},
    {question: "Q4", imgSource: ".images/LOTR4", choices: ["4", "3", "2", "1"], answer: "1"},
    {question: "Q5", imgSource: ".images/LOTR5", choices: ["8", "7", "6", "5"], answer: "5"},
    {question: "Q6", imgSource: ".images/LOTR6", choices: ["2", "3", "4", "1"], answer: "2"},
    {question: "Q7", imgSource: ".images/LOTR7", choices: ["6", "7", "8", "5"], answer: "7"},
    {question: "Q8", imgSource: ".images/LOTR8", choices: ["3", "4", "1", "2"], answer: "4"},
    {question: "Q9", imgSource: ".images/LOTR9", choices: ["7", "8", "5", "6"], answer: "8"},
    {question: "Q10", imgSource: ".images/LOTR10", choices: ["4", "8", "6", "2"], answer: "6"},
];

var mainEl = document.getElementById("questionContainer");
function displayQuestion(){
    var questionText = document.createElement("h2");
    questionText.innerText = questionArray[currentQuestion].question;
    mainEl.append(questionText);

    var imgEL = document.createElement("img");
    imgEL.innerText = questionArray[currentQuestion].imgSource;
    mainEl.appendChild(imgEL);

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
document.querySelectorAll(".btn").addEventListener("click", function(event){
    //go through the object to find the attribute
    if(event.currentTarget.attribute);
    //console log event
})
// questionArray[currentQuestion].question;