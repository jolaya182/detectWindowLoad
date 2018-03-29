// window.onload = function(){
//   console.log("loading");
// }

//givenfunctionx comment this out
function givenfunctionx() {
  console.log('DOM is ready.')
}
//replace this current with the any given function
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




let btn = document.createElement("BUTTON");
let t = document.createTextNode("CLICK ME");
btn.appendChild(t);
document.body.appendChild(btn);


btn.addEventListener("click", getDocInfo);

function getDocInfo(){
  console.log("clicked", "document", document.readyState);
  // printNumbers()
  let xhr = new XMLHttpRequest();
  xhr.open("GET","http://localhost:3001");
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onload = function(data){
    if(this.status >= 200 && this.status < 300){
      // resolve(xhr.response);
      console.log("data,", data , "document", document.readyState);
      }
    else{ 
      // reject({status: this.status, statusText: xhr.statusText});
      console.log("no 200 status,", data);
    }
  }
  xhr.onerror = function(data){
    // reject({
    //   status: this.status,
    //   statusText: xhr.statusText
    // });
    console.log("error,", data);
  };
  xhr.send();
  console.log("clicked and sent", "document", document.readyState);

}



let x = document.createElement("IMG");
x.src = "http://digilander.libero.it/dragonale/img57.jpg";
document.body.appendChild(x);

let y = document.createElement("IMG");
y.src = "http://digilander.libero.it/dragonale/masenko.jpg";
document.body.appendChild(y);

let z = document.createElement("IMG");
z.src = "http://digilander.libero.it/dragonale/supersayan2.jpg";
document.body.appendChild(z);

// 'loadstart' fires first, then 'load', then 'loadend'

z.addEventListener('load', function(e) {
  console.log('Image loaded', document.readyState);
});

z.addEventListener('loadstart', function(e) {
  console.log('Image load started');
});

z.addEventListener('loadend', function(e) {
  console.log('Image load finished');
});

// if(document.readyState === 'loading' ){
//   console.log("currently loading");
// }
// if(document.readyState === 'interactive' ){
//   console.log("currently interactive");
// }
// if(document.readyState === 'complete' ){
//   console.log("currently completed");
// }


//  printNumbers();
function printNumbers(){
  for(let i =0 ; i < 100; i++){console.log(i,  document.readyState,window)}

}

//print when I am about to leave the page
window.onbeforeunload = function (event) { console.log("oh noes", document.readyState); }

