const slidePosistion = [];
// 위치값 저장할 변수

const winHeight = (window.innerHeight / 3) * 2;
// 화면 높이값 기준 등장액션 위치 보정변수

function search() {
  // console.log("clicked");

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
////////////////////////////
/// 스크롤에 반응하여 등장 //
/////////////////////////////
function slideDown(n) {
  // console.log("slideDown");

  const target = document.querySelector(`.cont__desc.${n}`);
  // console.log(`.cont__desc.${n}`);

  target.classList.toggle(`on`);
}

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
  // console.log("Scroll Location :", scTop);
  // scroll 위치 표시

  //////////////////////////////////////
  ////////섹션 등장 클래스(.on) 주기///////
  /////////////////////////////////////////

  // 스크롤 시 등장요소 위치값 개수 만큼 scAction 체크 함수 호출
  slidePosistion.forEach((val, idx) => scAction(idx));
  // 배열변수.forEach((배열값, 순번)=>{구현코드})

  // console.log(slideUp[0].offsetTop);
}); //////// scroll ///////////////

//////배너 슬라이드///////

/***************************************************************
 * [슬라이드 이동 기능정의]
 * 1. 이벤트 종류 : click
 * 2. 이벤트 대상: 이동버튼(.fa-chevron-up)
 * 3. 변경 대상: 슬라이드 박스
 * 4. 기능 설계:
 *     (1) 오른쪽 버튼 클릭시 다음 슬라이드가 나타나도록
 *          슬라이드 박스의 top값을 -220px로 변경시킨다
 *          -> 슬라이드 이동후 바깥에 나가있는 첫번째 슬라이드 li를
 *             잘라서 맨뒤로 보낸다.
 *             동시에 top값을 0으로 변경한다
 *
 *     (2) 왼쪽 버튼 클릭시 이전 슬라이드가 나타나도록 하기 위해
 *         우선 맨뒤 li를 맨 앞으로 이동하고 동시에 top값을
 *         -220px로 변경한다.
 *         그 후 top값을 0으로 애니메이션하여 슬라이드가 왼쪽에서 들어온다
 *
 ***************************************************************/

/***************************************************************
 * 함수명 : loadFn
 * 기능: 로딩 후 버튼 이벤트 및 기능 구현
 **************************************************************/

function loadFn() {
  // 1. 호출확인
  // console.log("로딩완료");

  // 2. 변경대상
  const slide = document.querySelector("#slide");
  // console.log("슬라이드:", slide);

  // 3. 이동버튼에 클릭이벤트 설정
  // 이동버튼요소
  const slideBtn = document.querySelectorAll(".section-4__chevron");
  // console.log("이동버튼:", slideBtn);

  // 광클 금지용 변수
  let clickDisabled = 0; // 0 : 허용 1 : 금지

  // 버튼개수만큼 for of로 클릭이벤트 설정
  for (let x of slideBtn) {
    x.onclick = () => {
      ////// 광클 금지 ///////
      if (clickDisabled) return;
      clickDisabled = 1;
      setTimeout(() => (clickDisabled = 0), 1010);
      ////////////////////////

      // 위 버튼 여부 확인
      let isUp = x.classList.contains("upBtn");
      console.log(".upBtn인가?: ", isUp);

      // 위 버튼 / 아래 버튼 분기하기
      if (!isUp) {
        //  1. 슬라이드 top : -220px
        slide.style.top = "-220px";
        slide.style.transition = "top 1s ease-in-out";
        // 이동후 실행 -> 이동시간은 1초
        setTimeout(() => {
          // 2. 첫번째 li를 맨뒤로 이동
          // 첫번째 li
          let firstLi = slide.querySelectorAll("li")[0];
          // 맨뒤로 이동
          slide.appendChild(firstLi);
          // 3. 동시에 top값을 0으로
          slide.style.top = "0";
          // 트랜지션 해제
          slide.style.transition = "none";
        }, 1000); //////// Timeout ////////

        // 위 버튼 //
      } ////// if ///////
      else {
        // 맨뒤 li 맨앞으로 이동
        // li 들
        let lis = slide.querySelectorAll("li");
        //
        slide.insertBefore(lis[lis.length - 1], lis[0]);
        //  2. 동시에 슬라이드 top : -220px
        slide.style.top = "-220px";
        slide.style.transition = "none";
        // 위의 이동소스와 약간의 시차필요
        setTimeout(() => {
          // 3. top:0 + 트랜지션
          slide.style.top = "0";
          slide.style.transition = "top 1s ease-in-out";
          // 아래 버튼 //
        }, 10); ///// Timeout ////////
      } //////else/////
    }; // click //
  } // for of //
}
loadFn();

/////////////// sec4 마우스 오버 사진바꾸기 /////////////////////

