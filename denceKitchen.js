//Text Ad
let swapText = document.getElementById('adP1');
let texts = [
  'Step into the kitchen with confiDENCE',
  'Dence Kitchen and Spices',
  'Amazing Spices made for you',
]
let currentIndex = 0;

setInterval(() => {
  currentIndex = (currentIndex + 1) % 3;
  swapText.textContent = texts[currentIndex]
}, 6000);

//Bring up Video ad
setTimeout(() => {
    document.getElementById("dence-vid1").classList.remove('hidden')
}, 5000);


function dropMay(){
  //document.getElementById("Row2").style.display="block";
  document.getElementById("Row2").classList.remove("hidden");
  document.getElementById("MayUp").style.display="inline-block";
  document.getElementById("MayDown").style.display="none";
}
function hideMay(){
  //document.getElementById("Row2").style.display="none";
  document.getElementById("Row2").classList.add("hidden");
  document.getElementById("MayDown").style.display="inline-block";
  document.getElementById("MayUp").style.display="none";
}




// GET THE HTML ELEMENTS
const btnOpenEl = document.querySelector('.btn-open');
const btnCloseEl = document.querySelector('.btn-close');
const asideContentEl = document.querySelector('.aside-content');
// const mainContentEl =  document.querySelector('.main-content');
const overlayEl = document.querySelector('.overlay');
// const timeNowEl = document.querySelector('.time-now');
// const dateNowEl = document.querySelector('.date-now');


// FUNCTION TO OPEN AND CLOSE SIDE CONTENT

const openSideContent = function () {
  asideContentEl.classList.add('right-nav');
  overlayEl.classList.remove('hidden');
};

const closeSideContent = function () {
  asideContentEl.classList.remove('right-nav');
  //mainContentEl.style.marginLeft = '0rem';
  overlayEl.classList.add('hidden');
};

btnOpenEl.addEventListener('click', openSideContent);
overlayEl.addEventListener('click', closeSideContent);
btnCloseEl.addEventListener('click', closeSideContent);

/*
// GET THE CURRENT TIME AND DAY

const date = new Date();
const day = date.getDay();
const currentHours = date.getHours();
const currentMins = date.getMinutes();

const getCurrentTime = currentHours >= 12 ? `${currentHours} : ${currentMins} PM` : `${currentHours} : ${currentMins} AM`;

timeNowEl.textContent = getCurrentTime;

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

for (let i = 0; i <= days.length; i++) {
  if (day === i) {
    // console.log(days[i]);
    dateNowEl.textContent = `Today is: ${days[i]}`;
  }
}
  */