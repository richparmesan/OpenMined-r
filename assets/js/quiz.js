const quizData = [
  {
    question:
      "The vertical to intermediate dipping wall created in rock by excavation actions.",
    answer: "Face",
  },
  {
    question:
      "Ledge that forms a single level of operation above which mineral or waste materials are mined from the bench face.",
    answer: "Bench",
  },
  
  {
    question:
      "The material that must be removed or excavated to access and extract the ore. The non-valuable material that covers the valuable resource being mined.",
    answer: "Overburden",
  },
  {
    question:
      "Vertical distance or height between the various levels or terraces (benches) created within the walls of the open pit.",
    answer: "Bench Height",
  },
  {
    question:
      "A natural concentration of valuable minerals, metals, or other economically significant substances that can be mined and processed for profit.",
    answer: "Ore Body",
  },
  {
    question: "The lower limit of a surface excavation to extract minerals.",
    answer: "Pit Floor",
  },
  {
    question:
      "A network of roads is constructed within the pit to transport materials, equipment, and personnel.",
    answer: "Haulage Road",
  },
  {
    question:
      "Inclined roadway or access route that is constructed within the pit to allow for the movement of equipment, vehicles, and personnel between different levels or benches of the mine.",
    answer: "Ramp",
  },
];
const questionsElement = document.getElementById("questions");
const submitButton = document.getElementById("submit");
const resultElement = document.getElementById("result");

// Initialize the quiz
function initQuiz() {
  shuffleArray(quizData); // Shuffle the questions
  displayQuestions();
  submitButton.addEventListener("click", showScore);

  // Disable the submit button initially
  submitButton.disabled = true;

  // Add event listeners to the answer input fields to enable/disable the submit button
  const answerElements = document.querySelectorAll(".answer");
  answerElements.forEach((answerElement) => {
    answerElement.addEventListener("input", checkInputs);
  });
}

// Shuffle an array in a random order
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Display only 5 shuffled questions
function displayQuestions() {
  let questionsHTML = "";
  const firstFiveQuestions = quizData.slice(0, 5);

  firstFiveQuestions.forEach((quizItem, index) => {
    questionsHTML += `
      <div class="row mb-3 mt-5">
        <div class="col-lg-7">
          <p><strong>Question ${index + 1}:</strong> <br /> ${quizItem.question}</p>
        </div>
        <div class="col-lg-5 mt-3">
          <input type="text" data-index="${index}" class="form-control answer" placeholder="Answer">
        </div>
      </div>
      <hr/>
    `;
  });

  questionsElement.innerHTML = questionsHTML;
}


// Function to enable the submit button if all input fields are filled
function checkInputs() {
  const answerElements = document.querySelectorAll(".answer");
  const allFilled = Array.from(answerElements).every((element) => element.value.trim() !== "");

  submitButton.disabled = !allFilled;
}

// Show the score and hide questions and the submit button
function showScore(event) {
  event.preventDefault();
  const answerElements = document.querySelectorAll(".answer");
  let correctCount = 0; // Count of correct answers

  answerElements.forEach((answerElement) => {
    const index = answerElement.getAttribute("data-index");
    const userAnswer = answerElement.value.trim();
    const correctAnswer = quizData[index].answer;

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      correctCount++;
    }
  });

  const totalQuestions = quizData.length;
  const userScore = correctCount; // Number of correct answers

  let alertClass = "alert-info"; // Default alert class

  if (userScore === 4 >= userScore === 5) {
    alertClass = "alert-success"; // Change to success for scores 4 or 5
  } else if (userScore === 3) {
    alertClass = "alert-warning"; // Change to warning for scores 1 or 2
  } else if (userScore === 1 >= userScore === 2) {
    alertClass = "alert-info"; // Change to warning for scores 1 or 2
  } else if (userScore === 0) {
    alertClass = "alert-danger"; // Change to danger for score 0
  }

  resultElement.innerHTML = `
    <div class="alert ${alertClass} text-center">
      <h3>Your Score: ${userScore}/5</h3>
      <a class="btn btn-success mx-3 mt-3" href="quiz2.html">Try Again</a>
      <a class="btn btn-success mx 3 mt-3" href="quiz1.2.html">Proceed</a>
    </div>`;

  // Hide the questions and submit button
  questionsElement.style.display = "none";
  submitButton.style.display = "none";
}


// Start the quiz
initQuiz();
