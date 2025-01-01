const controllers = document.querySelectorAll('[data-control="modal"]');
const modalElements = document.querySelectorAll('.modal');

document.addEventListener('keydown', (event) => {
  event.preventDefault();

  if (event.key === 'Escape') {
    modalElements.forEach(element => element.classList.remove('modal--open'));
  }
});

controllers.forEach(controller => controller.addEventListener('click', (event) => {
  event.preventDefault();
  const { currentTarget } = event;
  const dataTarget = currentTarget.dataset.target;
  
  const modalTarget = document.getElementById(dataTarget);
  modalTarget.classList.toggle('modal--open');
}));

modalElements.forEach(element => element.addEventListener('click', (event) => {
  event.preventDefault();
  const { target } = event;
  event.target.classList.toggle('modal--open');
}));