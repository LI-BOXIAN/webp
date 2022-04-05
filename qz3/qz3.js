document.addEventListener("keydown",logkey);
function logkey(e) {
var key=e.key
var p=document.getElementById("123");
p.innerHTML+= key;
}
