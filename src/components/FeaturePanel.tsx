"use client";

import { useMemo, useState } from "react";
import styles from "./feature-panel.module.css";
import { UserRound, Folder, Receipt, Briefcase, Star, Users } from "lucide-react";

type TabId = "crm" | "portfolio" | "invoices" | "projects" | "collaborators";

// Currency formatter for INR
const formatINR = (amount: number) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(amount);

const leadStatuses = ["New", "Negotiating", "Won"] as const;
type LeadStatus = typeof leadStatuses[number];
const isLeadStatus = (v: string): v is LeadStatus => v === "New" || v === "Negotiating" || v === "Won";

export default function FeaturePanel() {
  const [active, setActive] = useState<TabId>("crm");
  const [query, setQuery] = useState("");
  const [newLeadName, setNewLeadName] = useState("");
  const [newLeadStatus, setNewLeadStatus] = useState<LeadStatus>("New");

  // CRM demo state
  const [leads, setLeads] = useState([
    { name: "Acme Co.", status: "New" as const },
    { name: "BrandCo", status: "Negotiating" as const },
    { name: "Studio X", status: "Won" as const },
  ]);
  const crmCounts = useMemo(() => {
    const counts = { New: 0, Negotiating: 0, Won: 0 } as Record<string, number>;
    leads.forEach((l) => (counts[l.status] += 1));
    return counts;
  }, [leads]);
  const cycleLead = (idx: number) => {
    const order: readonly LeadStatus[] = leadStatuses;
    setLeads((prev) => {
      const next = [...prev];
      const curr = prev[idx];
      const i = order.indexOf(curr.status);
      next[idx] = { ...curr, status: order[(i + 1) % order.length] };
      return next;
    });
  };
  const addLead = () => {
    const name = newLeadName.trim();
    if (!name) return;
    setLeads((prev) => [...prev, { name, status: newLeadStatus }]);
    setNewLeadName("");
  };
  const filteredLeads = leads.filter((l) => l.name.toLowerCase().includes(query.toLowerCase()));

  // Portfolio demo state with tags and feature toggle
  const portfolioTags = ["Design", "Video", "Photo"] as const;
  type PortfolioTag = typeof portfolioTags[number];
  type PortfolioFilter = "All" | PortfolioTag;
  const [selectedTag, setSelectedTag] = useState<PortfolioFilter>("All");
  const [portfolioItems, setPortfolioItems] = useState<Array<{ title: string; tag: PortfolioTag; featured: boolean }>>([
    { title: "Project 1", tag: "Design", featured: false },
    { title: "Project 2", tag: "Video", featured: true },
    { title: "Project 3", tag: "Photo", featured: false },
    { title: "Project 4", tag: "Design", featured: false },
    { title: "Project 5", tag: "Video", featured: false },
    { title: "Project 6", tag: "Photo", featured: true },
  ]);
  const toggleFeatured = (i: number) => {
    setPortfolioItems((prev) => prev.map((item, idx) => idx === i ? { ...item, featured: !item.featured } : item));
  };
  const filteredPortfolio = portfolioItems.filter((p) => selectedTag === "All" ? true : p.tag === selectedTag);

  // Invoices demo state with INR and filter
  type InvoiceStatus = "Paid" | "Due";
  type InvoiceFilter = "All" | InvoiceStatus;
  const [invoiceFilter, setInvoiceFilter] = useState<InvoiceFilter>("All");
  const [invoices, setInvoices] = useState([
    { id: "INV-1001", client: "Acme Co.", amount: 1200, status: "Due" as const },
    { id: "INV-1002", client: "Studio X", amount: 450, status: "Paid" as const },
    { id: "INV-1003", client: "BrandCo", amount: 980, status: "Due" as const },
  ]);
  const markPaid = (id: string) => {
    setInvoices((prev) => prev.map((inv) => inv.id === id ? { ...inv, status: "Paid" } : inv));
  };
  const filteredInvoices = invoices.filter((inv) => invoiceFilter === "All" ? true : inv.status === invoiceFilter);
  const [openDetails, setOpenDetails] = useState<Set<string>>(new Set());
  const toggleDetails = (id: string) => {
    setOpenDetails((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  // Projects demo state with status, team, amounts, and milestones
  const projectStatuses = ["On Track", "At Risk", "Delayed"] as const;
  type ProjectStatus = typeof projectStatuses[number];
  const isProjectStatus = (v: string): v is ProjectStatus => (projectStatuses as readonly string[]).includes(v);
  type Project = {
    id: string;
    name: string;
    status: ProjectStatus;
    team: string[];
    amountDue: number;
    milestones: { id: string; title: string; done: boolean }[];
  };
  const [projectFilter, setProjectFilter] = useState<"All" | ProjectStatus>("All");
  const [projectQuery, setProjectQuery] = useState("");
  const [projects, setProjects] = useState<Project[]>([
    {
      id: "UGC-01",
      name: "Brand A UGC Campaign",
      status: "On Track",
      team: ["Aditi (Creator)", "Raj (Manager)", "Meera (Editor)"],
      amountDue: 30000,
      milestones: [
        { id: "M1", title: "Brief approved", done: true },
        { id: "M2", title: "Creator shortlist", done: true },
        { id: "M3", title: "Script drafts", done: false },
        { id: "M4", title: "Shoot UGC", done: false },
        { id: "M5", title: "Edit batch", done: false },
        { id: "M6", title: "Publish posts", done: false },
        { id: "M7", title: "Performance report", done: false },
      ],
    },
    {
      id: "UGC-02",
      name: "D2C Skincare UGC Sprint",
      status: "At Risk",
      team: ["Sara (Creator)", "Ankit (Editor)", "Priya (PM)"],
      amountDue: 18000,
      milestones: [
        { id: "M1", title: "Product ship", done: true },
        { id: "M2", title: "Concepts", done: true },
        { id: "M3", title: "Shoot week", done: false },
        { id: "M4", title: "Edits round 1", done: false },
        { id: "M5", title: "Deliverables handoff", done: false },
      ],
    },
    {
      id: "UGC-03",
      name: "Athleisure UGC (Reels/TikTok)",
      status: "Delayed",
      team: ["Vikram (Manager)", "Neha (Creator)", "Arjun (Editor)"],
      amountDue: 22000,
      milestones: [
        { id: "M1", title: "Brief", done: false },
        { id: "M2", title: "Creator casting", done: false },
        { id: "M3", title: "Legal approvals", done: false },
        { id: "M4", title: "Shoot", done: false },
        { id: "M5", title: "Edit", done: false },
        { id: "M6", title: "Schedule", done: false },
        { id: "M7", title: "Post live", done: false },
      ],
    },
  ]);
  const filteredProjects = projects.filter((p) =>
    (projectFilter === "All" || p.status === projectFilter) && p.name.toLowerCase().includes(projectQuery.toLowerCase())
  );
  const toggleMilestone = (pid: string, mid: string) => {
    setProjects((prev) => prev.map((p) => p.id === pid ? { ...p, milestones: p.milestones.map((m) => m.id === mid ? { ...m, done: !m.done } : m) } : p));
  };
  const projectProgress = (p: Project) => {
    const total = p.milestones.length || 1;
    const done = p.milestones.filter((m) => m.done).length;
    return Math.round((done / total) * 100);
  };
  const markCollected = (pid: string) => {
    setProjects((prev) => prev.map((p) => p.id === pid ? { ...p, amountDue: 0 } : p));
  };
  const setProjectStatus = (pid: string, status: ProjectStatus) => {
    setProjects((prev) => prev.map((p) => p.id === pid ? { ...p, status } : p));
  };

  // Collaborators demo state and helpers
  const collabRoles = ["Viewer", "Editor", "Admin"] as const;
  type CollabRole = typeof collabRoles[number];
  const isCollabRole = (v: string): v is CollabRole => (collabRoles as readonly string[]).includes(v);
  type CollabStatus = "Active" | "Invited";
  const [collaborators, setCollaborators] = useState<Array<{ id: string; name: string; email: string; role: CollabRole; status: CollabStatus }>>([
    { id: "COL-1", name: "Priya", email: "priya@example.com", role: "Editor", status: "Active" },
    { id: "COL-2", name: "Arjun", email: "arjun@example.com", role: "Viewer", status: "Invited" },
    { id: "COL-3", name: "Meera", email: "meera@example.com", role: "Admin", status: "Active" },
    { id: "COL-4", name: "Dev", email: "dev@example.com", role: "Editor", status: "Invited" },
  ]);
  const [inviteName, setInviteName] = useState("");
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState<CollabRole>("Viewer");
  const updateCollabRole = (id: string, role: CollabRole) => {
    setCollaborators((prev) => prev.map((c) => (c.id === id ? { ...c, role } : c)));
  };
  const toggleCollabStatus = (id: string) => {
    setCollaborators((prev) => prev.map((c) => (c.id === id ? { ...c, status: c.status === "Active" ? "Invited" : "Active" } : c)));
  };
  const removeCollaborator = (id: string) => {
    setCollaborators((prev) => prev.filter((c) => c.id !== id));
  };
  const inviteCollab = () => {
    if (!inviteName.trim() || !inviteEmail.trim()) return;
    const id = `COL-${Math.floor(Math.random() * 10000)}`;
    setCollaborators((prev) => [{ id, name: inviteName.trim(), email: inviteEmail.trim(), role: inviteRole, status: "Invited" }, ...prev]);
    setInviteName("");
    setInviteEmail("");
    setInviteRole("Viewer");
  };

  const tabs: { id: TabId; label: string; Icon: React.ElementType }[] = [
    { id: "crm", label: "Leads CRM", Icon: UserRound },
    { id: "portfolio", label: "Portfolio", Icon: Folder },
    { id: "invoices", label: "Invoices", Icon: Receipt },
    { id: "projects", label: "Projects", Icon: Briefcase },
    { id: "collaborators", label: "Collaborators", Icon: Users },
  ];

  const onKeyNav = (e: React.KeyboardEvent<HTMLButtonElement>, idx: number) => {
    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        setActive(tabs[Math.max(0, idx - 1)].id);
        break;
      case "ArrowRight":
        e.preventDefault();
        setActive(tabs[Math.min(tabs.length - 1, idx + 1)].id);
        break;
      case "Home":
        e.preventDefault();
        setActive(tabs[0].id);
        break;
      case "End":
        e.preventDefault();
        setActive(tabs[tabs.length - 1].id);
        break;
      default:
        // ignore other keys
        break;
    }
  };

  return (
    <div className={styles.panel} aria-label="Feature preview panel">
      <div role="tablist" aria-label="Feature tabs" className={styles.tabbar}>
        {tabs.map(({ id, label, Icon }, i) => (
          <button
            key={id}
            role="tab"
            aria-selected={active === id}
            aria-controls={`panel-${id}`}
            id={`tab-${id}`}
            tabIndex={active === id ? 0 : -1}
            className={`${styles.tab} ${active === id ? styles.tabActive : ""}`}
            onClick={() => setActive(id)}
            onKeyDown={(e) => onKeyNav(e, i)}
          >
            <Icon size={16} /> {label}
          </button>
        ))}
      </div>

      <div className={styles.content}>
        {/* CRM */}
        <section
          role="tabpanel"
          id="panel-crm"
          aria-labelledby="tab-crm"
          aria-hidden={active !== "crm"}
          className={active === "crm" ? styles.tabpanelVisible : undefined}
          style={{ display: active !== "crm" ? "none" : undefined }}
        >
          <div className={styles.searchRow}>
            <input
              className={styles.searchInput}
              placeholder="Search leads..."
              aria-label="Search leads"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className={styles.sectionTitle}>Pipeline overview</div>
          <div className={styles.kpis}>
            <div className={styles.kpi}><div className={styles.kpiValue}>{crmCounts["New"]}</div><div className={styles.kpiLabel}>New</div></div>
            <div className={styles.kpi}><div className={styles.kpiValue}>{crmCounts["Negotiating"]}</div><div className={styles.kpiLabel}>Negotiating</div></div>
            <div className={styles.kpi}><div className={styles.kpiValue}>{crmCounts["Won"]}</div><div className={styles.kpiLabel}>Won</div></div>
          </div>
          <div className={styles.leadList}>
            {filteredLeads.map((l, i) => (
              <button
                key={l.name}
                className={`${styles.pill} ${l.status === "New" ? styles.pillNew : l.status === "Negotiating" ? styles.pillNegotiating : styles.pillWon}`}
                aria-label={`Lead ${l.name}, status ${l.status}. Click to cycle status.`}
                onClick={() => cycleLead(i)}
              >
                <UserRound size={14} />
                <span>{l.name}</span>
              </button>
            ))}
          </div>
          <div className={styles.addRow}>
            <input
              className={styles.searchInput}
              placeholder="New lead name"
              aria-label="New lead name"
              value={newLeadName}
              onChange={(e) => setNewLeadName(e.target.value)}
            />
            <select
              className={styles.select}
              aria-label="New lead status"
              value={newLeadStatus}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                const val = e.target.value;
                if (isLeadStatus(val)) setNewLeadStatus(val);
              }}
            >
              <option value="New">New</option>
              <option value="Negotiating">Negotiating</option>
              <option value="Won">Won</option>
            </select>
            <button className={styles.smallBtn} onClick={addLead} disabled={!newLeadName.trim()}>
              Add
            </button>
          </div>
        </section>

        {/* Portfolio */}
        <section
          role="tabpanel"
          id="panel-portfolio"
          aria-labelledby="tab-portfolio"
          aria-hidden={active !== "portfolio"}
          className={active === "portfolio" ? styles.tabpanelVisible : undefined}
          style={{ display: active !== "portfolio" ? "none" : undefined }}
        >
          <div className={styles.sectionTitle}>Featured items</div>
          <div className={styles.chipRow}>
            {(["All", ...portfolioTags] as const).map((tag) => (
              <button
                key={tag}
                className={`${styles.chip} ${selectedTag === tag ? styles.chipActive : ""}`}
                aria-pressed={selectedTag === tag}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
          <div className={styles.portfolioGrid}>
            {filteredPortfolio.map((item, i) => (
              <div key={`${item.title}-${i}`} className={styles.tile}>
                <div className={styles.tileInner}>
                  <div className={styles.tileImg} aria-hidden="true" />
                  <div className={styles.overlay} aria-hidden="true">
                    <span className={styles.overlayText}>View case</span>
                  </div>
                  <div className={styles.tileMeta}>
                    <span>{item.title} • {item.tag}</span>
                    <button
                      className={`${styles.starBtn} ${item.featured ? styles.starActive : ""}`}
                      aria-label={`${item.featured ? "Unfeature" : "Feature"} ${item.title}`}
                      onClick={() => toggleFeatured(i)}
                    >
                      <Star size={14} /> {item.featured ? "Featured" : "Feature"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Invoices */}
        <section
          role="tabpanel"
          id="panel-invoices"
          aria-labelledby="tab-invoices"
          aria-hidden={active !== "invoices"}
          className={active === "invoices" ? styles.tabpanelVisible : undefined}
          style={{ display: active !== "invoices" ? "none" : undefined }}
        >
          <div className={styles.sectionTitle}>Recent invoices</div>
          <div className={styles.filterRow}>
            <select className={styles.select} aria-label="Filter invoices" value={invoiceFilter}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setInvoiceFilter(e.target.value as InvoiceFilter)}>
              <option value="All">All</option>
              <option value="Paid">Paid</option>
              <option value="Due">Due</option>
            </select>
          </div>
          <div className={styles.invoiceList}>
            {filteredInvoices.map((inv) => (
              <div key={inv.id} className={styles.invoiceItem}>
                <div>
                  <strong>{inv.id}</strong> • {inv.client}
                </div>
                <div>
                  <span className={inv.status === "Paid" ? styles.statusPaid : styles.statusDue}>
                    {inv.status} • {formatINR(inv.amount)}
                  </span>
                  {inv.status !== "Paid" && (
                    <button className={styles.smallBtn} onClick={() => markPaid(inv.id)} aria-label={`Mark invoice ${inv.id} paid`}>
                      Mark paid
                    </button>
                  )}
                  <button className={styles.smallBtn} onClick={() => toggleDetails(inv.id)} aria-label={`Toggle details for invoice ${inv.id}`}>
                    Details
                  </button>
                </div>
                {openDetails.has(inv.id) && (
                  <div className={styles.details}>
                    Billed services: Content creation, campaign management. Due date in 7 days.
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section
          role="tabpanel"
          id="panel-projects"
          aria-labelledby="tab-projects"
          aria-hidden={active !== "projects"}
          className={active === "projects" ? styles.tabpanelVisible : undefined}
          style={{ display: active !== "projects" ? "none" : undefined }}
        >
          <div className={styles.sectionTitle}>Active projects</div>
          <div className={styles.filterRow}>
            <input className={styles.searchInput} placeholder="Search projects" aria-label="Search projects" value={projectQuery} onChange={(e) => setProjectQuery(e.target.value)} />
            <select className={styles.select} aria-label="Filter projects" value={projectFilter}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                const val = e.target.value;
                if (val === "All") setProjectFilter("All");
                else if (isProjectStatus(val)) setProjectFilter(val);
              }}
            >
              <option value="All">All</option>
              <option value="On Track">On Track</option>
              <option value="At Risk">At Risk</option>
              <option value="Delayed">Delayed</option>
            </select>
          </div>
          <div className={styles.projectList}>
            {filteredProjects.map((p) => (
              <div key={p.id} className={styles.projectItem}>
                <div className={styles.projectHeader}>
                  <span>{p.name} <span className={styles.budgetBadge}>{formatINR(p.amountDue)}</span></span>
                  <span className={`${styles.statusBadge} ${p.status === "On Track" ? styles.statusOnTrack : p.status === "At Risk" ? styles.statusAtRisk : styles.statusDelayed}`}>{p.status}</span>
                </div>
                <div className={styles.teamRow}>
                  {p.team.map((name) => (
                    <span key={`${p.id}-${name}`} className={styles.chip}>{name}</span>
                  ))}
                </div>
                <div className={styles.progressWrap}>
                  <div className={styles.progressBar} style={{ width: `${projectProgress(p)}%` }} aria-hidden="true" />
                </div>
                <div aria-live="polite" aria-atomic="true" style={{ fontSize: 12, color: "#6A6480", marginTop: 4 }}>
                  {projectProgress(p)}% milestones complete
                </div>
                <div className={styles.milestoneList}>
                  {p.milestones.map((m) => (
                    <button key={m.id} className={`${styles.milestoneItem} ${m.done ? styles.milestoneDone : ""}`} onClick={() => toggleMilestone(p.id, m.id)} aria-label={`Toggle milestone ${m.title}`}>
                      {m.title}
                    </button>
                  ))}
                </div>
                <div className={styles.toggleRow}>
                  <button className={styles.smallBtn} onClick={() => markCollected(p.id)} disabled={p.amountDue === 0} aria-label={`Mark payment collected for ${p.name}`}>Mark collected</button>
                  <select className={styles.select} aria-label={`Status for ${p.name}`} value={p.status}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                      const val = e.target.value;
                      if (isProjectStatus(val)) setProjectStatus(p.id, val);
                    }}
                  >
                    <option value="On Track">On Track</option>
                    <option value="At Risk">At Risk</option>
                    <option value="Delayed">Delayed</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Collaborators */}
        <section
          role="tabpanel"
          id="panel-collaborators"
          aria-labelledby="tab-collaborators"
          aria-hidden={active !== "collaborators"}
          className={active === "collaborators" ? styles.tabpanelVisible : undefined}
          style={{ display: active !== "collaborators" ? "none" : undefined }}
        >
          <div className={styles.sectionTitle}>Team collaborators</div>
          <div className={styles.collabList}>
            {collaborators.map((col) => (
              <div key={col.id} className={styles.collabItem}>
                <div>
                  <strong>{col.name}</strong><div style={{ fontSize: 12, color: "#6A6480" }}>{col.email}</div>
                </div>
                <select className={styles.roleSelect} aria-label={`Role for ${col.name}`} value={col.role}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    const val = e.target.value;
                    if (isCollabRole(val)) updateCollabRole(col.id, val);
                  }}
                >
                  <option value="Viewer">Viewer</option>
                  <option value="Editor">Editor</option>
                  <option value="Admin">Admin</option>
                </select>
                <span className={`${styles.statusBadge} ${col.status === "Active" ? styles.statusActive : styles.statusInvited}`}>{col.status}</span>
                <div style={{ display: "flex", gap: 8 }}>
                  <button className={styles.smallBtn} onClick={() => toggleCollabStatus(col.id)} aria-label={`${col.status === "Active" ? "Revoke" : "Activate"} ${col.name}`}>
                    {col.status === "Active" ? "Revoke" : "Activate"}
                  </button>
                  <button className={styles.smallBtn} onClick={() => removeCollaborator(col.id)} aria-label={`Remove ${col.name}`}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.inviteRow}>
            <input className={styles.searchInput} placeholder="Name" aria-label="Collaborator name" value={inviteName} onChange={(e) => setInviteName(e.target.value)} />
            <input className={styles.emailInput} placeholder="Email" aria-label="Collaborator email" value={inviteEmail} onChange={(e) => setInviteEmail(e.target.value)} />
            <select className={styles.roleSelect} aria-label="Collaborator role" value={inviteRole}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                const val = e.target.value;
                if (isCollabRole(val)) setInviteRole(val);
              }}
            >
              <option value="Viewer">Viewer</option>
              <option value="Editor">Editor</option>
              <option value="Admin">Admin</option>
            </select>
            <button className={styles.smallBtn} onClick={inviteCollab} disabled={!inviteName.trim() || !inviteEmail.trim()}>Invite</button>
          </div>
        </section>
      </div>
    </div>
  );
}