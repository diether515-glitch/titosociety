const picks=$$("#picks .tile"),sum=$("#sum"),ask=$("#ask");
function upd(){const p=picks.filter(b=>b.getAttribute("aria-pressed")==="true").map(b=>b.dataset.n);
  sum.textContent=p.length?"You picked: "+p.join(", ")+".":"Nothing picked yet.";ask.disabled=!p.length;return p}
picks.forEach(b=>b.addEventListener("click",()=>{b.setAttribute("aria-pressed",b.getAttribute("aria-pressed")!=="true");upd()}));
ask.addEventListener("click",()=>{const p=upd();if(!p.length)return;
  TS.send(`Hi Titos Society! I’m interested in your merch: ${p.join(", ")}. Can you share details on the next drop?`);$("#mnote").hidden=false});
