gsap.registerPlugin(ScrollTrigger);

// smooth 효과
// const lenis = new Lenis({
//   duration: 1.2,
//   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
// });

// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);

// 헤더 내려오기
// gsap.set("#header", { height: -40 })
gsap.to("#header", { delay: 1, top: 0 });

// 글씨 쪼개기
document.querySelectorAll(".split").forEach((desc) => {
  let splitText = desc.innerText;
  let splitWrap = splitText.split("").join("</span><span aria-hidden='true'>");
  splitWrap = "<span aria-hidden='true'>" + splitWrap + "</span>";
  desc.innerHTML = splitWrap;
  desc.setAttribute("aria-label", splitText);
});

// section__01
setTimeout(() => {
  let tl = gsap.timeline();
  tl.to("#section__01 .center .imge__container", {
    duration: 0.8,
    height: "50vh",
    ease: "Circ.out",
  });
  tl.to("#section__01 .center h1 span", {
    duration: 0.5,
    y: 0,
    stagger: 0.04,
    opacity: 1,
    ease: Back.easeOut.config(1.7),
  });
  tl.to("#section__01 .center p", { duration: 0.4, y: 0, opacity: 1 });
  tl.to("#header", { duration: 1, top: 0 });
}, 2000);

gsap.to("#section__01 .center .imge__container", {
  width: "60%",
  scrollTrigger: {
    scrub: 1,
  },
});

// #section__02
gsap.set("#section__02 .section02__title .top span", { opacity: 0 });
gsap.to("#section__02 .section02__title .top span", {
  scrollTrigger: {
    trigger: "#section__02 .section02__title",
    start: "top 10%",
    markers: true,
  },
  duration: 0.5,
  y: 0,
  stagger: 0.04,
  opacity: 1,
  ease: Back.easeOut.config(1.7),
});
gsap.set("#section__02 .section02__title .bottom i span", { opacity: 0 });
gsap.to("#section__02 .section02__title .bottom i span", {
  scrollTrigger: {
    trigger: "#section__02 .section02__title",
    start: "top 10%",
    markers: true,
  },
  delay: 0.5,
  duration: 0.5,
  y: 0,
  stagger: 0.04,
  opacity: 1,
  ease: Back.easeOut.config(1.7),
});
gsap.set("#section__02 .section02__title .bottom em", { opacity: 0 });
gsap.to("#section__02 .section02__title .bottom em", {
  scrollTrigger: {
    trigger: "#section__02 .section02__title",
    start: "top 10%",
  },
  delay: 0.9,
  duration: 0.5,
  y: 0,
  stagger: 0.04,
  opacity: 1,
  ease: Back.easeOut.config(1.7),
});
gsap.set("#section__02 .section02__title .flex_zone .about__arched", {
  opacity: 0,
  x: -40,
});
gsap.to("#section__02 .section02__title .flex_zone .about__arched", {
  scrollTrigger: {
    trigger: "#section__02 .section02__title",
    // scrub: true,
    start: "top 20%",
  },
  duration: 0.8,
  delay: 1,
  opacity: 1,
  stagger: 0.3,
  ease: "Back.out(1.7)",
  x: 10,
});
gsap.set("#section__02 .section02__image .about__box", { opacity: 0, y: 80 });
gsap.to("#section__02 .section02__image .about__box", {
  scrollTrigger: {
    trigger: "#section__02 .section02__title",
    // scrub: true,
    start: "top 20%",
  },
  duration: 0.9,
  delay: 1.2,
  opacity: 1,
  stagger: 0.3,
  ease: "Back.out(1.7)",
  y: 10,
});
gsap.set("#section__02 .section02__image .about__me .profill", {
  opacity: 0,
  y: 100,
});
gsap.to("#section__02 .section02__image .about__me .profill", {
  scrollTrigger: {
    trigger: "#section__02 .about__me",
    // scrub: true,
    start: "top 50%",
  },
  duration: 0.8,
  delay: 1,
  opacity: 1,
  stagger: 0.3,
  ease: "Back.out(1.7)",
  y: 10,
});
gsap.set("#section__02 .section02__image .about__me .about__desc ", {
  opacity: 0,
  y: 100,
});
gsap.to("#section__02 .section02__image .about__me .about__desc ", {
  scrollTrigger: {
    trigger: "#section__02 .about__me .profill",
    // scrub: true,
    start: "top 20%",
    markers: true,
  },
  duration: 0.8,
  delay: 0.6,
  opacity: 1,
  stagger: 0.3,
  ease: "Back.out(1.7)",
  y: 10,
});
gsap.set("#section__02 .about__back", { opacity: 0 });
gsap.to("#section__02 .about__back", {
  scrollTrigger: {
    trigger: "#section__02 .about__me",
    scrub: true,
    start: "top 60%",
  },
  duration: 1,
  delay: 2,
  opacity: 2,
  stagger: 0.3,
  ease: "Back.out(1.7)",
});

