const { execSync } = require("child_process");
const path = require("path");

console.log("🚀 [1/3] Memulai build khusus GitHub Pages (basePath: /karya1.0)...");
execSync("GITHUB_ACTIONS=true npm run build", { stdio: "inherit" });

const outDir = path.resolve("out");
console.log("📤 [2/3] Mengunggah otomatis ke branch gh-pages di GitHub...");
try {
  execSync("rm -rf .git", { cwd: outDir });
  execSync("git init", { cwd: outDir });
  execSync("git checkout -b gh-pages", { cwd: outDir });
  execSync("git add -A", { cwd: outDir });
  execSync('git commit -m "deploy: automated dual build for gh-pages"', { cwd: outDir });
  execSync("git remote add origin https://github.com/MikaX99/karya1.0.git", { cwd: outDir });
  execSync("git push -f origin gh-pages", { cwd: outDir, stdio: "inherit" });
  execSync("rm -rf .git", { cwd: outDir });
  console.log("✅ Berhasil diunggah ke GitHub Pages!");
} catch (err) {
  console.error("Gagal push ke gh-pages:", err.message);
}

console.log("🔄 [3/3] Memulihkan build lokal untuk http://localhost:8080...");
execSync("npm run build", { stdio: "inherit" });

console.log("\n🎉 SELESAI! Keduanya sudah beres:");
console.log("1. Lokal: http://localhost:8080 (CSS normal)");
console.log("2. Live: https://mikax99.github.io/karya1.0/ (Live di GitHub Pages)\n");
