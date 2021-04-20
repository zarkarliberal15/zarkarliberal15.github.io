var clockId = document.getElementById("clock");
    setInterval(myClock, 1000);
  
    function myClock() {
      var time = new Date();
      clockId.innerHTML = time.toLocaleTimeString();
    }