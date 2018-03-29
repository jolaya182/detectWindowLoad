(function(givenfunctionx){
// function givenfunctionx() {
//   console.log('DOM is ready.')
// }


//run this function in the begining so that the initial page load is detected
ready(givenfunctionx);

function ready(callbackFunction){
  if(document.readyState != 'loading')
    callbackFunction()
  else
    document.addEventListener("DOMContentLoaded", callbackFunction)
}

//add extra functionality to this method
let oldXHR = window.XMLHttpRequest;

function newXHR() {
    //create an new instance of this method  
    let realXHR = new oldXHR();
    //asign eventListeners to the method
    realXHR.addEventListener("readystatechange", function() {
        if(realXHR.readyState === 0){ 

            let count=0;
            console.log("UNSENT	 0", document.readyState);
            // setInterval(function(){console.log("count:", count++); }, 1000);
        }
        if(realXHR.readyState === 1){ 

            let count=0;
            console.log("OPENED	 1", document.readyState);
            // setInterval(function(){console.log("count:", count++); }, 1000);
        }
        if(realXHR.readyState === 2){ 

            let count=1;
            console.log("HEADERS_RECEIVED 2", document.readyState);
            // setInterval(function(){console.log("count:", count++); }, 1000);
        }
        if(realXHR.readyState === 3){ 

            let count=0;
            console.log("loading 3", document.readyState);
            // setInterval(function(){console.log("count:", count++); }, 1000);
        }
        if(realXHR.readyState==4 && realXHR.status==200){
            // afterAjaxComplete() //run your code here
            console.log("detected 4", document.readyState);
            //here the given function will run at any ajax request 
            ready(givenfunctionx)

        }
    }, false);
    return realXHR;
}
window.XMLHttpRequest = newXHR;
//replace this current functions with the any given function
})(function(){console.log("replace me!")})
