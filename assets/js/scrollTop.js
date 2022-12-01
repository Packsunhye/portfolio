var s = skrollr.init();
function scroll() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  document.querySelector(".scrollTop").innerText = Math.ceil(scrollTop);
  requestAnimationFrame(scroll);
}
scroll();
