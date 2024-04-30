// Adding no. of questions for quiz
const questions = [
    {
      id: 1,
      question:
        " A shopkeeper bought a shirt for INR 500 amd sold it for INR 700.What is the profit or loss percentage?",
      options: ["40% Profit", "60% Profit", "40% Loss", "60% LOSS"],
      answer: "40% Profit",
      category: "Profit and loss",
    },
    {
      id: 2,
      question:
        "A trader sold a mobile phone for INR 8,000,incurring a Loss of 10% what was the cost price of the phone",
      options: ["8,888", "9000", "7200", "7500"],
      answer: "8,888",
      category: "Profit and loss",
    },
    {
      id: 3,
      question:
        "If a company made a profit of INR 25,000 on sales of INR 150,000.What is the profit maergin as a percentage",
      options: ["17%", "18%", "16.67%", "14%"],
      answer: "16.67%",
      category: "Profit and loss",
    },
    {
      id: 4,
      question:
        "A person bought a Laptop fpr INR 40,000 and sold it at a loss of 15% find the selling price",
      options: ["30,000", "32,000", "38,000", "34,000"],
      answer: "32,000",
      category: "Profit and loss",
    },
    {
      id: 5,
      question:
        "If a company incurred a loss of INR 5,000 on sales of INR 30,000 what is the loss percentage",
      options: ["16.67%", "15%", "18%", "16%"],
      answer: "16.67%",
      category: "Profit and loss",
    },
    {
      id: 6,
      question:
        "A trader sold a biycycle for INR 1,800,making a profit of 20% find the cost price",
      options: ["1,300", "12,00", "1,800", "1,500"],
      answer: "1,500",
      category: "Profit and loss",
    },
    {
      id: 7,
      question:
        "A company had a profit of INR 10,000 in the first quater and a loss of INR 5,000 in the second quater.What was the net profit and loss for the first half of year?",
  
      options: ["5,000 Profit", "10,000 Profit", "5,000 Loss", "10,000 Loss"],
      answer: "5,000 Profit",
      category: "Profit and loss",
    },
    {
      id: 8,
      question:
        "A retailer marked up the price of a product by 25% and then offered a 10% discount .If the final selling price is INR 450, what was the original price ?",
      options: ["450", "350", "400", "500"],
      answer: "400",
      category: "Profit and loss",
    },
    {
      id: 9,
      question:
        "An electronics store bought a television for 35,000 and sold it for 40,000.Determine the profit or loss",
      options: ["8,000 Profit", "5,000 Profit", "2,000 Loss", "5,000 Loss"],
      answer: "5,000 Profit",
      category: "Profit and loss",
    },
    {
      id: 10,
      question:
        "A car was purchased for INR 500,000 and sold for 450,000 what is the profit or loss incurred",
      options: ["30,000 Loss", "52,000 Loss", "50,000 Loss", "64,000 Loss"],
      answer: "50,000 Loss",
      category: "Profit and loss",
    },
    {
      id: 11,
      question:
        "If pipe a can fill A tank in 6 hours and pipes B can fill it in 8 hour, how long will it take if both pipes are opened simultaneously?",
      options: ["3.43 hours", "4.56 hours", "5.09 hours", "2.89 hours"],
      answer: "3.43 hours",
      category: "Pipes and Cisterns",
    },
    {
      id: 12,
      question:
        "Pipe X can fill a cistern in 4 hours, while pipe Y can empty the same cistern in 6 hours if both pipes are opened together, how long will it take to fill the cistern?",
      options: ["6 hours", "5 hours", "8 hours", "4 hours"],
      answer: "8 hours",
      category: "Pipes and Cisterns",
    },
    {
      id: 13,
      question:
        "Pipe M can fill a tank in 12 hours and pipe N can empty it in 8 hours if both pipes are opened together how long will it take to fill the tank?",
      options: ["12 hours", "11 hours", "24 hours", "38 hours"],
      answer: "24 hours",
      category: "Pipes and Cisterns",
    },
    {
      id: 14,
      question:
        "Pipe P can fill a tank in 10 hours and pipe Q Can empty it in 5 hours. How long will it take to fill the tank if both pipes are opened together?",
      options: ["30 hours", "12 hours", "15 hours", "18 hours"],
      answer: "15 hours",
      category: "Pipes and Cisterns",
    },
    {
      id: 15,
      question:
        "Pipe R can a fill a cistern in 3 hours while pipe S can empty it in 5 hours .How long will it take to fill the cistern if both pipes are opened together?",
  
      options: ["4.5 hours", "6 hours", "7.5 hours", "8 hours"],
      answer: "7.5 hours",
      category: "Pipes and Cisterns",
    },
    {
      id: 16,
      question:
        "If Pipe A can fill a tank in 8 hour and pipe B can empty it in 12 hours how long will it take to fill the tank if both pipes are opened together",
      options: ["24 hours", "35 hours", "48 hours", "9 hours"],
      answer: "24 hours",
      category: "Pipes and Cisterns",
    },
    {
      id: 17,
      question:
        "Pipe X  Can fill a cistern in 6 hours while pipe Y can empty the same cistern in 4 hours if both pipes are opened together,how long will it take to fill the cistern?",
      options: ["5 hours", "10 hours ", "12 hours", "13 hours"],
      answer: "13 hours",
      category: "Pipes and Cisterns",
    },
    {
      id: 18,
      question:
        "Pipes M can fill a tank in 15 hours and pipe N can empty it in 10 hours .if both pipes are opened together, how long will it take to fill the tank?",
      options: ["30 hours", "52 hours", "10 hours", "24 hours"],
      answer: "30 hours",
      category: "Pipes and Cisterns",
    },
    {
      id: 19,
      question:
        "Pipes P can fill a tank in 7 hours and pipes Q can empty it in 9 hours how long will take it to fill the tank if both pipes are opened?",
      options: ["30 hours", "52 hours", "63 hours", "64 hours"],
      answer: "63 hours",
      category:"Pipes and Cisterns",
    },
    {
      id: 20,
      question:
        "Pipe R can fill a cistern in 5 hours while pipe S Can empty it in 7 hour how long will it take to fill the cistern if both pipes are both pipes are opened together?",
      options: ["30 hours", "35,hours", "50 hours", "48 hours"],
      answer: "35 hours",
      category:"Pipes and Cisterns",
    },
    {
      id: 21,
      question:
        "Ten year ago Alice was twice as old as Bob if the sum of their ages is currently 60 how old are they now ?",
      options: ["Alice is 40 years old and Bob is 20 years old","Alice is 40 years old and Bob is 20 years old","Alice is 45 years old and Bob is 30 years old","Alice is 52 years old and Bob is 34 years old",],
      answer: "Alice is 40 years old and Bob is 20 years old",
      category: "Problem on Ages",
    },
    {
      id: 22,
      question:
        "Sarah is three times  as old as her son Jack the sum of their ages 36 how old they are?",
      options: ["Sarah is 37 years old and jack is 19 years old","Sarah is 27 years old and jack is 9 years old", "Sarah is 17 years old and jack is 8 years old","Sarah is 47 years old and jack is 5 years old",],
      answer: "Sarah is 27 years old and jack is 9 years old",
      category: "Problem on Ages",
    },
    {
      id: 23,
      question:
        "Five year from now Mikes age will be twice as much as it was seven year ago how old mike currently?",
      options: ["30 years old","15 years old","14 years old","18 years old"],
      answer: "14 years old",
      category: "Problem on Ages",
    },
    {
      id: 24,
      question:
        "Four year ago Tom was four times as old as Kate if the sum of their ages is 36 now how old is Tom?",
      options: ["22 years old","32 years old","52 years old","26 years old"],
      answer: "22 years old",
      category: "Problem on Ages",
    },
    {
      id: 25,
      question:
        "Marry is twice as old as john five years ago the sum of their ages was 36 how old john now?",
      options: ["12 years old","13 years old","10 years old","16 years old"],
      answer: "10 years old",
      category: "Problem on Ages",
    },
    {
      id: 26,
      question:
        "Sam is 8 year older then Emily the sum of their ages is 42 how old is Emily?",
      options: ["17 years old","45 years old","10 years old","38 years old"],
      answer: "17 years old",
      category: "Problem on Ages",
    },
    {
      id: 27,
      question:
        "In five years jake will be twice as old as lisa if the sum of their ages is 38 noe how oold jack?",
      options: ["34 years old","54 years old","24 years old","74 years old"],
      answer: "24 years  old",
      category: "Problem on Ages",
    },
    {
      id: 28,
      question:
        "Three year ago mike was twice as old as Ben if the sum of their age is 44 how old mike?",
      options: ["33 years old","34 years old","23 years old","54 years old"],
      answer: "23 years old",
      category: "Problem on Ages",
    },
    {
      id: 29,
      question:
        "Ten year now Bob will be twice as old as Carol if the sum of their age is 30 how old carol?",
      options: ["33 years old","35 years old","20 years old","14 years old"],
      answer: "20 years old",
      category: "Problem on Ages",
    },
    {
      id: 30,
      question:
        "Laura is four year younger then susan. the sum of their ages is 50 hoiw old is Susan?",
      options: ["23 years old","35 years old","27 years old","24 years old"],
      answer: "27 year old",
      category: "Problem on Ages",
    },
    {
      id: 31,
      question: "What is the probability of rolling a 6 on a fair six-side die?",
      options: ["2/3","3/4","1/6","2/6"],
      answer: "1/6",
      category: "Probability",
    },
    {
      id: 32,
      question:
        "If you flip a fair coin what is the probability of getting heads?",
      options: ["1/3","1/2","1/5","1/6"],
      answer: "1/2",
      category: "Probability",
    },
    {
      id: 33,
      question:
        "If you draw a card from a standard deck of 52 cards what is the probability of drawing a red card?",
      options: ["1/4","2/3","1/2","2/1"],
      answer: "1/2",
      category: "Probability",
    },
    {
      id: 34,
      question:
        "What is probability of rolling an even number on a fair six-sided die?",
      options: ["1/4","2/3","1/2","2/1"],
      answer: "1/2",
      category: "Probability",
    },
    {
      id: 35,
      question:
        "If you roll two fair six-sided dice what is the probability of getting a sum of 7?",
      options: ["1/6","2/3","3/5","2/3"],
      answer: "1/6",
      category: "Probability",
    },
    {
      id: 36,
      question:
        "If you flip two fair coins what is the probability of getting at least one head?",
      options: ["4/5","5/4","3/4","4/3"],
      answer: "3/4",
      category: "Probability",
    },
    {
      id: 37,
      question:
        "If you draw two cards without replacement from a standard deck of 52 cards what is the probability that both card are aces?",
      options: [ "4/2652 or 1/663","3/2654 or 2/633","5/2752 or 5/683","9/2652 or 0/663",],
      answer: "4/2652 or 1/663",
      category: "Probability",
    },
    {
      id: 38,
      question:
        "What is the probability of randomly selecting a multiple of 5 from the numbers 1 to 20?",
      options: ["2/4","3/4","1/4","2/6"],
      answer: "1/4",
      category: "Probability",
    },
    {
      id: 39,
      question:
        "If you spin a spinner with 8 equal section numbered 1 through 8 what is the probability of landing on an even number?",
      options: ["2/4","3/4","1/2","2/6"],
      answer: "1/2",
      category: "Probability",
    },
    {
      id: 40,
      question:
        "If you draw three cards without replacement from a standard deck of 52 card what is the probability that all three card are heart ?",
      options: ["2/5525","1/5525","6/5525","3/5425"],
      answer: "1/5525",
      category: "Probability",
    },
  ];
  
  const container = document.getElementById("container");
  
  let questionCount = 0;
  let score = 0;
  let username = "";
  let attempt = 0;
  let correct = 0;
  let wrong = 0;
  let category = "";
  let categoryQuestions = [];
  
  function getName(event) {
    username = document.getElementById("username").value;
    document.getElementById(
      "welcome-note"
    ).innerHTML = `Welcome ${username}! You can start the quiz now`;
    event.preventDefault();
  }
  function startQuiz(event) {
    if (username == "") {
      alert("Enter Your Name First");
      return;
    }
    score = 0;
    questionCount = 0;
    attempt = 0;
    correct = 0;
    wrong = 0;
    container.innerHTML = "";
  
    category = event.target.value;
  
    let containerHtmlStr = `
    <h3>${category}</h3>
    <div class="timer-score-div">
       <div id="timer-div">Timer</div>
       <div id="score">Score: ${score}</div>
    </div>
    <div id="question-div" class="question-div"></div>
    <div id="options-div"></div>
    <button class="next-button" id="nextButton" onclick="nextQuestion()" id="next-button">Next question</button>
    `;
    container.innerHTML = containerHtmlStr;
    displayQuestion(questionCount);
  }
