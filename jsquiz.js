   // Function based from an On-line quiz code
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
    const textr = document.getElementById('textr');
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
        question: "What is the average life expectancy of a dog?",
        answers: {
          a: "11 years",
          b: "5 years",
          c: "18 years"
        },
        correctAnswer: "a"
      },
      {
        question: "Do dogs go through life stages?",
        answers: {
          a: "Yes, they have adolescence which makes them very stubborn.",
          b: "No",
          c: "Yes, some dogs become grumpy when they reach senior age.",
          d: "A y C are true"
        },
        correctAnswer: "d"
      },
  
      {
        question: "Why do dogs have their tongues out so much?",
        answers: {
          a: "To show their cheerfulness.",
          b: "It is an unconscious gesture like breathing.",
          c: "To regulate your body temperature",
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