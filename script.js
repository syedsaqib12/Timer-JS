window.onload = function() {
  var Timer = document.getElementById('time');
  var Start = document.getElementById('start');
  var Restart = document.getElementById('restart');
  var thirtyMins = document.getElementById('thirtyMins');

  var time = 0;
  var running = 0;
  var secs, mins, tenths;

  Start.onclick = function() {
    if(Start.innerHTML === "Play" && running === 0) {
      running = 1;
      increment()
      Start.innerHTML = "Pause";
      
      
    }else{
      running = 0
      Start.innerHTML = "Play";
     
     
    }
  };

  Restart.onclick = function() {
    Start.innerHTML = "Play";
    running = 0;
    time = 0;
    mins = 0;
    secs = 0;
    tenths = 0;
    Timer.innerHTML = mins+":"+secs+":"+tenths;
  }
  running = 0
      Start.innerHTML = "Play";
   
   
   
   
  /* thirtyMins.onclick = function() {
    if(thirtyMins.innerHTML === "Play" && running === 0) {
      running = 1;
      increment()
      thirtyMins.innerHTML = "Pause";
	} }else{
      running = 0
      Start.innerHTML = "Play";
   }
  
  
  
  
  
  
  */
  
  
  
  
  
  
  
  
  
  
/*thirtyMins.onclick = function ()
 {
    Start.innerHTML = "Play";
    running = 0;
    time = 0;
    mins = 0;
    secs = 0;
    tenths = 0;
    Timer.innerHTML = mins+":"+secs+":"+tenths;
  }; 
  
  
  
  
  
  */
  
  
  
  

  function increment() {
    if(running === 1) {
      setTimeout(function() {
        time++;
        mins = Math.floor(time / 10 / 60);

        secs = Math.floor(time / 10 % 60);
if (mins < 10) {
  mins = "0" + mins;
}
if (secs < 10) {
  secs = "0" + secs;
}

        tenths = time % 10;
        Timer.innerHTML = mins+":"+secs+":"+"0"+tenths;
        increment();
      },100);
    }
  }
}
