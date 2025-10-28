gsap.registerPlugin(ScrollTrigger);

const adventureCardContainers = document.querySelectorAll(
  ".js-adventure-card-container"
);
const adventureCardText = document.querySelectorAll(".AnimPara1");
const overlayElements = document.querySelectorAll(".js-adventure-bg-overlay");

function ScrollAnim() {
  const mm = gsap.matchMedia();

  // -------------------------------
  // 🧩 Main Animation Creator
  // -------------------------------
  function createAnimation(w, h, imgPositions) {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    disableHoverAnimations();

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".Anim",
        start: "top top",
        scrub: 0.5,
        pin: true,
        // markers: true,
        onUpdate: (self) => {
          if (self.progress >= 0.999) {
            enableHoverAnimations();
          } else {
            disableHoverAnimations();
          }
        },
      },
    });

    // ---- Images ----
    imgPositions.forEach((pos, i) => {
      tl.to(
        `.img${i + 1}`,
        {
          top: pos.top,
          left: pos.left,
          width: w,
          height: h,
          ease: "power2.out",
        },
        "start"
      );
    });

    // ---- Text & Overlays ----
    tl.fromTo(
      ".AnimH1",
      { opacity: 0, scale: 0.9, y: 50 },
      { opacity: 1, scale: 1, y: 0, ease: "power2.out" },
      "start"
    )
      .fromTo(
        ".AnimP",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, ease: "power2.out" },
        "start"
      )
      .fromTo(
        ".AnimPara1",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, ease: "power2.out" },
        "start"
      )
      .fromTo(
        ".btnnn",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, ease: "power2.out" },
        "start"
      );

    overlayElements.forEach((overlayElement) => {
      tl.fromTo(
        overlayElement,
        { opacity: 0 },
        { opacity: 1, ease: "power2.out" },
        "start"
      );
    });
  }

  // -------------------------------
  // ✋ Hover Enable / Disable Logic
  // -------------------------------
  function enableHoverAnimations() {
    adventureCardContainers.forEach((cardContainer, index) => {
      const overlay = overlayElements[index];
      const text = adventureCardText[index];
      if (!overlay || !text) return;

      cardContainer.style.pointerEvents = "auto";

      if (!cardContainer.hasHoverEvents) {
        cardContainer.hasHoverEvents = true; // prevent duplicates

        cardContainer.addEventListener("mouseenter", () => {
          gsap.to(overlay, { opacity: 0, duration: 0.3, ease: "power2.out" });
          gsap.to(text, { opacity: 0, duration: 0.3, ease: "power2.out" });
        });

        cardContainer.addEventListener("mouseleave", () => {
          gsap.to(overlay, { opacity: 1, duration: 0.3, ease: "power2.out" });
          gsap.to(text, { opacity: 1, duration: 0.3, ease: "power2.out" });
        });
      }
    });
  }

  function disableHoverAnimations() {
    adventureCardContainers.forEach((cardContainer) => {
      cardContainer.style.pointerEvents = "none";
    });
  }

  // -------------------------------
  // 🖥️ Desktop / Laptop (1440 – 1439 px)
  // -------------------------------
  mm.add("(min-width: 1440px) and (max-width: 1439px)", () => {
    createAnimation("380px", "254px", [
      { top: "110px", left: "120px" },
      { top: "96px", left: "900px" },
      { top: "550px", left: "81px" },
      { top: "510px", left: "900px" },
    ]);
  });
  mm.add("(max-width:1920px)", () => {
    createAnimation("380px", "254px", [
      { top: "110px", left: "120px" },
      { top: "96px", left: "900px" },
      { top: "550px", left: "81px" },
      { top: "510px", left: "900px" },
    ]);
  });
  mm.add("(min-width: 1024px) and (max-width: 1024px)", () => {
    createAnimation("300px", "200px", [
      { top: "110px", left: "0px" },
      { top: "96px", left: "680px" },
      { top: "600px", left: "0px" },
      { top: "550px", left: "680px" },
    ]);
  });
  // -------------------------------
  // 🖥️ 4K / Extra-Large Screens (≥ 1440 px)
  // -------------------------------
  mm.add("(min-width: 1440px)", () => {
    createAnimation("380px", "254px", [
      { top: "110px", left: "120px" },
      { top: "96px", left: "900px" },
      { top: "600px", left: "81px" },
      { top: "550px", left: "900px" },
    ]);
  });

  // -------------------------------
  // 📱 Tablet (768 – 1023 px)
  // -------------------------------
  mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
    createAnimation("300px", "200px", [
      { top: "50px", left: "0px" },
      { top: "50px", left: "405px" },
      { top: "450px", left: "0px" },
      { top: "450px", left: "405px" },
    ]);
  });

  // -------------------------------
  // 🚫 Mobile (≤ 767 px) → No Animation
  // -------------------------------
  mm.add("(max-width: 767px)", () => {
    // Kill all scroll triggers
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    // Disable hover events on mobile
    adventureCardContainers.forEach((cardContainer) => {
      cardContainer.style.pointerEvents = "none";
    });
  });
}

ScrollAnim();