// #section__03
gsap.set("#section__03 .text__box .top span", { opacity: 0, y: 40 });
gsap.to("#section__03 .text__box .top span", {
  scrollTrigger: {
    trigger: "#section__03 .cat__side",
    // scrub: true,
    start: "top 20%",
    markers: true,
  },
  delay: 0.5,
  duration: 0.5,
  y: 0,
  stagger: 0.04,
  opacity: 1,
  ease: Back.easeOut.config(1.7),
});
gsap.set("#section__03 .text__box .bottom i span", { opacity: 0, y: 40 });
gsap.to("#section__03 .text__box .bottom i span", {
  scrollTrigger: {
    trigger: "#section__03 .cat__side",
    // scrub: true,
    start: "top 20%",
    markers: true,
  },
  delay: 0.8,
  duration: 0.5,
  y: 0,
  stagger: 0.04,
  opacity: 1,
  ease: Back.easeOut.config(1.7),
});
gsap.set("#section__03 .text__box .bottom em", { opacity: 0, y: 40 });
gsap.to("#section__03 .text__box .bottom em", {
  scrollTrigger: {
    trigger: "#section__03 .cat__side",
    // scrub: true,
    start: "top 20%",
  },
  delay: 1,
  duration: 0.5,
  y: 0,
  stagger: 0.04,
  opacity: 1,
  ease: Back.easeOut.config(1.7),
});
gsap.set("#section__03 .cat__side .cat__img", { opacity: 0, x: -60 });
gsap.to("#section__03 .cat__side .cat__img", {
  scrollTrigger: {
    trigger: "#section__03 .cat__side",
    // scrub: true,
    start: "top 30%",
  },
  duration: 1,
  delay: 1.4,
  opacity: 1,
  stagger: 0.08,
  ease: "Back.out(1.7)",
  x: 0,
});
gsap.to("#section__03 .cat__side .cat__back", {
  scrollTrigger: {
    trigger: "#section__03 .cat__side",
    start: "top 60%",
  },
  duration: 1,
  delay: 1.2,
  opacity: 1,
  stagger: 0.08,
  ease: "Circ.out",
});
gsap.set("#section__03 .about__cat .cat__desc", {
  opacity: 0,
  y: 100,
});
gsap.to("#section__03  .about__cat .cat__desc", {
  scrollTrigger: {
    trigger: "#section__03 .about__cat",
    // scrub: true,
    start: "top 30%",
  },
  duration: 1,
  delay: 1.4,
  opacity: 1,
  stagger: 0.08,
  y: 10,
  ease: "Back.out(1.7)",
});

