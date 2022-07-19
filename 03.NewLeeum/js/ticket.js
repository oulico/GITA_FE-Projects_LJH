window.addEventListener("DOMContentLoaded", () => {
  const ticketSelectBtn = document.querySelectorAll(".selectBtn");
  const ticket = document.querySelectorAll(".ticket");
  const textSelect = document.querySelectorAll(".selectBtn span");
  console.log(`textSelect:`, textSelect);

  let isBlack = true;
  ticketSelectBtn.forEach((ele, idx) => {
    ele.addEventListener("click", () => {
      if (isBlack) {
        ticket[idx].classList.add("on");
        textSelect[idx].innerText = "취소";
        isBlack = false;
      } else {
        ticket[idx].classList.remove("on");
        textSelect[idx].innerText = "선택";
        isBlack = true;
      }
    });
  });
});
