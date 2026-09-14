import { useState } from 'react'
import {
  IconForecast,
  IconOps,
  IconRisk,
  IconScenario,
  IconSignals,
  IconSources,
  CheckIcon,
} from '../graphics/Icons'

const LIVE_PRODUCT_URL = 'https://client.averonix.net'

const CAPABILITY_TABS = [
  {
    id: 'forecasting',
    label: 'Continuous Forecasting',
    badge: 'Real-Time Telemetry',
    title: 'Multi-Horizon Continuous Forecasting Engine',
    desc: 'Replaces static monthly planning cycles with live time-series projections. Averonix X.1 unifies high-frequency ERP signals, plant-floor telemetry, and external market shifts into continuously updating demand and production horizons.',
    metrics: [
      { label: 'Forecast Fidelity', val: '99.4%' },
      { label: 'Projection Horizon', val: '180 Days' },
      { label: 'Update Cadence', val: 'Sub-Minute' },
    ],
    features: [
      'Self-calibrating Bayesian confidence bands across 50,000+ SKU combinations',
      'Dynamic seasonal and trend decomposition factoring macro indices and port congestion',
      'Automated drift detection alerting demand planners when variance exceeds 2.5%',
    ],
    previewType: 'forecast',
  },
  {
    id: 'risk',
    label: 'Autonomous Risk Shield',
    badge: 'Disruption Prevention',
    title: 'Multi-Tier Operational & Supply Chain Risk Shield',
    desc: 'Detects structural bottlenecks, supplier insolvency signals, and machine degradation windows up to 21 days before physical impact lands. Disruption flags remain separated in dedicated high-visibility indicators.',
    metrics: [
      { label: 'Early Warning Window', val: '14-21 Days' },
      { label: 'False Positive Ratio', val: '< 0.8%' },
      { label: 'Risk Coverage', val: 'Tier 1-3' },
    ],
    features: [
      'Continuous health scoring across critical plant assets and production lines',
      'Multi-tier supply graph monitoring for logistics chokepoints and lead-time delays',
      'Instant impact propagation modeling across bill-of-materials (BOM) hierarchies',
    ],
    previewType: 'risk',
  },
  {
    id: 'scenarios',
    label: 'Scenario Simulator',
    badge: 'High-Throughput Sandbox',
    title: 'Enterprise-Wide Scenario Sandbox & Stress Tester',
    desc: 'Simulate the operational and financial impact of high-volatility events before committing inventory or capital. Test energy tariff spikes, port shutdowns, supplier outages, and demand surges side-by-side.',
    metrics: [
      { label: 'Concurrent Paths', val: '12,000+' },
      { label: 'Simulation Latency', val: '< 1.2s' },
      { label: 'Scenario Diffing', val: 'Instant' },
    ],
    features: [
      'Side-by-side comparison of EBITDA, working capital, and on-time-in-full (OTIF) metrics',
      'Automated generation of optimal contingency routing and safety stock recalculations',
      'Executive shareable sandboxes with granular role-based permission boundaries',
    ],
    previewType: 'scenarios',
  },
  {
    id: 'execution',
    label: 'Proactive Execution',
    badge: 'Closed-Loop Operations',
    title: 'Autonomous Operational Planning & ERP Dispatch',
    desc: 'Transform forward predictions into executable actions. Averonix X.1 turns mathematical projections directly into scheduled work orders, capacity shifts, and procurement requisitions dispatched straight to your core ERP.',
    metrics: [
      { label: 'Planning Cycle Latency', val: '-68%' },
      { label: 'Direct ERP Sync', val: 'Bi-directional' },
      { label: 'OTIF Preservation', val: '+18.4%' },
    ],
    features: [
      'Native bi-directional sync with SAP S/4HANA, Oracle Cloud, and Microsoft Dynamics',
      'Human-in-the-loop governance with single-click approval protocols',
      'Closed-loop operational tracking verifying real-world execution against plan',
    ],
    previewType: 'execution',
  },
]

