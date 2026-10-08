// aufgaben.js – wiederverwendbare Aufgabentypen für alle Übungen und Trainings.
//
//   mc      Auswahl          { typ:'mc', frage, opts:[...], l:0, x:'Erklärung' }
//   bau     Satzbau          { typ:'bau', frage, steine:[...richtige Reihenfolge], alt:[[...]], x }
//   zu      Paare zuordnen   { typ:'zu', frage, paare:[[links, rechts], ...], x }
//   ordnen  Reihenfolge      { typ:'ordnen', frage, zeilen:[...richtige Reihenfolge], x }
//   matrix  Zeilen zuordnen  { typ:'matrix', frage, wahl:['richtig','falsch'], aussagen:[[text, index|true|false], ...] }
//   lesen   Text + Fragen    { typ:'lesen', frage, fragen:[{ f, opts:[...], l }], ... }
//   luecke  Lückentext       { typ:'luecke', frage, text:'… {0} … {1} …', gaps:[{ opts:[...], l }] }
//
// Lesetext (optional bei allen Typen): text + textTitel, oder posts:[{ name, info, text }]
// Im Text: **fett**, ___ = Lücke, Leerzeile = neuer Absatz.
//
// zeige(el, aufgabe, { onErgebnis(richtig, {p, pm, teile}) }) → Promise (löst beim Klick auf „Weiter“ auf)
import { esc } from './db.js?v=20261008a';

export const mische = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const ziehe = (a, n) => mische(a).slice(0, n);
export const fmt = t => esc(t).replace(/_{3,}/g, '<span class="luecke">…</span>').replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
const absaetze = t => String(t).split(/\n{2,}/).map(p => `<p>${fmt(p).replace(/\n/g, '<br>')}</p>`).join('');
const norm = s => s.replace(/\s+/g, ' ').replace(/\s+([,.!?])/g, '$1').replace(/[.!]$/, '').trim();
const zeilenVon = a => a.aussagen || a.fragen || [];
const richtigerIndex = r => r === true ? 0 : r === false ? 1 : r;

/** Maximale Punkte einer Aufgabe */
export const punkte = a => (a.typ === 'matrix' || a.typ === 'lesen') ? zeilenVon(a).length : a.typ === 'luecke' ? a.gaps.length : 1;

export function lesetext(a) {
  if (a.posts) return `<div class="forum">${a.posts.map(p => `<div class="post"><div class="post-kopf"><b>${esc(p.name)}</b>${p.info ? ` <span>${esc(p.info)}</span>` : ''}</div>${absaetze(p.text)}</div>`).join('')}</div>`;
  if (a.text && a.typ !== 'luecke') return `<div class="lesetext">${a.textTitel ? `<div class="lt-titel">${esc(a.textTitel)}</div>` : ''}${absaetze(a.text)}</div>`;
  return '';
}

export function zeige(el, a, o = {}) {
  return new Promise(res => {
    el.innerHTML = `<div class="aufgabe">${a.kontext ? `<div class="kontext">${esc(a.kontext)}</div>` : ''}
      <div class="frage">${fmt(a.frage || '')}</div>${lesetext(a)}<div class="koerper"></div><div class="fb"></div></div>`;
    const k = el.querySelector('.koerper'), fbEl = el.querySelector('.fb');
    let gemeldet = false;
    const fertig = (richtig, extraHtml = '', det) => {
      if (gemeldet) return; gemeldet = true;
      det = det || { p: richtig ? 1 : 0, pm: 1, teile: [[a.id, richtig]] };
      const kopf = det.pm > 1 ? (richtig ? 'Alles richtig!' : `${det.p} von ${det.pm} richtig`) : (richtig ? (o.lobText || zufallLob()) : (o.fehlerText || 'Leider nicht richtig.'));
      fbEl.innerHTML = `<div class="feedback ${richtig ? 'ok' : 'nein'}"><b>${kopf}</b>${extraHtml}${a.x ? `<div>${fmt(a.x)}</div>` : ''}</div>
        <button class="btn weiter">Weiter →</button>`;
      o.onErgebnis && o.onErgebnis(richtig, det);
      const b = fbEl.querySelector('.weiter'); b.focus({ preventScroll: true });
      b.onclick = () => res({ richtig, ...det });
      fbEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    };
    ({ mc, bau, zu, ordnen, matrix, lesen: matrix, luecke })[a.typ](k, a, fertig);
  });
}
const LOB = ['Richtig!', 'Genau!', 'Sehr gut!', 'Stimmt!', 'Perfekt!', 'Prima!'];
const zufallLob = () => LOB[Math.floor(Math.random() * LOB.length)];
const pruefKnopf = '<button class="btn pruefen-voll" disabled>Prüfen</button>';

