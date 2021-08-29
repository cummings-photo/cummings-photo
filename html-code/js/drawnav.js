window.onkeyup = function (e) {
  let key = e.keyCode ? e.keyCode : e.which;
  if (key === 38) {
   try { window.location.replace("https://studio-cjc.com/html-code/roraintel.html"); } 
   catch(e) { window.location = "https://studio-cjc.com/html-code/roraintel.html"; };
  } else if (key === 40) {
   try { window.location.replace("https://studio-cjc.com/html-code/index.html"); } 
   catch(e) { window.location = "https://studio-cjc.com/html-code/index.html"; };
  } else if (key === 39) {
   try { window.location.replace("https://studio-cjc.com/html-code/MJ.html"); } 
   catch(e) { window.location = "https://studio-cjc.com/html-code/MJ.html"; };
  } 
}
