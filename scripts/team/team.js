const teamImgContainers = document.querySelectorAll('.js-team-img-container');
const teamMemberInfos = document.querySelectorAll('.js-team-member-info');

teamImgContainers.forEach((container, index) => {
  container.addEventListener('click', () => {
    teamImgContainers.forEach((teamImg) => teamImg.classList.remove('active'));
    teamMemberInfos.forEach((teamInfo) => teamInfo.classList.remove('active'));

    container.classList.toggle('active');
    teamMemberInfos[index].classList.toggle('active');
  });
});
