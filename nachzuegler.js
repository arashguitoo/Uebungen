/* =========================================================
   NACHZÜGLER – für alle Live-Spiele (Leinwand der Lehrkraft)
   Wer später ins Spiel kommt, erscheint oben rechts und kann mit einem Klick
   einem Team / einer Gruppe / einem Tisch zugeordnet werden.
   Außerdem: „👥 umsortieren“ – alle Personen jederzeit verschieben.
   Aufruf im Spiel:  Nachzuegler.update({aktiv, spieler, feld, gruppen:[{k,name,emoji,farbe}], setze:(pid,k)=>…, plural, frage})
   ========================================================= */
window.Nachzuegler = (function(){
  let box=null, offen=false, cfg=null, zu=false, letzteNeu=0;
  const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  function css(){ if(document.getElementById("nz-css")) return; const st=document.createElement("style"); st.id="nz-css";
    st.textContent=`#nz{position:fixed;top:64px;right:14px;z-index:900;max-width:min(420px,92vw);font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:#1E2A44}
#nz .nz-knopf{border:0;border-radius:999px;background:#fff;color:#1E2A44;font-weight:800;padding:8px 14px;cursor:pointer;box-shadow:0 4px 14px rgba(0,0,0,.25);font-size:15px;float:right}
#nz .nz-knopf.neu{background:#F5B82E;animation:nzp 1.2s infinite}
@keyframes nzp{50%{transform:scale(1.06)}}
#nz .nz-karte{clear:both;margin-top:8px;background:#fff;border-radius:16px;padding:12px;box-shadow:0 8px 30px rgba(0,0,0,.3);max-height:70vh;overflow:auto}
#nz h4{margin:0 0 8px;font-size:16px}
#nz .nz-p{display:flex;flex-wrap:wrap;gap:6px;align-items:center;padding:6px 0;border-top:1px solid #E5E0D5}
#nz .nz-p b{min-width:90px;font-size:15px}
#nz .nz-g{border:2px solid var(--f,#ccc);background:#fff;border-radius:999px;padding:3px 10px;font-weight:700;font-size:14px;cursor:pointer;color:#1E2A44}
#nz .nz-g.an{background:var(--f,#ccc);color:#fff}
#nz .nz-klein{font-size:12.5px;color:#6B7280}`; document.head.appendChild(st); }
  function update(o){
    cfg=o; css();
    if(!box){ box=document.createElement("div"); box.id="nz"; document.body.appendChild(box);
      box.addEventListener("click", e=>{ const t=e.target.closest("[data-nz]"); if(t){ const [p,k]=t.dataset.nz.split("|"); cfg.setze(p,k); return; }
        if(e.target.closest("#nz-auf")){ offen=!offen; zu=false; male(); } if(e.target.closest("#nz-zu")){ e.preventDefault(); zu=true; offen=false; male(); } }); }
    male();
  }
  function male(){
    const o=cfg; if(!o || !o.aktiv){ box.innerHTML=""; return; }
    const G=o.gruppen||[], gk=new Set(G.map(g=>g.k));
    const alle=Object.entries(o.spieler||{}).filter(([,x])=>x&&x.name&&(x.ts||x.online||x.da)).sort((a,b)=>String(a[1].name).localeCompare(b[1].name));
    const neu=alle.filter(([,x])=>!gk.has(x[o.feld]) && (x.ts||x.online));
    if(neu.length>letzteNeu) zu=false; letzteNeu=neu.length;
    const wort=o.wort||"Team";
    const zeile=([p,x])=>`<div class="nz-p"><b>${esc(x.name)}${x.online===false?' <span class="nz-klein">(offline)</span>':""}</b>${G.map(g=>`<button class="nz-g ${x[o.feld]===g.k?"an":""}" style="--f:${g.farbe||"#6D28D9"}" data-nz="${p}|${g.k}">${g.emoji||""} ${esc(g.name)}</button>`).join("")}</div>`;
    let h=`<button class="nz-knopf ${neu.length?"neu":""}" id="nz-auf">${neu.length?`🙋 ${neu.length} neu – einordnen`:`👥 ${esc(o.plural||"Teams")} umsortieren`}</button>`;
    if(neu.length && !zu) h+=`<div class="nz-karte"><h4>🙋 Neu dabei – ${esc(o.frage||"in welches Team?")}</h4>${neu.map(zeile).join("")}<div class="nz-klein" style="margin-top:6px">Ein Klick genügt. Das Handy der Person springt sofort ins Spiel. <a href="#" id="nz-zu">später</a></div></div>`;
    else if(offen) h+=`<div class="nz-karte"><h4>👥 Alle ${esc(o.plural||"Teams")} – jederzeit verschieben</h4>${alle.map(zeile).join("")||'<span class="nz-klein">Noch niemand dabei.</span>'}</div>`;
    box.innerHTML=h;
  }
  return {update};
})();
