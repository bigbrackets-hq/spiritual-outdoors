import { menu } from '../../../data/common/navbar/menu.js';

const navElement = document.querySelector('.js-nav');

navElement.innerHTML = `
  <div>
    <a href="landing-page.html" class="js-main-logo">
      <img
        src="/public/images/icons/main-logo.svg"
        alt="Spiritual outdoors logo"
      />
    </a>
  </div>
  <ul class='l1-sans-strong js-nav-menu max-xl:hidden text-[var(--color-blue-500)] flex items-center gap-6'>
    ${menu
      .map(
        (item) => `
      <li class='js-nav-item cursor-pointer flex items-center gap-3 py-[14px] px-4 hover:bg-[var(--color-darkgreen-500)]/10 rounded-[8px] transition-colors duration-300 ease-in-out'>
      ${item.name}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'
        class='js-dropdown-icon'
      >
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M9.99999 12.5506L14.2172 8.33334L13.3333 7.44945L9.99999 10.7828L6.66666 7.44945L5.78278 8.33334L9.99999 12.5506Z'
          fill='#C9F3FF'
        />
      </svg>
      `
      )
      .join('')}
     <li>
      <a href="">
        <button class="whatsapp-btn js-whatsapp-btn">
          <img
            src="/public/images/icons/social-media/whatsapp-icon.svg"
            alt="Whatsapp"
          />
          +977 9851202196
        </button>
      </a>
    </li>
  </ul>
  <div class="js-hamburger-menu cursor-pointer xl:hidden">
    <img src="/public/images/icons/hamburger-icon.svg" alt="Hamburger menu icon" />
  </div>
`;
