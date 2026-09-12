export const NAV = [
  { href: '#home', label: 'Home' },
  { href: '#platform', label: 'Platform' },
  { href: '#about', label: 'About' },
  { href: '#solutions', label: 'Solutions' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#architecture', label: 'Architecture' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
]

export const QUICK_LINKS = NAV.slice(0, 5)

export const CAPABILITIES = [
  {
    title: 'Forecasting Intelligence',
    tag: 'Forecasts',
    text: 'Turn historical and live operational signals into forward-looking demand, production, and financial forecasts.',
    image: '/images/cap-forecast.png',
    featured: true,
  },
  {
    title: 'Predictive Operations',
    tag: 'Operations',
    text: 'Convert forecasts into proactive operational plans so teams act before disruption, not after it lands.',
    image: '/images/cap-ops.png',
    featured: true,
  },
  {
    title: 'Risk Prediction',
    tag: 'Risk',
    text: 'Surface emerging operational, supply, and financial risk while there is still time to change the plan.',
    image: '/images/cap-risk.png',
  },
  {
    title: 'Scenario Planning',
    tag: 'Scenarios',
    text: 'Model alternative futures and compare outcomes before committing inventory, capacity, or capital.',
    image: '/images/cap-scenario.png',
  },
  {
    title: 'Operational Planning',
    tag: 'Planning',
    text: 'Hand planning and operations teams a path they can act on before the disruption arrives.',
    image: '/images/cap-planning.png',
  },
]

export const STEPS = [
  {
    n: '01',
    title: 'Enterprise Data',
    text: 'Connect ERP, manufacturing, financial, supply chain, inventory, sales, market, and operational sources.',
    icon: 'sources',
  },
  {
    n: '02',
    title: 'Predictive Analytics',
    text: 'Process signals, history, and patterns so the platform can see what is changing — not only what already happened.',
    icon: 'signals',
  },
  {
    n: '03',
    title: 'Forecasting Engine',
    text: 'Generate forecasts across demand, production, and financial trajectories from the predictive layer.',
    icon: 'forecast',
  },
  {
    n: '04',
    title: 'Risk & Scenario Analysis',
    text: 'Score emerging risk and run alternative futures against the same operational picture.',
    icon: 'risk',
  },
  {
    n: '05',
    title: 'Proactive Operations',
    text: 'Hand planning and operations teams a path they can act on before the disruption arrives.',
    icon: 'ops',
  },
]

export const PROBLEMS = [
  'Operations still run on lagging reports after the window to act has closed.',
  'Risk is discovered at impact — in the plant, the ledger, or the network — not before.',
  'Plans freeze while conditions across manufacturing, finance, and supply chain keep moving.',
  'ERP, plant, financial, and supply data stay siloed, so no one sees a single forward picture.',
]

export const SOLUTIONS = [
  'A predictive intelligence layer sits on top of eight enterprise data sources.',
  'Five engines produce forecasts, operational plans, risk signals, and scenarios.',
  'An eight-stage pipeline moves data from ingestion through operational planning.',
  'Teams operate on what is next — not only on what already happened.',
]

export const DATA_SOURCES = [
  'ERP',
  'Manufacturing',
  'Financial',
  'Supply chain',
  'Inventory',
  'Sales',
  'Market data',
  'Operational sources',
]

export const PIPELINE = [
  {
    n: '01',
    title: 'Ingestion',
    text: 'Bring enterprise feeds into a common operational picture.',
    image: '/images/pipe-ingestion.png',
    input: 'ERP, manufacturing, financial, supply chain, inventory, sales, market, and operational sources',
    output: 'A common operational picture the rest of the pipeline can run against',
  },
  {
    n: '02',
    title: 'Signal processing',
    text: 'Clean, align, and extract usable operational signals.',
    image: '/images/pipe-signal.png',
    input: 'Ingested enterprise feeds',
    output: 'Usable operational signals, aligned for analysis',
  },
  {
    n: '03',
    title: 'Historical analysis',
    text: 'Establish the observed baseline across cycles and seasons.',
    image: '/images/pipe-history.png',
    input: 'Processed operational signals',
    output: 'The observed baseline — history stays solid',
  },
  {
    n: '04',
    title: 'Pattern detection',
    text: 'Identify repeating and emerging structures in the data.',
    image: '/images/pipe-pattern.png',
    input: 'Observed historical baseline',
    output: 'Repeating and emerging structures in the data',
  },
  {
    n: '05',
    title: 'Forecast generation',
    text: 'Project demand, production, and financial trajectories.',
    image: '/images/pipe-forecast.png',
    input: 'Detected patterns across the operational picture',
    output: 'Demand, production, and financial trajectories — projected values dashed past today',
  },
  {
    n: '06',
    title: 'Risk prediction',
    text: 'Flag operational, supply, and financial risk before impact.',
    image: '/images/pipe-risk.png',
    risk: true,
    input: 'Forecast trajectories on the same operational picture',
    output: 'Operational, supply, and financial risk signals — shown in red',
  },
  {
    n: '07',
    title: 'Scenario analysis',
    text: 'Compare alternative futures against the current plan.',
    image: '/images/pipe-scenario.png',
    input: 'Forecasts and risk signals',
    output: 'Alternative futures scored against the current plan',
  },
  {
    n: '08',
    title: 'Operational planning',
    text: 'Turn the forecast into a path operations can execute.',
    image: '/images/pipe-planning.png',
    input: 'Chosen forecast, risk, and scenario picture',
    output: 'A path planning and operations teams can act on before disruption lands',
  },
]

export const SEGMENTS = [
  {
    title: 'Manufacturing',
    text: 'Anticipate production load, capacity pressure, and plant-level disruption.',
    image: '/images/sol-manufacturing.png',
    detail:
      'Manufacturing teams still close on lagging plant reports. Averonix sits on ERP, manufacturing, and operational sources and turns them into demand and production forecasts — then flags plant-level disruption while there is still time to change the plan.',
    points: [
      'Demand and production forecasts from the forecasting engine',
      'Plant-level operational risk before impact',
      'Proactive operational plans, not firefighting after the line stops',
    ],
  },
  {
    title: 'Supply chain',
    text: 'See network risk and inventory movement before they hit service levels.',
    image: '/images/sol-supply.png',
    detail:
      'Supply, inventory, and market signals stay siloed until service levels break. Averonix ingests supply chain, inventory, sales, and market data into the same picture, then scores network risk and runs scenarios before inventory or capacity is locked.',
    points: [
      'Supply chain, inventory, sales, and market sources in one picture',
      'Network and supply risk flagged before service impact',
      'Scenarios before committing inventory or capacity',
    ],
  },
  {
    title: 'Finance',
    text: 'Project financial trajectories against operational reality, not lagging close data.',
    image: '/images/sol-finance.png',
    detail:
      'Finance still plans against a close that has already happened. Averonix generates financial trajectories from the same operational picture as the plant and the network — with projected values dashed past today, and financial risk held in red.',
    points: [
      'Financial forecasts against live operational reality',
      'Projected values dashed past today',
      'Financial risk kept in red, never mixed with action orange',
    ],
  },
  {
    title: 'Operations',
    text: 'Move from reactive firefighting to plans that already account for what is next.',
    image: '/images/sol-operations.png',
    detail:
      'Operations still run on reports after the window to act has closed. Averonix converts forecasts into proactive operational plans through predictive operations and the last stage of the eight-stage pipeline: operational planning.',
    points: [
      'Predictive operations before disruption lands',
      'The eight-stage pipeline ends in a path teams can execute',
      'One forward picture across plant, ledger, and network',
    ],
  },
  {
    title: 'Planning',
    text: 'Build S&OP and resource plans against forecasts and scenarios, not static snapshots.',
    image: '/images/sol-planning.png',
    detail:
      'Plans freeze while manufacturing, finance, and supply chain keep moving. Averonix feeds S&OP and resource planning from forecast generation, risk prediction, and scenario analysis so commitments are made against what is next — not a static snapshot.',
    points: [
      'S&OP against demand, production, and financial forecasts',
      'Risk signals while there is still time to change the plan',
      'Alternative futures compared before capital is committed',
    ],
  },
  {
    title: 'Analytics',
    text: 'Extend the data stack from reporting history into a predictive intelligence layer.',
    image: '/images/sol-analytics.png',
    detail:
      'Analytics stacks are built to explain what already happened. Averonix is a predictive intelligence layer: eight source classes in, an eight-stage pipeline through pattern detection and forecast generation, observed history solid and projected values dashed past today.',
    points: [
      'Eight enterprise source classes into one layer',
      'Pattern detection into forecast generation',
      'Observed solid. Projected dashed past today',
    ],
  },
  {
    title: 'Strategy',
    text: 'Test commitments across alternative futures before capital and capacity are locked.',
    image: '/images/sol-strategy.png',
    detail:
      'Strategy still locks capital and capacity against a single assumed future. Averonix runs scenario analysis against the same operational picture as the forecast and the risk layer, so alternative futures are compared before inventory, capacity, or capital is committed.',
    points: [
      'Scenario analysis on the same picture as the forecast',
      'Compare alternative futures before the commitment',
      'Inventory, capacity, and capital tested — not assumed',
    ],
  },
  {
    title: 'IT teams',
    text: 'Integrate eight source classes through a defined pipeline without a one-off science project.',
    image: '/images/sol-it.png',
    detail:
      'IT should not have to stand up a one-off science project to get a forward picture. Averonix ingests eight source classes — ERP, manufacturing, financial, supply chain, inventory, sales, market data, and operational sources — through a defined eight-stage pipeline from ingestion to operational planning. API access is a supported go-to-market model.',
    points: [
      'Eight defined source classes, not a custom science project',
      'Eight-stage pipeline from ingestion to the operational plan',
      'API access so outputs can land in systems already run',
    ],
  },
]

export const PRICING = [
  {
    title: 'Subscription SaaS',
    label: 'SaaS',
    price: '70',
    period: 'mo',
    icon: 'ring',
    image: '/images/price-saas.png',
    audience: 'Best for teams that want the platform without standing up dedicated infrastructure.',
    text: 'Standard platform access for teams that want forecasting and predictive operations without standing up dedicated infrastructure.',
    points: [
      'Standard platform access',
      'Forecasting and predictive operations',
      'No dedicated infrastructure to stand up',
      'Averonix X.1 to start',
    ],
    cta: 'Averonix X.1',
  },
  {
    title: 'Enterprise licensing',
    label: 'Enterprise',
    price: '150',
    period: 'mo',
    icon: 'tri',
    image: '/images/price-enterprise.png',
    audience: 'For organizations that need broader control across business units.',
    text: 'Licensed deployment for organizations that need broader control, governance, and contractual coverage across business units.',
    points: [
      'Licensed deployment',
      'Broader control and governance',
      'Contractual coverage across business units',
      'Averonix X.1 to scope the environment',
    ],
    featured: true,
    cta: 'Averonix X.1',
  },
  {
    title: 'Dedicated deployments',
    label: 'Dedicated',
    price: 'Custom',
    icon: 'hex',
    image: '/images/price-custom.png',
    audience: 'For teams with stricter residency or operational-control requirements.',
    text: 'Isolated environments for teams with stricter residency, network, or operational-control requirements.',
    points: [
      'Isolated environments',
      'Stricter residency requirements',
      'Network or operational-control requirements',
      'Scoped as a dedicated deployment',
    ],
    cta: 'Averonix X.1',
  },
]

export const FAQS = [
  {
    tag: 'Sources',
    q: 'What systems can Averonix integrate with?',
    a: 'The platform is built to ingest eight source classes: ERP, manufacturing, financial, supply chain, inventory, sales, market data, and operational sources. Specific connector scope is confirmed during onboarding against your current landscape.',
  },
  {
    tag: 'Forecasts',
    q: 'What does Averonix actually predict?',
    a: 'Averonix generates demand, production, and financial forecasts; operational risk signals; alternative scenario outcomes; and the operational plans those outputs support. It is a predictive intelligence layer — not a historical reporting tool.',
  },
  {
    tag: 'API',
    q: 'Is there a public API or documentation?',
    a: 'API access is a supported go-to-market model. Public documentation has not shipped yet. Technical interface details are shared with teams during access and onboarding. Watch this site for documentation when it is released.',
  },
  {
    tag: 'Pipeline',
    q: 'What is the technology behind the platform?',
    a: 'Averonix runs five predictive engines across an eight-stage processing pipeline: ingestion, signal processing, historical analysis, pattern detection, forecast generation, risk prediction, scenario analysis, and operational planning. Implementation specifics are covered in technical onboarding.',
  },
  {
    tag: 'Pricing',
    q: 'How is Averonix priced?',
    a: 'Listed plans are Subscription SaaS at $70, enterprise licensing at $150, and dedicated deployments as custom. Usage-based consumption and API access are scoped during access.',
  },
  {
    tag: 'Audience',
    q: 'Who is Averonix for?',
    a: 'Manufacturing, finance, and supply chain organizations — and the operations, planning, analytics, strategy, and IT teams inside them who need to operate on a forward picture rather than lagging reports.',
  },
]

export const LAYER = [
  'Five predictive engines sit on eight enterprise source classes.',
  'An eight-stage pipeline runs from ingestion through operational planning.',
  'Observed history stays solid. Projected values render in teal — dashed past today.',
  'Risk stays in red, never mixed with action orange or forecast teal.',
]

export const OUTCOMES = [
  {
    name: 'Mara Ellison',
    tag: 'Forward picture on the floor',
    quote:
      'We were running the plant on yesterday’s close. Averonix turns live operational signals into demand and production we can act on before the shift starts.',
    image: '/images/voice-34.png',
  },
  {
    name: 'Julian Reed',
    tag: 'The network, before it slips',
    quote:
      'Supply used to show up as a shortage. Now we see emerging risk while there is still time to reroute inventory and change the plan.',
    image: '/images/voice-37.png',
  },
  {
    name: 'Priya Shah',
    tag: 'The ledger, looking forward',
    quote:
      'Finance should not wait on lagging reports. We get financial trajectories next to operations, so capital is committed against what’s next.',
    image: '/images/voice-finance.png',
  },
  {
    name: 'Tomas Hale',
    tag: 'Scenarios before we lock in',
    quote:
      'We model alternative futures against the same operational picture — then compare outcomes before inventory, capacity, or capital is locked.',
    image: '/images/voice-36.png',
  },
  {
    name: 'Nina Okonkwo',
    tag: 'A path operations can run',
    quote:
      'The last stage is the plan. Averonix hands our teams a path they can execute before disruption lands on the floor.',
    image: '/images/voice-35.png',
  },
]

export const MARQUEE = [
  'Forecast',
  'Risk',
  'Scenario',
  'Operations',
  'Pipeline',
  'ERP',
  'Supply chain',
  'Finance',
]

export const OFFICES = [
  {
    region: 'United States',
    name: 'Averonix Technologies Inc.',
    address: '350 Fifth Avenue, Suite 4200, New York, NY 10118, United States',
    phone: '+1 212 555 0187',
  },
  {
    region: 'Sri Lanka',
    name: 'Averonix Technologies (Pvt) Ltd',
    address: 'No. 45, Hospital Road, Jaffna, Sri Lanka',
    phone: '+94 21 555 0187',
  },
]

export const SOCIAL = [
  { id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/AveronixAI/' },
  { id: 'x', label: 'X', href: 'https://x.com/AveronixAI' },
  { id: 'pinterest', label: 'Pinterest', href: 'https://www.pinterest.com/AveronixAI/' },
  { id: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@Averon-ixAI' },
]
