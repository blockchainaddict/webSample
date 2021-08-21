const icon = document.querySelector('.ham_icon');
const menu_items = document.querySelector('.menu_items');

const mobileleMenu = () =>{
    icon.classList.toggle('is-active');
    menu_items.classList.toggle('active');
}

icon.addEventListener('click', mobileleMenu);