function mc(k, a, fertig) {
  const opts = mische(a.opts.map((t, i) => ({ t, ok: i === a.l })));
  k.innerHTML = `<div class="optionen">${opts.map((o, i) => `<button class="opt" data-i="${i}">${fmt(o.t)}</button>`).join('')}</div>`;
  k.querySelectorAll('.opt').forEach(b => b.onclick = () => {
    const o = opts[+b.dataset.i];
    k.querySelectorAll('.opt').forEach((x, i) => { x.disabled = true; if (opts[i].ok) x.classList.add('richtig'); });
    if (!o.ok) b.classList.add('falsch');
    fertig(o.ok);
  });
}

function bau(k, a, fertig) {
  let vorrat = mische(a.steine.map((t, i) => ({ t, i })));
  if (vorrat.length > 2 && vorrat.every((x, i) => x.i === i)) vorrat = vorrat.reverse();
  let ziel = [], fest = false;
  k.innerHTML = `<div class="bau-ziel"></div><div class="bau-vorrat"></div>
    <div class="zeile"><button class="btn zweit klein eins" title="Letzten Baustein zurücklegen">⌫ Letzten zurück</button><button class="btn zweit klein zur">↺ Alle zurück</button><button class="btn pruef" disabled>Prüfen</button></div>`;
  const zEl = k.querySelector('.bau-ziel'), vEl = k.querySelector('.bau-vorrat'), pr = k.querySelector('.pruef');
  const male = () => {
    zEl.innerHTML = ziel.map((s, n) => `<button class="stein" data-z="${n}">${esc(s.t)}</button>`).join('');
    vEl.innerHTML = vorrat.map((s, n) => `<button class="stein" data-v="${n}">${esc(s.t)}</button>`).join('');
    pr.disabled = vorrat.length > 0 || fest;
    if (fest) return;
    zEl.querySelectorAll('.stein').forEach(b => b.onclick = () => { vorrat.push(ziel.splice(+b.dataset.z, 1)[0]); male(); });
    vEl.querySelectorAll('.stein').forEach(b => b.onclick = () => { ziel.push(vorrat.splice(+b.dataset.v, 1)[0]); male(); });
  };
  male();
  k.querySelector('.zur').onclick = () => { if (fest) return; vorrat = vorrat.concat(ziel); ziel = []; male(); };
  k.querySelector('.eins').onclick = () => { if (fest || !ziel.length) return; vorrat.push(ziel.pop()); male(); };
  pr.onclick = () => {
    fest = true;
    const satz = norm(ziel.map(s => s.t).join(' '));
    const loes = [a.steine, ...(a.alt || [])].map(x => norm(x.join(' ')));
    const ok = loes.includes(satz);
    zEl.classList.add(ok ? 'richtig' : 'falsch'); male();
    k.querySelector('.zeile').remove();
    fertig(ok, ok ? '' : `<div>Richtig ist: <i>${esc(a.steine.join(' ').replace(/\s+([,.!?])/g, '$1'))}</i></div>`);
  };
}

function zu(k, a, fertig) {
  const links = mische(a.paare.map((p, i) => ({ t: p[0], i }))), R = mische(a.paare.map((p, i) => ({ t: p[1], i })));
  let wahl = null, fehler = 0, erledigt = 0;
  k.innerHTML = `<div class="zu-grid"><div class="zu-spalte">${links.map(x => `<button class="zu" data-s="L" data-i="${x.i}">${fmt(x.t)}</button>`).join('')}</div>
    <div class="zu-spalte">${R.map(x => `<button class="zu" data-s="R" data-i="${x.i}">${fmt(x.t)}</button>`).join('')}</div></div>
    <p class="klein leise" style="margin:8px 0 0">Tippe links und dann rechts an, was zusammenpasst.</p>`;
  k.querySelectorAll('.zu').forEach(b => b.onclick = () => {
    if (b.classList.contains('fertig')) return;
    if (!wahl || wahl.dataset.s === b.dataset.s) {
      if (wahl) wahl.classList.remove('gewaehlt');
      wahl = b; b.classList.add('gewaehlt'); return;
    }
    if (wahl.dataset.i === b.dataset.i) {
      [wahl, b].forEach(x => { x.classList.remove('gewaehlt'); x.classList.add('fertig'); x.disabled = true; });
      wahl = null; erledigt++;
      if (erledigt === a.paare.length) fertig(fehler === 0, fehler ? `<div>${fehler} Fehlversuch${fehler > 1 ? 'e' : ''} – jetzt sind alle Paare richtig verbunden.</div>` : '');
    } else {
      fehler++;
      [wahl, b].forEach(x => { x.classList.add('wackel'); setTimeout(() => x.classList.remove('wackel'), 400); });
      wahl.classList.remove('gewaehlt'); wahl = null;
    }
  });
}

