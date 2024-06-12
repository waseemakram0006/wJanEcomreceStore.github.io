
let home = document.getElementById('homeId');
let product = document.getElementById('product');
let about = document.getElementById('about');
let contact = document.getElementById('contect');

function handleItemClick(clickedElement) {
    
    home.classList.add('activeClass');
    about.classList.remove('activeClass');
    contact.classList.remove('activeClass');
    product.classList.remove('activeClass');

    
    clickedElement.classList.add('activeClass');
}


home.addEventListener('click', function() {
    handleItemClick(home);
});

product.addEventListener('click', function() {
    handleItemClick(product);
});

about.addEventListener('click', function() {
    handleItemClick(about);
});

contact.addEventListener('click', function() {
    handleItemClick(contact);
});