const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Unified Data Fabric Ingestion',
    role: 'Enterprise Connectors',
    desc: 'Bi-directional ingestion connects ERP, plant-floor SCADA, MES, WMS, CRM, and supplier APIs into a unified, synchronized operational picture.',
    tag: 'Stage 01-02',
  },
  {
    step: '02',
    title: 'Autonomous Signal & Pattern Discovery',
    role: 'Analytical Layer',
    desc: 'High-frequency telemetry is filtered, normalized, and evaluated to separate transient noise from true emerging operational shifts and demand inflections.',
    tag: 'Stage 03-04',
  },
  {
    step: '03',
    title: 'Multi-Horizon Simulation & Risk Scoring',
    role: 'Predictive Engines',
    desc: 'Thousands of alternative futures are modeled simultaneously to surface vulnerability chokepoints and quantify financial trade-offs before physical commitment.',
    tag: 'Stage 05-07',
  },
  {
    step: '04',
    title: 'One-Click Execution & Autonomous Dispatch',
    role: 'Operational Output',
    desc: 'Verified optimal plans are dispatched directly to plant managers, procurement leads, and enterprise ledgers with full audit trails.',
    tag: 'Stage 08',
  },
]

const NVIDIA_STACK = [
  {
    name: 'NVIDIA RAPIDS (cuDF & cuML)',
    role: 'Core Data Science & Analytical Engine',
    tag: 'Pipelines 01 – 07',
    summary:
      'Directly drives Forecasting Intelligence, Predictive Operations, and Risk Prediction engines across Stages 01 to 07 of your pipeline.',
    points: [
      'cuDF (GPU-accelerated Pandas) ingests, normalizes, and processes high-volume operational and financial data streams at GPU memory speeds.',
      'cuML (GPU-accelerated Scikit-learn) delivers high-performance ML algorithms to train predictive models that project demand trajectories, uncover hidden operational patterns, and calculate emerging risk scores across manufacturing and supply networks.',
    ],
    badge: 'GPU Data Science',
  },
  {
    name: 'NVIDIA Triton Inference Server',
    role: 'Production Serving & Deployment Backend',
    tag: 'Scenario & Ops Planning',
    summary:
      'Powers the Scenario Planning and Operational Planning engines with enterprise-grade concurrent serving.',
    points: [
      'Manages concurrent model execution, dynamic request batching, and multi-framework workloads (ONNX, PyTorch, TensorRT).',
      'Enables Averonix X.1 to evaluate thousands of alternative scenario variations simultaneously and serve real-time predictions across multiple enterprise planning departments without queuing.',
    ],
    badge: 'Enterprise Serving',
  },
  {
    name: 'NVIDIA TensorRT',
    role: 'Deep Learning Optimization Compiler',
    tag: 'Sub-Millisecond Inference',
    summary:
      'Optimizes deep neural network inference for high-frequency operational updates.',
    points: [
      'Tailored for deep neural networks used in complex time-series forecasting and multi-variate risk modeling.',
      'Optimizes graph structures, performs kernel auto-tuning, and quantizes precision (FP16/INT8), minimizing inference latency during real-time operational shifts.',
    ],
    badge: 'Precision Inference',
  },
]

const IMPACT_METRICS = [
  {
    value: '-68%',
    label: 'Planning Cycle Latency',
    desc: 'Transition from multi-week manual spreadsheets to continuous sub-minute operational cycles.',
  },
  {
    value: '99.4%',
    label: 'Trajectory Fidelity',
    desc: 'Tested demand and production precision across high-volatility global manufacturing environments.',
  },
  {
    value: '14.2x',
    label: 'Faster Scenario Modeling',
    desc: 'Simulate 12,000+ complex operational disruptions and cost tradeoffs in seconds.',
  },
  {
    value: '$14.8M',
    label: 'Average Annual Risk Prevented',
    desc: 'Measurable cost avoidance through proactive lead-time buffer adjustments and scrap reduction.',
  },
]

