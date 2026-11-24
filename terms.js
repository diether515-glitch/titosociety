const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const TERMS = {
  process: "Before becoming an official member, aspiring members are encouraged to attend at least two (2) community meetups or activities.",
  promise: "Titos Society promotes safe, legal, and responsible driving. No meetup, convoy, or personal thrill is worth risking a life.",
  rules: [
    "Follow all Philippine traffic laws and regulations.",
    "Drive safely and responsibly, and always wear a seatbelt.",
    "Never drive under the influence of alcohol or prohibited substances.",
    "Never participate in street racing or dangerous driving.",
    "Never drift, do burnouts, or perform reckless stunts on public roads.",
    "Avoid dangerous overtaking, driving against traffic, and road rage.",
    "Do not use a cellphone while driving; pull over safely if needed.",
    "Respect pedestrians, cyclists, motorcyclists, and all other road users.",
    "Follow reasonable safety instructions during group convoys and activities.",
    "Treat fellow members and the public with respect; no bullying, harassment, discrimination, or unnecessary drama."
  ],
  community: "Titos Society values good health, a balanced lifestyle, mental well-being, and peace of mind.",
  steps: ["Verbal warning", "Temporary suspension", "Removal from group activities or membership"],
  serious: "Serious violations may result in immediate suspension or removal.",
  reports: "Safety or conduct concerns may be reported to the Titos Society administrators.",
  ack: [
    "I have read and understood the Titos Society community standards and road-safety rules.",
    "I understand that Titos Society promotes safe, responsible, and lawful driving.",
    "I agree not to engage in street racing, reckless driving, or behavior that endangers others.",
    "I will respect fellow members, other road users, and the public.",
    "I will help maintain a non-toxic, respectful, and welcoming community."
  ],
  accept: "I ACCEPT THE TERMS & AGREEMENTS OF TITOS SOCIETY.",
  confirm: "By checking the box and submitting this form, I confirm that I have read, understood, and voluntarily agree to follow the Titos Society community standards and safety rules."
};
(function(){const h=(t)=>`<h3>${esc(t)}</h3>`,ul=a=>`<ul>${a.map(t=>`<li>${esc(t)}</li>`).join("")}</ul>`;
$("#termsBox").innerHTML=h("Membership process")+`<p>${esc(TERMS.process)}</p>`+h("Our promise: safety first")+`<p>${esc(TERMS.promise)}</p>`+h("Road safety & community rules")+"<p>As a Titos Society member, I agree to:</p>"+ul(TERMS.rules)+h("Healthy, respectful & non-toxic community")+`<p>${esc(TERMS.community)}</p>`+h("Warning & disciplinary system")+"<p>I understand that violations may result in:</p>"+ul(TERMS.steps)+h("Member acknowledgment & acceptance")+"<p>By submitting this application, I confirm that:</p>"+ul(TERMS.ack)})();
