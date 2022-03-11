const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
   if (window.scrollY > nav.offsetHeight +150) {
      nav.classList.add('active')

   }else {
      nav.classList.remove('active')
   }
}

// const navToggle = document.querySelector('.nav-toggle');
// const navLinks = document.querySelectorAll('.nav_link')

// navToggle.addEventListener('click', () => {
//     document.body.classList.toggle('nav-open');
// });

// navLinks.forEach(link => {
//     link.addEventListener('click', () => {
//         document.body.classList.remove('nav-open');
//     })
// })