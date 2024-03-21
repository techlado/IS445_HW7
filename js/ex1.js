// List of questions (statement + answer)
const questions = [
  {
    statement: "2+2?",
    answer: "2+2 = 4"
  },
  {
    statement: "In which year did Christopher Columbus discover America?",
    answer: "1492"
  },
  {
    statement:
      "What occurs twice in a lifetime, but once in every year, twice in a week but never in a day?",
    answer: "The E letter"
  }
];

//First, generate the HTML for a single question and button
function htmlQuestion(question) {
  //Create the tags/elements in the HTML
  const div = document.createElement('div');
  const statement = document.createElement('p');
  //Assign the question to the text content
  statement.textContent = question.statement;
  //append the statement to the div
  div.appendChild(statement);


  
//Create the button
const button = document.createElement('button');
//Assign text content to button display
button.textContent = 'Show answer';
//Add event listener for the click
button.addEventListener('click', function() {
  //replace the button with the answer text
  const ans = document.createElement('p');
  ans.textContent = question.answer;
  //append to the div content
  div.appendChild(ans);
  //remove the button
  div.removeChild(button);
});

div.appendChild(button);
//return completed div
return div;
};


//Create function to display each question
function displayQuestions() {
  //get the content div
  const contentDiv = document.getElementById('content');
  //iterate through the questions array
  questions.forEach(function(question) {
    const questionDiv = htmlQuestion(question);
    contentDiv.appendChild(questionDiv);
  });
}

//call the function
document.addEventListener('DOMContentLoaded', displayQuestions);