function ordnen(k, a, fertig) {
  let vorrat = mische(a.zeilen.map((t, i) => ({ t, i })));
  if (vorrat.length > 2 && vorrat.every((x, i) => x.i === i)) vorrat = vorrat.reverse();
  let ziel = [], fest = false;
  k.innerHTML = `<div class="ord-ziel"></div><div class="ord-vorrat"></div>
    <div class="zeile"><button class="btn zweit klein eins" title="Letzten Baustein zurücklegen">⌫ Letzten zurück</button><button class="btn zweit klein zur">↺ Alle zurück</button><button class="btn pruef" disabled>Prüfen</button></div>`;
  const zEl = k.querySelector('.ord-ziel'), vEl = k.querySelector('.ord-vorrat'), pr = k.querySelector('.pruef');
  const male = () => {
    zEl.innerHTML = ziel.map((s, n) => `<button class="ord" data-z="${n}"><span class="ord-n">${n + 1}</span><span>${fmt(s.t).replace(/\n/g, '<br>')}</span></button>`).join('');
    vEl.innerHTML = vorrat.map((s, n) => `<button class="ord" data-v="${n}"><span class="ord-n">?</span><span>${fmt(s.t).replace(/\n/g, '<br>')}</span></button>`).join('');
    pr.disabled = vorrat.length > 0 || fest;
    if (fest) return;
    zEl.querySelectorAll('.ord').forEach(b => b.onclick = () => { vorrat.push(ziel.splice(+b.dataset.z, 1)[0]); male(); });
    vEl.querySelectorAll('.ord').forEach(b => b.onclick = () => { ziel.push(vorrat.splice(+b.dataset.v, 1)[0]); male(); });
  };
  male();
  k.querySelector('.zur').onclick = () => { if (fest) return; vorrat = vorrat.concat(ziel); ziel = []; male(); };
  k.querySelector('.eins').onclick = () => { if (fest || !ziel.length) return; vorrat.push(ziel.pop()); male(); };
  pr.onclick = () => {
    fest = true;
    const ok = ziel.every((s, n) => s.i === n);
    ziel.forEach((s, n) => zEl.children[n].classList.add(s.i === n ? 'richtig' : 'falsch'));
    k.querySelector('.zeile').remove();
    k.querySelectorAll('.ord').forEach(b => b.disabled = true);
    fertig(ok, ok ? '' : `<div>Richtige Reihenfolge:</div><ol class="loesung">${a.zeilen.map(z => `<li>${fmt(z).replace(/\n/g, '<br>')}</li>`).join('')}</ol>`);
  };
}

function matrix(k, a, fertig) {
  const wahl = a.wahl || ['richtig', 'falsch'];
  const rows = zeilenVon(a).map((r, i) => Array.isArray(r)
    ? { i, t: r[0], opts: wahl.map((w, j) => ({ w, j })), l: richtigerIndex(r[1]), eigen: false }
    : { i, t: r.f, opts: mische(r.opts.map((w, j) => ({ w, j }))), l: r.l, eigen: true });
  const ord = (a.mischen === false || a.typ === 'lesen') ? rows : mische(rows);
  const ant = {}, n = rows.length;
  k.innerHTML = `<div class="matrix">${ord.map((r, pos) => `<div class="mz${r.eigen ? ' eigen' : ''}" data-i="${r.i}">
      <div class="mz-t">${r.eigen ? `<span class="mz-n">${pos + 1}</span>` : ''}${fmt(r.t)}</div>
      <div class="mz-w">${r.opts.map(o => `<button class="mw" data-j="${o.j}">${fmt(o.w)}</button>`).join('')}</div></div>`).join('')}</div>${pruefKnopf}`;
  const pr = k.querySelector('.pruefen-voll');
  k.querySelectorAll('.mz').forEach(z => z.querySelectorAll('.mw').forEach(b => b.onclick = () => {
    z.querySelectorAll('.mw').forEach(x => x.classList.toggle('gewaehlt', x === b));
    ant[z.dataset.i] = +b.dataset.j;
    pr.disabled = Object.keys(ant).length < n;
  }));
  pr.onclick = () => {
    pr.remove();
    let p = 0; const teile = [];
    k.querySelectorAll('.mz').forEach(z => {
      const r = rows[+z.dataset.i], ok = ant[r.i] === r.l; if (ok) p++;
      teile.push([a.id + '_' + r.i, ok]);
      z.classList.add(ok ? 'ok' : 'nok');
      z.querySelectorAll('.mw').forEach(b => { b.disabled = true; const j = +b.dataset.j;
        if (j === r.l) b.classList.add('richtig'); else if (j === ant[r.i]) b.classList.add('falsch'); });
    });
    fertig(p === n, '', { p, pm: n, teile });
  };
}

