// aufgaben.js – wiederverwendbare Aufgabentypen für alle Übungen.
//   mc   – Auswahl:   { typ:'mc', frage, opts:[...], l:0 (Index der richtigen Option), x:'Erklärung' }
//   bau  – Satzbau:   { typ:'bau', frage, steine:[...in richtiger Reihenfolge], alt:[[...],...], x }
//   zu   – Zuordnen:  { typ:'zu', frage, paare:[[links, rechts], ...], x }
// zeige(el, aufgabe, {onErgebnis}) → Promise<{richtig:boolean}> (löst beim Klick auf „Weiter“ auf)
import { esc } from './db.js';

export const mische = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const ziehe = (a, n) => mische(a).slice(0, n);
const fmt = t => esc(t).replace(/_{3,}/g, '<span class="luecke">…</span>').replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
const norm = s => s.replace(/\s+/g, ' ').replace(/\s+([,.!?])/g, '$1').trim();

export function zeige(el, a, o = {}) {
  return new Promise(res => {
    el.innerHTML = `<div class="aufgabe">${a.kontext ? `<div class="kontext">${esc(a.kontext)}</div>` : ''}
      <div class="frage">${fmt(a.frage || '')}</div><div class="koerper"></div><div class="fb"></div></div>`;
    const k = el.querySelector('.koerper'), fbEl = el.querySelector('.fb');
    let gemeldet = false;
    const fertig = (richtig, extraHtml = '') => {
      if (gemeldet) return; gemeldet = true;
      fbEl.innerHTML = `<div class="feedback ${richtig ? 'ok' : 'nein'}"><b>${richtig ? (o.lobText || zufallLob()) : (o.fehlerText || 'Leider nicht richtig.')}</b>${extraHtml}${a.x ? `<div>${fmt(a.x)}</div>` : ''}</div>
        <button class="btn weiter">Weiter →</button>`;
      const b = fbEl.querySelector('.weiter'); b.focus({ preventScroll: true });
      b.onclick = () => res({ richtig });
      o.onErgebnis && o.onErgebnis(richtig);
      fbEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    };
    if (a.typ === 'mc') mc(k, a, fertig);
    else if (a.typ === 'bau') bau(k, a, fertig);
    else if (a.typ === 'zu') zu(k, a, fertig);
  });
}
const LOB = ['Richtig!', 'Genau!', 'Sehr gut!', 'Stimmt!', 'Perfekt!', 'Prima!'];
const zufallLob = () => LOB[Math.floor(Math.random() * LOB.length)];

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
  const ids = a.steine.map((t, i) => ({ t, i }));
  let vorrat = mische(ids);
  if (vorrat.length > 2 && vorrat.every((x, i) => x.i === i)) vorrat = vorrat.reverse();
  let ziel = [];
  k.innerHTML = `<div class="bau-ziel"></div><div class="bau-vorrat"></div>
    <div class="zeile"><button class="btn zweit klein zur">↺ Zurücksetzen</button><button class="btn pruef" disabled>Prüfen</button></div>`;
  const zEl = k.querySelector('.bau-ziel'), vEl = k.querySelector('.bau-vorrat'), pr = k.querySelector('.pruef');
  let fest = false;
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
  pr.onclick = () => {
    fest = true;
    const satz = norm(ziel.map(s => s.t).join(' '));
    const loes = [a.steine, ...(a.alt || [])].map(x => norm(x.join(' ')));
    const ok = loes.includes(satz);
    zEl.classList.add(ok ? 'richtig' : 'falsch'); male();
    k.querySelector('.zeile').remove();
    fertig(ok, ok ? '' : `<div>Richtig ist: <i>${esc(loes[0])}</i></div>`);
  };
}

function zu(k, a, fertig) {
  const L = a.paare.map((p, i) => ({ t: p[0], i })), R = mische(a.paare.map((p, i) => ({ t: p[1], i })));
  const links = mische(L);
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
      if (erledigt === a.paare.length) fertig(fehler === 0, fehler ? `<div>${fehler} Fehlversuch${fehler > 1 ? 'e' : ''} – alle Paare sind jetzt richtig verbunden.</div>` : '');
    } else {
      fehler++;
      [wahl, b].forEach(x => { x.classList.add('wackel'); setTimeout(() => x.classList.remove('wackel'), 400); });
      wahl.classList.remove('gewaehlt'); wahl = null;
    }
  });
}

/** Kurztext einer Aufgabe für die Analyse in der Konsole */
export const label = a => ((a.kontext ? a.kontext + ': ' : '') + (a.typ === 'bau' ? a.steine.join(' ') : a.typ === 'zu' ? (a.frage + ' – ' + a.paare.map(p => p[0]).join(' / ')) : a.frage + ' → ' + a.opts[a.l])).replace(/\*\*/g, '');
