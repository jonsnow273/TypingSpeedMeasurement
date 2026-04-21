let wpm;
let accuracy;
let score = 0;
let time = 0;
let feedback;
let timerInterval = null;
let hasStarted = false;
let currentParagraph = '';

function startIt() {
    score = 0;
    time = 0;
    hasStarted = false;
    clearInterval(timerInterval);
    document.getElementById("user-input").value = '';
    document.getElementById("timer").textContent = 'Time: 0s';
    document.getElementById("wpm").textContent = 'WPM: 0';
    document.getElementById("accuracy").textContent = 'Accuracy: 0%';

    document.getElementById("home-screen").style.display = "none";
    document.getElementById("result-screen").style.display = "none";
    document.getElementById("typing-screen").style.display = "block";

    fetch('statement.json')
        .then(response => response.json())
        .then(data => {
            let randomIndex = Math.floor(Math.random() * data.paragraphs.length);
            currentParagraph = data.paragraphs[randomIndex];

            let spans = '';
            for (let i = 0; i < currentParagraph.length; i++) {
                spans += `<span>${currentParagraph[i]}</span>`;
            }
            document.getElementById("text-display").innerHTML = spans;

            checkTyping();
        });
}

function startTimer() {
    document.getElementById("timer").classList.add("running");
    timerInterval = setInterval(() => {
        time++;
        document.getElementById("timer").textContent = `Time: ${time}s`;

        let typedWords = document.getElementById("user-input").value
            .trim().split(/\s+/).filter(w => w !== '').length;
        let minutes = time / 60;
        let liveWpm = minutes > 0 ? Math.round(typedWords / minutes) : 0;
        document.getElementById("wpm").textContent = `WPM: ${liveWpm}`;
    }, 1000);
}

function checkTyping() {
    let input = document.getElementById("user-input");
    let newInput = input.cloneNode(true);
    input.parentNode.replaceChild(newInput, input);
    newInput.focus();

    newInput.addEventListener("input", function () {
        if (!hasStarted) {
            hasStarted = true;
            startTimer();
        }

        let typedText = newInput.value;
        let spans = document.querySelectorAll("#text-display span");

        spans.forEach((span, i) => {
            span.classList.remove("correct", "wrong", "current");

            if (i < typedText.length) {
                if (typedText[i] === span.innerText) {
                    span.classList.add("correct");
                } else {
                    span.classList.add("wrong");
                }
            } else if (i === typedText.length) {
                span.classList.add("current");
            }
        });

        let correct = 0;
        for (let i = 0; i < typedText.length; i++) {
            if (typedText[i] === currentParagraph[i]) correct++;
        }
        accuracy = typedText.length > 0
            ? Math.round((correct / typedText.length) * 100)
            : 0;
        document.getElementById("accuracy").textContent = `Accuracy: ${accuracy}%`;
    });
}

function submitTest() {
    clearInterval(timerInterval);
    document.getElementById("timer").classList.remove("running");

    let typedText = document.getElementById("user-input").value;

    let wordCount = typedText.trim().split(/\s+/).filter(w => w !== '').length;
    let minutes = time / 60;
    wpm = minutes > 0 ? Math.round(wordCount / minutes) : 0;

    let correct = 0;
    for (let i = 0; i < typedText.length; i++) {
        if (typedText[i] === currentParagraph[i]) correct++;
    }
    accuracy = typedText.length > 0
        ? Math.round((correct / typedText.length) * 100)
        : 0;

    score = Math.round(wpm * (accuracy / 100));

    if (wpm >= 70)      feedback = " Blazing fast! You're a typing machine!";
    else if (wpm >= 50) feedback = " Great speed! Keep pushing!";
    else if (wpm >= 30) feedback = " Solid effort! Practice makes perfect.";
    else                feedback = " Keep practicing! Speed comes with time.";

    document.getElementById("result-wpm").textContent      = `⚡ WPM: ${wpm}`;
    document.getElementById("result-accuracy").textContent = `🎯 Accuracy: ${accuracy}%`;
    document.getElementById("result-time").textContent     = `⏱ Time: ${time}s`;
    document.getElementById("result-score").textContent    = `🏆 Score: ${score}`;
    document.getElementById("result-feedback").textContent = feedback;

    document.getElementById("typing-screen").style.display = "none";
    document.getElementById("result-screen").style.display = "block";
}

document.getElementById("start-btn").addEventListener("click", startIt);
document.getElementById("submit-btn").addEventListener("click", submitTest);
document.getElementById("restart-btn").addEventListener("click", startIt);