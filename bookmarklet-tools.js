// Don't actually run this file, run the individual boomarklets




// View html content (mostly bad alternative to a web inspector)
javascript: (function(){   var pre = document.createElement('pre');   pre.textContent = document.documentElement.outerHTML;   pre.style.whiteSpace = 'pre-wrap';   pre.style.wordWrap = 'break-word';   pre.style.fontSize = '14px';   pre.style.lineHeight = '1.4';   var win = window.open();   win.document.body.appendChild(pre); })();

// Run html
javascript:(function(){var  n=prompt(`Enter HTML Code:`); if (!n.startsWith(`<!`)) { 	n = `<!DOCTYPE html><html><body>`   n   `</body></html>`; } document.open();document.write(n);document.close();})();

// Run js
javascript:(function(){const  n=prompt(`Enter HTML Code:`); if (n.startsWith(`<!`)) { 	n = `<!DOCTYPE html><html><body>`   n   `</body></html>`; } document.open();document.write(n);document.close();})();

// Select html file to run
javascript:(function(){const i=document.createElement('input');i.type='file';i.accept='text/html';i.onchange=e=>{const f=e.target.files[0];if(f){const r=new FileReader();r.onload=e=>{document.open();document.write(e.target.result);document.close();};r.readAsText(f);}};i.click();})();


//---------


// BugMoog 0.3
javascript: (function(){const m = `<!DOCTYPE html><html><body><h1>BugMoog v0.3</h1><p>by pugmoog. <a href='https://pugmoog.com'>pugmoog.com</a></p>  <button data-url="chrome-dino">chrome dino game</button> <button data-url="cookieclicker">---</button> <button data-url="eaglercraft">minecraft</button> <br>  <button data-url="escaperoad">---</button> <button data-url="little-alchemy-two">---</button> <button data-url="little-alchemy">---</button> <br>  <button data-url="ragdoll-archers">---</button> <button data-url="slope-3">slope</button> <button data-url="snow-rider-4d">snow rider 3d</button> <br>  <button data-url="survival-race-4">survival race</button> <button data-url="war-the-knights">war the knights</button> <button data-url="---">---</button> <br>  <script>async function loadPage(url){const response=await fetch(url);const html=await response.text();document.open();document.write(html);document.close();}document.querySelectorAll('button').forEach(button=>{button.onclick=function(){loadPage("https://pugmoog.github.io/games/"+this.dataset.url);};});</script></body></html>`;document.open();document.write(m);document.close();})();   

// BugMoog 0.5
javascript: (function(){const m = `<!DOCTYPE html><html><body><h1>BugMoog v0.5</h1><p>by pugmoog. <a href='https://pugmoog.com'>pugmoog.com</a></p>  <button data-url="chrome-dino">chrome dino game</button> <button data-url="cookieclicker">cookie clicker</button> <button data-url="eaglercraft">minecraft</button> <br>  <button data-url="escaperoad">escape road</button> <button data-url="little-alchemy-two">little alchemy 2</button> <button data-url="little-alchemy">little alchemy</button> <br>  <button data-url="ragdoll-archers">ragdoll archers</button> <button data-url="slope-4">slope</button> <button data-url="snow-rider-4d">snow rider 3d</button> <br>  <button data-url="survival-race-4">survival race</button> <button data-url="war-the-knights">war the knights</button> <button data-url="---">---</button> <br> <script> async function loadPage(url){   document.open();document.write("<iframe id='gameFrame' style='position:fixed;left:0;top:0;width:100vw;height:100vh' src='"+url+"'></iframe><scr"+"ipt>setInterval(focus, 20);   function focus() {     var frame = document.getElementById('gameFrame');     frame.contentWindow.focus();   }</scr"+"ipt>");document.close();}  document.querySelectorAll('button').forEach(button=>{button.onclick=function(){loadPage("https://pugmoog.github.io/games/"+this.dataset.url);};});</script></body></html>`;document.open();document.write(m);document.close();})();   
