function cycleBackgroundImages() {
  const images = ['images/1.png', 'images/2.png'];
  let currentIndex = 0;
  setInterval(() => {
    const cont = document.getElementsByClassName("container-after-warper")[0];
    cont.style.backgroundImage = `url(${images[currentIndex]})`;
    cont.style.transition = 'background-image 10s ease-in-out';
    cont.addEventListener('transitionend', () => {
      setTimeout(() => {
        cont.style.transition = '';
      }, 0);
    }, { once: true });
    currentIndex = (currentIndex + 1) % images.length;
  }, 12000);
  
}

function headerActive () {
  const navElement = document.querySelector("nav");
  navElement.addEventListener('mouseover', changeHeaderActive);
}

function headerNoActive () {
  const navElement = document.querySelector("nav");
  navElement.addEventListener('mouseleave', changeHeaderNoActive);
}

function changeHeaderActive () {
  const containerDiv = document.querySelector(".container");
  containerDiv.style.backgroundColor = 'white';
  containerDiv.style.transition = "background-color 0.5s ease-in-out";
  

  const gradientDiv = document.querySelector(".gradient");
  gradientDiv.style.background = 'none';
  gradientDiv.style.transition = "background 0.5s ease-in-out";

  const Left = document.querySelector(".left-section");
  Left.style.color = 'black';
  Left.style.transition = "color 0.9s ease-in-out";

  const central = document.querySelector(".nav-items");
  central.style.color = "black";
  central.style.transition = "color 0.7s ease-in-out";

  const right = document.querySelector(".right-section");
  right.style.color = "black";
  right.style.transition = "color 0.5s ease-in-out";

  const placeholder = document.querySelector(".middle-section-placeholder-text");
  placeholder.style.backgroundColor = "#F7F7F7";
  placeholder.style.backgroundImage = 'url("images/Fill 2.png")';
  placeholder.style.transition = "backgroundImage 0.3s ease-in-out";

  const basketImg = document.getElementById("basket-img");
  basketImg.src = "images/basket2.png";
  
  const inputElement = document.getElementById('placeholderText'); // получаем элемент input, у которого нужно изменить цвет текста placeholder
  inputElement.style.color = 'black'; // устанавливаем цвет текста input
  inputElement.style.setProperty('--placeholder-color', 'black'); // устанавливаем цвет текста placeholder

  // Для мобильных и планшетов сброс на header no Active после клика 
  setTimeout(changeHeaderNoActive, 2000);
}

function changeHeaderNoActive () {
  const containerDiv = document.querySelector(".container")
  containerDiv.style.backgroundColor = 'initial';
  containerDiv.style.transition = "background-color 0.5s ease-in-out";

  const gradientDiv = document.querySelector(".gradient");
  gradientDiv.style.background = 'linear-gradient(180deg, rgba(51, 51, 51, 0.9) 14.31%, rgba(27, 27, 27, 0.469176) 58.6%, rgba(0, 0, 0, 0.0001) 100%)';
  gradientDiv.style.transition = "background 0.3s ease-in-out";

  const Left = document.querySelector(".left-section");
  Left.style.color = '#ffff';
  Left.style.transition = "color 0.5s ease-in-out";

  const central = document.querySelector(".nav-items");
  central.style.color = "#ffff";
  central.style.transition = "color 0.7s ease-in-out";

  const right = document.querySelector(".right-section");
  right.style.color = "#ffff";
  right.style.transition = "color 0.9s ease-in-out";

  const placeholder = document.querySelector(".middle-section-placeholder-text");
  placeholder.style.backgroundColor = "rgba(247, 247, 247, 0.24)";
  placeholder.style.backgroundImage = 'url("images/Fill 1.png")';
  placeholder.style.transition = "backgroundImage 0.9s ease-in-out";

  const basketImg = document.getElementById("basket-img");
  basketImg.src = "images/basket1.png";

  const inputElement = document.getElementById('placeholderText'); // получаем элемент input, у которого нужно изменить цвет текста placeholder
  inputElement.style.color = 'black'; // устанавливаем цвет текста input
  inputElement.style.setProperty('--placeholder-color', '#ffff'); // устанавливаем цвет текста placeholder

}
  const burgerImage = document.getElementById('burgerImage');
  const burgerImageItems = document.getElementById('chevronImage')
  burgerImage.addEventListener('click', openClose);
  burgerImageItems.addEventListener('click', openCloseItems);
  

  function openClose() {
    const mobileFooterContainer = document.querySelector('.mobile-footer-container');
    const mobileAboutUsDrops = document.querySelector('.mobile-about-us-drops');
    const mobileImg = document.getElementById('chevronImage')
    const mobileFooterHeads = document.querySelector('.mobile-footer-heads');
 if (mobileFooterContainer.style.display === 'none') {
  mobileFooterContainer.style.display = 'block'
 } else {
  mobileFooterContainer.style.display = 'none'
  mobileAboutUsDrops.style.display = 'none'
  mobileFooterHeads.style.borderBottom = '1px solid #cecbcb';
  mobileImg.style.transform = 'none';

 }
    
  };

  function openCloseItems() {
    const mobileFooterHeads = document.querySelector('.mobile-footer-heads');
    const mobileAboutUsDrops = document.querySelector('.mobile-about-us-drops');
    const mobileImg = document.getElementById('chevronImage')
    if (mobileAboutUsDrops.style.display === 'none') {
      mobileAboutUsDrops.style.display = 'block';
      mobileAboutUsDrops.style.borderBottom = '1px solid #cecbcb';
      mobileFooterHeads.style.borderBottom = 'none';
      mobileImg.style.transform = 'rotate(90deg)';
      
    } else {
      mobileAboutUsDrops.style.display = 'none'
      mobileFooterHeads.style.borderBottom = '1px solid #cecbcb';
      mobileImg.style.transform = 'none';
    }
  };

  
cycleBackgroundImages ();

headerActive ();

headerNoActive ();





