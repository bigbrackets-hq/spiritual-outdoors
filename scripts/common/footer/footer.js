import { footerLinks } from '../../../data/common/footer/footer-links.js';

const footerLinksContainerElement = document.querySelector(
  '.js-footer-links-container'
);
const copyrightTextElement = document.querySelector('.js-copyright-text');

const date = new Date();
const currentYear = date.getFullYear();

footerLinksContainerElement.innerHTML = `
  ${footerLinks
    .map(
      (footerLink) => `
    <div class='flex flex-col gap-4 js-footer-link'>
      <p class='h1-sans'>${footerLink.name}</p>
      <ul class='flex flex-col gap-3'>
        ${footerLink.sub
          .map(
            (item) => `
          <li class='text-[var(--color-passage-text-color-dark)] hover:text-[var(--color-heading-text-color-dark)] transition-colors duration-300 ease-in-out'>
            <a href=${item.link}>${item.name}</a>
          </li>
          `
          )
          .join('')}
      </ul>
    </div>
    `
    )
    .join('')}
    <div class="flex flex-col gap-4">
      <p class="h1-sans">Spiritual Outdoors Pvt. Ltd.</p>
      <ul class="flex flex-col gap-3">
        <li
          class="text-[var(--color-passage-text-color-dark)] hover:text-[var(--color-heading-text-color-dark)] transition-colors duration-300 ease-in-out"
        >
          <a href="" class="inline-flex items-center gap-2"
            ><img
              src="/public/images/common/footer/location-icon.svg"
              alt="Location icon"
            />
            Amrit Marg, Thamel, Nepal</a
          >
        </li>
        <li
          class="text-[var(--color-passage-text-color-dark)] hover:text-[var(--color-heading-text-color-dark)] transition-colors duration-300 ease-in-out"
        >
          <a href="" class="inline-flex items-center gap-2">
            <img
              src="/public/images/common/footer/email-icon.svg"
              alt="Mail icon"
            />
            info@spiritualexcursion.com
          </a>
        </li>
        <li class="flex items-start gap-2">
          <img
            src="/public/images/common/footer/phone-icon.svg"
            alt="Phone icon"
          />
          <div class="flex flex-col gap-1">
            <a
              href=""
              class="inline-flex items-center gap-2 text-[var(--color-passage-text-color-dark)] hover:text-[var(--color-heading-text-color-dark)] transition-colors duration-300 ease-in-out"
            >
              +977 14418817 (Office)
            </a>
            <a
              href=""
              class="text-[var(--color-passage-text-color-dark)] hover:text-[var(--color-heading-text-color-dark)] transition-colors duration-300 ease-in-out"
            >
              +977 9851202196 (Kabin)
            </a>
            <a
              href=""
              class="text-[var(--color-passage-text-color-dark)] hover:text-[var(--color-heading-text-color-dark)] transition-colors duration-300 ease-in-out"
            >
              +977 9851231090 (Badri)
            </a>
          </div>
        </li>
      </ul>
    </div>
`;

copyrightTextElement.textContent = `© ${currentYear} Spiritual outdoors`;
