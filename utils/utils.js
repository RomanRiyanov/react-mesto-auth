export function setLoading(popupSelector, isLoaded, buttonText) {
    const popup = document.querySelector(popupSelector);
    const submitButton = popup.querySelector('.submit-button');
    
    if (isLoaded) {
        submitButton.textContent = buttonText.default;
        submitButton.classList.remove('inactive-button');
        submitButton.removeAttribute('disabled', true);
      } else {
        submitButton.textContent = buttonText.loading;
        submitButton.classList.add('inactive-button');
        submitButton.setAttribute('disabled', true);
      }
}