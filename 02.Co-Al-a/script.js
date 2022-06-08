let amountA;
let amountB;
let timeLast;
let janPerSecA;
let janPerSecB;

const getValueInput = () => {
  amountA = document.querySelector("#amountA").value;
  amountB = document.querySelector("#amountB").value;
  timeLast = document.querySelector("#timeLast").value;
  console.log("amountA:" + amountA);
  console.log("amountB:" + amountB);
  console.log("timeLast:" + timeLast);
  calculAlcPace(amountA, amountB, timeLast);
};

const calculAlcPace = (amountA, amountB, timeLast) => {
  let totalSec = timeLast * 3600;
  let totalJanA = amountA * 7;
  let totalJanB = amountB * 7;
  janPerSecA = parseInt(totalSec / totalJanA);
  janPerSecB = parseInt(totalSec / totalJanB);
  console.log(janPerSecA, janPerSecB);
};

///////// 로딩구역 //////////////
window.addEventListener("DOMContentLoaded", () => {
  console.log("로딩완료");
});
