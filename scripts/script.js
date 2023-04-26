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
cycleBackgroundImages ();

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
  // setTimeout(changeHeaderNoActive, 2000);
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
  burgerImage.addEventListener('click', openClose);
  
  function openClose() {

    const mobileFooterContainer = document.querySelector('.mobile-footer-container');
    const transparentDiv = document.querySelector('.transparent')
    if (mobileFooterContainer.style.display === 'none' || mobileFooterContainer.style.display === 'null') {
  mobileFooterContainer.style.display = 'block'
  // transparentDiv.style.height = '250px'
  animateHeight(transparentDiv, 230, 500);

 } else {
  mobileFooterContainer.style.display = 'none'
  // transparentDiv.style.height = '450px'
  animateHeight(transparentDiv, 450, 500);


 }
    
  };

 mobileFooterContainer.onclick = function(event) {
  let dropButton = event.srcElement.id;
  if (!isNaN(dropButton)) {
    openCloseItems(dropButton)
  }
};

  function openCloseItems(dropButton) {
  const mobileFooterHeads = document.getElementById('mobileFooterHeads'+dropButton)
  const mobileAboutUsDrops = document.getElementById('drops'+dropButton);
  const mobileImg = document.getElementById(dropButton);
  if (mobileAboutUsDrops.style.display === 'none' || mobileAboutUsDrops.style.display === '') {
          animateHeight(mobileAboutUsDrops, 100, 400);
          mobileAboutUsDrops.style.display = 'block';
          mobileAboutUsDrops.style.borderBottom = '1px solid #cecbcb';
          mobileFooterHeads.style.borderBottom = 'none';
          mobileImg.style.transform = 'rotate(90deg)';
          mobileImg.style.transition = 'transform 0.4s ease-in-out';
          
        } else {
          mobileAboutUsDrops.style.display = 'none';
          animateHeight(mobileAboutUsDrops, 0, 400);
          mobileFooterHeads.style.borderBottom = '1px solid #cecbcb';
          mobileImg.style.transform = 'none';
        }
}
 

const mediaQuery = window.matchMedia('(min-width: 991.98px)');

// Проверка ширины экрана при загрузке страницы
if (mediaQuery.matches) {
  headerActive();
  headerNoActive();
}

// Обнаружение изменения ширины экрана и выполнение функции
mediaQuery.addListener(function(event) {
  if (event.matches) {
    headerActive();
    headerNoActive();
  }
});



function animateHeight(element, newHeight, duration) {
  let startHeight = element.clientHeight;
  let heightChange = newHeight - startHeight;
  let startTime = null;

  function heightAnimation(currentTime) {
    if (!startTime) {
      startTime = currentTime;
    }
    let elapsedTime = currentTime - startTime;
    let height = startHeight + heightChange * (elapsedTime / duration);
    element.style.height = height + "px";
    if (elapsedTime < duration) {
      requestAnimationFrame(heightAnimation);
    }
  }

  requestAnimationFrame(heightAnimation);
}

// Для вызова этой функции нужно передать три аргумента: элемент <div>, который нужно анимировать, новую высоту и продолжительность анимации в миллисекундах. Например:


// let myDiv = document.getElementById("myDiv");
// animateHeight(myDiv, 500, 1000); // изменить высоту myDiv до 500 пикселей за 1 секунду

