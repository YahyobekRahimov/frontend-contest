const imgs = document.querySelector(".img__grid");
for (let i = 1; i <= 8; i++) {
   imgs.innerHTML += `
  <div class="img__hover">
    <figure class="img__container">
            <img src="/assets/images/P${i}.png" alt="" />
    </figure>
    <div class="img__hover-el">
      <p>Make sure to plan the hierarchy of your project.</p>   
      <button>read more <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
      <g clip-path="url(#clip0_4007_136)">
        <path d="M11.0007 10.082V7.33203L14.6673 10.9987L11.0007 14.6654V11.9154H7.33398V10.082H11.0007ZM11.0007 1.83203C16.0607 1.83203 20.1673 5.9387 20.1673 10.9987C20.1673 16.0587 16.0607 20.1654 11.0007 20.1654C5.94065 20.1654 1.83398 16.0587 1.83398 10.9987C1.83398 5.9387 5.94065 1.83203 11.0007 1.83203ZM11.0007 18.332C15.0523 18.332 18.334 15.0504 18.334 10.9987C18.334 6.94703 15.0523 3.66536 11.0007 3.66536C6.94898 3.66536 3.66732 6.94703 3.66732 10.9987C3.66732 15.0504 6.94898 18.332 11.0007 18.332Z" fill="white"/>
      </g>
      <defs>
        <clipPath id="clip0_4007_136">
          <rect width="22" height="22" fill="white"/>
        </clipPath>
      </defs>
    </svg></button> 
    </div>
  </div>
   
    `;
}
