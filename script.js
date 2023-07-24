const questions = document.querySelector(".questions");
const articles = document.querySelectorAll("article");

articles.forEach((article) => {
  const btn = article.querySelector(".question-btn");
  const arrowUp = btn.querySelector(".fa-arrow-up");
  const arrowDown = btn.querySelector(".fa-arrow-down");

  const answer = article.querySelector(".paragraph");
  const question = article.querySelector("h3");

  btn.addEventListener("click", function () {
    articles.forEach((item) => {
      let question2 = item.querySelector("h3");
      let answer2 = item.querySelector(".paragraph");
      let btn2 = item.querySelector(".fa-arrow-up");
      let btn3 = item.querySelector(".fa-arrow-down");

      if (answer2 !== answer) {
        answer2.classList.remove("visible");
        question2.style.fontWeight = "normal";
        btn2.style.display = "none";
        btn3.style.display = "inline";
      }
    });

    answer.classList.toggle("visible");
    if (answer.classList.contains("visible")) {
      question.style.fontWeight = "bold";
      arrowUp.style.display = "inline";
      arrowDown.style.display = "none";
    } else {
      question.style.fontWeight = "normal";
      arrowUp.style.display = "none";
      arrowDown.style.display = "block";
    }
  });
});