function opacity0(id) {
  let tg = document.getElementById(id);
  console.log(id);
  let img = tg.querySelector(".card-pos-absolute");
  console.log(img);
  img.style.opacity = "0";
  img.style.transition = "all .4s";
}
function opacity1(id) {
  let tg = document.getElementById(id);

  let img = tg.querySelector(".card-pos-absolute");
  console.log(img);
  img.style.opacity = "1";
  img.style.transition = "all .4s";
}

/////////////// 가로스크롤하기 //////////////

const container = document.getElementById("sec5");
// where "container" is the id of the container
let isCulDeSac;

let totalOffsetTop = window.scrollY;
let eleOffsetTop = slidePosistion[2];

const scrollPreventLayer = document.querySelector(".section-5_bg");

container.onmouseenter = function () {
  if (totalOffsetTop !== eleOffsetTop) {
    // scrollPreventLayer.classList.add("stop-scrolling");
    // console.log(scrollPreventLayer);
    // 스크롤 가로모드로 전환되는 동안 스크롤 방지 시작
    container.addEventListener("wheel", function (e) {
      e.preventDefault();
    });
    window.scrollTo({ top: slidePosistion[2], behavior: "smooth" });
  }
};
container.onmouseover = function () {
  if (totalOffsetTop !== eleOffsetTop) {
    window.scrollTo({ top: slidePosistion[2], behavior: "smooth" });
  }
};

container.addEventListener(
  "wheel",
  function (e) {
    // scrollPreventLayer.classList.remove("stop-scrolling");
    // 스크롤 방지 해제
    setTimeout(() => {
      if (e.deltaY > 0 && parseInt(container.scrollLeft) === culDeSac) {
        console.log("tail cul de sac");
        container.onmouseover = function (e) {
          e.preventDefault();
        };
        window.scrollTo({ top: slidePosistion[3], behavior: "smooth" });
        //스크롤이 오른쪽 끝에 닿으면 다음 섹션으로 이동시키기
      } else if (e.deltaY < 0 && container.scrollLeft === 0) {
        // console.log("head cul de sac");
        container.onmouseover = function (e) {
          e.preventDefault();
        };
        window.scrollTo({ top: slidePosistion[1], behavior: "smooth" });
        isCulDeSac = container.scrollLeft;
        //스크롤이 왼쪽 끝에 닿으면 이전 섹션으로 이동시키기
      } else if (e.deltaY > 0) {
        container.scrollLeft += 20;
        e.preventDefault();

        // prevenDefault() 로 세로 스크롤을 막을 수 있다
      } else if (e.deltaY <= 0) {
        container.scrollLeft -= 20;
        e.preventDefault();
      }
    });
  },
  400
);

let culDeSac = container.scrollWidth - container.clientWidth;

// console.log("마지막위치", culDeSac);

/////////////////흐르는 문자 애니메이션 ////////////////////

// 1. slideLeft 첫번째 문장길이

const text1 = document.getElementById("textLength1");
const textLength1_1 = -text1.offsetWidth;
const textLength1_2 = -text1.offsetWidth * 2;
console.log("첫번째문장길이", textLength1_1);
console.log("첫번째문장길이", textLength1_2);

//from : - textLength1
//to : - textLength1 *2

// 단위 붙여주기
const textLen1WPx = textLength1_1 + "px";
const textLen2WPx = textLength1_2 + "px";
console.log("단위", textLen1WPx);
// 2. root의 --data-length1 값 바꿔주기
document.documentElement.style.setProperty("--data-length1_1", 0);
document.documentElement.style.setProperty("--data-length1_2", textLen2WPx);

// 2. slideLeft 2번째 문장길이

const text2 = document.getElementById("textLength2");
const textLength2_1 = -text2.offsetWidth;
const textLength2_2 = text2.offsetWidth;
console.log("두번째문장길이", textLength2_1);
console.log("두번째문장길이", textLength2_2);

//from : - textLength1
//to : - textLength1 *2

// 단위 붙여주기
const textLen3WPx = textLength2_1 + "px";
const textLen4WPx = textLength2_2 + "px";
console.log("단위", textLen3WPx);
// 2. root의 --data-length1 값 바꿔주기
document.documentElement.style.setProperty("--data-length2_1", textLen3WPx);
document.documentElement.style.setProperty("--data-length2_2", textLen4WPx);

//
/////////////////////// audio player 등장 //////////////////////////
const audioBtn = document.querySelector(".fbx");
const audioController = document.querySelector("audio");

audioBtn.addEventListener("click", function (e) {
  audioController.play();
  audioController.setAttribute("controls", "true");
});
// console.log(audioBtn);

////////////// 비디오 재생 ///////////////////

const mainPlayBtn = document.querySelector("#mainPlayBtn");
const videoScreen = document.querySelector(".videoScreenAbsolute");

mainPlayBtn.addEventListener("click", () => {
  console.log("clicked");
  videoScreen.classList.add("on");
});
const mainCloseBtn = document.querySelector(".closeBtn");

mainCloseBtn.addEventListener("click", () => {
  console.log("clicked");
  videoScreen.classList.remove("on");
});
