/* Shared helpers for the funnel pages */
(function(){
  const S = window.SITE || {};

  // Meta Pixel (PageView only — the Smart Form fires its own Lead event)
  if (S.pixelId) {
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', S.pixelId); fbq('track', 'PageView');
  }

  // Before / after sliders: <div class="ba-grid" data-ba></div>
  const arrows = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6l-6 6 6 6M15 6l6 6-6 6"/></svg>';
  document.querySelectorAll('[data-ba]').forEach(grid => {
    const pairs = (S.beforeAfter || []).slice(0, +grid.dataset.ba || 6);
    grid.innerHTML = pairs.map((p, i) => `
      <div class="ba"><div class="ba-frame" style="--pos:50%">
        <img src="${p.before}" alt="Antes ${i+1}" loading="lazy" decoding="async">
        <div class="ba-after"><img src="${p.after}" alt="Después ${i+1}" loading="lazy" decoding="async"></div>
        <span class="ba-lbl l">Antes</span><span class="ba-lbl r">Después</span>
        <span class="ba-line"></span><span class="ba-knob" style="left:var(--pos)">${arrows}</span>
      </div></div>`).join('');
    grid.querySelectorAll('.ba-frame').forEach(fr => {
      let drag = false;
      const set = x => { const r = fr.getBoundingClientRect(); fr.style.setProperty('--pos', Math.max(0, Math.min(100, (x - r.left) / r.width * 100)) + '%'); };
      fr.addEventListener('pointerdown', e => { drag = true; set(e.clientX); });
      window.addEventListener('pointermove', e => { if (drag) set(e.clientX); });
      window.addEventListener('pointerup', () => drag = false);
      fr.addEventListener('touchmove', e => set(e.touches[0].clientX), { passive: true });
    });
  });
})();
