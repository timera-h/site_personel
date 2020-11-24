
const navBurger = () =>{
    //selectionner le menu burger
    const btnresponsive = document.querySelector('.burger');
    
    const nav = document.querySelector('.nav-links');
    
    const Navlinks = document.querySelectorAll('.nav-links li')
    
    btnresponsive.addEventListener('click', () => {
    // lancer animation
    //prend la class active
    btnresponsive.classList.toggle('active');
    nav.classList.toggle('nav-active');
    });
    }
    
    navBurger();