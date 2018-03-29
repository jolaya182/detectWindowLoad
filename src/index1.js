
// console.log("window.onload", window.onload);
// window.onload = function(){
//   console.log("loading");
// }

//have at timer that runs
//before the start load

let d = document.readyState;
console.log("document ready", d)


let start = new Date().getTime();
//print to the console when it starts
window.addEventListener("loadstart", function(){
  console.log("onloadstart is ", new Date().getTime()); 
})

//print to the console when it is loading
window.addEventListener("load", function(){
  console.log("loading time is ", new Date().getSeconds(), "event", document.readyState);
})


//print to the console when it has ended
window.addEventListener("DOMContentLoaded", function(event){
  console.log("loading ended ", new Date().getSeconds(), "event", document.readyState);
});

//print when I am about to leave the page
window.onbeforeunload = function (event) { console.log("oh noes", document.readyState); }


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

let btn = document.createElement("BUTTON");
let t = document.createTextNode("CLICK ME");
btn.append(t);
document.body.appendChild(btn);

btn.addEventListener("click", function(){
  console.log("clicked", "document", document.readyState);
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

});


