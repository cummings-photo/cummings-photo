window.onkeyup = function (e) {
  let key = e.keyCode ? e.keyCode : e.which;
  if (key === 38) {
   try { window.location.replace("https://studio-cjc.com/html-code/campaigns.html"); } 
   catch(e) { window.location = "https://studio-cjc.com/html-code/campaigns.html"; };
  } else if (key === 40) {
   try { window.location.replace("https://studio-cjc.com/html-code/roraintel.html"); } 
   catch(e) { window.location = "https://studio-cjc.com/html-code/roraintel.html"; };
  } 
}
