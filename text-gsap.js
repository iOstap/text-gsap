window.addEventListener("DOMContentLoaded", (event) => {
  let typeSplit = new SplitType("[text-split]", {
    types: "words, chars, lines",
    tagName: "span"
  });

  function createScrollTrigger(triggerElement, timeline) {
    ScrollTrigger.create({
      trigger: triggerElement,
      start: "top 90%",
      onEnter: () => timeline.play(),
      once: true
    });
  }

  $("[words-slide-up]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".word"), { opacity: 0, yPercent: 100, duration: 1.2, ease: "power4.out(2)", stagger: { amount: 0.3 } });
    createScrollTrigger($(this), tl);
  });

  $("[lines-slide-up]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".line"), { overflow: "hidden", opacity: 0, yPercent: 100, duration: 1.2, ease: "power4.out(2)", stagger: { amount: 0.3 } });
    createScrollTrigger($(this), tl);
  });

  $("[letters-slide-up]").each(function (index) {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find(".char"), { opacity: 0, yPercent: 100, duration: 1.2, ease: "power4.out(2)", stagger: { amount: 0.3 } });
    createScrollTrigger($(this), tl);
  });

  $("[scrub-each-char]").each(function (index) {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: $(this),
        start: "top 90%",
        end: "top 10%",
        scrub: true
      }
    });
    tl.from($(this).find(".char"), { opacity: 0.09, duration: 17, ease: "power2.in", stagger: { each: 0.3 } });
  });

  gsap.set("[text-split]", { opacity: 1 });
});
