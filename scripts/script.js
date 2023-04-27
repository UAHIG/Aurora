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
// cycleBackgroundImages();

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
  if (mobileFooterContainer.style.display === 'none' || mobileFooterContainer.style.display === '') {
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

// функция анимации ширины div для ширин в % !!!!!
// Для вызова этой функции нужно передать три аргумента: элемент <div>, который нужно анимировать, новую высоту и продолжительность анимации в миллисекундах. 
// Например:
// let myDiv = document.getElementById("myDiv");
// animateWidth(myDiv, 50, 1000); // изменить ширину myDiv до 50% пикселей за 1 секунду

function animateWidth(element, newWidth, duration) {
  let startWidth = element.clientWidth;
  let widthChange = newWidth - startWidth;
  let startTime = null;

  function widthAnimation(currentTime) {
    if (!startTime) {
      startTime = currentTime;
    }
    let elapsedTime = currentTime - startTime;
    let width = startWidth + widthChange * (elapsedTime / duration);
    element.style.width = width + "%";
    if (elapsedTime < duration) {
      requestAnimationFrame(widthAnimation);
    }
  }
  requestAnimationFrame(widthAnimation);
}


// добавляем event на кнопку лупы поиска
const scImage = document.getElementById('scopeImage');
scImage.addEventListener('click', letsFindSomething);
// открываем закрываем окно поиска меняя стили страницы добавлена анимация пустого div
function letsFindSomething() {
  const conteinerFinder = document.querySelector('.mobile-finder-container');
  const transp = document.querySelector('.transparent')
  const changeImg = document.querySelector('.container-after-warper')
  const scope = document.getElementById('scopeImage');
  if (conteinerFinder.classList.value === 'mobile-finder-container') {
    conteinerFinder.classList.add('findStatus');
    // сохраняем возвращаемое значение setInterval в переменную для остановки функции смены изображений после нажатия лупы и открытия окна диалога поиска
    let intervalId = setInterval(cycleBackgroundImages, 1000);
    // для остановки выполнения функции вызываем clearInterval
    clearInterval(intervalId);
    changeImg.style.backgroundImage = ('url("images/2.png")');
    scope.src = ("images/crosswhite.png");
    scope.classList.add('crossadd');
    animateHeight(transp, 20, 800);
  } else {
    changeImg.style.backgroundImage = ('url("images/1.png")')
    conteinerFinder.classList.remove('findStatus');
    scope.src = ("images/Fill1.png");
    scope.classList.remove('crossadd');
    animateHeight(transp, 450, 600);
    cycleBackgroundImages();
  }

}

const test = document.getElementById('basket-img');
test.addEventListener('click', newAction);

function newAction() {
 const sideBar = document.querySelector('.left-move-container');
 if (sideBar.classList.value === "left-move-container") {
    sideBar.classList.add('active');
    animateWidth(sideBar, 100, 800);

 } else {
    sideBar.classList.remove('active');
    animateWidth(sideBar, 0, 1000);
 }
}

