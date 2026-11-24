const q=$("#q"),items=$$("#list details"),none=$("#none");
q.addEventListener("input",()=>{const t=q.value.trim().toLowerCase();let c=0;
  items.forEach(d=>{const m=!t||d.textContent.toLowerCase().includes(t);d.hidden=!m;if(m)c++;d.open=!!t&&m&&c===1});
  none.hidden=c>0});
