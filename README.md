# Yoly Brow Studio — Ombré Powder quiz funnel

Static site (no build step) for Cloudflare Pages. Same layout as the Cocora Aesthetics funnel, in Yoly's brand colors (cacao, rose, nude, cream; Lora + Poppins).

1. `/` — quiz page. Embeds the Zuops Smart Form "Quiz Ombré $397 – Video Funnel (test)" in Yoly's sub-account.
2. `/video/` — the form redirects here. Video + countdown, then a button to the schedule page. Until `videoUrl` is set, the button unlocks right away.
3. `/agendar/` — her consultation calendar (`crm.adrianolocal.com/c/yoly-consulta`).

Settings live in the `window.SITE` block at the top of each page. Photos are in `media/`.
Cloudflare Pages: Connect to Git → this repo, framework preset None, build command blank, output directory `/`.
