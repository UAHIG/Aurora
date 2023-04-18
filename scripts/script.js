function cycleBackgroundImages() {
  const images = ['/images/1.png', '/images/2.png'];
  let currentIndex = 0;

  setInterval(() => {
    document.body.style.backgroundImage = `url(${images[currentIndex]})`;
    document.body.style.transition = 'background-image 1s ease-in-out';
    setTimeout(() => {
      document.body.style.transition = '';
    }, 2000);
    currentIndex = (currentIndex + 1) % images.length;
  }, 5000);
  
}

cycleBackgroundImages();