 /************ 1. QUESTION BANK (add as many as you like) ************/
const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "HyperLoop Machine Language",
      "Hyper Tool Multi Language"
    ],
    answer: "HyperText Markup Language"
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    answer: "CSS"
  },
  {
    question: "Which is used for web apps?",
    options: ["PHP", "Python", "JavaScript", "All of these"],
    answer: "JavaScript"
  },
  {
    question: "Which HTML tag is used to create an unordered list?",
    options: ["<list>", "<ol>", "<ul>", "<li>"],
    answer: "<ul>"
  },
  {
    question: "Inside which HTML element do we put JavaScript?",
    options: ["<javascript>", "<js>", "<script>", "<scripting>"],
    answer: "<script>"
  },
  {
    question: "Which property is used to change text color in CSS?",
    options: ["font-style", "text-color", "color", "font-color"],
    answer: "color"
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    options: ["msg('Hello World');", "alertBox('Hello World');", "alert('Hello World');", "msgBox('Hello World');"],
    answer: "alert('Hello World');"
  },
  {
    question: "Which keyword is used to declare variables in JavaScript (ES6)?",
    options: ["var", "let", "int", "const"],
    answer: "let"
  },
  {
    question: "How do you create a link in HTML?",
    options: ["<a href='url'>link</a>", "<link src='url'/>", "<href>url</href>", "<url>link</url>"],
    answer: "<a href='url'>link</a>"
  },
  {
    question: "Which CSS property controls the text size?",
    options: ["font-style", "text-size", "font-size", "text-style"],
    answer: "font-size"
  },
  {
    question: "What does the `defer` attribute do in a <script> tag?",
    options: [
      "Loads the script after page load",
      "Defers script execution until HTML is parsed",
      "Delays loading images",
      "Runs script in a new thread"],
    answer: "Defers script execution until HTML is parsed"
  },
  {
    question: "Which CSS property controls the stacking order of elements?",
    options: ["position", "z-index", "display", "layer"],
    answer: "z-index"
  },
  {
    question: "Which JavaScript method is used to select an element by ID?",
    options: ["getElementsByClassName", "getElementById", "querySelectorAll", "getNode"],
    answer: "getElementById"
  },
  {
    question: "Which unit is relative to the root element in CSS?",
    options: ["em", "px", "rem", "%"],
    answer: "rem"
  },
  {
    question: "Which of the following is NOT a valid CSS pseudo-class?",
    options: [":hover", ":active", ":parent", ":first-child"],
    answer: ":parent"
  },
  {
    question: "In JavaScript, what does `===` check for?",
    options: ["Equality and type", "Value only", "Reference only", "Type only"],
    answer: "Equality and type"
  },
  {
    question: "Which HTML tag is used to create a drop-down list?",
    options: ["<input type='dropdown'>", "<select>", "<dropdown>", "<menu>"],
    answer: "<select>"
  },
  {
    question: "Which event is triggered when a form is submitted?",
    options: ["onclick", "onsubmit", "onchange", "onhover"],
    answer: "onsubmit"
  },
  {
    question: "Which method is used to add a class in JavaScript?",
    options: ["element.classList.add()", "element.addClass()", "element.setAttribute('class')", "element.style.class()"],
    answer: "element.classList.add()"
  },
  {
    question: "Which of the following is a JavaScript framework?",
    options: ["React", "Laravel", "Django", "Flask"],
    answer: "React"
  },
  {
    question: "What is the default position value in CSS?",
    options: ["absolute", "relative", "static", "fixed"],
    answer: "static"
  },
  {
    question: "What is the output of: `typeof null`?",
    options: ["'null'", "'object'", "'undefined'", "'boolean'"],
    answer: "'object'"
  },
  {
    question: "Which tag is used to define an internal style sheet?",
    options: ["<script>", "<style>", "<css>", "<head>"],
    answer: "<style>"
  },
  {
    question: "Which attribute is used to make an input field mandatory?",
    options: ["required", "mandatory", "validate", "must"],
    answer: "required"
  },
  {
    question: "How do you comment a single line in JavaScript?",
    options: ["<!-- comment -->", "// comment", "/* comment */", "** comment **"],
    answer: "// comment"
  },
  {
    question: "Which property changes the background color in CSS?",
    options: ["color", "background-color", "bgcolor", "style"],
    answer: "background-color"
  },
  {
    question: "How do you round a number in JavaScript?",
    options: ["Math.ceil()", "Math.floor()", "Math.round()", "Number.round()"],
    answer: "Math.round()"
  },
  {
    question: "Which tag is used to define a table row in HTML?",
    options: ["<td>", "<tr>", "<th>", "<table>"],
    answer: "<tr>"
  },
  {
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Management",
      "Digital Object Mode",
      "Desktop Object Management"
    ],
    answer: "Document Object Model"
  },
  {
    question: "Which of these is used to fetch data from an API in JavaScript?",
    options: ["fetch()", "getData()", "callAPI()", "request()"],
    answer: "fetch()"
  }
];

