const mainBtn = document.querySelector('.next');
const mainText = document.querySelector('.main--text')
const boldText = document.querySelector('.bold--text');
const logo = document.querySelector('.logo');
const background = document.querySelector('.background');
let clickCount = 0;

mainBtn.addEventListener('click',() => {
  clickCount++;
  // console.log(clickCount)
  if (clickCount === 1 ){
    mainText.style.color = 'transparent';
    setTimeout(() => {
      boldText.style.display = 'block';
      boldText.classList.add('appear');
    },500);
  } else if (clickCount === 2 ){
    boldText.style.color = 'transparent';
    background.style.opacity = 0;
    setTimeout(() => {
      // logo.style.opacity = 1;
      logo.style.display = 'block';
      logo.classList.add('appear');
      mainBtn.textContent = '다음으로';
    },1000);
  } else {
    let win = window.open("menu.html","_self");
  }
});