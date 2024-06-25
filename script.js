
window.scroll({
    top: 0,
    behavior: 'smooth',
})
function scrollToTop(){
    window.scrollTo({top: 0, behavior: 'smooth'})
};
window.addEventListener('scroll', function(){
    const header = this.document.querySelector('#header');
    header.classList.toggle("sticky",window.scrollY > 0);
});

// Add smooth scrolling to all links


//Menu hamburguer

const btnMobile = document.querySelector('.btn-mobile');

function toggleMenu() {
  const nav = document.querySelector('.navegacao');
  nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);

    




    