window.onload = () => {
    /************ 2. DOM ELEMENTS ************/
    const startScreen  = document.getElementById("start-screen");
    const quizScreen   = document.getElementById("quiz-screen");
    const resultScreen = document.getElementById("result-screen");

    const startBtn   = document.getElementById("start-btn");
    const questionEl = document.getElementById("question");
    const optionsEl  = document.getElementById("options");
    const nextBtn    = document.getElementById("next-btn");
    const prevBtn    = document.getElementById("prev-btn");
    const timerEl    = document.getElementById("timer");
    const countEl    = document.getElementById("question-count");

    const finalScore = document.getElementById("final-score");
    const retryBtn   = document.getElementById("retry-btn");
    const closeBtn   = document.getElementById("close-btn");

    /************ 3. QUIZ STATE ************/
    let currentQuestion = 0;
    let score = 0;
    let timer;
    const TIME_LIMIT = 20; // seconds per question

    /************ 4. EVENT LISTENERS ************/
    startBtn.addEventListener("click", startQuiz);
    nextBtn.addEventListener("click", () => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            endQuiz();
        }
    });
    prevBtn.addEventListener("click", () => {
      console.log("previous button clicked, currentQuestion");
        if (currentQuestion > 0) {
            currentQuestion--;
            showQuestion();
        }
    });
    retryBtn.addEventListener("click", resetQuiz);
    closeBtn.addEventListener("click", () => {
        document.body.innerHTML = "<h2 style='text-align:center;'>Thanks for playing!</h2>";
    });

    /************ 5. FUNCTIONS ************/
    function startQuiz() {
        startScreen.classList.add("hidden");
        quizScreen.classList.remove("hidden");
        shuffleQuestions();
        showQuestion();
    }

    function shuffleQuestions() {
        questions.sort(() => Math.random() - 0.5);
    }

    function showQuestion() {
        clearInterval(timer);
        timerEl.textContent = TIME_LIMIT;
        nextBtn.classList.add("hidden");
        optionsEl.innerHTML = "";
        if (currentQuestion === 0) {
            prevBtn.classList.add("hidden");
        } else {
            prevBtn.classList.remove("hidden");
        }

        countEl.textContent = `Question ${currentQuestion + 1} / ${questions.length}`;

        if (currentQuestion < questions.length) {
            const q = questions[currentQuestion];
            questionEl.textContent = q.question;

            q.options.forEach(optionText => {
                const btn = document.createElement("button");
                btn.textContent = optionText;
                btn.addEventListener("click", () => checkAnswer(btn, q.answer));
                optionsEl.appendChild(btn);
            });

            startTimer();
        } else {
            endQuiz();
        }
    }

    function checkAnswer(button, correctAnswer) {
        stopTimer();
        const allButtons = optionsEl.querySelectorAll("button");
        allButtons.forEach(btn => (btn.disabled = true));

        if (button.textContent === correctAnswer) {
            button.classList.add("correct");
            score++;
        } else {
            button.classList.add("wrong");
            allButtons.forEach(btn => {
                if (btn.textContent === correctAnswer) btn.classList.add("correct");
            });
        }
        nextBtn.classList.remove("hidden");
    }

    function startTimer() {
        let timeLeft = TIME_LIMIT;
        timer = setInterval(() => {
            timeLeft--;
            timerEl.textContent = timeLeft;
            if (timeLeft === 0) {
                stopTimer();
                markTimeout();
            }
        }, 1000);
    }

    function stopTimer() {
        clearInterval(timer);
    }

    function markTimeout() {
        const allButtons = optionsEl.querySelectorAll("button");
        allButtons.forEach(btn => {
            if (btn.textContent === questions[currentQuestion].answer) {
                btn.classList.add("correct");
            }
            btn.disabled = true;
        });
        nextBtn.classList.remove("hidden");
    }

    function endQuiz() {
        quizScreen.classList.add("hidden");
        resultScreen.classList.remove("hidden");
        finalScore.textContent = `Your Score: ${score} / ${questions.length}`;
        const best = localStorage.getItem("highScore") || 0;
        if (score > best) {
            localStorage.setItem("highScore", score);
        }
        let scores = JSON.parse(localStorage.getItem("scoreHistory")) || [];
        scores.push({ score: score, total: questions.length, date: new Date().toLocaleString() });
        localStorage.setItem("scoreHistory", JSON.stringify(scores));
    }

    function resetQuiz() {
        currentQuestion = 0;
        score = 0;
        resultScreen.classList.add("hidden");
        startScreen.classList.remove("hidden");
    }
};