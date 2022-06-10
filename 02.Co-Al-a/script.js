let amountA;
let amountB;
let timeLast;
let secPerJanA;
let secPerJanB;

const getValueInput = () => {
  amountA = document.querySelector("#amountA").value;
  amountB = document.querySelector("#amountB").value;
  timeLast = document.querySelector("#timeLast").value;
  calculAlcPace(amountA, amountB, timeLast);
};

const calculAlcPace = (amountA, amountB, timeLast) => {
  let totalSec = timeLast * 3600;
  let totalJanA = amountA * 7;
  let totalJanB = amountB * 7;
  secPerJanA = parseInt(totalSec / totalJanA);
  secPerJanB = parseInt(totalSec / totalJanB);
  goDrink(secPerJanA, secPerJanB);
};

const goDrink = (secPerJanA, secPerJanB) => {
  let target = document.querySelector("div .page1");
  target.classList.add("on");
  // 카운트다운 시작
  countDown();
  console.log(
    "A 한잔당 걸리는 시간: ",
    secPerJanA,
    "B 한잔당 걸리는 시간: ",
    secPerJanB
  );

  let btnA = document.querySelector(".trans10.btn-A");
  let btnB = document.querySelector(".trans10.btn-B");

  console.log(btnA, btnB);

  // 버튼 빨강으로 돌려놓기
  btnA.classList.add("on");
  btnB.classList.add("on");

  setInterval(() => {
    console.log("A가 한잔 마실 때마다 기다려야하는 시간(초):", secPerJanA);

    // 버튼 뒤집기
    btnA.classList.add("on");
    console.log("A 마셔!!!");
  }, secPerJanA * 1000);

  setInterval(() => {
    console.log("B가 한잔 마실 때마다 기다려야하는 시간(초):", secPerJanB);

    // 버튼 뒤집기
    btnB.classList.add("on");
    console.log("B 마셔!!!");
  }, secPerJanB * 1000);
};

const countDown = () => {
  setInterval(() => {
    console.log("집에 가기 까지 남은시간:", timeLast);

    // TODO ////////////// 집에가라는 메시지가 담긴 가상요소 오버레이 등장하기
    // over.classList.add("on");
    console.log("그만 마시고고 집에가!!!");
  }, timeLast * 3600000);
};

const removeOnA = () => {
  let btnA = document.querySelector(".trans10.btn-A");
  btnA.classList.remove("on");
  console.log("remove btnA clicked");
};
const removeOnB = () => {
  let btnB = document.querySelector(".trans10.btn-B");
  btnB.classList.remove("on");
  console.log("remove btnB clicked");
};

const removeOnOL = () => {
  let tg = document.querySelector(".overlay");
  tg.classList.add("on");
};

window.addEventListener("load", () => {
  console.log("로딩완료");
});

/////// 질문: window.addEventListener("load",{}=>{}) -> 이게 이 페이지에서 필요한가? 이 펑션 블록 안에 상단의 코드들을 집어넣으면, 클릭시에 getValueInput()이 작동을 하지 않는다. 로딩 구역이 필요한 상황과 필요하지 않은 상황을 구분을 못하겠다. 궁금합니다!
