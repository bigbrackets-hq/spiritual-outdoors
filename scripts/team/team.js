const teamImgContainers = document.querySelectorAll('.js-team-img-container');
const teamMemberInfos = document.querySelectorAll('.js-team-member-info');

teamImgContainers.forEach((container, index) => {
  container.addEventListener('click', () => {
    teamImgContainers.forEach((c, i) => {
      if (i !== index) {
        gsap.to(c, {
          width: 302,
          duration: 0.3,
          ease: 'power2.out',
        });
        c.classList.remove('active');
        teamMemberInfos[i].classList.remove('active');
      }
    });

    gsap.to(container, {
      width: 628,
      duration: 0.3,
      ease: 'power2.out',
      onComplete: () => {
        container.classList.add('active');
        teamMemberInfos[index].classList.add('active');
      },
    });
  });
});
