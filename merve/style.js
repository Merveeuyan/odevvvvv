const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');
const modal = document.getElementById('modal');
const form = document.getElementById('applicationForm');


openModal.addEventListener('click', () => modal.classList.add('show'));


closeModal.addEventListener('click', () => modal.classList.remove('show'));


