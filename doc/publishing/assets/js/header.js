// 헤더 공통 기능 : 스크롤시 헤더 그림자 추가
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("is-scroll", window.scrollY > 0);
});
