const questions = [
    {
      question: "Сколько у меня пальцев на правой руке?",
      answers: [
        "5",
        "4",
        "3",
        "12"
      ],
      correctAnswerIndex: 0
    },
    {
      question: "Как называется научная дисциплина, изучающая язык как явление общественной жизни?",
      answers: [
        "Лингвистика",
        "Математика",
        "Физика",
        "Химия"
      ],
      correctAnswerIndex: 0
    },
    {
      question: "Кто?",
      answers: [
        "Тётя Зина",
        "Дед Пихто",
        "Иван",
        "Сосна"
      ],
      correctAnswerIndex: 1
    },
  ];
  
  let currentQuestionIndex = 0;
  
  function checkAnswer(selectedAnswerIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswerIndex = currentQuestion.correctAnswerIndex;
  
    if (selectedAnswerIndex === correctAnswerIndex) {
      alert("Вы ответили правильно!");
      currentQuestionIndex++;
      if (currentQuestionIndex === questions.length) {
        alert("Вы ответили на все вопросы!");
      } else {
        renderQuestion();
      }
    } else {
      alert("Вы ответили неправильно. Попробуйте еще раз.");
    }
  }
  
  function clearQuestion() {
    const mainElement = document.querySelector("main");
    while (mainElement.firstChild) {
      mainElement.removeChild(mainElement.firstChild);
    }
  }
  
  function renderQuestion() {
    clearQuestion();
  
    const currentQuestion = questions[currentQuestionIndex];
  
    const questionElement = document.createElement("div");
    questionElement.textContent = currentQuestion.question;
    document.querySelector("main").appendChild(questionElement);
  
    const answersElement = document.createElement("div");
    currentQuestion.answers.forEach((answer, index) => {
      const answerElement = document.createElement("button");
      answerElement.textContent = answer;
      answerElement.addEventListener("click", () => {
        checkAnswer(index);
      });
      answersElement.appendChild(answerElement);
    });
    document.querySelector("main").appendChild(answersElement);
}
renderQuestion();