// #section__04
gsap.set("#section__04 .script__back", {
  opacity: 0,
  backgroundColor: "#426381",
});
gsap.to("#section__04 .script__back", {
  scrollTrigger: {
    trigger: "#section__04 .script__title",
    scrub: true,
    start: "top 40%",
  },
  duration: 0.4,
  delay: 0.6,
  opacity: 1,
  stagger: 0.08,
  backgroundColor: "#CBDFF2",
  ease: "Back.out(1.7)",
});
gsap.set("#section__04 .script__title i span", { opacity: 0, y: 40 });
gsap.to("#section__04 .script__title i span", {
  scrollTrigger: {
    trigger: "#section__04 .script__title",
    // scrub: true,
    start: "top 80%",
  },
  delay: 0.5,
  duration: 0.5,
  y: 0,
  stagger: 0.04,
  opacity: 1,
  ease: Back.easeOut.config(1.7),
});
gsap.set("#section__04 .script__title em ", { opacity: 0 });
gsap.to("#section__04 .script__title em ", {
  scrollTrigger: {
    trigger: "#section__04 .script__title",
    // scrub: true,
    start: "top 80%",
  },
  delay: 1,
  duration: 0.5,
  y: 0,
  stagger: 0.04,
  opacity: 1,
  // ease: Back.easeOut.config(1.7),
});
gsap.set("#section__04 .script__back .script__desc", { opacity: 0, y: 100 });
gsap.to("#section__04 .script__back .script__desc", {
  scrollTrigger: {
    trigger: "#section__04 .script__back",
    // scrub: true,
    start: "top 80%",
  },
  duration: 1,
  delay: 1.2,
  opacity: 1,
  stagger: 0.08,
  ease: "Back.out(1.7)",
  y: 10,
});
gsap.set("#section__04 .script__sea", { opacity: 0, x: 100 });
gsap.to("#section__04 .script__sea", {
  scrollTrigger: {
    trigger: "#section__04 .script__back",
    // scrub: true,
    start: "top 30%",
    markers: true,
  },
  duration: 1,
  delay: 1.4,
  opacity: 1,
  stagger: 0.08,
  ease: "Back.out(1.7)",
  x: 0,
});
gsap.set("#section__04 .effect__ul .effect__list .EY-1", {
  opacity: 0,
  x: 100,
});
gsap.to("#section__04 .effect__ul .effect__list .EY-1", {
  scrollTrigger: {
    trigger: "#section__04 .effect__ul",
    // scrub: true,
    start: "top 10%",
    markers: true,
  },
  duration: 1,
  delay: 1.6,
  opacity: 1,
  stagger: 0.08,
  ease: "Back.out(1.7)",
  x: 0,
});
gsap.set("#section__04 .effect__ul .effect__list .EY-2", {
  opacity: 0,
  x: 100,
});
gsap.to("#section__04 .effect__ul .effect__list .EY-2", {
  scrollTrigger: {
    trigger: "#section__04 .effect__ul",
    // scrub: true,
    start: "top 10%",
    markers: true,
  },
  duration: 1,
  delay: 1.9,
  opacity: 1,
  stagger: 0.08,
  ease: "Back.out(1.7)",
  x: 0,
});
gsap.set("#section__04 .effect__ul .effect__list .EY-3", {
  opacity: 0,
  x: 100,
});
gsap.to("#section__04 .effect__ul .effect__list .EY-3", {
  scrollTrigger: {
    trigger: "#section__04 .effect__ul",
    // scrub: true,
    start: "top 10%",
    markers: true,
  },
  duration: 1,
  delay: 2.2,
  opacity: 1,
  stagger: 0.08,
  ease: "Back.out(1.7)",
  x: 0,
});
gsap.set("#section__04 .effect__ul .effect__list .EY-4", {
  opacity: 0,
  x: 100,
});
gsap.to("#section__04 .effect__ul .effect__list .EY-4", {
  scrollTrigger: {
    trigger: "#section__04 .effect__ul",
    // scrub: true,
    start: "top 10%",
    markers: true,
  },
  duration: 1,
  delay: 2.5,
  opacity: 1,
  stagger: 0.08,
  ease: "Back.out(1.7)",
  x: 0,
});
gsap.set("#section__04 .effect__ul .effect__list .EY-5", {
  opacity: 0,
  x: 100,
});
gsap.to("#section__04 .effect__ul .effect__list .EY-5", {
  scrollTrigger: {
    trigger: "#section__04 .effect__ul",
    // scrub: true,
    start: "top 10%",
    markers: true,
  },
  duration: 1,
  delay: 2.8,
  opacity: 1,
  stagger: 0.08,
  ease: "Back.out(1.7)",
  x: 0,
});
gsap.set("#section__04 .effect__ul .effect__list .EY-6", {
  opacity: 0,
  x: 100,
});
gsap.to("#section__04 .effect__ul .effect__list .EY-6", {
  scrollTrigger: {
    trigger: "#section__04 .effect__ul",
    // scrub: true,
    start: "top 10%",
    markers: true,
  },
  duration: 1,
  delay: 3.1,
  opacity: 1,
  stagger: 0.08,
  ease: "Back.out(1.7)",
  x: 0,
});

