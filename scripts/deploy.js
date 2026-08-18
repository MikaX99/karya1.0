const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

function safeClean(dir) {
  try {
    fs.rmSync(dir, { recursive: true, force: true });
  } catch (e) {
    // ignore
  }
}

console.log("🚀 [1/3] Memulai build khusus GitHub Pages (basePath: /karya1.0)...");
safeClean("out");
execSync("GITHUB_ACTIONS=true npm run build", { stdio: "inherit" });

const outDir = path.resolve("out");
console.log("📤 [2/3] Mengunggah otomatis ke branch gh-pages di GitHub...");
try {
  safeClean(path.join(outDir, ".git"));
  execSync("git init", { cwd: outDir });
  execSync("git checkout -b gh-pages", { cwd: outDir });
  execSync("git add -A", { cwd: outDir });
  execSync('git commit -m "deploy: automated dual build for gh-pages"', { cwd: outDir });
  execSync("git remote add origin https://github.com/MikaX99/karya1.0.git", { cwd: outDir });
  execSync("git push -f origin gh-pages", { cwd: outDir, stdio: "inherit" });
  safeClean(path.join(outDir, ".git"));
  console.log("✅ Berhasil diunggah ke GitHub Pages!");
} catch (err) {
  console.error("Gagal push ke gh-pages:", err.message);
}

console.log("🔄 [3/3] Memulihkan build lokal untuk http://localhost:8080...");
safeClean("out");
execSync("npm run build", { stdio: "inherit" });

console.log("\n🎉 SELESAI! Keduanya sudah beres:");
console.log("1. Lokal: http://localhost:8080 (CSS normal)");
console.log("2. Live: https://mikax99.github.io/karya1.0/ (Live di GitHub Pages)\n");
