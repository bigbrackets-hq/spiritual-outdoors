gsap.registerPlugin(ScrollTrigger);

function ScrollAnim() {
  const mm = gsap.matchMedia();

  // ✅ Helper to create animation
  function createAnimation(w, h, imgPositions) {
    // Kill old ScrollTriggers before creating new ones (prevents duplicates)
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.Anim',
        start: 'top top',
        scrub: 0.5,
        pin: true,
        //   markers: true, // Uncomment for debugging
      },
    });

    // Animate images
    imgPositions.forEach((pos, i) => {
      tl.to(
        `.img${i + 1}`,
        {
          top: pos.top,
          left: pos.left,
          width: w,
          height: h,
          ease: 'power2.out',
        },
        'start'
      );
    });

    // Animate text
    tl.fromTo(
      '.AnimH1',
      { opacity: 0, scale: 0.9, y: 50 },
      { opacity: 1, scale: 1, y: 0, ease: 'power2.out' },
      'start'
    )
      .fromTo(
        '.AnimP',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, ease: 'power2.out' },
        'start'
      )
      .fromTo(
        '.AnimPara1',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, ease: 'power2.out' },
        'start'
      )
      .fromTo(
        '.btnnn',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, ease: 'power2.out' },
        'start'
      );
  }

  // ✅ 4K / Large screens (≥1024px)
  mm.add('(min-width: 1024px)', () => {
    createAnimation('380px', '254px', [
      { top: '110px', left: '120px' },
      { top: '96px', left: '900px' },
      { top: '550px', left: '81px' },
      { top: '510px', left: '900px' },
    ]);
  });
  mm.add('(min-width: 1440px)', () => {
    createAnimation('380px', '254px', [
      { top: '110px', left: '120px' },
      { top: '96px', left: '900px' },
      { top: '600px', left: '81px' },
      { top: '550px', left: '900px' },
    ]);
  });

  // ✅ Tablet screens (768px–1023px)
  mm.add('(min-width: 768px) and (max-width: 1023px)', () => {
    createAnimation('300px', '200px', [
      { top: '50px', left: '0px' },
      { top: '50px', left: '405px' },
      { top: '450px', left: '0px' },
      { top: '450px', left: '405px' },
    ]);
  });
}

// ✅ Run function
ScrollAnim();

//Mobile text Anim
