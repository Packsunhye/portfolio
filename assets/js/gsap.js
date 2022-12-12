gsap.registerPlugin(ScrollTrigger);

// smooth 효과
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// 스크롤하면 자동세션이동
// const sections = gsap.utils.toArray(".section");

// gsap.to(sections, {
//   yPercent: -100 * (sections.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".horizontalWrap",
//     pin: true,
//     scrub: 1,
//     snap: 1 / (sections.length - 1), //스크롤 조금 하면 이전이나 다음 세션으로 넘어간다
//     end: "+=1500", //스피드
//     markers: true,
//   },
// });

// 헤더 내려오기
// gsap.set("#header", { height: -40 })
gsap.to("#header", { delay: 3.6, top: 0 });

// 글씨 쪼개기
document.querySelectorAll(".split").forEach((desc) => {
  let splitText = desc.innerText;
  let splitWrap = splitText.split("").join("</span><span aria-hidden='true'>");
  splitWrap = "<span aria-hidden='true'>" + splitWrap + "</span>";
  desc.innerHTML = splitWrap;
  desc.setAttribute("aria-label", splitText);
});
// 글자 하나씩 올라오기
gsap.set("#section__01 h1 span", { opacity: 0, y: 100 });
gsap.to("#section__01 h1 span", {
  duration: 1,
  delay: 1,
  opacity: 1,
  stagger: 0.08,
  ease: "Back.out(1.7)",
  y: 10,
});

// 글자 올라오기
gsap.to("#section__01 p", { opacity: 1, delay: 2, y: -30, duration: 2 });

// 이미지 로드
console.clear();

const imageContainer = document.querySelector("#section__01");
const image = imageContainer.querySelector("#section__01 .imge__container");

const imageAnimation = gsap.timeline({
  defaults: {
    duration: 1.4,
    ease: "Power3.inOut",
  },
});
// 이미지 슈웅 내려오기
imageAnimation
  .from(
    imageContainer,
    {
      yPercent: -100,
      duration: 2,
    },
    0
  )
  .from(
    image,
    {
      yPercent: 100,
      scale: 1.15,
      duration: 2,
    },
    0
  );

// 이미지 스크롤 내릴때 작아지기
const tl = gsap
  .timeline({
    scrollTrigger: {
      trigger: "#section__02",
      scrub: true,
    },
  })
  .to(".imge__container", {
    scrub: true,
    width: "60%",
    // easing: "power1.out",
    ease: "Circ.out",
  });

// #section__02
gsap.set("#section__02 .section02__title .top span", { opacity: 0, y: 100 });
gsap.to("#section__02 .section02__title .top span", {
  scrollTrigger: {
    trigger: "#section__02 .section02__title",
    // scrub: true,
    start: "top 100%",
  },
  duration: 1,
  delay: 1,
  opacity: 1,
  stagger: 0.08,
  ease: "Back.out(1.7)",
  y: 10,
});
gsap.set("#section__02 .section02__title .flex_zone .bottom span", {
  opacity: 0,
  y: 100,
});
gsap.to("#section__02 .section02__title .flex_zone .bottom span", {
  scrollTrigger: {
    trigger: "#section__02 .section02__title",
    // scrub: true,
    start: "top 100%",
  },
  duration: 1,
  delay: 1.6,
  opacity: 1,
  stagger: 0.08,
  ease: "Back.out(1.7)",
  y: 10,
});
gsap.set("#section__02 .section02__title .flex_zone .about__arched", {
  opacity: 0,
  x: -100,
});
gsap.to("#section__02 .section02__title .flex_zone .about__arched", {
  scrollTrigger: {
    trigger: "#section__02 .section02__title",
    // scrub: true,
    start: "top 100%",
  },
  duration: 2,
  delay: 3,
  opacity: 1,
  stagger: 0.3,
  ease: "Back.out(1.7)",
  x: 10,
});
gsap.set("#section__02 .section02__image .about__box", { opacity: 0, y: 100 });
gsap.to("#section__02 .section02__image .about__box", {
  scrollTrigger: {
    trigger: "#section__02 .section02__title",
    // scrub: true,
    start: "top 100%",
  },
  duration: 2,
  delay: 3.5,
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
    start: "top 100%",
  },
  duration: 2,
  delay: 4,
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
    trigger: "#section__02 .about__me",
    // scrub: true,
    start: "top 100%",
  },
  duration: 1,
  delay: 4.3,
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
    start: "top 100%",
  },
  duration: 1,
  delay: 2,
  opacity: 2,
  stagger: 0.3,
  ease: "Back.out(1.7)",
});

