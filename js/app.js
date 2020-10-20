// ********** nav toggle ************
// select button and links
const navBtn = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

const navHeader = document.querySelector('.nav-header');

// add event listener
navBtn.addEventListener('click', () => {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
  // when clicking on Hamburger menu
  navHeader.classList.toggle('change');
});

// ********** Add/remove class active to the navlinks ************
// let ul = document.querySelector('ul');
// let li = document.querySelectorAll('li');

// li.forEach(el => {
//   el.addEventListener('click', function () {
//     ul.querySelector('.active').classList.remove('active');
//     el.classList.add('active');
//   });
// });
// ********** automatic slider with buttons control ************
// declaration of variables
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const indicator = document.querySelector('.indicator');

let index = 0;

prev.addEventListener('click', function () {
  // console.log('click');
  prevSlide();
  updatedotIndicator();
  resetTimer();
});

next.addEventListener('click', function () {
  nextSlide();
  updatedotIndicator();
  resetTimer();
});

function prevSlide() {
  if (index == 0) {
    index = slides.length - 1;
  } else {
    index--;
  }
  console.log(index);
  // call fucntion changeSlide
  changeSlide();
}
function nextSlide() {
  if (index == slides.length - 1) {
    index = 0;
  } else {
    index++;
  }
  console.log(index);
  // call fucntion changeSlide
  changeSlide();
}

function changeSlide() {
  // remove current class from all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('current');
  }

  slides[index].classList.add('current');
}
// create dot indicators
dotIndicator();
function dotIndicator() {
  for (let i = 0; i < slides.length; i++) {
    const div = document.createElement('div');
    div.setAttribute('onclick', 'indicateSlide(this)');
    div.id = i;
    if (i == 0) {
      div.className = 'current';
    }
    indicator.appendChild(div);
  }
}

// Now when click to dot indicator
function indicateSlide(element) {
  // console.log(element.id);
  index = element.id;
  changeSlide();
  updatedotIndicator();
  resetTimer();
}

function updatedotIndicator() {
  for (let i = 0; i < indicator.children.length; i++) {
    // remove CURRENT class from all dot indicators
    indicator.children[i].classList.remove('current');
  }
  indicator.children[index].classList.add('current');
}

// Now auto play slides
function autoPlay() {
  nextSlide();
  updatedotIndicator();
}

let timer = setInterval(autoPlay, 4000);
function resetTimer() {
  // when click to indicator or control button
  // stop timer
  clearInterval(timer);
  // then started again timer
  timer = setInterval(autoPlay, 4000);
}
