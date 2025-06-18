
const initialCards = [
  {
    name: 'Val Thorens',
    link: 'https://praktikum.yandex.ru/hj/assets/1-photo-by-moritz-feldmann-from-pexels.jpg'
  },
  {
    name: 'Restaurant terrace',
    link: 'https://praktikum.yandex.ru/hj/assets/2-photo-by-ceiline-from-pexels.jpg'
  },
  {
    name: 'An outdoor cafe',
    link: 'https://praktikum.yandex.ru/hj/assets/3-photo-by-tubanur-dogan-from-pexels.jpg'
  },
  {
    name: 'A very long bridge over the forest',
    link: 'https://praktikum.yandex.ru/hj/assets/4-photo-by-maurice-laschet-from-pexels.jpg'
  },
  {
    name: 'Tunnel with morning light',
    link: 'https://praktikum.yandex.ru/hj/assets/5-photo-by-van-anh-nguyen-from-pexels.jpg'
  },
  {
    name: 'Mountain house',
    link: 'https://praktikum.yandex.ru/hj/assets/6-photo-by-moritz-feldmann-from-pexels.jpg'
  }
];


const editProfileButton = document.querySelector('.profile__edit-btn');
const editProfileModal = document.querySelector('#edit-profile-modal');
const editProfileCloseButton = editProfileModal.querySelector('.modal__close-btn');
const editProfileForm = editProfileModal.querySelector('.modal__form');
const editProfileNameInput = editProfileModal.querySelector('#profile-name-input');
const editDescriptionInput = editProfileModal.querySelector('#profile-description-input');

const newPostButton = document.querySelector('.profile__add-btn');
const newPostModal = document.querySelector('#new-post-modal');
const newPostCloseButton = newPostModal.querySelector('.modal__close-btn');

const profileNameEl = document.querySelector('.profile__name');
const profileDescriptionEl = document.querySelector('.profile__description');

const addCardFormElement = newPostModal.querySelector('.modal__form');
const nameInput = newPostModal.querySelector('#card-image-input');
const linkInput = newPostModal.querySelector('#post-description-input');

editProfileButton.addEventListener('click', () => {
    openModal(editProfileModal);
    editProfileNameInput.value = profileNameEl.textContent;
    editDescriptionInput.value = profileDescriptionEl.textContent;
    void editProfileModal.offsetWidth;
});

editProfileCloseButton.addEventListener('click', () => {
   closeModal(editProfileModal);
});

newPostButton.addEventListener('click', () => {
    openModal(newPostModal);
    void newPostModal.offsetWidth;
});

newPostCloseButton.addEventListener('click', () => {
    closeModal(newPostModal);
});

function handleEditProfileSubmit(evt) {
    evt.preventDefault();
    profileNameEl.textContent = editProfileNameInput.value;
    profileDescriptionEl.textContent = editDescriptionInput.value;
    closeModal(editProfileModal);
}

editProfileForm.addEventListener('submit', handleEditProfileSubmit);

function handleAddCardSubmit (evt) {
    evt.preventDefault();
    console.log('Image URL:', nameInput.value);
    console.log('Description:', linkInput.value);
    closeModal(newPostModal);
    addCardFormElement.reset();
}

addCardFormElement.addEventListener('submit', handleAddCardSubmit);

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}


initialCards.forEach(card => {
  console.log(card.name);
});
