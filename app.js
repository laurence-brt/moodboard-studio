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

const inputs = document.querySelectorAll(".contact-input");

inputs.forEach((ipt) => {
    ipt.addEventListener("focus",() =>{
     ipt.parentNode.classList.add("focus");
     ipt.parentNode.classList.add("not-empty");
});
ipt.addEventListener("blur",() => {
    if (ipt.value==""){
         ipt.parentNode.classList.remove("not-empty");    
    }
             ipt.parentNode.classList.remove("focus");     
}); 
});  



