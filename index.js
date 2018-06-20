'use strict';

//Should I seperate out the images? Also with the images, is there a way to make the box that contains it responsive to its size? Or should I shoot to find sizes that are similar?

const QUIZSTORE = [
  {
    img: 'https://i.imgur.com/KPxJboF.jpg',
    altImage: 'Two frisbee players jumping',
    question: 'Ultimate Frisbee is a sport that is played until one team has reached how many points?',
    options: [
           '11',
           '9',
          '15',
          '17',
                  ],
    answer: '15',
  },
  {
    img: 'https://i.imgur.com/ktUig9S.jpg',
    altImage: 'Wham-O disc Advertisement',
    question: 'The original toy disc created by the Wham-O company was named after what company?',
    options: [
      'Frisbie Pie Company',
      'Frisbie Platters Inc.',
      'Frisbie Serving Trays',
      'Frisbie Fine China LLC',
          ],
    answer: 'Frisbie Pie Company',
  },
  {
    img: 'https://i.imgur.com/tecMFtZ.jpg',
    altImage: 'Ultimate player throwing a disc',
    question: 'What is the name of this throw? Hint: You might also know it by another name, the flick.',
    options: [
        'Back-Hand',
        'Fore-Hand',
        'Finger Spinner',
        'Dad Pass',
          ],
    answer: 'Fore-Hand',
  },
  {
    img: 'https://i.imgur.com/o1EBokj.jpg',
    altImage: 'Woman throwing disc over her head',
    question: 'What is the name of this throw?',
    options: [
        'The Wrench',
        'The High Dive',
        'The Hammer',
        'The Gun Slinger',
          ],
    answer: 'The Hammer',
  },
  {
    img: 'https://i.imgur.com/jLsWnGQ.jpg',
    altImage: 'Woman diving for disc',
    question: 'According to the official rules, how many steps can you take after you have caught the disc?',
    options: [
        'Three',
        'Zero',
        'It depends on where you catch it',
        'One',
          ],
    answer: 'Zero',
  },
  {
    img: 'https://i.imgur.com/Uf12vR0.jpg',
    altImage: 'Two players diving for disc',
    question: 'When a player catches the disc in the opposite end zone from where they started this is officially referred to as?',
    options: [
        'A point',
        'A touchdown',
        'A hole',
        'A goal',
          ],
    answer: 'A point',
  },
  {
    img: 'https://i.imgur.com/gaGxCuS.jpg',
    altImage: 'A impartial observer signalling a call',
    question: 'Ultimate Frisbee has impartial rule keepers. These are know as:',
    options: [
        'Observer',
        'Referee',
        'Peace Keeper',
        'Benevolent God',
              ],
    answer: 'Observer',
  },
  {
    img: 'https://i.imgur.com/NKXPeRz.jpg',
    altImage: 'A male frisbee player diving for disc',
    question: 'In the above picture, the player is doing an action commonly referred to as:',
    options: [
        'Laying out',
        'Walking the dog',
        'Hucking it',
        'Pulling',
             ],
    answer: 'Laying out',
  },
  {
    img: 'https://i.imgur.com/YOtMjOc.jpg',
    altImage: 'Male frisbee players in a huddle',
    question: 'How many players are allowed to be on the field for each team at one time?',
    options: [
        'Five',
        'Seven',
        'Nine',
        'Thirteen',
              ],
    answer: 'Seven',

  },
  {
    img: 'https://i.imgur.com/DV52hVZ.png',
    altImage: 'Diagram of Frisbee play',
    question: 'The offensive formation picture above is referred to as:',
    options: [
        'A Line Stack',
        'An I Stack',
        'A Horizontal Stack',
        'A Vertical Stack',
                 ],
    answer: 'A Vertical Stack',
  }
]

let questionNumber ;
let quizScore;

