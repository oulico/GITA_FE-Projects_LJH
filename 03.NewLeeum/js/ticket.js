window.addEventListener("DOMContentLoaded", () => {
  const ticketSelectBtn = document.querySelectorAll(".selectBtn");
  const ticket = document.querySelectorAll(".ticket");

  ticketSelectBtn.forEach((ele, idx) => {
    ele.addEventListener("click", () => {
      ticket[idx].classList.toggle("on");
    });
  });
});
