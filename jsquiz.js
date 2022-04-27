 // Function based from an On-line quiz codeio
 (function(){
  
  function buildQuiz(){
    const output = [];

    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        const answers = [];

        for(letter in currentQuestion.answers){
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }


        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );


    quizvariable.innerHTML = output.join('');
  }

  function showResults(){


    const answerContainers = quizvariable.querySelectorAll('.answers');

   
    let numCorrect = 0;


    myQuestions.forEach( (currentQuestion, questionNumber) => {

   
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

     
      if(userAnswer === currentQuestion.correctAnswer){
 
        numCorrect++;

      
        answerContainers[questionNumber].style.color = '#262E5F';
      }
 
      else{
   
        answerContainers[questionNumber].style.color = "orange";
      }
    });

    
    showresults.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // Variables
  const quizvariable = document.getElementById('quiz');
  const showresults = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "How many dogs without a family are they in the world? ",
      answers: {
        a: "5 million",
        b: "450 millions",
        c: "45 milions"
      },
      correctAnswer: "b"
    },
    {
      question: "Cual es la esperanza media de un perro?",
      answers: {
        a: "11 years",
        b: "5 years",
        c: "18 years"
      },
      correctAnswer: "a"
    },
    {
      question: "Pasan los perros por etapas vitales?",
      answers: {
        a: "Si, tienen adolescencia que les vuelve muy reveldes",
        b: "No",
        c: "Si, cuando llegan a las edad senior, algunos perros se vuelven grumpies",
        d: "A y C son ciertas"
      },
      correctAnswer: "d"
    },

    {
      question: "Por qué sacan tanto la lengua los perros?",
      answers: {
        a: "Para mostrar su júbilo o carácter afable.",
        b: "Es un gesto inconsciente como respirar.",
        c: "Para regular su temperatura corporal",
      },

      correctAnswer: "c"
    },

    {
      question: "How many words can dogs understand?",
      answers: {
        a: "50 words",
        b: "Between 150-200 words",
        c: "None",
      },

      correctAnswer: "b"
    },
    {
      question: "How far can dogs smell?",
      answers: {
        a: "2 km",
        b: "1 km",
        c: "5 km",
      },

      correctAnswer: "a"
    },
    {
      question: "Every dog has a unique nose, as humans fingerprints?",
      answers: {
        a: "True",
        b: "False",
      },

      correctAnswer: "a"
    }

  ];

 
  buildQuiz();

  
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;


  showSlide(currentSlide);

 
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
  
})();