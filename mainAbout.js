
const toggleBtn = document.querySelector('.toggle-btn');
const toggleIcon = toggleBtn.querySelector('i');
const dropdownMenu = document.querySelector('.dropdown-menu');

toggleBtn.addEventListener('click', () => {
  dropdownMenu.classList.toggle('open');

  // Change icon from burger to cross
  if (dropdownMenu.classList.contains('open')) {
    toggleIcon.classList.remove('fa-bars');
    toggleIcon.classList.add('fa-xmark');
  } else {
    toggleIcon.classList.remove('fa-xmark');
    toggleIcon.classList.add('fa-bars');
  }
});

const progressBar = document.querySelectorAll(".progress-bar");
var progressBarContainer = document.querySelector(".bar-scroll");

let start;

document.onscroll = function(){
    if (isElementInViewport(progressBarContainer)){
        if(!start){
            window.requestAnimationFrame(loop);
        }
    } else{
        start = null;
    }
};

const animationTime = 1000;

function loop(timestamp){
    if(!start) {
        start = timestamp;
    }
    
    const elapsed = timestamp - start;
    const progress = elapsed / animationTime;
    
    progressBar.forEach((bar) => {
        const progressComplete = parseInt(bar.getAttribute("data-complete"));
        const width = progress < 1 ? Math.ceil(progress * progressComplete) : progressComplete;
        
        if (width <= progressComplete) {
            bar.style.width = width + "%";
            bar.innerHTML = width + "%";
        }
    });
    
    if (progress < 1){
        window.requestAnimationFrame(loop);
    }
}


