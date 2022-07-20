window.addEventListener("DOMContentLoaded", () => {
  const tickets = document.querySelectorAll(".ticket");
  const textSelect = document.querySelectorAll(".selectBtn span");
  const infoTicket = document.querySelector(".infoTicket > span");

  console.log(`tickets`, tickets);

  let num = 0;

  let isBlack0 = false;
  let isBlack1 = false;

  tickets[0].addEventListener("click", () => {
    if (!isBlack0) {
      tickets[0].classList.add("on");
      textSelect[0].innerText = "취소";
      num++;
      isBlack0 = true;
    } else {
      tickets[0].classList.remove("on");
      textSelect[0].innerText = "선택";
      num--;
      isBlack0 = false;
    }
    if (num !== 0) {
      infoTicket.innerText = `${num}개의 전시를 선택했습니다.`;
    } else {
      infoTicket.innerText = "관람을 원하는 전시를 선택해주세요";
    }
  });

  tickets[1].addEventListener("click", () => {
    if (!isBlack1) {
      tickets[1].classList.add("on");
      textSelect[1].innerText = "취소";
      num++;
      isBlack1 = true;
    } else {
      tickets[1].classList.remove("on");
      textSelect[1].innerText = "선택";
      num--;
      isBlack1 = false;
    }
    if (num !== 0) {
      infoTicket.innerText = `${num}개의 전시를 선택했습니다.`;
    } else {
      infoTicket.innerText = "관람을 원하는 전시를 선택해주세요";
    }
  });
});
