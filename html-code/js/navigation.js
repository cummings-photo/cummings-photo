
window.onkeyup = function (r) {
  let key = r.keyCode ? r.keyCode : r.which;
  if (key === 38) {
   try { window.location.replace("https://studio-cjc.com/html-code/index.html"); } 
   catch(e) { window.location = "https://studio-cjc.com/html-code/index.html"; };
  } else if (key === 40) {
   try { window.location.replace("https://studio-cjc.com/html-code/collage.html"); } 
   catch(e) { window.location = "https://studio-cjc.com/html-code/collage.html"; };
  } 
}

