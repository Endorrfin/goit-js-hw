// =============== <<<--- HOME TASK #7 --->>>  ===============
/*
 * TASK
 * Создай форму вопросника с возможностью пройти тест.
 * Каждый вопрос это секция формы, где ответы представлены группой радиокнопок.
 */
import quizData from "./quiz-data.js";

{
  /*
   * <section>
   *   <h3>1. Текст вопроса</h3>
   *
   *   <ol>
   *     <li>
   *       <label>
   *         <input type="radio" name="" value="" />
   *         Ответ 1
   *       </label>
   *     </li>
   *     <li>
   *       <label>
   *         <input type="radio" name="" value="" />
   *         Ответ 2
   *       </label>
   *     </li>
   *   </ol>
   * </section>
   */
}

const form = document.querySelector(".js-form");
form.classList = "js-form";
const fragment = document.createDocumentFragment();

quizData.questions.forEach((questionElement, indexOl) => {
  const section = document.createElement("section");
  section.classList.add("section");

  const h3 = document.createElement("h3");
  h3.classList.add("questionText");
  h3.textContent = `${indexOl + 1}. ${questionElement.question}`;

  const ol = document.createElement("ol");
  ol.classList = "choices-list";

  const createChoice = function(choice, indexOl, indexLi) {
    const li = document.createElement("li");

    const label = document.createElement("label");
    label.textContent = choice;

    const input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("name", indexOl);
    input.setAttribute("value", indexLi);

    label.prepend(input);
    li.append(label);

    return li;
  };

  questionElement.choices.forEach((choice, indexLi) => {
    ol.append(createChoice(choice, indexOl, indexLi));
  });

  section.append(h3, ol);
  fragment.append(section);
});

form.prepend(fragment);

const h1 = document.createElement("h1");
h1.className = "title";
h1.textContent = quizData.title;

form.prepend(h1);


// ------- IMPLEMENTAION OF THE FUNCTIONALITY OF THE FORM -------

function handleSubmit(event) {
  event.preventDefault();
  const choices = [...document.querySelectorAll('input:checked')].map(
    element => element.value
  );
  console.log("choices :", choices);

const answerCount = getCorrectAnswers(choices, quizData.questions);
console.log("answerCount :", answerCount);
}


// ------- IMPLEMENTAION OF THE CHECK BUTTON -------

form.addEventListener("submit", handleSubmit);
const getCorrectAnswers = (choices, questions) => {
  const correctAnswers = choices.reduce((acc, choice, index) => {
    console.table('Correct', questions[index].answer);
    console.table('User', choice);

    if (questions[index].answer === Number(choice)) {
      return (acc += 1);
    }
    return acc;
  }, 0);

  if (choices.length !== questions.length) {
    return alert(
      "Результат недоступен, так как Вы ответили не на все тестовые вопросы. Завершите тест, чтоб увидеть результат!"
    );
  }

  if (correctAnswers / choices.length >= 0.8) {
    alert(`Поздравляем, Вы успешно прошли тест! Ваш результат 
      ${Math.round((correctAnswers / choices.length) * 100)} % из 100%`);
  } else
    alert(`Вы не прошли тест, поскольку результат составляет
      ${Math.round(
        (correctAnswers / choices.length) * 100
      )} % из необходимых 80%`);
};
