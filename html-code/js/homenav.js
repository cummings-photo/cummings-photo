window.onkeyup = function (e) {
  let key = e.keyCode ? e.keyCode : e.which;
  if (key === 40) {
   try { window.location.replace("https://studio-cjc.com/html-code/photos.html"); } 
   catch(e) { window.location = "https://studio-cjc.com/html-code/photos.html"; };
  } 
}