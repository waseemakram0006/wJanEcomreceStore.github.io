let sideBar = document.getElementById('sidebarId');
let cartIcon = document.getElementById('carIcon');

let sideBarFlag = false;

// sideBar.style.transition='all 3s ease-in-out';

cartIcon.addEventListener('click', (event) => {
    event.stopPropagation();
    if(sideBarFlag==false)
    {
        
        sideBar.classList.add('add');
        sideBarFlag = true;

    }

});


document.body.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log(event);
    if(sideBarFlag==true)
    {
        
        sideBar.classList.remove('add');
        sideBarFlag = false;
    }
});