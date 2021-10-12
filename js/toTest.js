const main = document.querySelector("#main");
const name = document.querySelector("#name");
const character = document.querySelector("#character");
const information = document.querySelector("#information");
const people = document.querySelector("#people");
const howTo = document.querySelector("#howTo");
const testStart = document.querySelector("#testStart");
const testMain = document.querySelector("#testMain");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");



function begin() {
  main.style.WebkitAnimaion = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  name.style.WebkitAnimaion = "fadeOut 1s";
  name.style.animation = "fadeOut 1s";
  character.style.WebkitAnimaion = "fadeOut 1s";
  character.style.animation = "fadeOut 1s";
  information.style.WebkitAnimaion = "fadeOut 1s";
  information.style.animation = "fadeOut 1s";
  people.style.WebkitAnimaion = "fadeOut 1s";
  people.style.animation = "fadeOut 1s";
  howTo.style.WebkitAnimaion = "fadeOut 1s";
  howTo.style.animation = "fadeOut 1s";
  testStart.style.WebkitAnimaion = "fadeOut 1s";
  testStart.style.animation = "fadeOut 1s";
  setTimeout(() => {
    testMain.style.WebkitAnimaion = "fadeIn 1s";
    testMain.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      name.style.display = "none";
      character.style.display = "none";
      information.style.display = "none";
      people.style.display = "none";
      howTo.style.display = "none";
      testStart.style.display = "none";
      testMain.style.display = "block";
    }, 450)
  }, 450);
}



function reset() {
  testMain.style.WebkitAnimaion = "fadeOut 1s";
  testMain.style.animation = "fadeOut 1s";
  qna.style.WebkitAnimaion = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";

    setTimeout(() => {
      main.style.WebkitAnimaion = "fadeIn 1s";
        main.style.animation = "fadeIn 1s";
        name.style.WebkitAnimaion = "fadeIn 1s";
        name.style.animation = "fadeIn 1s";
        character.style.WebkitAnimaion = "fadeIn 1s";
        character.style.animation = "fadeIn 1s";
        information.style.WebkitAnimaion = "fadeIn 1s";
        information.style.animation = "fadeIn 1s";
        people.style.WebkitAnimaion = "fadeIn 1s";
        people.style.animation = "fadeIn 1s";
        howTo.style.WebkitAnimaion = "fadeIn 1s";
        howTo.style.animation = "fadeIn 1s";
        testStart.style.WebkitAnimaion = "fadeIn 1s";
        testStart.style.animation = "fadeIn 1s";
      setTimeout(() => {
        testMain.style.display = "none";
        qna.style.display = "none";
        main.style.display = "block";
        name.style.display = "block";
        character.style.display = "block";
        information.style.display = "block";
        people.style.display = "block";
        howTo.style.display = "block";
        testStart.style.display = "block";

      }, 450)
    }, 450);
}
