// Simple typing effect for elements with data-typed='["line1","line2"]'
(function(){
  function typeLines(pre){
    try{
      const lines = JSON.parse(pre.getAttribute('data-typed') || "[]");
      let i = 0;
      function typeLine(){
        if(i >= lines.length) return;
        const text = lines[i];
        let j = 0;
        const lineEl = document.createElement('div');
        pre.appendChild(lineEl);
        const interval = setInterval(()=>{
          if(j <= text.length){
            lineEl.textContent = text.slice(0, j);
            j++;
          } else {
            clearInterval(interval);
            i++;
            setTimeout(typeLine, 400);
          }
        }, 20);
      }
      typeLine();
    }catch(e){/* ignore */}
  }
  document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelectorAll('section.terminal pre[data-typed]').forEach(typeLines);
  });
})();