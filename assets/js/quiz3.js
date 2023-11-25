const quizData = [
    {
      question: "It involves the use of heavy machinery and equipment to remove overburden (the material covering a mineral deposit) and extract valuable minerals or resources from the earth's surface.",
      options: ["A. Open Pit Mining", "B. Aqueous Extraction Method", "C. Surface Mining", "D. Mechanical Extraction Method"],
      answer: "D",
    },
    {
      question: "Which condition is preferable in open pit mining for deposit dip?",
      options: ["A. High dip", "B. Moderate dip", "C. Low dip", "D. Any dip"],
      answer: "C",
    },
    {
      question: "What is the purpose of the pit floor in open pit mining?",
      options: ["A. Extraction of minerals", "B. Transportation of materials", "C. Maintenance of benches", "D. Limit of surface excavation"],
      answer: "D",
    },
    {
      question: "In open cast mining, what is unique compared to open pit mining?",
      options: ["A. Deeper ore deposits", "B. Transportation of overburden", "C. Direct casting of overburden", "D. Underground extraction"],
      answer: "C",
    },
    {
      question: "What is the main advantage of using ANFO in blasting during open pit mining?",
      options: ["A. High precision", "B. Low costs", "C. Environmentally friendly", "D. All of the above"],
      answer: "B",
    },
    {
      question: "What equipment is commonly used for excavation in open pit mining?",
      options: ["a. Bulldozer", "b. Roller-bit rotary drill", "c. Bucketwheel excavator", "d. Front-end loader"],
      answer: "C",
    },
    {
      question: "What is the primary disadvantage of open cast mining related to slopes?",
      options: ["A. Low production rate", "B. Slopes must be monitored and maintained", "C. High labor intensity", "D. Surface damage"],
      answer: "B",
    },
    {
      question: "What region is considered the Nickel Capital of the Philippines due to its vast nickel deposits?",
      options: ["A. Cebu", "B. Romblon", "C. Surigao del Norte", "D. CARAGA"],
      answer: "D",
    },
    {
      question: "What is the process of removing rock, sand, gravel, or other minerals from the ground for construction or other uses called?",
      options: ["A. Mining", "B. Quarrying", "C. Excavation", "D. Drilling"],
      answer: "B",
    },
    {
      question: "What is auger mining in open cast mining designed for?",
      options: ["A. Efficient blasting", "B. Deep ore extraction", "C. Recovering coal or other minerals from under the highwall", "D. Large lateral extent"],
      answer: "C",
    },
    {
      question: "What is a characteristic advantage of quarrying related to walls and benches?",
      options: ["A. Stable walls and benches; generally, no bank support required", "B. Low capital cost", "C. Suited to small deposits", "D. High selectivity"],
      answer: "A",
    },
    {
      question: "What geological condition is preferred for open cast mining deposit shape?",
      options: ["A. Spherical", "B. Cubical", "C. Tabular, bedded", "D. Irregular"],
      answer: "C",
    },
    {
      question: "What is contour mining in open cast mining designed for?",
      options: ["A. Efficient blasting", "B. Hilly or mountainous terrain with cuts placed on the contour of the topography", "C. Deep ore extraction", "D. Large lateral extent"],
      answer: "B",
    },
    {
      question: "In open pit mining, what is a bench?",
      options: ["A. A type of explosive used for blasting", "B. The vertical to intermediate dipping wall created in rock", "C. A ledge that forms a single level of operation above which materials are mined", "D. A network of roads for transportation within the pit"],
      answer: "C",
    },
    {
      question: "What is the primary advantage of open pit mining?",
      options: ["A. Low production rate", "B. High labor intensity", "C. Large capital investment", "D. High production rate"],
      answer: "D",
    },
    {
      question: "Which condition is preferable in open pit mining for deposit dip?",
      options: ["A. High dip", "B. Moderate dip", "C. Low dip", "D. Any dip"],
      answer: "C",
    },
    {
      question: "What is the average slope of an open-pit mine?",
      options: ["A. 30 degrees", "B. 45 degrees", "C. 60 degrees", "D. 75 degrees"],
      answer: "B",
    },
    {
      question: "What is the primary purpose of conveyors in surface mining operations?",
      options: ["A. Ore drilling", "B. Explosive blasting", "C. Excavation", "D. Handling bulk materials"],
      answer: "D",
    },
    {
      question: "What is the name of the largest terrestrial vehicle ever recorded in human history used in large-scale open-pit mining operations?",
      options: ["A. Bulldozer 5000", "B. Excavatron X-9000", "C. MegaMiner 3000", "D. Bagger 293"],
      answer: "D",
    },
    {
      question: "In 2023, what percentage of the total land area in the Caraga Region do mining companies cover?",
      options: ["A. 1%", "B. 3%", "C. 2.33%", "D. 5%"],
      answer: "C",
    },
    {
      question: "What term encompasses all methods utilizing water or a liquid solvent for mineral recovery from the Earth?",
      options: ["a. Aqueous Extraction", "b. Mechanical Extraction", "c. Leaching"],
      answer: "a",
    },
    {
      question: "What subclass is used for recovering soluble or fusible minerals, or those easily retrieved in slurry form?",
      options: ["A. Solution Mining", "B. Placer Mining", "C. Sluicing"],
      answer: "A",
    },
    {
      question: "In hydraulicking, what is the typical deposit dip?",
      options: ["A. Preferably flat, with a maximum grade of 2-6%", "B. Nearly flat, with a 2-6% grade", "C. Preferably flat, with a maximum grade of 2-6%"],
      answer: "B",
    },
    {
      question: "What are the usual deposit size characteristics in hydraulicking?",
      options: ["A. Small to intermediate, with a thickness of 15-200 ft (5-60m)", "B. Intermediate to large (thickness 25 to 200 ft, or 8 to 60 m)", "C. Small to large, (thickness of 40-300 ft, or 12 to 91 m)"],
      answer: "A",
    },
    {
      question: "What is the term for the liquid medium in hydrometallurgy that selectively extracts desired metals from ore or minerals, assisting in rapid and complete leaching?",
      options: ["A. Leaching", "B. Lixiviant", "C. In-situ Process"],
      answer: "B",
    },
    {
      question: "What is the process called when hydrometallurgy is performed on previously mined dumps, tailings, or slag piles through percolation of lixiviant through the broken ore mass?",
      options: ["A. Heap or Dump Leaching", "B. Leaching", "C. Dredging"],
      answer: "A",
    },
    {
      question: "If the extraction is carried out on mineral in place using boreholes or other in-place methods, what is it called? __________ (fill in the blanks)",
      options: [],
      answer: "In situ leaching",
    },
    {
      question: "What is the chemical extraction of metals or minerals from a deposit or already mined material known as?",
      options: [],
      answer: "Leaching",
    },
    {
      question: "Which is not a possibility for borehole extraction?",
      options: ["-MELTING OF IRON", "-In situ leaching of uranium, copper, gold, and silver", "-Dissolution of salt, potash, and trona; slurrying of phosphate, kaolin, oil sands, coal, gilsonite, and uranium."],
      answer: "MELTING OF IRON",
    },
    {
      question: "What method involves using wells to access mineral values beneath the earth by injecting water and/or a lixiviant into the deposit for mineral extraction? (Fill in the blanks)",
      options: [],
      answer: ["Borehole extraction", "Borehole mining"],
    },
    {
      question: "What is the underwater excavation of placer deposits from a floating vessel called a dredge, often with processing and waste disposal facilities? (fill in the blanks)",
      options: [],
      answer: "Dredging",
    },
    {
      question: "What are the advantages of hydraulicking, excluding one option?",
      options: ["Can operate a mine with a lot of workers", "Fairly high productivity of 100-300 yd3 (75-230 m3) per employee-shift", "Low mining cost (relative cost about 5%)", "Intermediate production rate", "Low capital cost; simple equipment and cycle", "Can automate some operations"],
      answer: "Can operate a mine with a lot of workers",
    },
    {
      question: "What are the advantages of dredging mining, excluding one option?",
      options: ["Continuous operation with no breakage required", "Most productive of all mining methods (250 to 400 yd3, or 190 to 300 m3, of gravel per employee-shift)", "Lowest mining cost (relative cost < 5%)", "High production rate (maximum of 9 million yd3 or 7 million m3 a year)", "Low labor requirements (crew of 2 to 30 people)", "Good recovery (up to 70%)"],
      answer: "Good recovery (up to 70%)",
    },
    {
      question: "What is the typical deposit size for dredging?",
      options: ["A. Intermediate to large, with a thickness of 25 to 200 ft (8 to 60 m)", "B. Small to intermediate with a thickness of 15-200 ft (5-60 m)", "C. Small to large, (thickness of 40-300 ft, or 12 to 91 m)"],
      answer: "A",
    },
    {
      question: "What is NOT a characteristic of ore strength in dredging?",
      options: ["A. Unconsolidated", "B. Prefer valuable mineral to be heavier than waste"],
      answer: "B",
    },
    {
      question: "What is the preferred deposit dip for dredging?",
      options: ["A. Preferably flat, with a maximum grade of 2-6%", "B. Nearly flat (2-6% grade)"],
      answer: "A",
    },

    {
        question: "What is the typical depth for dredging?",
        options: [
          "A. Very shallow, with little overburden",
          "B. Very shallow, little overburden",
          "C. The type of leach; typically, less than 1000 ft (300 m)",
        ],
        answer: "A",
      },
      {
        question: "What can be very low in dredging? (fill in the blank)",
        options: [],
        answer: "Ore grade",
      },
      {
        question: "What is one of the requirements for dredging?",
        options: [
          "A. Moderate quantities of water required (200 to 2000 gal/min, or 13 to 125 l/sec)",
          "B. Prefer heavy minerals in unconsolidated soil or gravel with minimum boulders",
        ],
        answer: "A",
      },
      {
        question: "Arrange the sequence development of leaching. (sample answer: 35216478) ",
        options: [
            "1. Spread material in lifts of 10 ft (3 m) or more (alternative: use a single lift and remove after leaching), using trucks, front-end loaders, or stacking conveyors.",
            "2. Construct an impervious pad and proper pad berms to control leaching fluids.",
            "3. Install the irrigation system and initiate leaching.",
            "4. Remove vegetation from the area of the leach pad.",
            "5. Mine, crush, and remove fines from the ore material to be leached.",
            "6. Create a slope of about 5% to facilitate pad drainage.",
            "7. Rip the surface of the heap (if necessary) to enhance permeability.",
            "8. Construct a pregnant solution pond and a barren solution pond (if necessary)."
        ],
        answer: "46285173",
      },
    
  ];
  
  
  const questionsElement = document.getElementById("questions");
  const submitButton = document.getElementById("submit");
  const resultElement = document.getElementById("result");
  
  function initQuiz() {
    shuffleArray(quizData);
    displayQuestions();
    submitButton.addEventListener("click", showScore);
    submitButton.disabled = true;
  
    const answerElements = document.querySelectorAll(".answer");
    answerElements.forEach((answerElement) => {
      answerElement.addEventListener("input", checkInputs);
    });
  }
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  function displayQuestions() {
    let questionsHTML = "";
    const firstFiveQuestions = quizData.slice(0, 30);
  
    firstFiveQuestions.forEach((quizItem, index) => {
      questionsHTML += `
        <div class="row mb-3 mt-5">
          <div class="col-lg-7">
            <p><strong>Question ${index + 1}:</strong> <br /> ${quizItem.question}</p>
            <div class="options">
              ${
                quizItem.options
                  ? `<ul class="list-unstyled">${quizItem.options.map((option) => `<li><em class="fs-6">${option}</em></li>`).join("")}</ul>`
                  : `<input type="text" data-index="${index}" class="form-control answer" placeholder="Answer">`
              }
            </div>
          </div>
          <div class="col-lg-5 mt-3">
            ${
              quizItem.options
                ? `<input type="text" data-index="${index}" class="form-control answer" placeholder="Answer">`
                : ""
            }
          </div>
        </div>
        <hr/>
      `;
    });
  
    questionsElement.innerHTML = questionsHTML;
  }
  
  
  
  function checkInputs() {
    const answerElements = document.querySelectorAll(".answer");
    const allFilled = Array.from(answerElements).every((element) => element.value.trim() !== "");
    submitButton.disabled = !allFilled;
  }
  
  function showScore(event) {
    event.preventDefault();
    const answerElements = document.querySelectorAll(".answer");
    let correctCount = 0;
  
    answerElements.forEach((answerElement) => {
      const index = answerElement.getAttribute("data-index");
      const userAnswer = answerElement.value.trim();
      const correctAnswer = quizData[index].answer;
  
      if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        correctCount++;
      }
    });
  
    const totalQuestions = quizData.length;
    const userScore = correctCount;
  
    let alertClass = "alert-info";
  
    if (userScore >= 30) {
      alertClass = "alert-success";
    } else if (userScore === 25) {
      alertClass = "alert-warning";
    } else if (userScore >= 10 && userScore <= 24) {
      alertClass = "alert-info";
    } else if (userScore === 0) {
      alertClass = "alert-danger";
    }
  
    resultElement.innerHTML = `
      <div class="alert ${alertClass} text-center">
        <h3>Your Score: ${userScore}/30</h3>
        <a class="btn btn-success mx-3 mt-3" href="test.html">Try Again</a>
        <a class="btn btn-success mx 3 mt-3" href="home.html">Proceed</a>
      </div>`;
  
    questionsElement.style.display = "none";
    submitButton.style.display = "none";
  }
  
  initQuiz();
  