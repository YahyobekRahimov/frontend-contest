document.addEventListener("DOMContentLoaded", function () {
   const switcher = document.querySelector(
      ".header__language-switcher"
   );

   for (let i = 0; i < switcher.children.length; i++) {
      const child = switcher.children[i];
      child.addEventListener("click", function () {
         cleanUpActive();
         child.classList.add("active-language");
      });
   }
   function cleanUpActive() {
      for (let i = 0; i < switcher.children.length; i++) {
         const child = switcher.children[i];
         if (child.classList.contains("active-language")) {
            child.classList.remove("active-language");
         }
      }
   }

   const hamburgerButton = document.querySelector(
      ".hamburger-button"
   );

   const exitButton = document.querySelector(".exit-button");
   const nav = document.querySelector(".header nav");
   const buttonWrapper = document.querySelector(".button-wrapper");

   hamburgerButton.addEventListener("click", function () {
      exitButton.classList.toggle("exit-button-active");
      nav.classList.toggle("active-nav");
      buttonWrapper.classList.toggle("active-button-wrapper");
   });

   exitButton.addEventListener("click", function () {
      exitButton.classList.toggle("exit-button-active");
      nav.classList.toggle("active-nav");
      buttonWrapper.classList.toggle("active-button-wrapper");
   });
});
