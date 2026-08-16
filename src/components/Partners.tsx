import React from "react";
import { Server, Cloud, ShieldCheck } from "lucide-react";

const networkHardwareSecurity = [
  { name: "Cisco", color: "#049FD9" },
  { name: "MikroTik", color: "#FF6600" },
  { name: "Ubiquiti UniFi", color: "#0284C7" },
  { name: "TP-Link Omada", color: "#00A4E4" },
  { name: "Juniper Networks", color: "#A855F7" },
  { name: "Sophos", color: "#0EA5E9" },
  { name: "Fortinet", color: "#EE3124" },
  { name: "Barracuda", color: "#0284C7" },
  { name: "Symantec", color: "#FBBF24" },
  { name: "HP Enterprise", color: "#0096D6" },
  { name: "Dell Enterprise", color: "#007DB8" },
  { name: "Hitachi Vantara", color: "#E60012" },
];

const virtualizationCloudStorage = [
  { name: "VMware vSphere", color: "#94A3B8" },
  { name: "Microsoft Hyper-V", color: "#00A4EF" },
  { name: "Proxmox VE", color: "#E57000" },
  { name: "Red Hat", color: "#EE0000" },
  { name: "Veeam Backup", color: "#00B336" },
  { name: "Synology NAS", color: "#B5161B" },
  { name: "NetApp Storage", color: "#0067C5" },
  { name: "Vinchin Backup", color: "#007ACC" },
  { name: "Macrium Reflect", color: "#1E87DA" },
  { name: "Hasleo Software", color: "#3B82F6" },
  { name: "Nextcloud", color: "#0082C9" },
  { name: "Plesk Panel", color: "#52B4D6" },
];

const emailSysMgmtCollab = [
  { name: "Microsoft 365", color: "#EA3E23" },
  { name: "MS Exchange", color: "#0072C6" },
  { name: "Zimbra", color: "#E84325" },
  { name: "Grommunio", color: "#1E87DA" },
  { name: "BlueMind", color: "#2A82C5" },
  { name: "iRedMail", color: "#00A3E0" },
  { name: "NinjaOne", color: "#00A8FF" },
  { name: "GLPI ITAM", color: "#17A2B8" },
  { name: "ServiceDesk Plus", color: "#0284C7" },
  { name: "JumpServer", color: "#00BFA5" },
  { name: "AvePoint", color: "#00B2A9" },
  { name: "BitTitan", color: "#0071C5" },
];

const row1Items = [...networkHardwareSecurity, ...networkHardwareSecurity];
const row2Items = [...virtualizationCloudStorage, ...virtualizationCloudStorage];
const row3Items = [...emailSysMgmtCollab, ...emailSysMgmtCollab];

function PartnerCard({ partner }: { partner: { name: string; color: string } }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.75rem 1.5rem",
        minWidth: "150px",
        height: "60px",
        background: "var(--partner-card-bg)",
        border: "1px solid var(--color-border)",
        borderRadius: "6px",
        flexShrink: 0,
        gap: "0.15rem",
        transition: "all 0.2s ease",
      }}
    >
      <span
        style={{
          fontSize: "0.95rem",
          fontWeight: 700,
          color: partner.color,
          letterSpacing: "0.02em",
          lineHeight: 1.1,
          textAlign: "center",
        }}
      >
        {partner.name}
      </span>
      <span
        style={{
          fontSize: "0.58rem",
          color: "var(--color-text-faint)",
          fontWeight: 500,
          letterSpacing: "0.06em",
        }}
      >
        Partner Resmi
      </span>
    </div>
  );
}

export default function Partners() {
  return (
    <section
      id="mitra"
      className="section"
      style={{
        background: "var(--section-bg-1)",
        paddingTop: "clamp(3rem, 6vw, 5rem)",
        paddingBottom: "clamp(3rem, 6vw, 5rem)",
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="section-badge">Brand Partner</span>
          <h2
            className="text-section-title"
            style={{ margin: "0 0 0.875rem 0", color: "var(--color-text)" }}
          >
            Mitra <span style={{ color: "var(--color-primary)" }}>Teknologi & Principal</span>
          </h2>
          <p
            style={{
              color: "var(--color-text-muted)",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.7,
              fontSize: "clamp(0.9rem, 1.4vw, 1.025rem)",
            }}
          >
            Dukungan 36+ brand ekosistem IT enterprise global dari infrastruktur jaringan, virtualisasi, disaster recovery, hingga sistem manajemen & email.
          </p>
        </div>
      </div>

      {/* 3 Categorized Marquee Rows */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {/* Row 1 */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.4rem",
              marginBottom: "0.625rem",
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "var(--cat-blue)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            <Server size={13} strokeWidth={2} />
            Network, Hardware & Cyber Security
          </div>
          <div className="partners-marquee-wrapper">
            <div
              className="animate-marquee"
              style={{
                display: "flex",
                gap: "0.75rem",
                width: "max-content",
                padding: "0.2rem 0",
              }}
            >
              {row1Items.map((partner, i) => (
                <PartnerCard key={`r1-${partner.name}-${i}`} partner={partner} />
              ))}
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.4rem",
              marginBottom: "0.625rem",
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "var(--cat-green)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            <Cloud size={13} strokeWidth={2} />
            Virtualization, Cloud & Backup Storage
          </div>
          <div className="partners-marquee-wrapper">
            <div
              className="animate-marquee-reverse"
              style={{
                display: "flex",
                gap: "0.75rem",
                width: "max-content",
                padding: "0.25rem 0",
              }}
            >
              {row2Items.map((partner, i) => (
                <PartnerCard key={`r2-${partner.name}-${i}`} partner={partner} />
              ))}
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.4rem",
              marginBottom: "0.625rem",
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "var(--cat-amber)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            <ShieldCheck size={13} strokeWidth={2} />
            Email Server, Systems & Management Tools
          </div>
          <div className="partners-marquee-wrapper">
            <div
              className="animate-marquee"
              style={{
                display: "flex",
                gap: "0.75rem",
                width: "max-content",
                padding: "0.25rem 0",
              }}
            >
              {row3Items.map((partner, i) => (
                <PartnerCard key={`r3-${partner.name}-${i}`} partner={partner} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