// const target1 = gsap.utils.toArray(".eex");

//스크롤 이질감
// function scroll() {
//   let scrollTop =
//     window.pageYOffset || document.documentElement.scrollTop || window.screenY;

//   document.querySelectorAll("section").forEach((item) => {
//     const target1 = gsap.utils.toArray(".eex"); //
//     const target2 = gsap.utils.toArray(".ddx");
//     const target3 = gsap.utils.toArray(".ffx");
//     const target4 = gsap.utils.toArray(".kkx");
//     const target5 = gsap.utils.toArray(".ppx");

//     let offset1 = (scrollTop - item.offsetTop) * 0.1; //세로빠르게
//     let offset2 = (scrollTop - item.offsetTop) * 0.03; //세로느리게
//     let offset3 = (scrollTop - item.offsetTop) * 0.2; //가로빠르게
//     let offset4 = (scrollTop - item.offsetTop) * 0.02; //가로느리게반대
//     let offset5 = (scrollTop - item.offsetTop) * 0.06; //세로느리게반대

//     gsap.to(target1, { duration: 0.3, y: offset1, ease: "power4.easeOut" });
//     gsap.to(target2, { duration: 0.6, y: offset2 });
//     gsap.to(target3, { duration: 0.3, x: offset3, ease: "expo.easeOut" });
//     gsap.to(target4, { duration: 0.3, x: -offset4, ease: "expo.easeOut" });
//     gsap.to(target5, { duration: 0.3, y: offset5, ease: "expo.easeIn" });
//   });

//   requestAnimationFrame(scroll);
// }
// scroll();

function scroll() {
  let scrollTop =
    window.pageYOffset || document.documentElement.scrollTop || window.screenY;

  const target1 = gsap.utils.toArray(".eex"); //
  const target2 = gsap.utils.toArray(".ddx");
  const target3 = gsap.utils.toArray(".ffx");
  const target4 = gsap.utils.toArray(".kkx");
  const target5 = gsap.utils.toArray(".ppx");

  let offset1 = (scrollTop - item.offsetTop) * 0.1; //세로빠르게
  let offset2 = (scrollTop - item.offsetTop) * 0.03; //세로느리게
  let offset3 = (scrollTop - item.offsetTop) * 0.2; //가로빠르게
  let offset4 = (scrollTop - item.offsetTop) * 0.02; //가로느리게반대
  let offset5 = (scrollTop - item.offsetTop) * 0.06; //세로느리게반대

  gsap.to(target1, {
    duration: 0.3,
    yPercent: 50,
    scrollTrigger: {
      trigger: "#section__02",
      scrub: true,
      start: "top 40%",
      ease: "power4.easeOut",
      makers: true,
    },
  });
  gsap.to(target2, { duration: 0.6, y: offset2 });
  gsap.to(target3, { duration: 0.3, x: offset3, ease: "expo.easeOut" });
  gsap.to(target4, { duration: 0.3, x: -offset4, ease: "expo.easeOut" });
  gsap.to(target5, { duration: 0.3, y: offset5, ease: "expo.easeIn" });

  requestAnimationFrame(scroll);
}
scroll();
