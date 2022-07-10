// 부드러운 스크롤 호출
startSS();

const slidePosistion = [];
// 위치값 저장할 변수

const winHeight = (window.innerHeight / 3) * 2;
// 화면 높이값 기준 등장액션 위치 보정변수

function search() {
  console.log("clicked");

  const target = document.querySelector(".sns > li:last-child");
  target.classList.toggle("on");
}

const gnb = document.querySelector("nav.gnb");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    // console.log(lastScrollY);
    // console.log("we are going down");
    gnb.classList.add("nav--hidden");
  } else {
    // console.log("we are going up");
    gnb.classList.remove("nav--hidden");
  }

  lastScrollY = window.scrollY;
});

function slideDown(n) {
  console.log("slideDown");

  const target = document.querySelector(`.cont__desc.${n}`);
  console.log(`.cont__desc.${n}`);

  target.classList.toggle(`on`);
}

/////////////////
//////section which has animation : slideUp////
/////////////////

let slideUp = document.querySelectorAll(".slideUp");
for (let x of slideUp) x.classList.add("opacity0");

slideUp.forEach((ele, idx) => {
  //console.log("slideUp 위치: ", ele.offsetTop);
  // slidePosition 에 저장함
  slidePosistion[idx] = ele.offsetTop;
}); ////////// forEach //////
// 위치배열 변수 확인
console.log(slidePosistion);

/**************************
 *  [윈도우 스크롤 이벤트 함수]
 * - 스크롤 이벤트 : scroll
 * - 이벤트 대상: window
 * - 스크롤 이벤트 값 : scrollY
 ***************************/
function scAction(seq) {
  if (scTop >= slidePosistion[seq] - winHeight && scTop < slidePosistion[seq])
    slideUp[seq].classList.add("on");
}
//스크롤 등장액션 구간별 클래스 주기

window.addEventListener("scroll", () => {
  scTop = this.scrollY;
  console.log("Scroll Location :", scTop);
  // scroll 위치 표시

  //////////////////////////////////////
  ////////섹션 등장 클래스(.on) 주기///////
  /////////////////////////////////////////

  // 스크롤 시 등장요소 위치값 개수 만큼 scAction 체크 함수 호출
  slidePosistion.forEach((val, idx) => scAction(idx));
  // 배열변수.forEach((배열값, 순번)=>{구현코드})

  console.log(slideUp[0].offsetTop);
}); //////// scroll ///////////////

//////배너 슬라이드///////

const upBtn = document.querySelector(".fa-chevron-up");
const downBtn = document.querySelector(".fa-chevron-down");

const targetUl = document.querySelector(".slide");

upBtn.onclick = function () {
  targetUl.style.top = "-220px";
  console.log("올라갑니다잉");
};

downBtn.onclick = function () {
  console.log("내려갑니다잉");
  targetUl.style.top = "220px";
};

//// audio player 등장 ////
const audioBtn = document.querySelector(".fbx");
const audioController = document.querySelector("audio");

audioBtn.addEventListener("click", function (e) {
  audioController.play();
  audioController.setAttribute("controls", "true");
});
console.log(audioBtn);
