// SCORES FOR EACH OPPORTUNITY

var careerSummitScore = 0;
var upskillScore = 0;
var collegeCareerScore = 0;
var alumniDiscordScore = 0;
var leadershipSummitScore = 0;
var studentCommunityScore = 0;
var sheCodesScore = 0;
var vibeCodingScore = 0;
var internshipScore = 0;


// KEEP TRACK OF THE CURRENT QUESTION

var question = 0;


// GET ALL QUESTION CARDS

var questions = document.querySelectorAll(".quiz-container > .question-card");

var results = document.getElementById("results");


// OPPORTUNITY INFORMATION

var opportunities = [

    {
        name: "Rewrite The Code Virtual Career Summit",
        description: "Virtual career fairs where you can network directly with recruiters and get career advice.",
        link: "https://rewritingthecode.org/virtual-career-summit/",
        score: function() { return careerSummitScore; }
    },

    {
        name: "Girls Who Code Upskill Series",
        description: "Free virtual workshops covering resume reviews, technical interview prep, networking, and breaking into AI.",
        link: "https://girlswhocode.com/upskill-series",
        score: function() { return upskillScore; }
    },

    {
        name: "Girls Who Code College And Career Programs",
        description: "Career-readiness sessions and company deep-dives hosted with major corporate partners.",
        link: "https://girlswhocode.com/programs/college-and-career",
        score: function() { return collegeCareerScore; }
    },

    {
        name: "Girls Who Code 18+ Alumni Discord",
        description: "A community for CS homework help, internship advice, peer referrals, and early event access.",
        link: "https://girlswhocode.com/get-involved/alumni",
        score: function() { return alumniDiscordScore; }
    },

    {
        name: "2027 Women Who Code Leadership Summit",
        description: "A three-day summit held in New York with talks and workshops.",
        link: "https://womenwhocode.com/",
        score: function() { return leadershipSummitScore; }
    },

    {
        name: "Rewrite The Code Student Community",
        description: "A free way to find opportunities and meet other students!",
        link: "https://rewritingthecode.org/students/",
        score: function() { return studentCommunityScore; }
    },

    {
        name: "SheCodes Free Coding Classes",
        description: "A free 60-minute class for learning HTML, CSS, and JavaScript!",
        link: "https://www.shecodes.io/free-class/coding",
        score: function() { return sheCodesScore; }
    },

    {
        name: "Women Can Code Vibe Coding Course",
        description: "A mini course for creating a product while learning about vibe coding.",
        link: "https://womencancode.com/vibe-code",
        score: function() { return vibeCodingScore; }
    },

    {
        name: "2027 Internships GitHub Repository",
        description: "A GitHub repository that lists over 1000 internships to apply to!",
        link: "https://github.com/SimplifyJobs/Summer2027-Internships",
        score: function() { return internshipScore; }
    }

];


// QUESTION 1: CODING EXPERIENCE

function questionOne(answer) {

    if (answer == 0) {
        sheCodesScore++;
        upskillScore++;
    }

    else if (answer == 1) {
        upskillScore++;
        vibeCodingScore++;
    }

    else if (answer == 2) {
        internshipScore++;
        collegeCareerScore++;
    }

    else if (answer == 3) {
        internshipScore++;
        leadershipSummitScore++;
        alumniDiscordScore++;
    }

}


// QUESTION 2: COMPUTER SCIENCE INTERESTS

function questionTwo(answer) {

    if (answer == 0) {
        upskillScore++;
        collegeCareerScore++;
    }

    else if (answer == 1) {
        sheCodesScore++;
        vibeCodingScore++;
    }

    else if (answer == 2) {
        upskillScore++;
        internshipScore++;
    }

    else if (answer == 3) {
        sheCodesScore++;
        vibeCodingScore++;
    }

}


// QUESTION 3: TYPE OF EXPERIENCE

