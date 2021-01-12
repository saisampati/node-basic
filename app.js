
var array = [10, 25, 35, 45, 5];
    // Getting sum of numbers
    var sum = array.reduce(function(actualValue, PresentValue){
        return actualValue + PresentValue;
    }, 0);
    
    console.log(sum);
    

