const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const TS={MSG:"https://m.me/61595237911390",send(txt){try{navigator.clipboard.writeText(txt).catch(()=>{})}catch(_){}const w=window.open(TS.MSG,"_blank");if(w)w.opener=null}};
document.documentElement.classList.add("js");
const mb=$("#mb"),nav=$("#nav");
mb.addEventListener("click",()=>{const o=nav.classList.toggle("open");mb.setAttribute("aria-expanded",o)});
nav.addEventListener("click",e=>{if(e.target.tagName==="A")nav.classList.remove("open")});
let n=0;const h=$("h1");h.innerHTML=h.textContent.trim().split(/\s+/).map(w=>`<span class="w"><i style="--n:${n++}">${w}</i></span>`).join(" ");
const tr=$(".track");if(tr)tr.innerHTML=tr.innerHTML.repeat(4);
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.15});
$$(".tags b,.vals>div,.tile,details,.about p,.lead,.acts,.qz,h2").forEach(el=>{el.style.setProperty("--d",Math.min([...el.parentNode.children].indexOf(el),6)*90+"ms");el.classList.add("rv");io.observe(el)});

const hd=$("header"),rs=document.documentElement.style;let ly=0;
addEventListener("scroll",()=>{const y=scrollY,mx=document.documentElement.scrollHeight-innerHeight;rs.setProperty("--p",mx>0?y/mx:0);hd.classList.toggle("hide",y>ly&&y>120&&!nav.classList.contains("open"));ly=y},{passive:true});
addEventListener("pointermove",e=>{rs.setProperty("--mx",e.clientX+"px");rs.setProperty("--my",e.clientY+"px")},{passive:true});
const pt=$(".pt");
$$("a[href]").forEach(a=>{const h=a.getAttribute("href");if(!/^[\w-]+\.html$/.test(h))return;
  a.addEventListener("click",e=>{if(e.metaKey||e.ctrlKey||e.shiftKey||matchMedia("(prefers-reduced-motion:reduce)").matches)return;e.preventDefault();pt.classList.add("go");setTimeout(()=>{location.href=h},450)})});
addEventListener("pageshow",e=>{if(e.persisted)pt.classList.remove("go")});
