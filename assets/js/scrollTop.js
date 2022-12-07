window.addEventListener("scroll", () => {
  let scrollTop =
    window.pageYOffset || window.scrollY || document.documentElement.scrollTop;

  document.querySelector(".scrollTop").innerText = Math.floor(scrollTop);
});
