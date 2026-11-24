function buildPdf(d, sigUrl, dateStr, ref) {
  const N = '#06141f', T = '#22d3ee';
  
  const sec = (t) => `<div style="margin:22px 0 8px;font-size:14px;font-weight:700;color:${N};border-left:4px solid ${T};padding-left:8px;text-transform:uppercase;letter-spacing:.5px;">${esc(t)}</div>`;
  const para = (t) => `<div style="font-size:12px;line-height:1.6;color:#334155;margin-bottom:8px;">${esc(t)}</div>`;
  const dot = (t) => `<div style="display:flex;margin-bottom:6px;font-size:11.5px;line-height:1.5;"><div style="width:6px;height:6px;border-radius:50%;background:#0891b2;margin:5px 8px 0 0;flex:none;"></div><div style="color:#334155;">${esc(t)}</div></div>`;
  const box = (inner) => `<div style="background:#ecfeff;border-left:4px solid ${T};border-radius:4px;padding:12px 16px;margin:10px 0;">${inner}</div>`;
  
  const thStyle = "background:#f8fafc;color:#64748b;font-size:10px;font-weight:700;text-transform:uppercase;padding:6px 10px;border:1px solid #cbd5e1;width:50%;";
  const tdStyle = "background:#ffffff;color:#0f172a;font-size:12px;font-weight:600;padding:8px 10px;border:1px solid #cbd5e1;width:50%;word-break:break-word;";

  const pageHeader = (title) => `
    <div style="background:${N};border-bottom:3px solid ${T};padding:16px 30px;display:flex;justify-content:space-between;align-items:center;">
      <div>
        <div style="font-size:16px;font-weight:700;color:#ffffff;">Titos Society Membership Agreement</div>
        <div style="font-size:10px;color:${T};margin-top:2px;">Reference: ${esc(ref)}</div>
      </div>
      <div style="font-size:11px;color:#94a3b8;text-align:right;">Page <span class="page-num"></span></div>
    </div>`;

  const pageFooter = `
    <div style="margin-top:30px;padding-top:10px;border-top:1px solid #cbd5e1;display:flex;justify-content:space-between;font-size:10px;color:#64748b;">
      <span>Titos Society | Your Friendly Titos</span>
      <span>No Hate. Potpot’an lang sa daan.</span>
    </div>`;

  const p1 = `
    <div style="padding:40px;background:#ffffff;font-family:Arial,sans-serif;box-sizing:border-box;">
      <div style="background:${N};border-bottom:4px solid ${T};padding:24px 30px;border-radius:6px 6px 0 0;margin-bottom:20px;">
        <div style="font-size:20px;font-weight:800;color:#ffffff;text-transform:uppercase;">Membership Application</div>
        <div style="font-size:11px;color:${T};margin-top:4px;">Reference No. <b>${esc(ref)}</b> &bull; Date: ${esc(dateStr)}</div>
      </div>

      ${sec('Member Information')}
      <table style="width:100%;border-collapse:collapse;margin-bottom:15px;">
        <tr><th style="${thStyle}">Full Name</th><th style="${thStyle}">Preferred Name / Nickname</th></tr>
        <tr><td style="${tdStyle}">${esc(d.fullName)}</td><td style="${tdStyle}">${esc(d.nickname || 'N/A')}</td></tr>
        <tr><th style="${thStyle}">City / Location</th><th style="${thStyle}">Phone Number</th></tr>
        <tr><td style="${tdStyle}">${esc(d.city)}</td><td style="${tdStyle}">${esc(d.phone)}</td></tr>
        <tr><th colspan="2" style="${thStyle}text-align:left;">Facebook Profile / Contact</th></tr>
        <tr><td colspan="2" style="${tdStyle}">${esc(d.facebook || 'N/A')}</td></tr>
        <tr><th style="${thStyle}">Vehicle Make & Model</th><th style="${thStyle}">Plate Number</th></tr>
        <tr><td style="${tdStyle}">${esc(d.vehicle || 'N/A')}</td><td style="${tdStyle}">${esc(d.plate || 'N/A')}</td></tr>
        <tr><th colspan="2" style="${thStyle}text-align:left;">Reason for Joining</th></tr>
        <tr><td colspan="2" style="${tdStyle}font-weight:normal;">${esc(d.reason || 'N/A')}</td></tr>
      </table>

      ${sec('Membership Process')}
      ${para(TERMS.process)}

      ${sec('Our Promise: Safety First')}
      ${box(`<div style="font-size:12px;line-height:1.5;color:#0e7490;font-weight:600;">${esc(TERMS.promise)}</div>`)}
      
      ${pageFooter}
    </div>`;

  const p2 = `
    <div style="padding:40px;background:#ffffff;font-family:Arial,sans-serif;box-sizing:border-box;page-break-before:always;">
      ${pageHeader('Road Safety & Community Rules')}
      <div style="margin-top:20px;">
        ${sec('Road Safety & Community Rules')}
        <div style="font-size:11.5px;color:#475569;margin-bottom:10px;">As a Titos Society member, I agree to:</div>
        ${TERMS.rules.map(t => dot(t)).join('')}

        ${sec('Healthy, Respectful & Non-Toxic Community')}
        ${para(TERMS.community)}

        ${sec('Warning & Disciplinary System')}
        <div style="font-size:11.5px;color:#475569;margin-bottom:6px;">Violations of Society rules may result in:</div>
        ${TERMS.steps.map((s, i) => `<div style="font-size:11.5px;padding:6px 10px;margin-bottom:4px;background:#f8fafc;border-left:3px solid ${['#22d3ee','#f59e0b','#dc2626'][i]};border-radius:3px;"><b>Step ${i+1}:</b> ${esc(s)}</div>`).join('')}
      </div>
      ${pageFooter}
    </div>`;

  const p3 = `
    <div style="padding:40px;background:#ffffff;font-family:Arial,sans-serif;box-sizing:border-box;page-break-before:always;">
      ${pageHeader('Acknowledgment & Signature')}
      <div style="margin-top:20px;">
        ${sec('Member Acknowledgment & Acceptance')}
        <div style="font-size:11.5px;color:#475569;margin-bottom:8px;">By submitting this application, I confirm that:</div>
        ${TERMS.ack.map(t => dot(t)).join('')}

        <div style="margin-top:15px;">
          ${box(`
            <div style="font-weight:700;font-size:12px;color:#0e7490;">${esc(TERMS.accept)}</div>
            <div style="font-size:11px;line-height:1.4;color:#155e75;margin-top:4px;">${esc(TERMS.confirm)}</div>
          `)}
        </div>

        <div style="margin-top:25px;font-size:12px;">Applicant’s Full Name: <b style="font-size:13px;border-bottom:1px solid #0f172a;padding:0 10px;">${esc(d.fullName)}</b></div>

        <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-top:25px;">
          <div>
            <div style="width:280px;height:90px;border:1px solid #cbd5e1;border-radius:6px;display:flex;align-items:center;justify-content:center;background:#f8fafc;">
              <img src="${sigUrl}" alt="Signature" style="max-width:260px;max-height:80px;">
            </div>
            <div style="font-size:10px;color:#64748b;margin-top:4px;">Applicant Signature</div>
          </div>
          <div style="text-align:right;">
            <div style="font-weight:700;font-size:13px;border-bottom:1px solid #cbd5e1;padding-bottom:2px;min-width:140px;">${esc(dateStr)}</div>
            <div style="font-size:10px;color:#64748b;margin-top:4px;">Date Signed</div>
          </div>
        </div>

        <div style="margin-top:30px;font-size:12px;border-top:1px dashed #cbd5e1;padding-top:15px;">
          Administrator / Reviewer: <span style="display:inline-block;width:280px;border-bottom:1px solid #0f172a;"></span>
        </div>
      </div>
      ${pageFooter}
    </div>`;

  $('#pdfDoc').innerHTML = p1 + p2 + p3;
}
