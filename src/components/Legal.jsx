const PAGES = {
  privacy: {
    kicker: 'Legal',
    title: 'Privacy Policy',
    updated: '11 September 2026',
    sections: [
      {
        heading: 'Who we are',
        body: [
          'This Privacy Policy describes how Averonix Technologies Inc. (“Averonix,” “we,” “us”) collects, uses, and shares information when you visit averonix.net, contact us, or request access to Averonix X.1.',
          'Averonix Technologies Inc. is based at 350 Fifth Avenue, Suite 4200, New York, NY 10118, United States. Averonix Technologies (Pvt) Ltd operates from No. 45, Hospital Road, Jaffna, Sri Lanka.',
        ],
      },
      {
        heading: 'Information we collect',
        body: [
          'If you subscribe, send a message, or request access, we collect the details you provide — typically your name, work email, company, and message.',
          'When you visit the site, standard technical data may be logged by your browser or hosting environment, such as IP address, browser type, device, and pages viewed. We do not use this site to collect special-category personal data.',
        ],
      },
      {
        heading: 'How we use information',
        body: [
          'We use contact details to respond to inquiries, discuss Averonix X.1 access and deployment models, send access-list notices you asked for, and operate and improve this website.',
          'We do not sell personal information. We do not use your inquiry to train unrelated public models or to run unrelated marketing lists.',
        ],
      },
      {
        heading: 'Cookies',
        body: [
          'This marketing site is a static experience. It may use essential cookies or local storage required for the page to function in your browser. We do not run advertising trackers on this site.',
        ],
      },
      {
        heading: 'Sharing',
        body: [
          'We may share information with service providers who host the site or help us respond to requests, and when required by law. Averonix Technologies Inc. and Averonix Technologies (Pvt) Ltd may share inquiry details internally so the right office can follow up.',
        ],
      },
      {
        heading: 'Retention and your rights',
        body: [
          'We keep inquiry records only as long as needed to respond and to maintain a normal business record, unless a longer period is required by law.',
          'You may ask to access, correct, or delete personal information we hold about you, or to withdraw a subscription request, by contacting us using the details below.',
        ],
      },
      {
        heading: 'Contact',
        body: [
          'United States: Averonix Technologies Inc., 350 Fifth Avenue, Suite 4200, New York, NY 10118, +1 212 555 0187.',
          'Sri Lanka: Averonix Technologies (Pvt) Ltd, No. 45, Hospital Road, Jaffna, +94 21 555 0187.',
          'You can also reach us through the contact form on this website.',
        ],
      },
    ],
  },
  terms: {
    kicker: 'Legal',
    title: 'Terms and Conditions',
    updated: '11 September 2026',
    sections: [
      {
        heading: 'Agreement',
        body: [
          'These Terms and Conditions govern your use of averonix.net, operated by Averonix Technologies Inc. By using the site, you agree to these terms. If you do not agree, do not use the site.',
        ],
      },
      {
        heading: 'The website',
        body: [
          'This site is a marketing and information site for Averonix, a predictive intelligence platform for manufacturing, finance, and supply chain operations. Content is provided for general information. It is not a contract for software, hosting, or professional advice.',
        ],
      },
      {
        heading: 'Averonix X.1 and access',
        body: [
          'Averonix X.1 is the product offering described on this site. Requesting access, submitting a form, or reviewing pricing does not create a paid subscription or license. Access, deployment model, and fees are confirmed only in a separate agreement with Averonix.',
          'Listed prices for Subscription SaaS, enterprise licensing, and dedicated deployments are informational and may change. Custom and dedicated work is scoped during access.',
        ],
      },
      {
        heading: 'Acceptable use',
        body: [
          'You may not misuse the site, attempt unauthorized access, scrape it in a way that disrupts service, or submit unlawful or misleading content through forms.',
        ],
      },
      {
        heading: 'Intellectual property',
        body: [
          'The Averonix name, logo, product names including Averonix X.1, graphics, and site content are owned by Averonix or its licensors. You may not copy, modify, or redistribute them except as allowed by law or with our written permission.',
        ],
      },
      {
        heading: 'Disclaimers',
        body: [
          'The site is provided “as is.” Forecast examples, illustrations, and quoted commentary on the site are for explanation of the product. They are not verified customer testimonials or guarantees of operational, financial, or supply-chain outcomes.',
          'We do not warrant that the site will be uninterrupted or error-free, or that information on it is complete for your specific environment.',
        ],
      },
      {
        heading: 'Limitation of liability',
        body: [
          'To the fullest extent permitted by law, Averonix Technologies Inc. and Averonix Technologies (Pvt) Ltd are not liable for indirect, incidental, or consequential damages arising from your use of this website. Liability for use of Averonix software or services is governed by the applicable customer agreement, not these website terms.',
        ],
      },
      {
        heading: 'Governing law',
        body: [
          'These terms are governed by the laws of the State of New York, United States, without regard to conflict-of-law rules. Local mandatory consumer protections may still apply where you live.',
        ],
      },
      {
        heading: 'Contact',
        body: [
          'Averonix Technologies Inc., 350 Fifth Avenue, Suite 4200, New York, NY 10118, United States, +1 212 555 0187.',
          'Averonix Technologies (Pvt) Ltd, No. 45, Hospital Road, Jaffna, Sri Lanka, +94 21 555 0187.',
        ],
      },
    ],
  },
}

export default function Legal({ page }) {
  const doc = PAGES[page] || PAGES.privacy

  return (
    <main className="legal-page" id={page}>
      <article className="wrap legal-wrap">
        <header className="legal-head">
          <span className="kicker">{doc.kicker}</span>
          <h1>{doc.title}</h1>
          <p className="lede">Last updated {doc.updated}.</p>
        </header>
        {doc.sections.map((section) => (
          <section key={section.heading} className="legal-block">
            <h2>{section.heading}</h2>
            {section.body.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </section>
        ))}
        <p className="legal-back">
          <a href="#home">← Back to Averonix</a>
        </p>
      </article>
    </main>
  )
}
