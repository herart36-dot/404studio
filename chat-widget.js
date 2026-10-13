/*! 404 Studio AI chat widget
 *  Drop-in: <script src="chat-widget.js" defer></script> before </body>.
 *  Talks to the Supabase Edge Function "chat". Falls back to built-in
 *  answers if the function is unreachable, so visitors always get help. */
(() => {
  'use strict';
  if (window.__chat404) return;
  window.__chat404 = true;

  const CFG = Object.assign({
    url: 'https://acxrobzulaswsubfoghg.supabase.co/functions/v1/chat',
    key: 'sb_publishable_3Ehkqe8QtPVJQoh4FCZIVg_m2f8SOTD',
    viber: 'viber://chat?number=%2B639619679095',
    email: 'herart69@gmail.com',
    timeoutMs: 25000
  }, window.CHAT404_CONFIG || {});

  const STORE = 's404chat.v1';
  const GREETING = "Hi! I'm the 404 Studio assistant. Ask me about pricing, services, timelines, or where to find something on the site.";
  const CHIPS = ['How much does it cost?', 'What services do you offer?', 'How long does it take?', 'Book a free call'];

  /* ---------- state (survives page changes within the tab) ---------- */
  let state = { open: false, msgs: [], greeted: false };
  try { const s = JSON.parse(sessionStorage.getItem(STORE) || 'null'); if (s && Array.isArray(s.msgs)) state = s; } catch (e) {}
  const save = () => { try { sessionStorage.setItem(STORE, JSON.stringify({ open: state.open, msgs: state.msgs.slice(-30), greeted: true })); } catch (e) {} };

  /* ---------- styles ---------- */
  const css = `
  .s4c,.s4c *{box-sizing:border-box}
  .s4c{font-family:'Plus Jakarta Sans',system-ui,-apple-system,Segoe UI,Roboto,sans-serif;color:#1e1b4b;
    --s4c-ink:#1e1b4b;--s4c-mut:#64748b;--s4c-bg:#fff;--s4c-soft:#f5f3ff;--s4c-line:#e5e7eb;--s4c-brand:#4f46e5;--s4c-brand2:#7c3aed}
  .s4c-fab{position:fixed;right:18px;bottom:86px;z-index:9999;width:56px;height:56px;border-radius:50%;border:0;cursor:pointer;
    background:linear-gradient(135deg,var(--s4c-brand),var(--s4c-brand2));color:#fff;display:flex;align-items:center;justify-content:center;
    box-shadow:0 12px 28px rgba(79,70,229,.45);transition:transform .25s ease,box-shadow .25s ease}
  .s4c-fab:hover{transform:translateY(-3px) scale(1.04)}
  .s4c-fab:focus-visible,.s4c-x:focus-visible,.s4c-send:focus-visible,.s4c-chip:focus-visible,.s4c-in:focus-visible{outline:3px solid #a5b4fc;outline-offset:2px}
  .s4c-fab svg{width:26px;height:26px}
  .s4c-fab .s4c-ico-x{display:none}
  .s4c.open .s4c-fab .s4c-ico-chat{display:none}.s4c.open .s4c-fab .s4c-ico-x{display:block}
  .s4c-tip{position:fixed;right:84px;bottom:94px;z-index:9999;background:#fff;color:var(--s4c-ink);font-weight:700;font-size:14px;
    padding:10px 14px;border-radius:14px 14px 4px 14px;box-shadow:0 10px 30px rgba(30,27,75,.18);border:1px solid var(--s4c-line);
    cursor:pointer;display:none;max-width:210px;animation:s4c-pop .35s ease}
  .s4c-tip.show{display:block}.s4c.open .s4c-tip{display:none}
  .s4c-panel{position:fixed;right:18px;bottom:152px;z-index:10000;width:380px;max-width:calc(100vw - 24px);height:min(560px,calc(100vh - 176px));
    background:var(--s4c-bg);border-radius:20px;box-shadow:0 24px 60px rgba(30,27,75,.3);border:1px solid var(--s4c-line);
    display:none;flex-direction:column;overflow:hidden;transform-origin:bottom right}
  .s4c.open .s4c-panel{display:flex;animation:s4c-pop .25s ease}
  .s4c-head{display:flex;align-items:center;gap:10px;padding:14px 16px;color:#fff;background:linear-gradient(135deg,var(--s4c-brand),var(--s4c-brand2))}
  .s4c-av{width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:13px}
  .s4c-ttl{flex:1;line-height:1.2}.s4c-ttl b{display:block;font-size:15px}
  .s4c-ttl span{font-size:12px;opacity:.9;display:flex;align-items:center;gap:6px}
  .s4c-ttl span:before{content:"";width:8px;height:8px;border-radius:50%;background:#4ade80}
  .s4c-x{background:transparent;border:0;color:#fff;cursor:pointer;width:32px;height:32px;border-radius:8px;font-size:22px;line-height:1}
  .s4c-x:hover{background:rgba(255,255,255,.18)}
  .s4c-log{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;background:#faf9ff;scroll-behavior:smooth}
  .s4c-m{max-width:86%;padding:10px 13px;border-radius:16px;font-size:14px;line-height:1.5;word-wrap:break-word;overflow-wrap:anywhere}
  .s4c-m.bot{align-self:flex-start;background:#fff;border:1px solid var(--s4c-line);border-bottom-left-radius:4px}
  .s4c-m.user{align-self:flex-end;background:var(--s4c-brand);color:#fff;border-bottom-right-radius:4px}
  .s4c-m a{color:var(--s4c-brand);font-weight:700;text-decoration:underline;text-underline-offset:2px}
  .s4c-m.user a{color:#fff}
  .s4c-m ul{margin:6px 0 2px;padding-left:18px}.s4c-m li{margin:2px 0}.s4c-m p{margin:0}.s4c-m p+p,.s4c-m p+ul{margin-top:6px}
  .s4c-typing{display:inline-flex;gap:4px;padding:4px 2px}
  .s4c-typing i{width:7px;height:7px;border-radius:50%;background:#a5b4fc;animation:s4c-b 1s infinite}
  .s4c-typing i:nth-child(2){animation-delay:.15s}.s4c-typing i:nth-child(3){animation-delay:.3s}
  .s4c-chips{display:flex;flex-wrap:wrap;gap:6px;padding:0 16px 10px;background:#faf9ff}
  .s4c-chip{border:1px solid #c7d2fe;background:#fff;color:var(--s4c-brand);font:600 13px inherit;font-family:inherit;padding:6px 11px;border-radius:999px;cursor:pointer}
  .s4c-chip:hover{background:var(--s4c-soft)}
  .s4c-form{display:flex;gap:8px;padding:10px 12px;border-top:1px solid var(--s4c-line);background:#fff}
  .s4c-in{flex:1;border:1px solid var(--s4c-line);border-radius:12px;padding:10px 12px;font:14px inherit;font-family:inherit;color:var(--s4c-ink);min-width:0;background:#fff}
  .s4c-send{border:0;border-radius:12px;padding:0 14px;background:var(--s4c-brand);color:#fff;cursor:pointer;font-weight:700;font-family:inherit}
  .s4c-send:disabled{opacity:.5;cursor:not-allowed}
  .s4c-foot{padding:6px 12px 10px;font-size:11px;color:var(--s4c-mut);text-align:center;background:#fff}
  .s4c-foot a{color:var(--s4c-mut);text-decoration:underline}
  @keyframes s4c-pop{from{opacity:0;transform:translateY(8px) scale(.97)}to{opacity:1;transform:none}}
  @keyframes s4c-b{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-5px)}}
  @media (max-width:480px){
    .s4c-panel{right:8px;left:8px;width:auto;max-width:none;bottom:8px;height:calc(100vh - 16px);height:calc(100dvh - 16px);border-radius:16px}
    .s4c.open .s4c-fab{display:none}
    .s4c-in{font-size:16px}
  }
  @media (prefers-reduced-motion:reduce){.s4c *{animation:none!important;transition:none!important;scroll-behavior:auto!important}}
  `;

  /* ---------- tiny safe renderer: **bold**, [text](url), - lists ---------- */
  const esc = t => String(t).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const safeHref = u => {
    u = u.trim();
    if (u === '#book') return u;
    if (/^[a-z0-9-]+\.html(#[\w-]*)?$/i.test(u) || u === '/' || u === 'index.html') return u;
    if (/^https:\/\/[^\s"'<>]+$/i.test(u)) return u;
    if (/^viber:\/\/chat\?number=[%+\w]+$/i.test(u)) return u;
    if (/^mailto:[^\s"'<>]+$/i.test(u)) return u;
    return null;
  };
  const inline = s => esc(s)
    .replace(/\[([^\]]{1,80})\]\(([^)\s]{1,200})\)/g, (m, label, url) => {
      const h = safeHref(url.replace(/&amp;/g, '&'));
      if (!h) return label;
      const ext = /^https:/.test(h);
      return '<a href="' + esc(h) + '"' + (ext ? ' target="_blank" rel="noopener noreferrer"' : '') + '>' + label + '</a>';
    })
    .replace(/\*\*([^*]{1,120})\*\*/g, '<strong>$1</strong>');
  const render = text => {
    const out = []; let list = false;
    String(text).split('\n').forEach(line => {
      const li = /^\s*[-*•]\s+(.*)$/.exec(line);
      if (li) { if (!list) { out.push('<ul>'); list = true; } out.push('<li>' + inline(li[1]) + '</li>'); return; }
      if (list) { out.push('</ul>'); list = false; }
      if (line.trim()) out.push('<p>' + inline(line) + '</p>');
    });
    if (list) out.push('</ul>');
    return out.join('');
  };

  /* ---------- offline fallback answers ---------- */
  const FALLBACK = [
    [/price|cost|how much|magkano|₱|\$|rate|fee/i, "A complete custom website is **$13 (₱800)**, one time. That covers a 4-6 page site, SEO setup, Google Business Profile setup and 2 rounds of revisions. We start after a 50% deposit and you pay the balance only after you approve the design. Optional site care is free for the first month, then $25/month. See [Services](services.html)."],
    [/service|offer|do you do|what can/i, "We do:\n- **Website development**: custom sites built from scratch\n- **Website management**: updates, security, backups, uptime\n- **Email management** and **Ads management**\nDetails on the [Services](services.html) page."],
    [/how long|days|timeline|turnaround|gaano/i, "Most sites are ready for your review within **7-10 days** after we receive your content and photos."],
    [/portfolio|sample|example|work/i, "You can see sample sites for a salon, clinic, cafe and more on the [Portfolio](portfolio.html) page."],
    [/about|who|owner|founder/i, "404 Studio is a small web studio in the Philippines. You talk directly to the person who builds your site. More on the [About](about.html) page."],
    [/book|call|appointment|schedule/i, "You can [book a free call](#book) (it uses a quick Google sign-in), or [send a message](contact.html)."],
    [/contact|email|viber|reach|message|quote/i, "Reach us on [Viber](" + CFG.viber + "), by email at " + CFG.email + ", or use the [contact form](contact.html) for a free quote."]
  ];
  const fallback = q => {
    for (const [re, a] of FALLBACK) if (re.test(q)) return a;
    return "I can't reach the assistant right now, but a real person can help. [Message us on Viber](" + CFG.viber + ") or use the [contact form](contact.html).";
  };

  /* ---------- DOM ---------- */
  const style = document.createElement('style'); style.textContent = css; document.head.appendChild(style);
  const root = document.createElement('div'); root.className = 's4c';
  root.innerHTML =
    '<div class="s4c-tip" role="button" tabindex="0">Questions? Ask our assistant 👋</div>' +
    '<button class="s4c-fab" type="button" aria-label="Open chat assistant" aria-expanded="false" aria-controls="s4c-panel">' +
      '<svg class="s4c-ico-chat" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/><path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" stroke-width="2.6"/></svg>' +
      '<svg class="s4c-ico-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>' +
    '</button>' +
    '<section class="s4c-panel" id="s4c-panel" role="dialog" aria-label="404 Studio chat assistant">' +
      '<div class="s4c-head"><div class="s4c-av" aria-hidden="true">404</div><div class="s4c-ttl"><b>404 Studio Assistant</b><span>Ask about pricing, services &amp; more</span></div>' +
      '<button class="s4c-x" type="button" aria-label="Close chat">&times;</button></div>' +
      '<div class="s4c-log" role="log" aria-live="polite" aria-relevant="additions"></div>' +
      '<div class="s4c-chips"></div>' +
      '<form class="s4c-form" autocomplete="off"><input class="s4c-in" type="text" maxlength="500" placeholder="Type your question..." aria-label="Your message"><button class="s4c-send" type="submit">Send</button></form>' +
      '<div class="s4c-foot">AI assistant, may make mistakes. Prefer a person? <a href="' + CFG.viber + '">Chat on Viber</a></div>' +
    '</section>';
  document.body.appendChild(root);

  const $ = s => root.querySelector(s);
  const fab = $('.s4c-fab'), tip = $('.s4c-tip'), log = $('.s4c-log'), chips = $('.s4c-chips'),
        form = $('.s4c-form'), input = $('.s4c-in'), send = $('.s4c-send');
  let busy = false;

  const scroll = () => { log.scrollTop = log.scrollHeight; };
  const add = (role, text) => {
    const d = document.createElement('div'); d.className = 's4c-m ' + role;
    if (role === 'bot') d.innerHTML = render(text); else d.textContent = text;
    log.appendChild(d); scroll(); return d;
  };
  const setOpen = o => {
    state.open = o; root.classList.toggle('open', o);
    fab.setAttribute('aria-expanded', String(o)); fab.setAttribute('aria-label', o ? 'Close chat assistant' : 'Open chat assistant');
    tip.classList.remove('show'); save();
    if (o) { setTimeout(() => { input.focus({ preventScroll: true }); scroll(); }, 60); }
  };
  const book = () => {
    const btn = document.querySelector('[data-book]');
    if (btn) { setOpen(false); btn.click(); } else { location.href = 'contact.html'; }
  };
  const drawChips = () => {
    chips.innerHTML = '';
    if (state.msgs.some(m => m.role === 'user')) { chips.style.display = 'none'; return; }
    chips.style.display = 'flex';
    CHIPS.forEach(c => { const b = document.createElement('button'); b.type = 'button'; b.className = 's4c-chip'; b.textContent = c; b.onclick = () => (c === 'Book a free call' ? book() : ask(c)); chips.appendChild(b); });
  };

  /* ---------- Supabase Edge Function call ---------- */
  const callAI = async () => {
    const ctl = new AbortController(); const t = setTimeout(() => ctl.abort(), CFG.timeoutMs);
    try {
      const r = await fetch(CFG.url, {
        method: 'POST', signal: ctl.signal,
        headers: { 'Content-Type': 'application/json', 'apikey': CFG.key },
        body: JSON.stringify({ messages: state.msgs.slice(-10), page: location.pathname.split('/').pop() || 'index.html' })
      });
      if (!r.ok) throw new Error('http ' + r.status);
      const j = await r.json();
      if (!j || typeof j.reply !== 'string' || !j.reply.trim()) throw new Error('empty');
      return j.reply.trim();
    } finally { clearTimeout(t); }
  };

  const ask = async text => {
    text = String(text || '').trim().slice(0, 500);
    if (!text || busy) return;
    busy = true; send.disabled = true; input.value = '';
    state.msgs.push({ role: 'user', content: text }); add('user', text); drawChips();
    const wait = add('bot', ''); wait.innerHTML = '<span class="s4c-typing" aria-label="Typing"><i></i><i></i><i></i></span>';
    let reply;
    try { reply = await callAI(); } catch (e) { reply = fallback(text); }
    wait.innerHTML = render(reply);
    state.msgs.push({ role: 'assistant', content: reply });
    save(); scroll(); busy = false; send.disabled = false; input.focus({ preventScroll: true });
  };

  /* ---------- events ---------- */
  fab.addEventListener('click', () => setOpen(!state.open));
  $('.s4c-x').addEventListener('click', () => { setOpen(false); fab.focus(); });
  tip.addEventListener('click', () => setOpen(true));
  tip.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') setOpen(true); });
  form.addEventListener('submit', e => { e.preventDefault(); ask(input.value); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && state.open) { setOpen(false); fab.focus(); } });

  /* "#book" links reuse the site's own booking flow when the page has one */
  log.addEventListener('click', e => {
    const a = e.target.closest('a[href="#book"]'); if (!a) return;
    e.preventDefault(); book();
  });

  /* ---------- init ---------- */
  if (!state.msgs.length) { add('bot', GREETING); }
  else state.msgs.forEach(m => add(m.role === 'user' ? 'user' : 'bot', m.content));
  drawChips();
  if (state.open) setOpen(true);
  else {
    let seen = false; try { seen = sessionStorage.getItem('s4c.tip') === '1'; } catch (e) {}
    if (!seen) setTimeout(() => { if (!state.open) { tip.classList.add('show'); try { sessionStorage.setItem('s4c.tip', '1'); } catch (e) {} setTimeout(() => tip.classList.remove('show'), 9000); } }, 5000);
  }
})();
