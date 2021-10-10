
let d
let t
setInterval(clock,1000);


function clock() {
    let today = new Date();
    t = today.toLocaleTimeString();
    d = today.toLocaleDateString();
    document.getElementById("spann").innerHTML = t+' on '+d;
}