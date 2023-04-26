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
//просто активируем функцию выше
cycleBackgroundImages();

const mediaQuery = window.matchMedia('(min-width: 991.98px)');
// Проверка ширины экрана при загрузке страницы
if (mediaQuery.matches) {
  headerChange();
}
// Обнаружение изменения ширины экрана и выполнение функции
mediaQuery.addListener(function (event) {
  if (event.matches) {
    headerChange();
  }
});

// функция активации события mouseover на header  и запуск функций смены стилей
function headerChange() {
  const navElement = document.querySelector("nav");
  navElement.addEventListener('mouseover', changeheaderActive);
  navElement.addEventListener('mouseleave', changeHeaderNoActive);
}

// применяются стили header (в случае mouseover)
function changeheaderActive() {
  const containerDiv = document.querySelector(".container");
  containerDiv.classList.add('active');
  const gradientDiv = document.querySelector(".gradient");
  gradientDiv.classList.add('active');
  const Left = document.querySelector(".left-section");
  Left.classList.add('active');
  const central = document.querySelector(".nav-items");
  central.classList.add('active');
  const right = document.querySelector(".right-section");
  right.classList.add('active');
  const placeholder = document.querySelector(".middle-section-placeholder-text");
  placeholder.classList.add('active');
  const basketImg = document.getElementById("basket-img");
  basketImg.src = "images/basket2.png";
  const inputElement = document.getElementById('placeholderText'); // получаем элемент input, у которого нужно изменить цвет текста placeholder
  inputElement.style.color = 'black'; // устанавливаем цвет текста input
  inputElement.style.setProperty('--placeholder-color', 'black'); // устанавливаем цвет текста placeholder

}
// применяются стили header (без mouseover)
function changeHeaderNoActive() {
  const containerDiv = document.querySelector(".container")
  containerDiv.classList.remove('active');
  const gradientDiv = document.querySelector(".gradient");
  gradientDiv.classList.remove('active');
  const Left = document.querySelector(".left-section");
  Left.classList.remove('active');
  const central = document.querySelector(".nav-items");
  central.classList.remove('active');
  const right = document.querySelector(".right-section");
  right.classList.remove('active');
  const placeholder = document.querySelector(".middle-section-placeholder-text");
  placeholder.classList.remove('active');
  const basketImg = document.getElementById("basket-img");
  basketImg.src = "images/basket1.png";
  const inputElement = document.getElementById('placeholderText'); // получаем элемент input, у которого нужно изменить цвет текста placeholder
  inputElement.style.color = 'black'; // устанавливаем цвет текста input
  inputElement.style.setProperty('--placeholder-color', '#ffff'); // устанавливаем цвет текста placeholder

}

// функция открытия burger menu применена анимация по высоте
const burgerImage = document.getElementById('burgerImage');
burgerImage.addEventListener('click', openClose)

function openClose() {
  const mobileFooterContainer = document.querySelector('.mobile-footer-container');
  const transparentDiv = document.querySelector('.transparent')
  if (mobileFooterContainer.style.display === 'none' || mobileFooterContainer.style.display === 'null') {
    mobileFooterContainer.style.display = 'block'
    animateHeight(transparentDiv, 230, 500);
  } else {
    mobileFooterContainer.style.display = 'none'
    animateHeight(transparentDiv, 450, 500);
  }
};

// Проверка на правильность события (нажатие на клавишу с Id =числу) цель - отделение клавиши от всего блока контейнера (у них общий event)
mobileFooterContainer.onclick = function (event) {
  let dropButton = event.srcElement.id;
  if (!isNaN(dropButton)) {
    openCloseItems(dropButton)
  }
};
// функция открывающая и закрывающая список контейнероф в футер
function openCloseItems(dropButton) {
  const mobileFooterHeads = document.getElementById('mobileFooterHeads' + dropButton)
  const mobileAboutUsDrops = document.getElementById('drops' + dropButton);
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
// функция анимации высоты div
// Для вызова этой функции нужно передать три аргумента: элемент <div>, который нужно анимировать, новую высоту и продолжительность анимации в миллисекундах. 
// Например:
// let myDiv = document.getElementById("myDiv");
// animateHeight(myDiv, 500, 1000); // изменить высоту myDiv до 500 пикселей за 1 секунду

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

