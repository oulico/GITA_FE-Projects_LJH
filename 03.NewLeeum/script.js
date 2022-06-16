function search() {
  console.log("clicked");

  const target = document.querySelector(".sns > li:last-child");
  target.classList.toggle("on");
}

const gnb = document.querySelector("nav.gnb");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    console.log(lastScrollY);
    console.log("we are going down");
    gnb.classList.add("nav--hidden");
  } else {
    console.log("we are going up");
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
