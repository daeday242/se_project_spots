const editProfileButton = document.querySelector('.profile__edit-btn');
const editProfileModal = document.querySelector('#edit-profile-modal');
const newPostModal = document.querySelector('#new-post-modal');
const closeButton = editProfileModal.querySelector('.modal__close-btn');

editProfileButton.addEventListener('click', () => {
    editProfileModal.classList.add('modal_is-opened');
});

closeButton.addEventListener('click', () => {
    editProfileModal.classList.remove('modal_is-opened');
});