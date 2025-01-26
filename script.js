let determineNavType = () => {
  let nav = document.querySelector('#navbar');
  let mobileNav = document.querySelector('#mobile-nav');
  if (window.innerWidth <= 920) {
    nav.style.display = "none";
    mobileNav.style.display = "flex";
  } else {
    nav.style.display = "flex";
    mobileNav.style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", determineNavType)

window.addEventListener("resize", determineNavType);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetElement = 
              document.querySelector(e.target.getAttribute('href'));
        window.scrollTo({
            top: targetElement.offsetTop - 90,
            behavior: 'smooth'
        });

        if (e.target.parentNode.id === "mobile-navigation") {
            displayNav();
        }
    });
});

let displayNav = () => {
    var x = document.querySelector("#nav-links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }