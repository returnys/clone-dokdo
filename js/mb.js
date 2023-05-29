window.addEventListener("load", function () {
  // 햄버거메뉴
  let burger = document.querySelector(".menu-trigger");
  let cheak = document.querySelector(".trans");
  const mbWidth = 1024;
  burger.addEventListener("click", function (e) {
    e.preventDefault();
    if (cheak !== true) {
      this.classList.add("trans");
    }
    this.classList.toggle("active");
  });
  window.addEventListener("resize", function () {
    let windowWidth = window.innerWidth;
    if (windowWidth > mbWidth) {
      burger.classList.remove("trans");
      burger.classList.remove("active");
    }
  });
  const mbLis = document.querySelectorAll(".mb-gnb > li");
  const mbMenuA = document.querySelectorAll(".mb-gnb > li > a");
  const mbSubMenu = document.querySelectorAll(".mb-gnb > li .submenu");
});
