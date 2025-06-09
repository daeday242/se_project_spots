const editProfileButton = document.querySelector('.profile__edit-btn');
const editProfileModal = document.querySelector('#edit-profile-modal');
const editProfileCloseButton = editProfileModal.querySelector('.modal__close-btn');

editProfileButton.addEventListener('click', () => {
    editProfileModal.classList.add('modal_is-opened');
});

editProfileCloseButton.addEventListener('click', () => {
    editProfileModal.classList.remove('modal_is-opened');
});


const newPostButton = document.querySelector('.profile__add-btn');
const newPostModal = document.querySelector('#new-post-modal');
const newPostCloseButton = newPostModal.querySelector('.modal__close-btn');

newPostButton.addEventListener('click', () => {
    newPostModal.classList.add('modal_is-opened');
});

newPostCloseButton.addEventListener('click', () => {
    newPostModal.classList.remove('modal_is-opened');
});