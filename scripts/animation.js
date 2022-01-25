const nav = document.querySelector(".nav-list");
const navList = document.querySelectorAll(".nav-list li");
const menu = document.querySelector(".menu");
var isMenuOpen = false;

function setUpNavBar() {
  if (window.innerWidth < 1090) {
    nav.style.opacity = "0";
  }
}

function slide() {
  const navList = document.querySelectorAll(".nav-list li");
  menu.addEventListener("click", () => {
    if (!isMenuOpen) {
      nav.style.opacity = "1";
      nav.style.animation = `menuFadeIn 0.5s ease forwards`;
      isMenuOpen = true;
    } else {
      nav.style.opacity = "1";
      nav.style.animation = `menuFadeOut 0.5s ease forwards`;
      isMenuOpen = false;
    }
    nav.classList.toggle("nav-active");

    navList.forEach((item, index) => {
      if (item.style.animation) {
        item.style.animation = "";
      } else {
        item.style.animation = `navItemsFadeIn 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    //menu animates to X
    menu.classList.toggle("toggle");
  });
}

function animateNavBar() {
  const nameLogo = document.querySelector(".nav-home");
  nameLogo.style.animation = `introBarFadeIn 2s ease forwards 2750ms`;
}

function animateAboutMe() {
  const aboutMe = document.querySelector(".about-me");
  aboutMe.style.animation = "aboutMeFadeIn 2s ease forwards 3250ms";
}

function observerWindowWidth() {
  var switchedToSmallerScreen = false;
  window.addEventListener("resize", () => {
    navList.forEach((item) => {
      item.style.animation = "";
    });
    if (window.innerWidth < 1090) {
      isMenuOpen = false;
      nav.style.animation = `menuFadeOut 0s ease forwards`;
      switchedToSmallerScreen = true;
    } else if (window.innerWidth >= 1090 && switchedToSmallerScreen) {
      switchedToSmallerScreen = false;
      isMenuOpen = false;
      nav.style.animation = `menuFadeIn 0s ease forwards`;
      menu.classList.remove("toggle");
    }
  });
}

function main() {
  setUpNavBar();
  animateNavBar();
  animateAboutMe();
  slide();
  observerWindowWidth();
}

main();
