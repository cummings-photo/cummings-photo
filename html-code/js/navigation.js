window.onkeyup = function (e) {
  let key = e.keyCode ? e.keyCode : e.which;
  if (key === 38) {
   try { window.location.replace("https://studio-cjc.com/html-code/index.html"); } 
   catch(e) { window.location = "https://studio-cjc.com/html-code/index.html"; };
  } else if (key === 40) {
   try { window.location.replace("https://studio-cjc.com/html-code/collage.html"); } 
   catch(e) { window.location = "https://studio-cjc.com/html-code/collage.html"; };
  } 
}

