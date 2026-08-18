---
name: sec-shield
description: >
  Security hardening, vulnerability auditing, OWASP Top 10 prevention, Content Security Policy (CSP),
  secret leakage protection, API sanitization, secure authentication, and defense-in-depth engineering.
  Use when reviewing, auditing, building, or configuring security-critical components, auth flows,
  API endpoints, or server configurations.
---

# 🛡️ Sec-Shield: Enterprise Security & Vulnerability Hardening

Sec-Shield enforces defense-in-depth security principles across all web applications, APIs, and agent integrations. It audits and prevents common vulnerabilities before code reaches production.

---

## 🔒 The 7 Defense Pillars

### 1. Zero Secret Leakage (Client vs Server Separation)
* **Never expose private keys**: Environment variables containing API keys, database connection strings, or JWT secrets must never have public prefixes (e.g., never `NEXT_PUBLIC_` for secrets).
* **Gitignore Discipline**: Ensure `.env*`, `*.pem`, `*.key`, and credential files are strictly excluded in `.gitignore`.

### 2. Strict Content Security Policy (CSP) & HTTP Headers
* Enforce strict security headers:
  * `X-Content-Type-Options: nosniff`
  * `X-Frame-Options: DENY` or `SAMEORIGIN` (Clickjacking defense)
  * `X-XSS-Protection: 1; mode=block`
  * `Referrer-Policy: strict-origin-when-cross-origin`
* Restrict CSP domains (`object-src 'none'`, `base-uri 'self'`, explicit whitelist for fonts, scripts, and media).

### 3. Input Sanitization & Injection Prevention
* **SQL / NoSQL Injection**: Never concatenate raw strings into database queries. Always use parameterized queries or ORM query builders (Prisma, Drizzle, Supabase Client).
* **XSS Defense**: Sanitize user-provided HTML before rendering (DOMPurify). Ensure `target="_blank"` always includes `rel="noopener noreferrer"`.

### 4. Authentication & Session Security
* Passwords must be hashed using strong one-way algorithms (Argon2id, Bcrypt with work factor $\ge 12$).
* Set authentication cookies with `HttpOnly; Secure; SameSite=Strict; Path=/`.
* Implement rate limiting on sensitive routes (login, register, forgot-password, AI chat endpoints).

### 5. API Endpoint Authorization & CORS
* Verify user permissions and roles on the server side on every request, never trusting client-sent role claims.
* Restrict CORS origin headers to trusted domain origins instead of `Access-Control-Allow-Origin: *` on authenticated APIs.

### 6. AI Agent Guardrails & Prompt Injection Defense
* Treat all user inputs to LLMs as untrusted.
* Validate function calling arguments with strict schemas (Zod) before executing database or destructive operations.
* Implement confirmation steps (*Human-in-the-loop*) for high-risk actions (delete user, transfer funds, bulk update).

### 7. Dependency & Supply Chain Auditing
* Regularly audit dependencies for CVEs (`npm audit`).
* Pin exact versions and lockfiles (`package-lock.json`).

---

## 🎯 Trigger Keywords
* `sec-shield`, `security`, `audit security`, `cek keamanan`, `vulnerability`, `CSP`, `XSS`, `auth security`, `hardening`, `sanitasi`.