// #section__03
gsap.set("#section__03 .text__box .top span", { opacity: 0, y: 100 });
gsap.to("#section__03 .text__box .top span", {
  scrollTrigger: {
    trigger: "#section__03 .cat__side",
    // scrub: true,
    start: "top 100%",
  },
  duration: 1,
  delay: 1,
  opacity: 1,
  stagger: 0.08,
  ease: "Back.out(1.7)",
  y: 10,
});
gsap.set("#section__03 .text__box .bottom span", { opacity: 0, y: 100 });
gsap.to("#section__03 .text__box .bottom span", {
  scrollTrigger: {
    trigger: "#section__03 .cat__side",
    // scrub: true,
    start: "top 100%",
  },
  duration: 1,
  delay: 1.6,
  opacity: 1,
  stagger: 0.08,
  ease: "Back.out(1.7)",
  y: 10,
});

gsap.set("#section__03 .cat__side .cat__img", { opacity: 0, y: -100 });
gsap.to("#section__03 .cat__side .cat__img", {
  scrollTrigger: {
    trigger: "#section__03 .text__box",
    // scrub: true,
    start: "top 100%",
  },
  duration: 1,
  delay: 1.8,
  opacity: 1,
  stagger: 0.08,
  ease: "Back.out(1.7)",
  y: 10,
});
gsap.set("#section__03 .cat__side .cat__back", { opacity: 0, x: -100 });
gsap.to("#section__03 .cat__side .cat__back", {
  scrollTrigger: {
    trigger: "#section__03 .cat__side",
    // scrub: true,
    start: "top 100%",
  },
  duration: 1,
  delay: 1.9,
  opacity: 1,
  stagger: 0.08,
  x: 0,
  ease: "Back.out(1.7)",
});
gsap.set("#section__03 .about__cat .cat__desc", {
  opacity: 0,
  y: 100,
});
gsap.to("#section__03  .about__cat .cat__desc", {
  scrollTrigger: {
    trigger: "#section__03 .about__cat",
    // scrub: true,
    start: "top 100%",
  },
  duration: 1,
  delay: 2.4,
  opacity: 1,
  stagger: 0.08,
  y: 10,
  ease: "Back.out(1.7)",
});
// section__04
gsap.set("#section__04 .script__back", {
  opacity: 0,
  backgroundColor: "#a6a5e9",
});
gsap.to("#section__04  .script__back", {
  scrollTrigger: {
    trigger: "#section__04 .script__title",
    scrub: true,
    start: "top 100%",
  },
  duration: 1,
  delay: 2.4,
  opacity: 1,
  stagger: 0.08,
  backgroundColor: "#CBDFF2",
  ease: "Back.out(1.7)",
});
gsap.set("#section__04 .script__title span", { opacity: 0, x: -100 });
gsap.to("#section__04 .script__title span", {
  scrollTrigger: {
    trigger: "#section__04 .script__back",
    // scrub: true,
    start: "top 100%",
  },
  duration: 1,
  delay: 1,
  opacity: 1,
  stagger: 0.08,
  ease: "Back.out(1.7)",
  x: 0,
});
gsap.set("#section__04 .script__back .script__desc", { opacity: 0, y: 100 });
gsap.to("#section__04 .script__back .script__desc", {
  scrollTrigger: {
    trigger: "#section__04 .script__back",
    // scrub: true,
    start: "top 100%",
  },
  duration: 1,
  delay: 2,
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
    start: "top 100%",
  },
  duration: 1,
  delay: 2,
  opacity: 1,
  stagger: 0.08,
  ease: "Back.out(1.7)",
  x: 0,
});

//스크롤 이질감
function scroll() {
  let scrollTop =
    window.pageYOffset || document.documentElement.scrollTop || window.screenY;

  document.querySelectorAll("section").forEach((item) => {
    const target1 = item.querySelector(".eex"); //
    const target2 = item.querySelector(".ddx");
    const target3 = item.querySelector(".ffx");
    const target4 = item.querySelector(".kkx");
    const target5 = item.querySelector(".ppx");

    let offset1 = (scrollTop - item.offsetTop) * 0.1; //세로빠르게
    let offset2 = (scrollTop - item.offsetTop) * 0.03; //세로느리게
    let offset3 = (scrollTop - item.offsetTop) * 0.2; //가로빠르게
    let offset4 = (scrollTop - item.offsetTop) * 0.02; //가로느리게반대
    let offset5 = (scrollTop - item.offsetTop) * 0.06; //세로느리게반대

    gsap.to(target1, { duration: 0.3, y: offset1, ease: "power4.out" });
    gsap.to(target2, { duration: 0.6, y: offset2 });
    gsap.to(target3, { duration: 0.3, x: offset3, ease: "expo.out" });
    gsap.to(target4, { duration: 0.3, x: -offset4, ease: "expo.out" });
    gsap.to(target5, { duration: 0.3, y: offset5, ease: "expo.out" });
  });

  requestAnimationFrame(scroll);
}
scroll();
