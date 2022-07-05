function Stopwatch (){
  let startTime, stopTime, duration = 0;
  let started = false;
  let getTime = function(){
    let date = new Date();
    return date.getTime();
  }
  this.start = function(){
    if(started)return 'stopwatch is already started';
    startTime = getTime();
    started = true;
    return "stopwatch started"; 
  }
  this.stop = function(){
    if(!started) return "stopwatch is not started";
   
    stopTime = getTime()
    duration = stopTime - startTime;
    started = false;
    return duration/1000 + "seconds";
    
  }
}
