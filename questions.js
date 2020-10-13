// Create an  array of questions
var questions = [
	{
		title: "When is localStorage data cleared?",
		choices: ["No expiration time", "On page reload", "On browser close", "On computer restart"],
		answer: "No expiration time",
	},
	{
		title: "What would be the output of <script type=\"text/javascript\"> x=4+\"4\"; document.write(x); </script>",
		choices: ["44", "8", "4", "Error output"],
		answer: "44",
	},
	{
		title: "What does DOM stand for?",
		choices: ["Document Object Model", "Display Object Management", "Digital Ordinance Model", "Desktop Oriented Mode"],
		answer: "Document Object Model",
	},
	{
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",
    },
	{
		title: "What is used primarily to add styling to a web page?",
		choices: ["HTML", "CSS", "Javascript", "Hacking"],
		answer: "CSS",
	},
	{
		title: "The _______ method of an Array object adds and/or removes elements from an array.",
		choices: ["Reverse", "Shift", "Slice", "Splice"],
		answer: "Splice",
	},
	{
		title: "How many elements can you apply an 'ID' attribute to?",
		choices: ["Unlimited", "3", "1", "128"],
		answer: "1",
	},
	{
		title: "How do you create an array in Javascript?",
		choices: ["var D[]=", "var E{}=", "var F=[]", "var G={}"],
		answer: "var F=[]",
	},
	{
		title: "Which of the following is not considered a JavaScript operator?",
		choices: ["new", "this", "delete", "typeof"],
		answer: "this",
	},
	{
		title: "Which of the following attribute can hold the JavaScript version",
		choices: ["LANGUAGE", "SCRIPT", "VERSION", "None of the above"],
		answer: "LANGUAGE",
	}
]


 /**Create next questions to be added to the HTML document dynamically*/
function displayQuestions() {
    var holdQ1Title = questions[i].title
    hElement.textContent = holdQ1Title
    var holdq1Choice1 = questions[i].choices[0];
    var holdq1Choice2 = questions[i].choices[1];
    var holdq1Choice3 = questions[i].choices[2];
    var holdq1Choice4 = questions[i].choices[3];

    oderListEl.innerHTML = '';

    var liTag1 = document.createElement("li");
    liTag1.setAttribute("class", "all_li")
    var btn = document.createElement('button');
    btn.setAttribute("class", "all_btn")
    btn.textContent = holdq1Choice1;
    liTag1.appendChild(btn)
    oderListEl.appendChild(liTag1);
    divContEL.appendChild(oderListEl);

    var liTag2 = document.createElement("li");
    liTag2.setAttribute("class", "all_li");
    var btn2 = document.createElement('button');
    btn2.setAttribute("class", "all_btn")
    btn2.textContent = holdq1Choice2;
    liTag2.appendChild(btn2)
    oderListEl.appendChild(liTag2)
    divContEL.appendChild(oderListEl);

    var liTag3 = document.createElement("li");
    liTag3.setAttribute("class", "all_li")
    var btn3 = document.createElement('button');
    btn3.setAttribute("class", "all_btn")
    btn3.textContent = holdq1Choice3;
    liTag3.appendChild(btn3)
    oderListEl.appendChild(liTag3)
    divContEL.appendChild(oderListEl);

    var liTag4 = document.createElement("li");
    liTag4.setAttribute("class", "all_li")
    var btn4 = document.createElement('button');
    btn4.setAttribute("class", "all_btn");
    btn4.textContent = holdq1Choice4;
    liTag4.appendChild(btn4);
    oderListEl.appendChild(liTag4);
    divContEL.appendChild(oderListEl);
 
    var allBtnEl = document.querySelectorAll(".all_btn")
    allBtnEl.forEach(function (event) {
        event.addEventListener("click", onclickHandler)
    });

}