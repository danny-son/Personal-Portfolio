const nav = document.querySelector('.nav-list');
const navList = document.querySelectorAll('.nav-list li');
var isMenuOpen = false;
function slide () {
    const menu = document.querySelector('.menu');
    const navList = document.querySelectorAll('.nav-list li');
    menu.addEventListener('click', () => {
        if (!isMenuOpen) {
            nav.style.animation = `menuFadeIn 0.5s ease forwards`;
            isMenuOpen = true;
        } else {
            nav.style.animation = `menuFadeOut 0.5s ease forwards`;
            isMenuOpen = false;
        }
        nav.classList.toggle('nav-active');

        navList.forEach((item,index) => {
            if (item.style.animation) {
                item.style.animation = '';
            } else {
                item.style.animation = `navItemsFadeIn 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        //menu animates to X 
        menu.classList.toggle('toggle');
        
    });
}

function animateNavBar () {
    const nameLogo = document.querySelector('.nav-home');
    nameLogo.style.animation = `introBarFadeIn 1.5s ease forwards`;    
   
}

function observerWindowWidth() {
    var switchedToMobileScreen = false;
    window.addEventListener('resize', () => {
        navList.forEach((item) => {
            item.style.animation = '';
        });
       if (window.innerWidth < 1090) {
           isMenuOpen = false;
           nav.style.animation = `menuFadeOut 0s ease forwards`;
           switchedToMobileScreen = true;
       }
       else if (window.innerWidth >= 1090 && switchedToMobileScreen) {
            switchedToMobileScreen = false;
            isMenuOpen = false;
            nav.style.animation = `menuFadeIn 0s ease forwards`;
       }
    });
}


function main() {
    animateNavBar();
    slide();
    observerWindowWidth();
} 

main();