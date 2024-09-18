// let body = document.body;


// let profile = document.querySelector('.header .flex .profile');
//     document.querySelector('#user-btn').onclick = () => {
//         let currentTransform = getComputedStyle(profile).transform;

//         // Toggle between scale(0) and scale(1)
//         if (currentTransform === 'matrix(1, 0, 0, 1, 0, 0)' || currentTransform === 'none') {
//             profile.style.transform = 'scale(0)';
//         } else {
//             profile.style.transform = 'scale(1)';
//         }
//     }

//     let searchForm = document.querySelector('.header .flex .search-form');
//     document.querySelector('#search-btn').onclick = () => {
//         searchForm.classList.toogle('active');
//         profile.classList.toogle('active');
//     }



//     let sidebar = document.querySelector('.side-bar');
//     document.querySelector('#menu-btn').onclick = () => {
//     let currentTransform = getComputedStyle(sidebar).transform;

//     // Toggle between scale(0) and scale(1)
//     if (currentTransform === 'matrix(1, 0, 0, 1, 0, 0)' || currentTransform === 'none') {
//         sidebar.style.transform = 'scale(0)';
//         sidebar.style.left = "-31rem"
//         document.querySelector("body").style.padding  = 0
//     } else {
//         sidebar.style.transform = 'scale(1)';
//         sidebar.style.removeProperty("left")
//         document.querySelector("body").style.removeProperty("padding")
//     }
//     if(window,innerWidth < 1200){
//         sidebar.classList.remove('active');
//         body.classList.remove('active');
//     }
// }

// document.querySelector('.side-bar .close-side-bar').onclick = () => {
//     sidebar.classList.remove('active');
//     body.classList.remove('active');
// }












// window.onscroll = () => {
//     profile.classList.remove('active');
//     searchForm.classList.remove('active');
//     // if(window,innerWidth < 1200){
//     //     sidebar.classList.remove('active');
//     //     body.classList.remove('active');
//     // }
// }

let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () => {
   toggleBtn.classList.replace('fa-sun', 'fa-moon');
   body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () => {
   toggleBtn.classList.replace('fa-moon', 'fa-sun');
   body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
}

if (darkMode === 'enabled') {
   enableDarkMode();
}

toggleBtn.onclick = (e) => {
  let darkMode = localStorage.getItem('dark-mode');
   if (darkMode === 'disabled') {
      enableDarkMode();
   } else {
      disableDarkMode();
   }
}

let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () => {
   profile.classList.toggle('active');
   search.classList.remove('active');
}

let search = document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = () => {
   search.classList.toggle('active');
   profile.classList.remove('active');
}

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () => {
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
}

document.querySelector('#close-btn').onclick = () => {
   sideBar.classList.remove('active');
   body.classList.remove('active');
}

window.onscroll = () => {
   profile.classList.remove('active');
   search.classList.remove('active');

   if (window.innerWidth < 1200) {
      sideBar.classList.remove('active');
      body.classList.remove('active');
   }
}