function luecke(k, a, fertig) {
  const sel = a.gaps.map((g, n) => `<select class="lsel" data-g="${n}" aria-label="Lücke ${n + 1}"><option value="">(${n + 1}) …</option>${mische(g.opts.map((w, j) => ({ w, j }))).map(x => `<option value="${x.j}">${esc(x.w)}</option>`).join('')}</select>`);
  k.innerHTML = `<div class="lesetext brief">${a.textTitel ? `<div class="lt-titel">${esc(a.textTitel)}</div>` : ''}${absaetze(a.text).replace(/\{(\d+)\}/g, (m, n) => sel[+n] || m)}</div>${pruefKnopf}`;
  const pr = k.querySelector('.pruefen-voll'), sels = [...k.querySelectorAll('.lsel')];
  sels.forEach(s => s.onchange = () => { s.classList.toggle('gesetzt', s.value !== ''); pr.disabled = sels.some(x => x.value === ''); });
  pr.onclick = () => {
    pr.remove();
    let p = 0; const teile = [];
    sels.forEach(s => {
      const n = +s.dataset.g, g = a.gaps[n], ok = +s.value === g.l; if (ok) p++;
      teile.push([a.id + '_' + n, ok]); s.disabled = true; s.classList.add(ok ? 'ok' : 'nok');
      if (!ok) s.insertAdjacentHTML('afterend', `<span class="korr">✓ ${esc(g.opts[g.l])}</span>`);
    });
    fertig(p === a.gaps.length, '', { p, pm: a.gaps.length, teile });
  };
}

/** Kurztexte aller (Teil-)Aufgaben für die Aufgabenanalyse in der Konsole: { id: text } */
export function labels(a) {
  const kt = a.kontext ? a.kontext + ': ' : '', o = {}, rein = s => String(s).replace(/\*\*/g, '').replace(/\s+/g, ' ').trim().slice(0, 260);
  if (a.typ === 'matrix' || a.typ === 'lesen') {
    const wahl = a.wahl || ['richtig', 'falsch'];
    zeilenVon(a).forEach((r, i) => { o[a.id + '_' + i] = rein(kt + (Array.isArray(r) ? r[0] + ' → ' + wahl[richtigerIndex(r[1])] : r.f + ' → ' + r.opts[r.l])); });
  } else if (a.typ === 'luecke') {
    a.gaps.forEach((g, n) => {
      const pos = a.text.indexOf('{' + n + '}'), vor = a.text.slice(Math.max(0, pos - 45), pos).replace(/\{\d+\}/g, '…');
      o[a.id + '_' + n] = rein(kt + 'Lücke ' + (n + 1) + ': …' + vor + ' [' + g.opts[g.l] + ']');
    });
  } else if (a.typ === 'bau') o[a.id] = rein(kt + a.steine.join(' '));
  else if (a.typ === 'zu') o[a.id] = rein(kt + (a.frage || '') + ' – ' + a.paare.map(p => p[0]).join(' / '));
  else if (a.typ === 'ordnen') o[a.id] = rein(kt + (a.frage || '') + ' – ' + a.zeilen[0]);
  else o[a.id] = rein(kt + a.frage + ' → ' + a.opts[a.l]);
  return o;
}
/** Kurztext einer einfachen Aufgabe (für die Spiele) */
export const label = a => Object.values(labels(a))[0];
