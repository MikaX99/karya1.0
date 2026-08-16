import { Network, Code2, ShieldAlert, ShoppingBag, CheckCircle2 } from "lucide-react";

const services = [
  {
    id: "network-infrastructure",
    icon: <Network size={24} strokeWidth={1.75} />,
    title: "Network & Infrastructure",
    description: "Desain strategis, implementasi, manajemen jaringan, solusi virtualisasi dan cloud untuk kontinuitas bisnis enterprise Anda.",
    highlights: [
      "Strategic Design, Planning & Deployment",
      "Network & Infrastructure Management",
      "Virtualization & Cloud Solutions",
      "Security & Compliance Assurance",
      "Business Continuity & Resilience",
      "Operational Excellence & Optimization",
    ],
    color: "#1E87DA",
  },
  {
    id: "web-application",
    icon: <Code2 size={24} strokeWidth={1.75} />,
    title: "Web Application",
    description: "Pengembangan aplikasi web kustom dan sistem manajemen terintegrasi untuk mempercepat dan mengoptimalkan performa bisnis.",
    highlights: [
      "Website Company Profile",
      "Web Application Development",
      "Document Management System (DMS)",
      "Warehouse Management System (WMS)",
      "Form Survey & Management System",
    ],
    color: "#0284C7",
  },
  {
    id: "disaster-recovery",
    icon: <ShieldAlert size={24} strokeWidth={1.75} />,
    title: "IT Disaster Recovery",
    description: "Analisis risiko, strategi pemulihan bencana, backup data otomatis, dan recovery sistem untuk keamanan operasional tanpa cela.",
    highlights: [
      "Risk Identification & Impact Analysis",
      "Comprehensive Recovery Plan",
      "Automated Data Backup",
      "Rapid System Recovery",
      "Continuous Improvement & Audit",
    ],
    color: "#059669",
  },
  {
    id: "procurement",
    icon: <ShoppingBag size={24} strokeWidth={1.75} />,
    title: "Procurement",
    description: "Layanan pengadaan perangkat lunak dan keras IT, akuisisi perangkat jaringan, lisensi resmi, dan vendor management.",
    highlights: [
      "IT Hardware Procurement Solutions",
      "Network Device Acquisition & Deployment",
      "Software Licensing & Procurement",
      "Cloud Services & Vendor Management",
    ],
    color: "#D97706",
  },
];

export default function Services() {
  return (
    <section id="layanan" className="section" style={{ background: "var(--section-bg-1)" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="section-badge">Layanan Kami</span>
          <h2 className="text-section-title" style={{ margin: "0 0 0.875rem 0", color: "var(--color-text)" }}>
            Solusi & Layanan <span style={{ color: "var(--color-primary)" }}>IT Integrasi</span>
          </h2>
          <p
            style={{
              color: "var(--color-text-muted)",
              maxWidth: "620px",
              margin: "0 auto",
              lineHeight: 1.7,
              fontSize: "clamp(0.9rem, 1.4vw, 1.025rem)",
            }}
          >
            Layanan teknologi terintegrasi mencakup perencanaan infrastruktur, aplikasi web bisnis, pemulihan bencana IT, hingga pengadaan perangkat.
          </p>
        </div>

        {/* Corporate Grid */}
        <div
          className="services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {services.map((service) => (
            <div
              key={service.id}
              id={`service-${service.id}`}
              className="glass-card"
              style={{
                borderRadius: "8px",
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Icon Container */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "6px",
                  background: "var(--color-surface-2)",
                  border: "1px solid var(--color-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.25rem",
                  color: service.color,
                  flexShrink: 0,
                }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "var(--color-text)",
                  margin: "0 0 0.625rem 0",
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: "0.85rem",
                  lineHeight: 1.6,
                  margin: "0 0 1.25rem 0",
                }}
              >
                {service.description}
              </p>

              {/* Highlights Checklist */}
              <ul
                style={{
                  listStyle: "none",
                  margin: "auto 0 0 0",
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.45rem",
                  borderTop: "1px solid var(--color-border-subtle)",
                  paddingTop: "1rem",
                }}
              >
                {service.highlights.map((h) => (
                  <li
                    key={h}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.5rem",
                      fontSize: "0.78rem",
                      color: "var(--color-text-muted)",
                      fontWeight: 500,
                      lineHeight: 1.4,
                    }}
                  >
                    <CheckCircle2
                      size={14}
                      color={service.color}
                      style={{ marginTop: "2px", flexShrink: 0 }}
                    />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
