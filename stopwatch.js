funcion Stopwatch (){
  let startTime, stopTime, duration = 0;
  let started = false;
  this.start = function(){
    if(this.started) return 'stopwatch is already started';
    let date = new Date();
    startTime = date.getTime();
    started = true;
    return "stopwatch started"
  }
  this.stop = function(){
    if(!this.started) return 'stopwatch is not started';
    
  }
}
