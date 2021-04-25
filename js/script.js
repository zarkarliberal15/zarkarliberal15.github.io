// var clockId = document.getElementById("clock");
//     setInterval(myClock, 1000);
  
//     function myClock() {
//       var time = new Date();
//       clockId.innerHTML = time.toLocaleTimeString();
//     }




window.onscroll = function () { 
    var myNav = document.getElementById('navBackground');
    "use strict";
    if (document.body.scrollTop >= 1 || document.documentElement.scrollTop >= 1  ) {
        myNav.classList.add("bg-dark");
    } 
    else {
        myNav.classList.remove("bg-dark");
    }
};

  
function closeNews(){
    var news = document.getElementById("newsBlock");
    news.classList.remove("d-block");
    news.classList.add("d-none");
   
  }

  function showNews(){
    var news = document.getElementById("newsBlock");
    news.classList.add("d-block");
    news.classList.remove("d-none");
  }