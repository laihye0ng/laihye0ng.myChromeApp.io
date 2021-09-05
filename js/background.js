const bodyBG = document.querySelector("body");
const img = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
const ranNum = Math.floor(Math.random()*(img.length));

bodyBG.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(img/${img[ranNum]})`;