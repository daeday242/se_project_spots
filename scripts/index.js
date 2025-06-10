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
    editProfileModal.classList.add('modal_is-opened');
    editProfileNameInput.value = profileNameEl.textContent;
    editDescriptionInput.value = profileDescriptionEl.textContent;
    void editProfileModal.offsetWidth;
});

editProfileCloseButton.addEventListener('click', () => {
    editProfileModal.classList.remove('modal_is-opened');
});

newPostButton.addEventListener('click', () => {
    newPostModal.classList.add('modal_is-opened');
    void newPostModal.offsetWidth;
});

newPostCloseButton.addEventListener('click', () => {
    newPostModal.classList.remove('modal_is-opened');
});

function handleEditProfileSubmit(evt) {
    evt.preventDefault();
    profileNameEl.textContent = editProfileNameInput.value;
    profileDescriptionEl.textContent = editDescriptionInput.value;
    editProfileModal.classList.remove('modal_is-opened');
}

editProfileForm.addEventListener('submit', handleEditProfileSubmit);

function handleAddCardSubmit (evt) {
    evt.preventDefault();
    console.log('Image URL:', nameInput.value);
    console.log('Description:', linkInput.value);
    newPostModal.classList.remove('modal_is-opened');
    addCardFormElement.reset();
}

addCardFormElement.addEventListener('submit', handleAddCardSubmit);