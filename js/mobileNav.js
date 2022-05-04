function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }

  function toggle() {
     document.getElementById("hamburger").onclick = function() {
        on();
     }
     document.getElementById("overlay").onclick = function() {
         off();
     }
  }
window.addEventListener("load", toggle, false)