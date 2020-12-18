const form = document.getElementById("insuranceInfo");
const modal_container = document.getElementById('modalCustom');
const close_btn = document.querySelector(".modalCustom__close-btn"); 


document.addEventListener('submit', e => {
    e.preventDefault();
    modal_container.classList.add('show');
    form.reset();
});
close_btn.addEventListener("click", () =>{
    modal_container.classList.remove('show');
});

