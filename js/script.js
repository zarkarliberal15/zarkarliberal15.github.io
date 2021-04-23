// var clockId = document.getElementById("clock");
//     setInterval(myClock, 1000);
  
//     function myClock() {
//       var time = new Date();
//       clockId.innerHTML = time.toLocaleTimeString();
//     }

var myNav = document.getElementById('navBackground');

window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 1 || document.documentElement.scrollTop >= 1  ) {
        myNav.classList.add("bg-dark");
      
       
    } 
    else {
       
        myNav.classList.remove("bg-dark");
       
    }
};