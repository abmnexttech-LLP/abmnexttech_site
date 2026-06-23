import { useState, useEffect } from 'react';
import NeuralCanvas from '@/components/NeuralCanvas';

const tickerItems = [
  'AI Bank Reconciliation',
  'Lease Abstraction Engine',
  'Commercial Lease Administration',
  'Residential ERP Platform',
  'Leasing Workflow Automation',
  'Yardi Voyager Integration',
  'AI Deal Sheet Generation',
  'NOI · WALT · Cap Rate Dashboards',
];

const integrations = [
  'Yardi Voyager', 'MRI Software', 'Microsoft Excel', 'QuickBooks',
  'DocuSign', 'Salesforce CRM', 'SFTP / FTP', 'REST API',
  'Crystal Reports', 'SQL Server', 'Google Drive', 'SharePoint',
  'Microsoft 365', 'AppFolio',
];

export default function HomePage() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(en => {
          if (en.isIntersecting) {
            (en.target as HTMLElement).style.opacity = '1';
            (en.target as HTMLElement).style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.prod-card, .why-card, .step, .ai-feat, .int-chip').forEach(el => {
      (el as HTMLElement).style.opacity = '0';
      (el as HTMLElement).style.transform = 'translateY(20px)';
      (el as HTMLElement).style.transition = 'opacity .6s ease, transform .6s ease';
      io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const encoded = Array.from(data.entries())
      .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v.toString())}`)
      .join('&');

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encoded,
    })
      .then(() => setSubmitted(true))
      .catch(() => setSubmitted(true));
  };

  return (
    <>
      <NeuralCanvas />

      {/* NAV */}
      <nav>
        <a href="#" className="logo">
          <span>ABM</span><span className="logo-badge">Nexttech</span>
          <span className="logo-ai">AI</span>
        </a>
        <ul>
          <li><a href="#products">Products</a></li>
          <li><a href="#ai-core">AI Core</a></li>
          <li><a href="#how">How It Works</a></li>
          <li><a href="#why">Why Us</a></li>
          <li><a href="#integrations">Integrations</a></li>
        </ul>
        <a href="#contact" className="nav-demo">Book a Demo</a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="ai-badge">
            <span className="ai-badge-dot"></span> Powered by Advanced AI · Real Estate &amp; Finance Automation
          </div>
          <h1>
            The AI Platform<br />
            <span className="word-ai">Real Estate Runs On</span>
          </h1>
          <p className="hero-sub">
            From AI bank reconciliation to full lease lifecycle management — ABM Nexttech is the end-to-end ERP built for commercial and residential operators who demand automation.
          </p>
          <div className="hero-btns">
            <a href="#contact" className="btn-cyan">Book a Free Demo →</a>
            <a href="#products" className="btn-ghost">Explore Products</a>
          </div>
          <div className="hero-trust">
            <span className="trust-item"><span className="trust-check">✓</span> AI Lease Abstraction</span>
            <span className="trust-div"></span>
            <span className="trust-item"><span className="trust-check">✓</span> Bank Reconciliation</span>
            <span className="trust-div"></span>
            <span className="trust-item"><span className="trust-check">✓</span> Yardi-Native Integration</span>
            <span className="trust-div"></span>
            <span className="trust-item"><span className="trust-check">✓</span> Commercial + Residential ERP</span>
          </div>
        </div>
      </section>

      {/* AI TICKER */}
      <div className="ticker-wrap">
        <div className="ticker-inner">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="ticker-item">
              <span className="t-dot">◆</span> {item}
            </span>
          ))}
        </div>
      </div>

      {/* STATS */}
      <div className="stats">
        <div className="stat-cell">
          <span className="stat-val">5</span>
          <div className="stat-label">Integrated AI Modules</div>
        </div>
        <div className="stat-cell">
          <span className="stat-val">100%</span>
          <div className="stat-label">Cloud-Native Platform</div>
        </div>
        <div className="stat-cell">
          <span className="stat-val">AI</span>
          <div className="stat-label">Lease Abstraction Engine</div>
        </div>
        <div className="stat-cell">
          <span className="stat-val">ERP</span>
          <div className="stat-label">Commercial + Residential</div>
        </div>
      </div>

      {/* PRODUCTS */}
      <section id="products">
        <div className="sec-header center">
          <div className="sec-tag">Platform Modules</div>
          <h2 className="sec-title">Five AI-Powered Modules. One Unified Platform.</h2>
          <p className="sec-sub">Every module is designed to work together — eliminating data silos across your entire property operation.</p>
        </div>
        <div className="products-grid">

          <div className="prod-card">
            <span className="prod-num">MODULE 01</span>
            <div className="prod-icon">
              <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/><path d="M14 14h4M14 17h4"/></svg>
            </div>
            <h3>AI Bank Reconciliation</h3>
            <p>Automated transaction matching with AI anomaly detection. Zero manual row-by-row reconciliation — exceptions surface automatically, ready for review.</p>
            <div className="prod-tags">
              <span className="tag tag-cyan">AI-Powered</span>
              <span className="tag tag-blue">Multi-Entity</span>
              <span className="tag tag-gold">Audit-Ready</span>
            </div>
          </div>

          <div className="prod-card">
            <span className="prod-num">MODULE 02</span>
            <div className="prod-icon">
              <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
            </div>
            <h3>AI Lease Abstraction</h3>
            <p>Upload any lease PDF. Our NLP engine extracts all critical data — dates, CAM, escalations, options — into structured records in seconds.</p>
            <div className="prod-tags">
              <span className="tag tag-purple">NLP Engine</span>
              <span className="tag tag-cyan">Commercial + Resi</span>
            </div>
          </div>

          <div className="prod-card">
            <span className="prod-num">MODULE 03</span>
            <div className="prod-icon">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <h3>Lease Administration</h3>
            <p>Centralized lease management — renewals, amendments, critical date alerts, billing schedules, and FASB ASC 842 compliance tools for your full portfolio.</p>
            <div className="prod-tags">
              <span className="tag tag-blue">FASB 842</span>
              <span className="tag tag-cyan">Portfolio-Wide</span>
            </div>
          </div>

          <div className="prod-card wide">
            <span className="prod-num">MODULE 04</span>
            <div className="wide-inner">
              <div>
                <div className="prod-icon">
                  <svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                </div>
                <h3>Leasing Workflow Engine</h3>
                <p>Orchestrate the full leasing cycle — prospect intake, deal sheet, LOI, approval, e-signature, and move-in — with automated routing and real-time pipeline visibility.</p>
                <div className="prod-tags" style={{marginTop: '1rem'}}>
                  <span className="tag tag-cyan">End-to-End</span>
                  <span className="tag tag-gold">e-Signature</span>
                  <span className="tag tag-purple">Pipeline Tracking</span>
                </div>
              </div>
              <div>
                <div className="prod-icon">
                  <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                </div>
                <h3>End-to-End ERP Platform</h3>
                <p>The unified backbone — GL accounting, tenant portals, maintenance management, AI reporting, and Yardi/MRI bi-directional sync for commercial and residential at any scale.</p>
                <div className="prod-tags" style={{marginTop: '1rem'}}>
                  <span className="tag tag-cyan">Yardi-Native</span>
                  <span className="tag tag-blue">MRI Sync</span>
                  <span className="tag tag-gold">Full ERP</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* AI CORE STRIP */}
      <section className="ai-strip" id="ai-core">
        <div className="ai-strip-inner">
          <div className="ai-visual">
            <div className="orb-ring r3"></div>
            <div className="orb-ring r2"></div>
            <div className="orb-ring r1"></div>
            <div className="ai-orb"></div>
            <div className="orb-center"><span className="big">AI</span>Core Engine</div>
            <div className="float-chip fc1">✦ Lease Parsed</div>
            <div className="float-chip fc2">✦ Recon: 99.8%</div>
            <div className="float-chip fc3">✦ Alert: Renewal Due</div>
            <div className="float-chip fc4">✦ CAM Extracted</div>
          </div>
          <div className="ai-content">
            <div className="sec-tag">AI Core</div>
            <h2 className="sec-title">AI That Understands Real Estate — Not Just Documents</h2>
            <p className="sec-sub" style={{marginBottom: 0}}>Our models are trained specifically on commercial and residential lease documents, bank statements, and property accounting data.</p>
            <div className="ai-features">
              <div className="ai-feat">
                <div className="ai-feat-icon">🧠</div>
                <div>
                  <h4>Lease-Trained NLP</h4>
                  <p>Clause extraction, CAM parsing, option detection, and escalation schedules — with commercial real estate vocabulary built in.</p>
                </div>
              </div>
              <div className="ai-feat">
                <div className="ai-feat-icon">⚡</div>
                <div>
                  <h4>Autonomous Reconciliation</h4>
                  <p>AI matches thousands of transactions per minute, surfaces exceptions only, and learns your entity patterns over time.</p>
                </div>
              </div>
              <div className="ai-feat">
                <div className="ai-feat-icon">📊</div>
                <div>
                  <h4>Predictive Portfolio Insights</h4>
                  <p>NOI, WALT, economic occupancy, and cap rate — AI-generated KPIs updated in real time across your entire portfolio.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how">
        <div className="sec-header center">
          <div className="sec-tag">Process</div>
          <h2 className="sec-title">Live in Weeks, Not Months</h2>
          <p className="sec-sub">A structured rollout that goes live fast without disrupting your existing operations.</p>
        </div>
        <div className="steps">
          <div className="step">
            <div className="step-circle">
              <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              <span className="step-n">1</span>
            </div>
            <h4>Connect Your Data</h4>
            <p>Integrate Yardi, MRI, or Excel via SFTP or REST API — no rekeying, no disruption.</p>
          </div>
          <div className="step">
            <div className="step-circle">
              <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              <span className="step-n">2</span>
            </div>
            <h4>Configure Modules</h4>
            <p>Select the AI modules your team needs — bank recon, lease admin, workflow, or full ERP.</p>
          </div>
          <div className="step">
            <div className="step-circle">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93A10 10 0 0 1 21 12a10 10 0 0 1-2.93 7.07M4.93 4.93A10 10 0 0 0 3 12a10 10 0 0 0 2.93 7.07"/></svg>
              <span className="step-n">3</span>
            </div>
            <h4>AI Does the Work</h4>
            <p>AI handles extraction, matching, and alerts. Your team only sees decisions that need a human.</p>
          </div>
          <div className="step">
            <div className="step-circle">
              <svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
              <span className="step-n">4</span>
            </div>
            <h4>Report &amp; Scale</h4>
            <p>Real-time AI dashboards across your portfolio. Add properties, entities, or users as you grow.</p>
          </div>
        </div>
      </section>

      {/* WHY ABM */}
      <section id="why">
        <div className="sec-header">
          <div className="sec-tag">Why ABM Nexttech</div>
          <h2 className="sec-title">Built by Real Estate Technology Specialists</h2>
          <p className="sec-sub">Not generic SaaS retrofitted for real estate. Every feature built around how property teams actually operate.</p>
        </div>
        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon-wrap">⚡</div>
            <h4>Yardi-Native Architecture</h4>
            <p>Deep Yardi Voyager integration — YSR reports, Crystal Report output, and bi-directional sync with no middleware friction or third-party ETL.</p>
          </div>
          <div className="why-card">
            <div className="why-icon-wrap">🧠</div>
            <h4>AI That Knows Leases</h4>
            <p>Models trained on commercial and residential lease documents — not generic contracts — delivering production-grade abstraction accuracy from day one.</p>
          </div>
          <div className="why-card">
            <div className="why-icon-wrap">🔐</div>
            <h4>Security &amp; Audit Ready</h4>
            <p>Role-based access, full audit trails, and bank-grade encryption for every transaction, document, and workflow event in the system.</p>
          </div>
          <div className="why-card">
            <div className="why-icon-wrap">📊</div>
            <h4>Decision-Grade Reporting</h4>
            <p>NOI by property, WALT, economic occupancy, cap rate — the KPIs asset managers actually use, powered by AI and available in real time.</p>
          </div>
          <div className="why-card">
            <div className="why-icon-wrap">🔗</div>
            <h4>Open Integration Layer</h4>
            <p>REST APIs and webhook support so ABM Nexttech plugs into your existing stack — accounting, CRM, e-signature, or custom internal tools.</p>
          </div>
          <div className="why-card">
            <div className="why-icon-wrap">🏗️</div>
            <h4>Commercial + Residential</h4>
            <p>Retail strip, office, industrial, and multifamily are all first-class. One AI ERP to manage your entire mixed-use portfolio without module switching.</p>
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section id="integrations">
        <div className="sec-header center">
          <div className="sec-tag">Integrations</div>
          <h2 className="sec-title">Works With Your Existing Stack</h2>
          <p className="sec-sub">ABM Nexttech connects to the tools your team already uses — syncing data in real time, no manual exports required.</p>
        </div>
        <div className="int-grid">
          {integrations.map(name => (
            <div key={name} className="int-chip">
              <span className="int-dot"></span>{name}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="contact-wrap">
          <div className="sec-tag" style={{justifyContent: 'center'}}>Book a Demo</div>
          <h2 className="sec-title" style={{maxWidth: '100%', textAlign: 'center'}}>See the AI Platform in Action</h2>
          <p className="sec-sub" style={{maxWidth: '100%', textAlign: 'center', margin: '1rem auto 0'}}>
            Book a personalized demo. We'll walk you through the modules most relevant to your portfolio — live, with your data.
          </p>
          <form
            className="cform"
            name="contact"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
            <div className="frow">
              <input type="text" name="first-name" placeholder="First name" required />
              <input type="text" name="last-name" placeholder="Last name" required />
            </div>
            <input type="email" name="email" placeholder="Work email" required />
            <input type="text" name="company" placeholder="Company / Property name" />
            <select name="interest" defaultValue="">
              <option value="" disabled>What interests you most?</option>
              <option value="AI Bank Reconciliation">AI Bank Reconciliation</option>
              <option value="AI Lease Abstraction">AI Lease Abstraction</option>
              <option value="Lease Administration">Lease Administration</option>
              <option value="Leasing Workflow Engine">Leasing Workflow Engine</option>
              <option value="Full ERP Platform">Full ERP Platform</option>
              <option value="All Modules">All Modules</option>
            </select>
            <textarea name="message" placeholder="Tell us about your portfolio size and current challenges…"></textarea>
            <button
              type="submit"
              className="btn-full"
              disabled={submitted}
              style={submitted ? {background: '#0FA882', letterSpacing: '0'} : undefined}
            >
              {submitted ? "✓ Demo Requested — We'll reach out within 24 hours!" : 'Request a Demo →'}
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="foot-top">
          <div className="foot-brand">
            <a href="#" className="logo">
              <span>ABM</span><span className="logo-badge">Nexttech</span><span className="logo-ai">AI</span>
            </a>
            <p>AI-powered real estate technology — from lease abstraction to end-to-end ERP for commercial and residential operators.</p>
          </div>
          <div className="foot-col">
            <h5>Platform</h5>
            <ul>
              <li><a href="#products">AI Bank Reconciliation</a></li>
              <li><a href="#products">Lease Abstraction</a></li>
              <li><a href="#products">Lease Administration</a></li>
              <li><a href="#products">Leasing Workflow</a></li>
              <li><a href="#products">ERP Platform</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Company</h5>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#integrations">Integrations</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#contact">Book a Demo</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Resources</h5>
            <ul>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">API Reference</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <p>© 2025 ABM Nexttech LLP. All rights reserved.</p>
          <p className="mono">abmnexttech.com</p>
        </div>
      </footer>
    </>
  );
}
