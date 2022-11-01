import { templateModal } from './modal-template.js';

const refs = {
  closeModalBtn: document.querySelector('[data-modal-closes]'),
  addFavoriteBtn: document.querySelector('[data-add-favorite]'),
  modal: document.querySelector('[data-modal]'),
  gallery: document.querySelector('.gallery'),
  backdrop: document.querySelector('.backdrop'),
  ingridientsList: document.querySelector('.ingridients__list'),
};

function modalCocktails() {
  refs.gallery.addEventListener('click', onGalleryClick);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.backdrop.addEventListener('click', onBackdropClick);
}

function onGalleryClick(e) {
  let selectedCocktail = {};
  const { openModal, cocktail } = e.target.dataset;

  //   Перевіряємо, щоб клік був на BUTTON Learn more,
  if (e.target.nodeName === 'BUTTON') {
    const data = JSON.parse(localStorage.getItem('cocktails'));
    selectedCocktail = data.find(el => el.name === cocktail);

    //   якщо openModal === 'open вiдкриваємо модалку
    if (openModal === 'open') {
      document.querySelector('#modal-section').innerHTML =
        templateModal(selectedCocktail);
      toggleModal();
      //   onOpenModal();
    } else if (openModal === 'add') {
      // додаємо напій до LocalStorage і змінюємо текст в кнопці
      if (selectedCocktail) {
        e.target.innerHTML = contentBtnRemovOrAdd('remove');
        e.target.dataset.openModal = 'remove';
        onAddFavoriteToLocalStorage(selectedCocktail);
      }
    } else if (openModal === 'remove') {
      // видаляємо напій з LocalStorage і змінюємо текст в кнопці
      e.target.innerHTML = contentBtnRemovOrAdd('add');
      e.target.dataset.openModal = 'add';
      onRemoveFavoriteFromLocalStorage(selectedCocktail);
    }
  }
}

function contentBtnRemovOrAdd(type = 'add') {
  if (type === 'remove') {
    return `Remove 
            <span class="btn__icon-wrap">
            <svg class="btn__icon-fill" width="15" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 15L7.2675 13.921C2.89 10.1035 0 7.58583 0 4.49591C0 1.9782 2.057 0 4.675 0C6.154 0 7.5735 0.662125 8.5 1.70845C9.4265 0.662125 10.846 0 12.325 0C14.943 0 17 1.9782 17 4.49591C17 7.58583 14.11 10.1035 9.7325 13.9292L8.5 15Z" />
            </svg>`;
  } else {
    return `Add to
            <span class="btn__icon-wrap">
            <svg class="btn__icon" width="15" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 15L7.2675 13.921C2.89 10.1035 0 7.58583 0 4.49591C0 1.9782 2.057 0 4.675 0C6.154 0 7.5735 0.662125 8.5 1.70845C9.4265 0.662125 10.846 0 12.325 0C14.943 0 17 1.9782 17 4.49591C17 7.58583 14.11 10.1035 9.7325 13.9292L8.5 15Z" />
            </svg>`;
  }
}

// Додає напій в localStorage to favorite
function onAddFavoriteToLocalStorage(selectedCocktail) {
  const allFavoriteCocktails = getFavoriteCocktailsFromLocalStorage();
  allFavoriteCocktails.push(selectedCocktail);
  localStorage.setItem(
    'favoriteCocktails',
    JSON.stringify(allFavoriteCocktails)
  );
}

// видаляємо напій з localStorage favorite
function onRemoveFavoriteFromLocalStorage(selectedCocktail) {
  const allFavoriteCocktails = getFavoriteCocktailsFromLocalStorage();
  const filterArr = allFavoriteCocktails.filter(
    drink => drink.name !== selectedCocktail.name
  );
  localStorage.setItem('favoriteCocktails', JSON.stringify(filterArr));
}

function getFavoriteCocktailsFromLocalStorage() {
  return JSON.parse(localStorage.getItem('favoriteCocktails') || '[]');
}

// Закриття модалки по бекдропу
function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    onCloseModal();
  }
}

// Закрытие по ЕСК
function handleCloseModal(e) {
  if (e.key === 'Escape') {
    refs.modal.classList.add('is-hidden');
  }
}

function onClickModalIngridientsTwo(e) {}

//   function onOpenModal() {
//     refs.modal.classList.remove('is-hidden');
//   }

// toggle modal
function toggleModal(e) {
  document.body.classList.toggle('no-scroll');
  refs.modal.classList.toggle('is-hidden');
}

function onCloseModal() {
  window.removeEventListener('keydown', onEskKeyPress);
  refs.modal.classList.add('is-hidden');
  document.body.classList.remove('no-scroll');
}

function onOpenModal() {
  window.addEventListener('keydown', onEskKeyPress);
  refs.modal.classList.remove('is-hidden');
  document.body.classList.add('no-scroll');
  onAddDrinkInModal();
}

function onAddDrinkInModal() {
  console.log(
    'refs.modal',
    refs.modal,
    refs.modal.querySelector('[data-modal-btn]')
  );
}

export {
  modalCocktails,
  getFavoriteCocktailsFromLocalStorage,
  contentBtnRemovOrAdd,
  onAddFavoriteToLocalStorage,
  onRemoveFavoriteFromLocalStorage,
};

// export class CreateModalCocktails {
//   constructor() {
//     this.#setup();
//   }

//   #setup() {
//     refs.gallery.addEventListener('click', onGalleryClick);
//     refs.closeModalBtn.addEventListener('click', toggleModal);
//     refs.backdrop.addEventListener('click', onBackdropClick);
//   }
// }
