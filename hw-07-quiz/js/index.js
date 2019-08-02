// =============== <<<--- HOME TASK #7 --->>>  ===============

import quizData from "./quiz-data.js";

{
  /*
  <h2/> Заголовок теста // quizTestTitle
<section>
  <h3>1. Текст вопроса</h3>
  <ol> Лист вопросов
    <li> Список вопросов
      <label> 
        <input type="radio" name="" value="" /> 
        Ответ 1
      </label>
    </li>
    <li>
      <label>
        <input type="radio" name="" value="" /> 
        Ответ 2
      </label>
    </li>
  </ol>
</section>
*/
}

// Вешаем созданный нами через createElement виртуальный узел DOM в настоящий DOM узел
const form = document.querySelector("form");
form.classList = 'form';
const fragment = document.createDocumentFragment();

  // Перебираем массив вопросов / элементов массива
  quizData.questions.forEach((questionElem, indexOl) => {
    const section = document.createElement("section");
    section.classList.add("section");

    // Создаем заголовок для тестовых вопросов (h3)
    const h3 = document.createElement("h3");
    h3.classList.add("question-text");
    h3.textContent = `${indexOl + 1}. ${questionElem.question}`;

    // Создаем ol
    const ol = document.createElement("ol");
    ol.classList = "choices-list";

    const createChoice = function(choice, indexOl, indexLi) {
      // Создаем li
      const li = document.createElement("li");

      // Создаем label
      const label = document.createElement("label");
      label.textContent = choice;

      // Создаем input, привязываем атрибуты
      const input = document.createElement("input");
      input.setAttribute("type", "radio");
      input.setAttribute("name", indexOl);
      input.setAttribute("value", indexLi);

      label.prepend(input);
      li.append(label);

      return li;
    }

    questionElem.choices.forEach((choice, indexLi) => {
      ol.append(createChoice(choice, indexOl, indexLi));
    })

    section.append(h3, ol);
    fragment.append(section);
  })

  form.prepend(fragment);

  const h1 = document.createElement("h1");
  h1.className = "title";
  h1.textContent = quizData.title;

  form.prepend(h1);


  // FUNCTIONAL

  function handleSubmit (event) {
    event.preventDefault();
    const choices = [...document.querySelectorAll('input:checked')].map(el => el.value);
    console.log('choices :', choices);

    const answerCount = getCorrectAnswers(choices, quizData.questions);
    console.log('answerCount :', answerCount);
  }

  form.addEventListener('submit', handleSubmit);
  const getCorrectAnswers = (choices, questions) => {
    const correctAnswers = choices.reduce((acc, choice, indx) => {

      console.table('Correct', questions[indx].answer);
      console.table('User', choice);

      if(questions[indx].answer === Number(choice)) {
        return acc += 1;
      }
      return acc;
    }, 0)




    if (choices.length !== questions.length) {
      return alert("Результат недоступен, так как Вы ответили не на все тестовые вопросы. Завершите тест, чтоб увидеть результат!");
    } 

      if (correctAnswers / choices.length >= 0.8) {
        alert (`Поздравляем, Вы успешно прошли тест! Ваш результат 
        ${Math.round((correctAnswers / choices.length) * 100)} % из 100%`);
      } else 
        alert (`Вы не прошли тест, поскольку результат составляет
        ${Math.round((correctAnswers / choices.length) * 100)} % из необходимых 80%`);
      }
