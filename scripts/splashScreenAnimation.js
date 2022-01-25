let introScreen = document.querySelector(".introScreen");
let name = document.querySelector(".name");
let letters = document.querySelectorAll(".letter");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    letters.forEach((span, index) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (index + 1) * 100);
    });

    setTimeout(() => {
      letters.forEach((span, index) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (index + 1) * 75);
      });
    }, 1500);

    setTimeout(() => {
      introScreen.style.top = "-100vh";
    }, 2200);

    //re enables scrolling on the y axis to ensure the splash screen does not override scrolling on the main page;
    setTimeout(() => {
      console.log("scrolling should be enabled!");
      document.body.style.overflowY = "scroll";
    }, 4000);
  });
});
