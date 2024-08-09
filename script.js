const openModal = document.getElementById('open_modal');
const closeModal = document.getElementById('modal_content_close');
const outlayModal = document.querySelector('.modal_outlay');
const contentModal = document.querySelector('.modal_content');


openModal.addEventListener('click' , ()=>{
    outlayModal.classList.add('active');
    contentModal.classList.add('active');
})

closeModal.addEventListener('click' , ()=>{
    outlayModal.classList.remove('active');
    contentModal.classList.remove('active');
})