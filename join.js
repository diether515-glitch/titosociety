const form=$("#regForm"),f=form.elements,err=$("#err"),cv=$("#sigPad"),ctx=cv.getContext("2d"),btn=$("#submitBtn");
let drawing=false,ink=false;
function setup(){const r=cv.getBoundingClientRect(),k=window.devicePixelRatio||1;cv.width=r.width*k;cv.height=r.height*k;ctx.setTransform(k,0,0,k,0,0);ctx.lineWidth=2.5;ctx.lineCap=ctx.lineJoin="round";ctx.strokeStyle="#0f172a";ink=false}
setup();addEventListener("resize",()=>{if(!ink)setup()});
const pos=e=>{const r=cv.getBoundingClientRect();return{x:e.clientX-r.left,y:e.clientY-r.top}};
cv.addEventListener("pointerdown",e=>{drawing=true;cv.setPointerCapture(e.pointerId);const p=pos(e);ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(p.x+.1,p.y+.1);ctx.stroke();ink=true});
cv.addEventListener("pointermove",e=>{if(!drawing)return;const p=pos(e);ctx.lineTo(p.x,p.y);ctx.stroke()});
["pointerup","pointercancel","pointerleave"].forEach(t=>cv.addEventListener(t,()=>{drawing=false}));
$("#clearSig").addEventListener("click",()=>{ctx.clearRect(0,0,cv.width,cv.height);ink=false});
const v=k=>f[k].value.trim();
function fail(m,el){err.textContent=m;if(el)el.focus();return false}
function validate(){
  err.textContent="";form.querySelectorAll(".field").forEach(x=>x.classList.remove("bad"));
  for(const k of["first","last","city","phone"])if(!v(k)){f[k].classList.add("bad");return fail("Please fill in all required fields.",f[k])}
  if(!/^[+\d][\d\s()-]{6,}$/.test(v("phone"))){f.phone.classList.add("bad");return fail("Enter a valid phone number.",f.phone)}
  if(!ink)return fail("Please sign in the signature box.");
  if(!f.agree.checked)return fail("You must accept the terms and agreements.",f.agree);
  return true}
form.addEventListener("submit",async e=>{
  e.preventDefault();if(!validate())return;
  btn.disabled=true;btn.firstChild.textContent="Creating your PDF...";
  try{
    const date=new Date().toLocaleDateString("en-PH",{year:"numeric",month:"long",day:"numeric"});
    const ref="TS-"+new Date().toISOString().slice(0,10).replace(/-/g,"")+"-"+Math.random().toString(36).substring(2,6).toUpperCase();
    const data={fullName:v("first")+" "+v("last"),nickname:v("nickname"),city:v("city"),phone:v("phone"),facebook:v("facebook"),vehicle:v("vehicle"),plate:v("plate"),reason:v("reason")};
    buildPdf(data,cv.toDataURL("image/png"),date,ref);
    const name=`${v("last")}_${v("first")}_TitosSociety.pdf`;
    const blob=await html2pdf().set({margin:0,filename:name,image:{type:"jpeg",quality:.98},html2canvas:{scale:2,useCORS:true},jsPDF:{unit:"pt",format:"a4",orientation:"portrait"}}).from($("#pdfDoc")).output("blob");
    const dl=$("#dl");dl.href=URL.createObjectURL(blob);dl.download=name;
    btn.firstChild.textContent="Sending to the admins...";
    let sent=false;
    try{const fd=new FormData(form);fd.set("form-name","application");fd.set("ref",ref);fd.set("pdf",new File([blob],name,{type:"application/pdf"}));
      sent=(await fetch("/",{method:"POST",body:fd})).ok}catch(_){}
    const m=$("#okmsg");
    m.className=sent?"okmsg":"errmsg";
    m.textContent=sent?`Application ${ref} sent. The Titos Society admins received your details and PDF.`:"We couldn’t send it automatically. Download your PDF below and send it to diether515@gmail.com or on Messenger.";
    $("#s1").hidden=true;$("#s2").hidden=false;$("#s2").scrollIntoView({behavior:"smooth"});
  }catch(x){fail("Something went wrong: "+x.message)}
  finally{btn.disabled=false;btn.firstChild.textContent="Submit application"}
});
