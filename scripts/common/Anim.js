  gsap.registerPlugin(ScrollTrigger);

    // Timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".Anim",
        start: "top top",
        scrub: 1,
        pin: true,
        markers: true
      }
    });
    let w = "380px";
    let h = "254px";

   tl.to(".img1", { top:"110px", left:"128px", width:w , height:h , duration: 1 }, 0)
  .to(".img2", { top:"96px", left:'980px', width:w , height:h , duration: 1 }, 0)
  .to(".img3", { top:"544px", left:"81px", width:w , height:h , duration: 1 }, 0)
  .to(".img4", { top:"504px",left:"949px", width:w , height:h , duration: 1 }, 0)
  .to(".h2-antonio", { opacity: 1, scale: 1, duration: 1 }, 0)
  .to(".p3-sans-strong", { opacity: 1, scale: 1, duration: 1 }, 0);
