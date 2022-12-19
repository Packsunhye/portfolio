// section 05
gsap.set("#section__05 .sec05__title i", { opacity: 0, y: -100 });
gsap.to("#section__05 .sec05__title i", {
  scrollTrigger: {
    trigger: "#section__05 .sec05__title",
    start: "top 10%",
    // markers: true,
  },
  duration: 0.5,
  y: 0,
  delay: 0.4,
  stagger: 0.04,
  opacity: 1,
  ease: Back.easeOut.config(1.7),
});
gsap.set("#section__05 .sec05__title em span", { opacity: 0 });
gsap.to("#section__05 .sec05__title em span", {
  scrollTrigger: {
    trigger: "#section__05 .sec05__title",
    start: "top 10%",
    // markers: true,
  },
  duration: 0.5,
  y: 10,
  delay: 0.9,
  stagger: 0.04,
  opacity: 1,
  ease: Back.easeOut.config(1.7),
});
gsap.set("#section__05 .sec05__inner .site__back .site__desc", {
  opacity: 0,
  x: 100,
});
gsap.to("#section__05 .sec05__inner .site__back .site__desc", {
  scrollTrigger: {
    trigger: "#section__05 .sec05__inner .site__back",
    start: "top 30%",
    // markers: true,
  },
  duration: 0.5,
  x: 0,
  delay: 1.2,
  stagger: 0.04,
  opacity: 1,
  ease: Back.easeOut.config(1.7),
});
// 회전
window.addEventListener("scroll", function (event) {
  let scroll = this.scrollY;
  document.querySelector(".svg-mode.one").style.transform =
    "rotate(-" + scroll / 8 + "deg)";
  document.querySelector(".svg-mode.two").style.transform =
    "rotate(-" + scroll / 8 + "deg)";
  document.querySelector(".svg-mode.tree").style.transform =
    "rotate(-" + scroll / 8 + "deg)";
  document.querySelector(".svg-mode.fo").style.transform =
    "rotate(-" + scroll / 8 + "deg)";
  // document.querySelector(".scr7 img").style.transform = "rotate(-" + scroll / 8 + "deg)";
});
gsap.set("#section__05 .sec05__inner .site-01 .op.one", {
  opacity: 0.4,
});
gsap.to("#section__05 .sec05__inner .site-01 .op.one", {
  scrollTrigger: {
    trigger: "#section__05 .sec05__inner .site__view",
    start: "top 30%",
    scrub: true,
    // markers: true,
  },
  duration: 0.5,
  delay: 0.2,
  stagger: 0.04,
  opacity: 1,
  ease: Back.easeOut.config(1.7),
});
gsap.set("#section__05 .sec05__inner .site-02 .op.two", {
  opacity: 0.4,
});
gsap.to("#section__05 .sec05__inner .site-02 .op.two", {
  scrollTrigger: {
    trigger: "#section__05 .sec05__inner .site__view .site-02",
    start: "top 30%",
    scrub: true,
    // markers: true,
  },
  duration: 0.5,
  delay: 0.2,
  stagger: 0.04,
  opacity: 1,
  ease: Back.easeOut.config(1.7),
});
gsap.set("#section__05 .sec05__inner .site-03 .op.tree", {
  opacity: 0.4,
});
gsap.to("#section__05 .sec05__inner .site-03 .op.tree", {
  scrollTrigger: {
    trigger: "#section__05 .sec05__inner .site__view .site-03",
    start: "top 30%",
    scrub: true,
    // markers: true,
  },
  duration: 0.5,
  delay: 0.2,
  stagger: 0.04,
  opacity: 1,
  ease: Back.easeOut.config(1.7),
});
gsap.set("#section__05 .sec05__inner .site-04 .op.fo", {
  opacity: 0.4,
});
gsap.to("#section__05 .sec05__inner .site-04 .op.fo", {
  scrollTrigger: {
    trigger: "#section__05 .sec05__inner .site__view .site-04",
    start: "top 30%",
    scrub: true,
    // markers: true,
  },
  duration: 0.5,
  delay: 0.2,
  stagger: 0.04,
  opacity: 1,
  ease: Back.easeOut.config(1.7),
});

gsap.to(
  "#section__05 .sec05__inner .site__back .site__view .site-01 .svg-mode.one",
  {
    scrollTrigger: {
      trigger: "#section__05 .sec05__inner .site__view ",
      start: "top 30%",
      scrub: true,
      // markers: true,
    },
    duration: 0.5,
    transform: "rotate",
    delay: 1.2,
    stagger: 0.04,
    opacity: 1,
    ease: Back.easeOut.config(1.7),
  }
);

// section 06
gsap.set("#section__06 .project__top > h2", {
  opacity: 0,
  y: 100,
});
gsap.to("#section__06 .project__top > h2", {
  scrollTrigger: {
    trigger: "#section__06 .project__top",
    // scrub: true,
    start: "top 60%",
    // markers: true,
  },
  duration: 1,
  delay: 0.4,
  opacity: 1,
  stagger: 0.08,
  ease: "Back.out(1.7)",
  y: -40,
});
gsap.set("#section__06 .project__middle .bind > h2", {
  opacity: 0,
  y: 150,
});
gsap.to("#section__06 .project__middle .bind > h2", {
  scrollTrigger: {
    trigger: "#section__06 .project__middle",
    scrub: true,
    start: "top 60%",
    // markers: true,
  },
  duration: 1,
  delay: 1,
  opacity: 1,
  stagger: 0.08,
  ease: "Back.out(1.7)",
  y: 10,
});
gsap.set("#section__06 .project__bottom > h2 span", { opacity: 0 });
gsap.to("#section__06 .project__bottom > h2 span", {
  scrollTrigger: {
    trigger: "#section__06 .project__bottom",
    start: "top 10%",
    // markers: true,
  },
  delay: 0.5,
  duration: 0.5,
  y: 0,
  stagger: 0.04,
  opacity: 1,
  ease: Back.easeOut.config(1.7),
});
gsap.set("#section__06 .project__bottom > h2 span", { opacity: 0 });
gsap.to("#section__06 .project__bottom > h2 span", {
  scrollTrigger: {
    trigger: "#section__06 .project__bottom",
    start: "top 10%",
    // markers: true,
  },
  delay: 0.5,
  duration: 0.5,
  y: 0,
  stagger: 0.04,
  opacity: 1,
  ease: Back.easeOut.config(1.7),
});
gsap.set("#section__06 .project__bottom .bond .BusinessCard", {
  opacity: 0,
  x: -100,
});
gsap.to("#section__06 .project__bottom .bond .BusinessCard", {
  scrollTrigger: {
    trigger: "#section__06 .project__bottom .bond",
    start: "top 30%",
    // markers: true,
  },
  delay: 0.8,
  duration: 0.5,
  x: -10,
  stagger: 0.04,
  opacity: 1,
  ease: Back.easeOut.config(1.7),
});
gsap.set("#section__06 .project__bottom .bond .back__box", {
  opacity: 0,
});
gsap.to("#section__06 .project__bottom .bond .back__box", {
  scrollTrigger: {
    trigger: "#section__06 .project__bottom .bond",
    start: "top 30%",
    // markers: true,
  },
  delay: 0.9,
  duration: 0.5,
  stagger: 0.04,
  opacity: 1,
  ease: Back.easeOut.config(1.7),
});