function InteractivePreview({ activeTab }) {
  if (activeTab === 'forecasting') {
    return (
      <div className="product-console-body">
        <div className="console-top-meta">
          <span className="console-live-tag">● LIVE INGESTION: PLANT-04 / EMEA REGION</span>
          <span className="console-cadence">SYNC INTERVAL: 850ms</span>
        </div>
        <svg viewBox="0 0 540 220" className="product-svg-chart" aria-hidden="true">
          <defs>
            <linearGradient id="gradTeal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#49C7C0" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#49C7C0" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <line x1="40" y1="180" x2="500" y2="180" stroke="rgba(245,241,234,0.12)" />
          <line x1="40" y1="120" x2="500" y2="120" stroke="rgba(245,241,234,0.12)" />
          <line x1="40" y1="60" x2="500" y2="60" stroke="rgba(245,241,234,0.12)" />

          {/* Observed History */}
          <path
            d="M40 145 C90 140 120 110 170 125 C210 135 240 90 280 85"
            fill="none"
            stroke="#F5F1EA"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Confidence interval band */}
          <polygon
            points="280,85 340,55 410,40 490,30 490,110 410,115 340,120 280,85"
            fill="url(#gradTeal)"
          />

          {/* Projected values dashed past today */}
          <path
            d="M280 85 C330 80 370 65 420 55 C450 48 470 42 490 38"
            fill="none"
            stroke="#49C7C0"
            strokeWidth="3"
            strokeDasharray="7 5"
            strokeLinecap="round"
          />

          {/* Today Divider */}
          <line x1="280" y1="30" x2="280" y2="190" stroke="rgba(232,106,28,0.7)" strokeDasharray="4 4" />
          <circle cx="280" cy="85" r="5" fill="#E86A1C" />
          <circle cx="490" cy="38" r="5" fill="#49C7C0" />

          {/* Labels */}
          <text x="280" y="24" textAnchor="middle" fill="#E86A1C" fontSize="10" fontFamily="Work Sans">
            TODAY (REAL-TIME SYNC)
          </text>
          <text x="120" y="170" fill="#A79D8F" fontSize="11" fontFamily="Work Sans">
            Observed Trajectory (Solid)
          </text>
          <text x="350" y="150" fill="#49C7C0" fontSize="11" fontFamily="Work Sans">
            Projected Forecast (99.4% CI)
          </text>
        </svg>

        <div className="console-stat-row">
          <div className="console-stat-pill">
            <small>MODEL CONFIDENCE</small>
            <strong>99.4% Bayesian</strong>
          </div>
          <div className="console-stat-pill">
            <small>PREDICTED PEAK</small>
            <strong className="accent-teal">+24.6% Q3 Surge</strong>
          </div>
          <div className="console-stat-pill">
            <small>ACTION STATUS</small>
            <strong className="accent-orange">Ready for Dispatch</strong>
          </div>
        </div>
      </div>
    )
  }

  if (activeTab === 'risk') {
    return (
      <div className="product-console-body">
        <div className="console-top-meta">
          <span className="console-live-tag status-alert">● DISRUPTION DETECTOR: 3 CRITICAL FLAGS</span>
          <span className="console-cadence">LEAD-TIME HORIZON: 21 DAYS</span>
        </div>
        <div className="risk-matrix-list">
          <div className="risk-matrix-item is-critical">
            <div className="risk-item-head">
              <span className="risk-badge">HIGH PRIORITY</span>
              <span className="risk-time">T - 14 Days</span>
            </div>
            <strong>Raw Material Shortage: Antwerp Logistics Port</strong>
            <p>Projected delivery bottleneck delays Assembly Line 2 by 4.5 shifts. Automated re-routing available.</p>
            <div className="risk-actions">
              <span className="risk-rec">Suggested: Shift 15% batch capacity to Plant 02</span>
            </div>
          </div>
          <div className="risk-matrix-item">
            <div className="risk-item-head">
              <span className="risk-badge warning">MEDIUM RISK</span>
              <span className="risk-time">T - 19 Days</span>
            </div>
            <strong>Cooling Unit #4 Bearing Degradation</strong>
            <p>Telemetry indicates vibration anomaly matching historical failure patterns within 450 operating hours.</p>
            <div className="risk-actions">
              <span className="risk-rec">Suggested: Schedule preventative maintenance during Sunday idle</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (activeTab === 'scenarios') {
    return (
      <div className="product-console-body">
        <div className="console-top-meta">
          <span className="console-live-tag">● SCENARIO SIMULATOR: 12,400 CONCURRENT VARIATIONS</span>
          <span className="console-cadence">LATENCY: 8ms ON TRITON</span>
        </div>
        <div className="scenario-diff-grid">
          <div className="scenario-card baseline">
            <span className="scen-title">BASELINE PLAN</span>
            <div className="scen-val">$42.8M Working Capital</div>
            <div className="scen-sub">OTIF Rate: 91.2%</div>
            <div className="scen-sub">Risk Exposure: Moderate</div>
          </div>
          <div className="scenario-card variant active">
            <span className="scen-tag">RECOMMENDED VARIANT B</span>
            <span className="scen-title">PROACTIVE DIVERSIFICATION</span>
            <div className="scen-val accent-teal">$38.4M (-10.2% Capital)</div>
            <div className="scen-sub">OTIF Rate: 98.6% (+7.4%)</div>
            <div className="scen-sub accent-teal">Zero Stockout Probability</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="product-console-body">
      <div className="console-top-meta">
        <span className="console-live-tag">● BI-DIRECTIONAL ERP DISPATCH PROTOCOL</span>
        <span className="console-cadence">SYNC TARGET: SAP S/4HANA</span>
      </div>
      <div className="dispatch-preview-list">
        <div className="dispatch-item">
          <div className="dispatch-check">✓</div>
          <div>
            <strong>Production Order #PO-8849-B Generated</strong>
            <p>14,200 Units allocated to Stuttgart Plant. Workcenters 08 &amp; 09 locked.</p>
          </div>
          <span className="dispatch-status">DISPATCHED</span>
        </div>
        <div className="dispatch-item">
          <div className="dispatch-check">✓</div>
          <div>
            <strong>Reorder Trigger #REC-1049 Transferred</strong>
            <p>Raw Aluminum safety stock increased by 2,400 kg ahead of supplier holiday window.</p>
          </div>
          <span className="dispatch-status">CONFIRMED</span>
        </div>
      </div>
    </div>
  )
}

export default function Product() {
  const [activeTab, setActiveTab] = useState(CAPABILITY_TABS[0].id)
  const currentCapability = CAPABILITY_TABS.find((t) => t.id === activeTab) || CAPABILITY_TABS[0]

  return (
    <main className="product-page" id="product-root">
      {/* ========================================================================= */}
      {/* SECTION 1: HERO SECTION                                                   */}
      {/* ========================================================================= */}
      <section className="section product-hero">
        <div className="wrap">
          <div className="product-hero-inner">
            <div className="product-hero-copy">
              <span className="kicker">Averonix X.1 • Autonomous Operations</span>
              <h1 className="product-hero-title">
                THE PREDICTIVE AI OPERATING SYSTEM FOR <em>ENTERPRISE SCALE</em>
              </h1>
              <p className="lede">
                Move past reactive operational reports. Averonix X.1 unifies real-time enterprise telemetry into
                continuous multi-horizon forecasts, autonomous disruption mitigation, and closed-loop execution.
              </p>

              <div className="product-hero-actions">
                <a
                  className="btn btn-primary btn-hero-cta"
                  href={LIVE_PRODUCT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Launch Averonix X.1 live platform at client.averonix.net"
                >
                  Launch Averonix X.1
                  <span className="btn-arrow-wrap" aria-hidden="true">
                    →
                  </span>
                </a>
                <a className="btn btn-ghost" href="#capabilities">
                  Explore Capabilities ↓
                </a>
              </div>

              <div className="product-hero-meta">
                <div className="meta-badge">
                  <span className="pulse-dot" />
                  <span>Production Ready • Live at <strong>client.averonix.net</strong></span>
                </div>
              </div>
            </div>

            <div className="product-hero-preview">
              <div className="product-console-frame">
                <div className="product-console-header">
                  <div className="console-window-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="console-title">AVERONIX X.1 // PRODUCTION COCKPIT</div>
                  <div className="console-status-pill">RUNNING</div>
                </div>

                <div className="product-console-telemetry">
                  <div className="telemetry-box">
                    <span>INFERENCE LATENCY</span>
                    <strong>4.8 ms</strong>
                  </div>
                  <div className="telemetry-box">
                    <span>STREAM THROUGHPUT</span>
                    <strong>1.8M ev/s</strong>
                  </div>
                  <div className="telemetry-box">
                    <span>PARALLEL SCENARIOS</span>
                    <strong>12,400</strong>
                  </div>
                  <div className="telemetry-box">
                    <span>ACCURACY SCORE</span>
                    <strong>99.4%</strong>
                  </div>
                </div>

                <div className="product-console-chart-wrap">
                  <InteractivePreview activeTab="forecasting" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: CORE PRODUCT CAPABILITIES                                      */}
      {/* ========================================================================= */}
      <section className="section section-alt" id="capabilities">
        <div className="wrap">
          <div className="section-head center">
            <span className="kicker teal">Product Capabilities</span>
            <h2>
              ENGINEERED FOR <em>PREDICTIVE MASTERY</em>
            </h2>
            <p className="lede">
              Averonix X.1 brings together five specialized engines to turn volatile industrial environments into
              predictable, profitable operational pathways.
            </p>
          </div>

          <div className="product-tabs-nav" role="tablist">
            {CAPABILITY_TABS.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`product-tab-btn ${activeTab === tab.id ? 'is-active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span>{tab.label}</span>
                <small>{tab.badge}</small>
              </button>
            ))}
          </div>

          <div className="product-capability-card">
            <div className="cap-content-col">
              <span className="kicker">{currentCapability.badge}</span>
              <h3>{currentCapability.title}</h3>
              <p>{currentCapability.desc}</p>

              <div className="cap-metrics-grid">
                {currentCapability.metrics.map((m) => (
                  <div key={m.label} className="cap-metric-card">
                    <b>{m.val}</b>
                    <span>{m.label}</span>
                  </div>
                ))}
              </div>

              <ul className="cap-features-list">
                {currentCapability.features.map((feat) => (
                  <li key={feat}>
                    <CheckIcon />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="cap-interactive-col">
              <div className="cap-interactive-shell">
                <InteractivePreview activeTab={activeTab} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: PRODUCT WORKFLOW & EXECUTION PIPELINE                         */}
      {/* ========================================================================= */}
      <section className="section" id="workflow">
        <div className="wrap">
          <div className="section-head center">
            <span className="kicker">How It Works In Practice</span>
            <h2>
              FROM ENTERPRISE SIGNALS TO <em>AUTOMATED ACTION</em>
            </h2>
            <p className="lede">
              How planning, operations, and leadership teams leverage Averonix X.1 day-to-day to outpace disruption.
            </p>
          </div>

          <div className="workflow-grid">
            {WORKFLOW_STEPS.map((step) => (
              <div key={step.step} className="workflow-card">
                <div className="workflow-card-head">
                  <span className="workflow-num">{step.step}</span>
                  <span className="workflow-tag">{step.tag}</span>
                </div>
                <h4>{step.title}</h4>
                <span className="workflow-role">{step.role}</span>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: ACCELERATED INTELLIGENCE ARCHITECTURE (NVIDIA AI SDKs)        */}
      {/* ========================================================================= */}
      <section className="section section-darker" id="acceleration-stack">
        <div className="wrap">
          <div className="section-head center">
            <span className="kicker teal">Accelerated Computing Architecture</span>
            <h2>
              BUILT ON HIGH-THROUGHPUT <em>GPU ACCELERATION</em>
            </h2>
            <p className="lede">
              The core analytical, inference, and compilation layers of Averonix X.1 are built on NVIDIA accelerated
              computing SDKs, unlocking sub-millisecond predictions across massive enterprise data pipelines.
            </p>
          </div>

          <div className="nvidia-stack-grid">
            {NVIDIA_STACK.map((item) => (
              <div key={item.name} className="nvidia-card">
                <div className="nvidia-card-header">
                  <span className="nvidia-badge">{item.badge}</span>
                  <span className="nvidia-tag">{item.tag}</span>
                </div>
                <h3>{item.name}</h3>
                <span className="nvidia-role">{item.role}</span>
                <p className="nvidia-summary">{item.summary}</p>
                <div className="nvidia-points">
                  {item.points.map((pt, i) => (
                    <div key={i} className="nvidia-point-row">
                      <span className="point-bullet" />
                      <p>{pt}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="nvidia-metrics-banner">
            <div className="nvidia-metric-item">
              <span className="metric-val">cuDF &amp; cuML</span>
              <span className="metric-lbl">GPU-accelerated Data Science &amp; Pipeline Stages 01–07</span>
            </div>
            <div className="nvidia-metric-divider" />
            <div className="nvidia-metric-item">
              <span className="metric-val">Triton Engine</span>
              <span className="metric-lbl">Dynamic Batching &amp; Multi-Department Serving</span>
            </div>
            <div className="nvidia-metric-divider" />
            <div className="nvidia-metric-item">
              <span className="metric-val">TensorRT Compiler</span>
              <span className="metric-lbl">Quantized FP16/INT8 Graph Optimization &amp; Sub-10ms Updates</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: ENTERPRISE PERFORMANCE & BUSINESS ROI                          */}
      {/* ========================================================================= */}
      <section className="section section-alt" id="outcomes">
        <div className="wrap">
          <div className="section-head center">
            <span className="kicker">Verified Enterprise Impact</span>
            <h2>
              QUANTIFIED PERFORMANCE ACROSS <em>PRODUCTION NETWORKS</em>
            </h2>
            <p className="lede">
              Measurable ROI delivered to manufacturing, supply chain, and global finance organizations.
            </p>
          </div>

          <div className="impact-stats-grid">
            {IMPACT_METRICS.map((stat) => (
              <div key={stat.label} className="impact-stat-card">
                <div className="stat-val-wrap">
                  <span className="stat-big-val">{stat.value}</span>
                </div>
                <h4>{stat.label}</h4>
                <p>{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: FINAL ACCESS & DEPLOYMENT CTA                                  */}
      {/* ========================================================================= */}
      <section className="section product-final-cta">
        <div className="wrap">
          <div className="product-cta-box">
            <div className="product-cta-copy">
              <span className="kicker">Live Deployment</span>
              <h2>
                ACCESS <em>AVERONIX X.1</em> TODAY
              </h2>
              <p className="lede">
                Experience the next evolution of autonomous operational planning. Connect directly to the production
                client or schedule a dedicated enterprise architecture consultation.
              </p>
              <div className="product-cta-actions">
                <a
                  className="btn btn-primary btn-hero-cta"
                  href={LIVE_PRODUCT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Access Averonix X.1 live platform at client.averonix.net"
                >
                  Launch Averonix X.1
                  <span className="btn-arrow-wrap" aria-hidden="true">
                    →
                  </span>
                </a>
                <a className="btn btn-ghost" href="/#contact">
                  Request Enterprise Sandbox
                </a>
              </div>
              <div className="product-cta-notes">
                <span>Deployment Options: Cloud SaaS • Dedicated Single-Tenant VPC • On-Premises GPU Clusters</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
