  // const menuOpen = document.querySelector('.navbar-toggler');
  // const menuClose = document.querySelector('.menu-close');
  // const navbar = document.querySelector('.navbar');
  // const header = document.querySelector('.header');


  // menuOpen.addEventListener('click',function(){
  //   navbar.classList.add('active');
  // })
  // menuClose.addEventListener('click',function(){
  //   navbar.classList.remove('active');
  // })


  const navTabs = document.querySelectorAll('.nav-pills .nav-link');
  const navCounts = document.querySelectorAll('.tab-count');

navTabs.forEach(navTab => {
  navTab.addEventListener('click',function(){
    removeActive();
    let currentTab =  this.getAttribute("data-target");
    document.querySelector(currentTab).classList.add('active');   
  })
})

function removeActive(){
  navCounts.forEach(count => {
    count.classList.remove('active')
  })
}


const projects = document.querySelectorAll('.project');
const projectBtns = document.querySelectorAll('.project__nav-btn');
let firstProject = 0;
const totalProject = projects.length;
projects.forEach(project => {
  project.addEventListener('click',function(){
    hideAllProjects();
    hideAllBtns();
    if(firstProject === totalProject - 1){
      firstProject = 0;
    }
    else{
        firstProject++;
    }
    projects[firstProject].classList.add('active');
    projectBtns[firstProject].classList.add('active');
  })
})

function hideAllProjects(){
  projects.forEach(project => {
    project.classList.remove('active')
  })
}
function hideAllBtns(){
  projectBtns.forEach(btn => {
    btn.classList.remove('active')
  })
}



const header = document.querySelector('.header');
window.onscroll = function() {
  scrollFunction()
};
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
} 


