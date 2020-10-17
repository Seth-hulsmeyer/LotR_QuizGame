// time interval variable 
// current question index to append next question to 

//global variables including array of question objects
var currentQuestion = 0;
var questionArray = [
    //array of objects, each object reps question package (question, answers array, and correct answer string)
    {question: "Who are Durin's Folk?", imgSource: "./assets/LOTR1", choices: ["Men", "Hobbits", "Dwarves", "Elves"], answer: "Dwarves"},
    {question: "What kind of creatures are the spawn of Ungoliant?", imgSource: ".assets/LOTR2", choices: ["Hill Giants", "Giant Spiders", "Uruk-hai", "Balrogs"], answer: "Giant Spiders"},
    {question: "What do the Elves call the Hobbits?", imgSource: ".assets/LOTR3", choices: ["The Periannath", "The Mellon", "The Uruloki", "The Onodrim"], answer: "The Periannath"},
    {question: "What are the Palantiri, and how many are there?", imgSource: ".assets/LOTR4", choices: ["Seven Warning-Beacons", "Nine Rings of Power given to Men", "Three Jewels created by Feanor", "Seven Seeing-Stones"], answer: "Seven Seeing-stones"},
    {question: "Which character said 'Nine companions. So be it. You shall be the fellowship of the ring.'?", imgSource: ".assets/LOTR5", choices: ["Gandalf", "Arwen", "Elrond", "Tom Bombadil"], answer: "Elrond"},
    {question: "After Sauron, who geld the One Ring?", imgSource: ".assets/LOTR6", choices: ["It fell into a river and was lost", "Isildur", "Elrond", "Gollum"], answer: "Isildur"},
    {question: "What Sindarin word was Aragorn known by as a child?", imgSource: ".assets/LOTR7", choices: ["Estel (hope or trust)", "Amdir (lost king)", "Aeluin (blue lake)", "Miriel (sparkling like jewels"], answer: "Estel (hope or trust)"},
    {question: "Where is Legolas from?", imgSource: ".assets/LOTR8", choices: ["Lothlorian", "Rivendell", "Mirkwood", "Fangorn Forest"], answer: "Lothlorian"},
    {question: "On Weathertop, with what type of blade was Frodo stabbed?", imgSource: ".assets/LOTR9", choices: ["Mithril", "Melkor", "Morgul", "Mithrandir"], answer: "Morgul"},
    {question: "What is the name of the sword held in this picture?", imgSource: ".assets/LOTR10", choices: ["Sting", "Narsil", "Glamdring", "Anduril"], answer: "Anduril"},
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