function questionThree(answer) {

    if (answer == 0) {
        upskillScore++;
        sheCodesScore++;
    }

    else if (answer == 1) {
        vibeCodingScore++;
        internshipScore++;
    }

    else if (answer == 2) {
        careerSummitScore++;
        collegeCareerScore++;
        alumniDiscordScore++;
    }

    else if (answer == 3) {
        alumniDiscordScore++;
        studentCommunityScore++;
    }

}


// QUESTION 4: TIME COMMITMENT

function questionFour(answer) {

    if (answer == 0) {
        careerSummitScore++;
        alumniDiscordScore++;
    }

    else if (answer == 1) {
        sheCodesScore++;
        upskillScore++;
    }

    else if (answer == 2) {
        internshipScore++;
        collegeCareerScore++;
    }

    else if (answer == 3) {
        leadershipSummitScore++;
        internshipScore++;
    }

}


// QUESTION 5: OPPORTUNITY TYPE

function questionFive(answer) {

    if (answer == 0) {
        sheCodesScore++;
        upskillScore++;
    }

    else if (answer == 1) {
        internshipScore++;
        collegeCareerScore++;
    }

    else if (answer == 2) {
        alumniDiscordScore++;
        studentCommunityScore++;
    }

    else if (answer == 3) {
        sheCodesScore++;
        upskillScore++;
        vibeCodingScore++;
    }

}


// MOVE TO THE NEXT QUESTION

function nextQuestion(answer) {

    // Check which question the user is answering

    if (question == 0) {
        questionOne(answer);
    }

    else if (question == 1) {
        questionTwo(answer);
    }

    else if (question == 2) {
        questionThree(answer);
    }

    else if (question == 3) {
        questionFour(answer);
    }

    else if (question == 4) {
        questionFive(answer);
    }


    // Hide the current question

    questions[question].hidden = true;


    // Move to the next question

    question++;


    // Check if the quiz is finished

    if (question >= 5) {

        updateResult();

    }

    else {

        questions[question].hidden = false;

    }

}


function updateResult() {

    // Sort opportunities from highest score to lowest score

    opportunities.sort(function(a, b) {
        return b.score() - a.score();
    });


    // Get the top three opportunities

    var topThree = opportunities.slice(0, 3);


    // Create the results heading

    var resultHTML = `

        <h2>Your Top CS Matches!</h2>

        <p>
            Based on your answers, here are three opportunities
            that might be a great fit for you!
        </p>

    `;


    // Display the three recommended opportunities

    for (var i = 0; i < topThree.length; i++) {

        resultHTML += `

            <div class="box">

                <h3 class="resourcename">
                    ${i + 1}. ${topThree[i].name}
                </h3>

                <p>
                    ${topThree[i].description}
                </p>

                <a href="${topThree[i].link}"
                   target="_blank"
                   rel="noopener noreferrer"
                   class="externalbutton">

                    Check This Out!

                </a>

            </div>

        `;

    }


    // Add a restart button

    resultHTML += `

        <button type="button" id="restart">
            Retake Quiz
        </button>

    `;


    // Display the results

    results.innerHTML = resultHTML;

    results.hidden = false;


    // Add click event to restart button

    document.getElementById("restart").addEventListener("click", restarts);

}

// RESTART THE QUIZ

function restarts() {

    // Reset all opportunity scores

    careerSummitScore = 0;
    upskillScore = 0;
    collegeCareerScore = 0;
    alumniDiscordScore = 0;
    leadershipSummitScore = 0;
    studentCommunityScore = 0;
    sheCodesScore = 0;
    vibeCodingScore = 0;
    internshipScore = 0;


    // Reset question number

    question = 0;


    // Hide results

    results.hidden = true;


    // Show the first question

    questions[0].hidden = false;

}


// ADD CLICK EVENT LISTENERS TO ALL ANSWERS

for (var i = 0; i < 5; i++) {

    var answerButtons = questions[i].querySelectorAll(".answer-options button");


    for (var j = 0; j < answerButtons.length; j++) {

        answerButtons[j].addEventListener("click", function() {

            // Find which answer was selected

            var answer = Array.from(this.parentElement.children).indexOf(this);


            // Move to the next question

            nextQuestion(answer);

        });

    }

}