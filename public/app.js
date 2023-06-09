var question = [
  {
    question: "HTML Stands for ______________",
    options: ["hypher and text Markup Language", "Home toll Markup language", "Hypertext Markup Language", "programing language"],
    correctAnswer: "Hypertext Markup Language",
  },
  {
    question: "Who is making the Web standards?",
    options: ["Microsoft  ", "The World Wide Web Consortium", "Google", "Mozilla"],
    correctAnswer: "Microsoft",
  },
  {
    question: "Choose the correct HTML element for the largest heading:",
    options: ["head", "h6", "h1", "heading"],
    correctAnswer: "h1",
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    options: ["lb", "/br", "br;", "break"],
    correctAnswer: "/br",
  },
  {
    question: "What is the correct HTML for adding a background color?",
    options: ["background>yellow</background", "body bg= yellow", "Structured Query Language", " body style=background-color:yellow"],
    correctAnswer: "body style=background-color:yellow;",
  },
  {
    question: "Choose the correct HTML element to define important text",
    options: ["strong", "important", 'i', 'b'],
    correctAnswer: "<strong>",
  },
  {
    question: "Choose the correct HTML element to define emphasized text",
    options: ["i", "em", 'italic', 'none'],
    correctAnswer: "em",
  },
  {
    question: "Which character is used to indicate an end tag?",
    options: ["/", "^", '*', '<'],
    correctAnswer: "/",
  },
  {
    question: "Inline elements are normally displayed without starting a new line.",
    options: ["False  ", "True ",],
    correctAnswer: "True",
  },
  {
    question: "Which HTML element is used to specify a header for a document or section?",
    options: ["top", "section", 'head', 'header'],
    correctAnswer: "header",
  },
];

var indexvl = 0;
var Mark = 0;

var QuerentQueetion = document.getElementById('QuerentQueetion');
var totalQueation = document.getElementById('totalQueation');
var displayQueastion = document.getElementById('displayQueastion')
var optionQuestion = document.getElementById('optionQuestion')


function renderQuestion() {
  var que = question[indexvl];
  displayQueastion.innerHTML = que.question;
  totalQueation.innerHTML = question.length;
  QuerentQueetion.innerHTML = indexvl + 1;

  optionQuestion.innerHTML = '';
  for (var i = 0; i < que.options.length; i++) {
    optionQuestion.innerHTML += `<div class="col-md-6 mb-3">
    <button onclick ="checkAns('${que.correctAnswer}', '${que.options[i]}')" class="bg-info-subtle w-100 p-3  a">${que.options[i]}</button>
</div>
` ;
  }
}
var buttondiv = document.getElementById('buttondiv');
function renderQuestionqqq() {
  if (totalQueation.innerHTML === QuerentQueetion.innerHTML) {
    var button = document.createElement('button');
    var btnVal = document.createTextNode('Submit');
    button.appendChild(btnVal);
    buttondiv.appendChild(button);
    button.setAttribute('class', 'btn btn-success px-3')
    button.setAttribute('onclick', 'result()')
  } else {
    indexvl++;
    renderQuestion();
  }
}

var main = document.getElementById('main');
var mainunder = document.getElementById('mainunder');
//  var underhe = document.getElementById('underhe');
function result() {
  // alert('Your quiz is your result '+  Mark + ' Marks')

  main.innerHTML = '';
  var h3 = document.createElement('h3');
  var h3val = document.createTextNode('Your Quiz Is Your Result ' + Mark + ' Mark')
  h3.appendChild(h3val);
  mainunder.appendChild(h3);
  h3.setAttribute('class', 'bg-info-subtle  rounded shadow py-3');
}
function checkAns(a, b) {
  if (a == b) {
    Mark++;
  }
  // console.log(Mark);
  renderQuestionqqq();
}
renderQuestion();