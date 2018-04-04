// step one define functions an variables
let questionArray = [

    {
        questionText: "What year was the first zelda released?",
        questionChoices: ["1986", "1987", "1989", "1990"],
        questionCorrect: 0,
        questionsDetails: "The Legends of Zelda was the first Zelda game created and the year was 1986."
    },

    {
        questionText: "Which of the following is not a race in The Legends of Zelda series?",
        questionChoices: ["kokiri", "goron", "cucco", "wook"],
        questionCorrect: 3,
        questionsDetails: "Wook is not a race in The Legends of Zelda."
    },

    {
        questionText: "What year was the first zelda released?",
        questionChoices: ["1986", "1987", "1989", "1990"],
        questionCorrect: 0,
        questionsDetails: "The Legends of Zelda was created in 1986."
    },

    {
        questionText: "the adventure of Link: what is the full title of the game?",
        questionChoices: ["the adventures of link: zelda 2", "the adventure of link: the legends of zelda", "the legend of zelda: the adventure of link", "zelda 2: the adventure of link"],
        questionCorrect: 3,
        questionsDetails: "Zelda 2: the adventure of link is the full title of the game"
    },

    {
        questionText: "Ocarina of time: what is cojiro?",
        questionChoices: ["a type of enemy", "a sword", "a blue cucco", "the boss of the fire temple"],
        questionCorrect: 2,
        questionsDetails: "A cojiro is a blue cucco,"
    },

    {
        questionText: "Four Swords Adventures: Vaati used _____________ to trick Link into pulling the Four Sword from the pedestal.",
        questionChoices: ["ganon", "the wind mage", "dark link", "malon"],
        questionCorrect: 2,
        questionsDetails: "Vaati used dark link to trick link into pulling the four sword from the pedestal"
    },

    {
        questionText: "Twilight Princess: What is Ilia's Charm?",
        questionChoices: ["an item that turns link into a wolf", "a spell that charms others into her command", "an item used to time travel into ilia's past", "an item that helps restore ilia's memory"],
        questionCorrect: 3,
        questionsDetails: "Ilia's Charm is an item that helps restore Ilia's memory."
    },

    {
        questionText: "ocarina of time: In the Hyrule Castle Town, a little girl chases a cucco. What color is her dress, and can Link catch that cucco?",
        questionChoices: ["white : yes", "yellow : no", "yellow : yes", "white : no"],
        questionCorrect: 1,
        questionsDetails: "Link can not catch the cucco, and the little girls dress was yellow."
    },

    {
        questionText: "In the first game of the series The Legend of Zelda, an old man gives link a sword. in Breath of the Wild, an old man gives Link?",
        questionChoices: ["a bow an arrow", "bad advice", "baked apples", "a shield"],
        questionCorrect: 2,
        questionsDetails: "The old man gives Link baked apples in Breath of the Wild...not quite as useful as a sword!"
    },

    {
        questionText: "The Wind Waker: What is name of the song that lets you change the direction of the wind?",
        questionChoices: ["the winds requiem", "the wind's re-director", "the wind waker", "valoo's requiem"],
        questionCorrect: 0,
        questionsDetails: "The name of the song that lets you change the direction of the wind is the first song you learned in The Wind Waker, and is The Winds Requiem."
    },
    ]

let currentQuestion = 0;
let totalNumberOfQuestions = questionArray.length;
let correctQuestionsCounter = 0;

function displayQuiz() {
    // picks specific elements inside of the questionArray(currentQuestion)
    //    what it picks is going to send to the html inside of the question id container
    $('#question').text(questionArray[currentQuestion].questionText);
    $('.radio-buttons').empty();
    let totalNumberOfChoices = questionArray[currentQuestion].questionChoices.length;
    //console.log(totalNumberOfChoices);
    //2.3 - loop through all the choices and append them to the choices container
    for (let i = 0; i < totalNumberOfChoices; i++) {
        //2.3.1 - loop thru the answer choices and create a dynamically generated row for each of them
        let buildEachChoiceHTML = "<input type='radio' class='option' name='option' value=" + i + ">" + questionArray[currentQuestion].questionChoices[i] + "<br>";
        //2.3.2 append that row to the choices container in html
        $('.radio-buttons').append(buildEachChoiceHTML);
    }
    $('.questionCorrectCounter').text("You have " + correctQuestionsCounter + " / " + totalNumberOfQuestions + " correct");
    $('.questionCounter').text("Question " + (currentQuestion + 1) + " / " + totalNumberOfQuestions);


}


// step two used functions an variables(triggers)
$(document).ready(function () {
    //when the page loads hide the quiz section and the result section
    $('.quiz-section').hide();
    $('.result-section').hide();
    //when the start button is clicked hide everything and display the quiz section
    $('#startQuizButton').click(function () { //start the quiz and show the first question
        $('.result-section').hide();
        $('.start-section').hide();
        $('.quiz-section').show();
        displayQuiz();
    });
    //when clicking radio button hide all and display the results container
    $('.quiz-section form').on('submit', function (event) {
        event.preventDefault();
        //get the question answer from the user
        let userAnswer = $("input[class='option']:checked").val();

        //get the correct answer from the questionsArray above
        let correctAnswer = questionArray[currentQuestion].questionCorrect;
        console.log(correctAnswer);
        //compare the user answer with the correct answer
        if (userAnswer == correctAnswer) {
            //if the answer was correct increment the total number of correct answers
            correctQuestionsCounter++;
            //console.log(totalNumberOfCorrectAnswers);
        }
        $('#result_msg').append("<h3>Q: " + questionArray[currentQuestion].questionText + "</h3>");
        $('#result_msg').append("<h4>A: " + questionArray[currentQuestion].questionsDetails + "</h4>");
        //if quiz is finished, show result-section
        if ((currentQuestion + 1) == totalNumberOfQuestions) {

            //show the final score
            $('#finalScore').text(correctQuestionsCounter + "/" + totalNumberOfQuestions);

            //hide other containers
            $('.result-section').show();
            $('.start-section').hide();
            $('.quiz-section').hide();
        }
        //else continue to next question
        else {
            //increment the current question number
            currentQuestion++;
            //display the following question
            displayQuiz();
        }

    });
    //when try again button is clicked hide everything and show start section
    $('#tryagain').click(function () { //start the quiz and show the first question
        $('.result-section').hide();
        $('.start-section').show();
        $('.quiz-section').hide();
        //reset variables to start quiz again
        currentQuestion = 0;
        correctQuestionsCounter = 0;
    });


});
