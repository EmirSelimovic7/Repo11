var temps = [
    [31, 32, 19, 37],
    [29, 27, 55, 36],
    [17, 27, 42, 46],
    [29, 52, 21, 64],
    [91, 27, 31, 61]
]; 

function myArrayFunction(arr) {
    var newTemps = [...arr];
    var averageDayTemp = [];

    var sum = 0;
    var count = 0;
    var avg = 0;
    for (var i=0; i < newTemps.length; i++) {
      if(i==0) {
      for (var j=0; j < newTemps[i].length; j++) {
        
        sum += newTemps[i][j];
    }
   avg = sum / newTemps[i].length;
   averageDayTemp.push(avg);
  }

  if(i==1) {
    sum = 0;
    for (var j=0; j < newTemps[i].length; j++) {
      
      sum += newTemps[i][j];
  }
 avg = sum / newTemps[i].length;
 averageDayTemp.push(avg);
}

if(i==2) {
  sum = 0;
  for (var j=0; j < newTemps[i].length; j++) {
    
    sum += newTemps[i][j];
}
avg = sum / newTemps[i].length;
averageDayTemp.push(avg);
}

if(i==3) {
  sum = 0;
  for (var j=0; j < newTemps[i].length; j++) {
    
    sum += newTemps[i][j];
}
avg = sum / newTemps[i].length;
averageDayTemp.push(avg);
}

if(i==4) {
  sum = 0;
  for (var j=0; j < newTemps[i].length; j++) {
    
    sum += newTemps[i][j];
}
avg = sum / newTemps[i].length;
averageDayTemp.push(avg);
}
    }
    return averageDayTemp;
    }
    // Only change code above this line
    


console.log(myArrayFunction(temps));
module.exports = myArrayFunction;