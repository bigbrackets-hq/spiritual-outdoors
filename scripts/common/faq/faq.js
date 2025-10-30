const faqElements = document.querySelectorAll('.js-faq');

faqElements.forEach((faqElement) => {
  const questionElement = faqElement.querySelector('.js-faq-question');
  const answerElement = faqElement.querySelector('.js-faq-answer');
  const plusIconElement = faqElement.querySelector('.js-plus-icon');
  const minusIconElement = faqElement.querySelector('.js-minus-icon');

  faqElement.addEventListener('click', () => {
    const isActive = faqElement.classList.contains('faq-active');

    if (!isActive) {
      faqElement.classList.add('faq-active');
      questionElement.classList.add('question-active');
      plusIconElement.classList.add('hidden');
      minusIconElement.classList.remove('hidden');

      gsap.set(answerElement, { display: 'block' });
      gsap.fromTo(
        answerElement,
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.4, ease: 'power2.out' }
      );
    } else {
      faqElement.classList.remove('faq-active');
      questionElement.classList.remove('question-active');
      plusIconElement.classList.remove('hidden');
      minusIconElement.classList.add('hidden');

      gsap.to(answerElement, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => gsap.set(answerElement, { display: 'none' }),
      });
    }
  });
});
