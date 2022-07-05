function Stopwatch (){
  let startTime, stopTime, duration = 0;
  let started = false;
  this.start = function(){
    if(started)return 'stopwatch is already started';
      let date = new Date();
    startTime = date.getTime();
    started = true;
    return "stopwatch started"
  
    
  }
  this.stop = function(){
    if(!started) return "stopwatch is not started";
    let date = new Date();
    stopTime = date.getTime();
    duration = stopTime - startTime;
    started = false;
    return duration/1000 + "seconds";
    
  }
}
