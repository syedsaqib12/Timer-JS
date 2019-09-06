window.onload = function() {
  var Timer = document.getElementById('time');
  var Start = document.getElementById('start');
  var Restart = document.getElementById('restart');
  var thirtyMins = document.getElementById('thirtyMins');
  var ThirtySeconds=document.getElementById('thirtySeconds');
  var time = 0;
  var running = 0;
   var timeLeft = 30;
  var secs, mins, tenths;
  
  
  ThirtySeconds.onclick = function() {
	  
	  var timeAdd=setInterval(countBegins,1000);
  }  
   thirtyMins.onclick = function() {

   	  var timeAdd=setInterval(countBegins,1000);
   };
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
  };
  running = 0
      Start.innerHTML = "Play";
   
   
   
   
   /*thirtyMins.onclick = function() {
		if(thirtyMins.innerHTML === "Play" && running === 0) {
		  running = 1;
		  increment()
		  thirtyMins.innerHTML = "Pause";
		} else{
		  running = 0
		  Start.innerHTML = "Play";
	   }
   };
  function addFifteenMins() 
  {
    if (running === false) {
        if (mins <= 45) {
            mins += 15;
            outputMins.innerHTML = `${mins}`;
        }
    }
  }
  function addFiveMins() 
  {
    if (running === false) {
        if (mins <= 55) {
            mins += 5;
            if (mins < 10) {
                outputMins.innerHTML = `0${mins}`;
            }
            else {
                outputMins.innerHTML = `${mins}`;
            }
        }
    }
 }
  
  
  

 
  
  
  
  
  
   /*function addThirtySec() {
    if (running === 0) {
        if (sec < 60 && mins < 60) {
            sec += 30;
            outputSec.innerHTML = `${sec}`;
        }
        if (sec == 60) {
            if (mins <= 59) {
                mins++
                sec = 0;
                outputSec.innerHTML = `0${sec}`;
                if (mins < 10) {
                    outputMins.innerHTML = `0${mins}`;
                }
                else {
                    outputMins.innerHTML = `${mins}`;
                }

            }
        }

    }
}; */
  
  
  
  
  
  
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
  
  
  function countBegins() {	 
			time++;
			tenths = time % 10;
		   if(timeLeft == 0)
		   {
			   Timer.innerHTML = "00:00:00";
		   }
		   else
		   {
		 Timer.innerHTML = "00:"+parseInt(timeLeft,10)+":0"+tenths;
		 timeLeft--;
		   }
  }
 
  

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