//   conditioning for category 
  function nextQuestion() {
    questionCount = questionCount + 1;
    if (questionCount < categoryQuestions.length) displayQuestion(questionCount);
    else {
      displayResult();
    }
  }
  let timer
  function displayQuestion(questionCount) {
    clearTimeout(timer);
    const questionDiv = document.getElementById("question-div");
  
    questionDiv.style.display = "block";
    questionDiv.innerHTML = "";
    categoryQuestions = questions.filter((question) => {
      return question.category === category;
    });
    questionDiv.innerHTML = categoryQuestions[questionCount].question;
  
    container.insertBefore(
      questionDiv,
      container.children[container.children.length - 1]
    );
  
    displayOptions(questionCount);
    const timerDiv = document.getElementById("timer-div");
    let timeLeft = 20;
     timer = setInterval(countDown, 1000);
    function countDown() {
      if (timeLeft == -1) {
        clearTimeout(timer);
        nextQuestion();
      } else {
        timerDiv.innerHTML = timeLeft;
        timeLeft = timeLeft - 1;
      }
    }
  }
  
  function displayOptions(questionCount) {
    const optionsDiv = document.getElementById("options-div");
  
    optionsDiv.style.display = "block";
    optionsDiv.innerHTML = "";
    categoryQuestions[questionCount].options.map((option) => {
      const optionButton = document.createElement("button");
      optionButton.innerHTML = option;
      optionButton.className = "option-button";
      optionButton.id = "option-button";
      optionButton.value = option;
      optionButton.onclick = function (event) {
        attempt = attempt + 1;
       
        if (event.target.value == categoryQuestions[questionCount].answer) {
         
          score = score + 1;
          correct = correct + 1;
          document.getElementById("score").innerHTML = `Score: ${score}`;
          document.getElementById("option-button").style.pointerEvents = "none";
          event.target.className = "correct-option";
        } else {
          wrong = wrong + 1;
          event.target.className = "wrong-option";
        }
        var optionButtons = document.getElementsByClassName("option-button");
        for (var i = 0; i < optionButtons.length; i++) {
          optionButtons[i].style.pointerEvents = "none";
        }
      };
      optionsDiv.appendChild(optionButton);
    });
  
    container.insertBefore(
      optionsDiv,
      container.children[container.children.length - 1]
    );
  }
  function displayResult() {
    container.innerHTML = "";
  
    let resultPage = `
        <h1>Quiz Result</h1>
        <p><b>${username}</b> Your result is:</p>
        <p>Total taken time</p>
        <p>Total questions: <b>${categoryQuestions.length}</b></p>
        <p>Attempt: <b>${attempt}</b></p>
        <p>Correct: <b>${correct}</b></p>
        <p>Wrong: <b>${wrong}</b></P>
        <P>Percentage: <b>${(correct / questions.length) * 100}%</b></p>
        <button id="restart-quiz-button" onclick="startQuiz(event)" value="${category}" class="next-button">Start again </button>
         <button id="home-button" onclick="loadHomepage()"  class="next-button">Go to Home page</button>
     `;
  
    container.innerHTML = resultPage;
  }
  function loadHomepage() {
    location.reload();
  }
  
  