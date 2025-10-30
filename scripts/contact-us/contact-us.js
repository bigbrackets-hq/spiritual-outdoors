const generalEnquiryRadioElement = document.querySelector(
  '.js-general-enquiry-radio'
);
const planningTripRadioElement = document.querySelector(
  '.js-planning-trip-radio'
);
const generalEnquiryFormElement = document.querySelector(
  '.js-general-enquiry-form'
);
const planningTripFormElement = document.querySelector(
  '.js-planning-trip-form'
);

function toggleForm() {
  if (generalEnquiryRadioElement.checked) {
    generalEnquiryFormElement.style.display = 'flex';
    planningTripFormElement.style.display = 'none';
  } else if (planningTripRadioElement.checked) {
    planningTripFormElement.style.display = 'flex';
    generalEnquiryFormElement.style.display = 'none';
  }
}

generalEnquiryRadioElement.addEventListener('change', toggleForm);
planningTripRadioElement.addEventListener('change', toggleForm);

toggleForm();
