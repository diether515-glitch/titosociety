const form=$("#regForm"),f=form.elements,err=$("#err");
form.addEventListener("submit",e=>{
  e.preventDefault();let bad=null;
  ["first","last","city","phone"].forEach(k=>{const ok=f[k].value.trim();f[k].classList.toggle("bad",!ok);if(!ok&&!bad)bad=f[k]});
  if(!bad&&!f.agree.checked)bad=f.agree;
  if(bad){err.textContent="Please fill in the required fields and accept the terms.";bad.focus();return}
  const v=k=>f[k].value.trim();
  const txt=`Hi Titos Society! I’d like to join.\nName: ${v("first")} ${v("last")}${v("nick")?` (${v("nick")})`:""}\nCity: ${v("city")}\nPhone: ${v("phone")}\nVehicle: ${v("car")||"n/a"}\nPlate: ${v("plate")||"n/a"}\nWhy I want to join: ${v("why")||"n/a"}\nI accept the Titos Society terms and community rules.`;
  TS.send(txt);$("#out").value=txt;$("#s1").hidden=true;$("#s2").hidden=false;$("#s2 h2").focus();
});