//generate question html
function generateQuestion () {
  if (questionNumber < QUIZSTORE.length) {
    return `<div class="question-${questionNumber}">
    <p><img src="${QUIZSTORE[questionNumber].img}" alt="${QUIZSTORE[questionNumber].altImage}"><p>
    <h2>${QUIZSTORE[questionNumber].question}</h2>
    <form>
    <fieldset>
    <label class="answerOption">
    <input type="radio" value="${QUIZSTORE[questionNumber].options[0]}" name="answer" required>
    <span>${QUIZSTORE[questionNumber].options[0]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${QUIZSTORE[questionNumber].options[1]}" name="answer" required>
    <span>${QUIZSTORE[questionNumber].options[1]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${QUIZSTORE[questionNumber].options[2]}" name="answer" required>
    <span>${QUIZSTORE[questionNumber].options[2]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${QUIZSTORE[questionNumber].options[3]}" name="answer" required>
    <span>${QUIZSTORE[questionNumber].options[3]}</span>
    </label>
    <button type="submit" class="submitButton">Submit</button>
    </fieldset>
    </form>
    </div>`;
} else {
    showResults();
    restartQuiz();
    $('.questionNumber').text(10)
  }
}

function changeQuestionNumber () {
     questionNumber ++;
    $('.questionNumber').text(questionNumber+1);
}

function changeScore () {
  quizScore ++;
}
function startQuizTime () {
  $('.quizStart').on('click', '.startButton', startEvent)}
  
function startEvent(event) {
          questionNumber = 0;
          quizScore = 0; 
          $('.quizStart').remove();
          $('.questionNumber').text(questionNumber+1);
          renderQuestion();
          answerSelected();
          };
function resetScore () {
  $('.quizScore').text(quizScore-1);
}
function renderQuestion () {
  $('.questionForm').html(generateQuestion());
}

function answerSelected () {
  $('form').on('submit', function (event) {
    event.preventDefault();
    let selected = $('input:checked');
    let answers = selected.val();
    let correctAnswer = `${QUIZSTORE[questionNumber].answer}`;
    if (answers === correctAnswer) {
      ifAnswerIsCorrect();
      } else {
     ifAnswerIsWrong();
    }
  });
}

function ifAnswerIsCorrect () {
  feedbackCorrect();
  updateScore();
}

function ifAnswerIsWrong () {
  feedbackWrong();
}

function feedbackCorrect () {
  let correctAnswer = `${QUIZSTORE[questionNumber].answer}`        
          $('.questionForm').html(`<div class="feedbackRight">
            <h1>Correct!</h1>
            <p>Your discs are really spinning</p>
            <img src="https://media.giphy.com/media/tO7PRY6qiSXmg/giphy.gif" alt="beach ultimate">
            <button class="nextButton">Next</button>
          </div>`);
        }

function feedbackWrong () {
  let correctAnswer = `${QUIZSTORE[questionNumber].answer}` 
        $('.questionForm').html(`<div class="feedbackWrong">
            <h1>Foul!</h1>
            <p>You got it wrong. It was <span>"${correctAnswer}"</span></p>
            <img src="https://media.giphy.com/media/SrDqGrlWwvMbe/giphy.gif" alt="cookie monster">
            <button class="nextButton">Next</button>
          </div>`);
      }

function updateScore () {
  changeScore();
  $('.quizScore').text(quizScore);
  }

function showResults () {
     $('.questionForm').html(`<div class="results correctFeedback"><p>You got ${quizScore} / 10</p><button class="restartButton">Restart Quiz</button></div>`);
   
}

function nextQuestion () {
  $('main').on('click', '.nextButton', function (event) {
    changeQuestionNumber();
    renderQuestion();
    answerSelected ();
  });
}

function restartQuiz () {
  $('main').on('click', '.restartButton', function (event) {
    startEvent ();
  });
  resetScore ();
}

$(document).ready(function () {
        startQuizTime();
        answerSelected ();
        nextQuestion();
});

