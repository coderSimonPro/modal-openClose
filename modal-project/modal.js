//select buttons
const openBtn = document.querySelector('.openBtn');
const closeBtn = document.querySelector('.close-modal');
const showModal = document.querySelector('.modal-content');


openBtn.addEventListener('click', function () {
    showModal.classList.add('showContent');
})
closeBtn.addEventListener('click', function () {
    showModal.classList.remove('showContent')
});