# CONTEXT — karyasistem1.0 (Company Profile Karya Sistem)

**Jarum jam proyek ini.** Papan portofolio lintas-proyek: `~/Projects/CONTEXT.md` §4.
**Aturan kerja:** `CLAUDE.md` di folder ini dan `~/.claude/CLAUDE.md`.
**Last Updated:** 2026-09-17 (malam: katalog produk diganti)

---

## Active Checkpoint
- **Status:** Compro **LIVE** di GH Pages = `1f67f01` (deploy 2026-09-17, katalog baru + hero tanpa denyut). `main` = `origin/main`. Remote kini **SSH** (`git@github.com:MikaX99/karya1.0.git`, kunci `id_ed25519` terdaftar 2026-09-17; `gh` tetap belum login). Compro **selesai 2026-08-19** (HEAD `3ccf454`, 138 commit, semua compro). Deploy GitHub Pages via Actions (`MikaX99/karya1.0`, branch `gh-pages`, basePath `/karya1.0`). Tumpahan KBLI/RAG (insiden sesi salah workspace, Agustus 2026) dipisah ke branch `kbli-spill` 2026-09-17 (disimpan, lokal).
- **Fokus aktif:** tidak ada (proyek tidak aktif).
- **Menunggu keputusan Mika:** perbaikan konten hasil penilaian 2026-09-17 (skor 6,5/10): (1) ganti "Why Choose Us" gaya CLASSIFIED → alasan nyata, (2) statistik 150+/99.8%/87% → fakta terbukti atau hapus, (3) hero headline spesifik + bukti sosial, spiral masih nyebut produk lama, (4) Mitra: bedakan reseller resmi vs open source. Angka/klaim harus dari Mika.
- **Pending (urut prioritas):** tidak ada.
- **Riwayat singkat:**
  - 2026-09-17 [SELESAI] Deploy: push `3ccf454..1f67f01` via SSH → Actions → `gh-pages` `d9b5225` dalam ~45 dtk; live terverifikasi (17 kartu, 0 produk lama, 0 live-pulse). `1f67f01` hero: titik berdenyut + CSS dibuang.
  - 2026-09-17 [SELESAI] `7de326d` Katalog produk: 18 SKU → 17 kartu brand per lini (list dari Mika). Verifikasi build + preview desktop/mobile/EN OK. Catatan lama (bukan tugas): di mode EN, "Semua Brand"/"Hubungi Sales"/badge masih ID; `public/locales/` tidak dipakai kode (kamus ada di `LocaleContext.tsx`); lint 177 problem warisan di file lain.
  - 2026-09-17 [SELESAI] Cek live: `https://mikax99.github.io/karya1.0/` HTTP 200; `gh-pages` (`77e9b5d`) = build `3ccf454` — konten identik dengan `main` (beda hanya hash/urutan modul). Toggle ID/EN & gelap OK, 0 gambar rusak.
  - 2026-09-17 [SELESAI] Keputusan Mika: branch `kbli-spill` (commit `f20d9d9`, ≈6.7 MB lokal, tidak di-push) **disimpan**; file aturan di-commit ke `main` (`ab3fa91`). `main` 1 commit di depan `origin/main`, belum di-push.
  - 2026-09-17 [SELESAI] Pulihkan compro: `main` kembali bersih ke `3ccf454`; tumpahan KBLI → branch `kbli-spill`; `CLAUDE.md` ditulis ulang sebagai aturan compro; `CONTEXT.md` dibuat. Handoff: `~/Projects/handoff/karyasistem1.0__2026-09-17__pulihkan-compro.md`.
  - 2026-08-19 [SELESAI] `3ccf454` feat: complete UI enhancements, tasteskill layout, and bilingual company profile.

<!-- Aturan: yang [SELESAI] cukup satu baris + tanggal; detail panjang pindah ke CHANGELOG.md proyek. -->
