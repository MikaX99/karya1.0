# Aturan Kerja — karyasistem1.0 (Company Profile Karya Sistem)

Situs company profile **PT Karya Sistem Teknologi** — dwibahasa (ID/EN), tema terang/gelap, 13 klien, 49+ partner. **Selesai 2026-08-19**, deploy GitHub Pages (`MikaX99/karya1.0`, branch `gh-pages`, basePath `/karya1.0`). Aturan Trio & zona terlarang: `~/.claude/CLAUDE.md`.

@AGENTS.md

## Stack (fakta)
- Next.js 16.3.1 (webpack) + TypeScript + ESLint. `output: "export"` → `out/`. Deploy: GitHub Actions → `gh-pages`.
- Konten: `clients.json` (logo/klien), `src/` komponen; ThemeContext (default light).
- **Tidak ada backend, DB, atau API route.** Kalau ada `src/app/api/` atau `*.db` di working tree → itu tumpahan, lihat branch `kbli-spill`.

## Perintah nyata
```bash
npm run dev        # next dev --webpack
npm run build      # next build --webpack → out/ (TANPA basePath, untuk preview lokal)
BASE_PATH=/karya1.0 npm run build   # build setara live GH Pages (yang dipakai CI)
npm run preview    # npx serve out
npm run lint
# Deploy: push ke `main` → GitHub Actions → `gh-pages` (HANYA atas perintah Mika). Tidak ada script deploy lokal.
```

## Boleh / dilarang
- 🟢 Boleh: konten, styling, komponen UI, terjemahan, aset klien/partner.
- 🔴 Dilarang tanpa izin Mika: `git push`/deploy; menambah dependensi; mematikan `output: "export"`; menambah fitur KBLI/RAG/AI apa pun — pusatnya di `apps/kbli-smart-advisor`.
- `AGENTS.md` = file asli (Next menulisnya), jangan diganti symlink.

## Jarum jam
`CONTEXT.md` di folder ini.
