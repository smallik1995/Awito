'use strict';

const modalAdd = document.querySelector('.modal__add');
const modalItem = document.querySelector('.modal__item');
const btnModalAdd = document.querySelector('.add__ad');
const cards = [...document.querySelectorAll('.card')];
// const modalSubmit = document.querySelector('.modal__submit');
// const modalAddBtnSubmit = document.querySelector('.modal__btn-submit');

cards.map((item) => {
  item.onclick = () => modalItem.classList.remove('hide');
});

document.addEventListener('keydown',  (event) =>{
  if (event.which == 27) {
    if (!modalAdd.classList.contains('hide'))
      modalAdd.classList.add('hide');
    if (!modalItem.classList.contains('hide'))
      modalItem.classList.add('hide');
  }
});

btnModalAdd.onclick = () => {
  modalAdd.classList.remove('hide');
};

modalAdd.onclick = (event) => {
  const target = event.target;

  if (target.closest('.modal__close') || target === modalAdd)
    modalAdd.classList.add('hide');
};

modalItem.onclick = (event) => {
  const target = event.target;

  if (target.closest('.modal__close') || target === modalItem)
    modalItem.classList.add('hide');
};