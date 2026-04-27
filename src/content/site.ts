export const siteUrl = 'https://www.benchtrust.com';
export const companyName = 'BenchTrust GmbH i.G.';
export const linkedInUrl = 'https://www.linkedin.com/company/benchtrust/';

export type Locale = 'en' | 'de';

export const content = {
  en: {
    meta: {
      title: 'BenchTrust | Where B2B Decisions Are Made',
      description:
        'BenchTrust is the AI-native decision environment where buyers compare solutions faster and providers become visible earlier in B2B procurement.'
    },
    hero: {
      pretitle: 'Launching June 2026',
      headline: 'Procurement is not a blind flight',
      claim: 'Smarter Procurement. Powered by AI. Driven by Trust.',
      subheadline:
        'BenchTrust is the first AI-orchestrated sourcing platform that brings buyers and providers together exactly where decisions are made today.',
      primaryCta: '👉 Secure Early Access',
      primaryCtaHref: '#waitlist',
      secondaryCta: 'Follow our launch on LinkedIn',
      secondaryCtaHref: linkedInUrl,
      secondaryCtaExternal: true,
      highlights: ['Decision infrastructure for modern procurement', 'Trusted comparison before the RFP', 'Earlier visibility for the right providers'],
      trustBar: [
        { icon: '⭐', label: '2,000+ providers compared' },
        { icon: '✓', label: 'Verified data' },
        { icon: '⚡', label: 'AI-powered analysis' },
        { icon: '🔒', label: 'GDPR compliant' }
      ],
      panel: {
        eyebrow: 'Platform Sneak Peek',
        headline: 'A first look at conversational sourcing with BenchTrust AI.',
        badge: 'Pre-launch',
        browserLabel: 'benchtrust.ai preview',
        promptLabel: 'Prompt',
        promptText: 'Show me the strongest SaaS options for procurement teams that need faster comparison, measurable ROI and verified provider trust.',
        resultLabel: 'AI-generated result',
        resultTitle: '3 high-fit sourcing options surfaced in seconds.',
        resultText: 'BenchTrust clusters relevant providers, benchmarks maturity, highlights trust signals and prepares the next step toward shortlist or RFP.',
        resultTags: ['Verified providers', 'Benchmark fit 92%', 'ROI-ready comparison', 'RFP next step']
      },
      metrics: [
        { value: 'Earlier', label: 'BenchTrust inserts trusted provider visibility before the final vendor shortlist.' },
        { value: 'Faster', label: 'Buyers move from search to comparison and RFP with less manual friction.' },
        { value: 'Trusted', label: 'Decisions are grounded in verified data, peer input and AI-guided context.' }
      ]
    },
    problem: {
      eyebrow: 'The Market Shift',
      headline: 'The Market Shift: B2B decisions are made differently today.',
      text:
        'Traditional market research is dead. Buying decisions are made long before the first sales rep picks up the phone – inside intelligent, AI-powered research environments. If you are not verified and visible there, you lose the deal unnoticed. BenchTrust changes the rules: We make complex sourcing transparent for buyers in seconds and give providers their influence on the buying decision back.',
      factsEyebrow: 'The new reality in B2B sourcing:',
      points: [
        { title: 'Preference before outreach', text: 'The shortlist is usually set before the provider is even contacted.' },
        { title: 'AI replaces Google', text: 'Buyers no longer search endlessly – they let AI compare, filter and evaluate.' },
        { title: 'Visibility is revenue', text: 'Those invisible in the early research phase get cut from the pitch.' }
      ],
      signals: [
        {
          title: 'For Buyers',
          headline: 'Radically faster decisions.',
          text: 'No more research chaos and endless spreadsheets. Compare B2B solutions data-driven, verified and precise – saving weeks of manual work.'
        },
        {
          title: 'For Providers',
          headline: 'Win deals before the RFP.',
          text: 'Stop chasing the market. Be present exactly where buyers form their preferences today, and turn hidden AI searches into real, qualified leads.'
        }
      ]
    },
    audience: {
      eyebrow: 'Two Perspectives. One Platform.',
      headline: 'One platform. Two clear perspectives.',
      intro: [
        'No media breaks.',
        'No fragmented tools.',
        'Just efficient sourcing.'
      ],
      cards: [
        {
          id: 'buyer-path',
          variant: 'buyer',
          label: 'For Buyers',
          title: 'Your Sourcing Copilot',
          text:
            'Compare software and services in minutes instead of weeks. Data-driven, objective and 100% free for buyers.',
          points: [
            'Faster shortlist: automated maturity analyses and objective benchmarking.',
            'Decide with confidence: solid ROI calculators and verified peer insights.',
            'Source efficiently: send tailored RFPs in just a few clicks.'
          ],
          ctaLabel: '▶ Provider Search Preview',
          ctaHref: '#waitlist'
        },
        {
          id: 'provider-path',
          variant: 'provider',
          label: 'For Providers',
          title: 'Your Lead Engine',
          text:
            'Be part of the decision, not just the shortlist. Turn anonymous traffic into qualified B2B leads.',
          points: [
            'Reclaim your influence: claim your verified profile and become visible immediately.',
            'Qualified demand: receive direct RFP requests – without friction.',
            'Win deals: turn hidden demand into measurable revenue.'
          ],
          ctaLabel: '▶ Provider Offering Preview',
          ctaHref: '#waitlist'
        }
      ]
    },
    launchCommunity: {
      eyebrow: 'Co-Creator Panel',
      headline: 'The countdown is on. Build the future with us.',
      text:
        'BenchTrust goes live in June 2026 – and your input shapes how the platform will look. We are not building this solution behind closed doors, but together with buyers and providers who know the B2B market.',
      body:
        'As a Co-Creator you receive exclusive sneak peeks, take part in feature voting and gain direct influence on product development through personal Founder Chats.',
      bullets: ['15-minute Founder Chats on your pain points', 'Feature voting via LinkedIn', 'Exclusive sneak peeks every 3 weeks'],
      ctaLabel: '👉 Become a LinkedIn follower now'
    },
    trust: {
      eyebrow: 'Why BenchTrust',
      headline: 'Sharper decisions need more than visibility.',
      intro:
        'BenchTrust should feel like trusted decision infrastructure, not a generic lead generation funnel.',
      items: [
        { title: 'Trusted data', text: 'Structured provider signals that reduce noise and help buyers compare faster.' },
        { title: 'Peer insights', text: 'Relevant market context and proof points that support real buying confidence.' },
        { title: 'AI-powered guidance', text: 'Support for navigating complexity without drowning teams in research effort.' },
        { title: 'Lower-friction decisions', text: 'A smoother path from early understanding to shortlist and RFP.' },
        { title: 'Earlier visibility', text: 'Providers enter the journey before decisions are already locked in.' }
      ]
    },
    opportunity: {
      eyebrow: 'Provider Opportunity',
      headline: 'You may already be visible. But are you part of the decision?',
      text:
        'BenchTrust is built for the moments that shape vendor selection before formal outreach starts. That is where providers either gain influence or disappear from consideration.',
      points: [
        'Protect opportunities that would otherwise never reach your sales team.',
        'Show up earlier with a stronger trust and fit signal.',
        'Turn hidden demand into qualified conversations.'
      ],
      ctaLabel: 'Activate your profile'
    },
    waitlist: {
      eyebrow: 'Co-Creator Panel',
      headline: 'Become a BenchTrust Co-Creator.',
      text:
        'We are not building BenchTrust behind closed doors – we are building it with you. Your input shapes what the platform looks like in June. Trade your expertise for exclusive early access.',
      audienceTags: ['15-minute Founder Chat', 'Feature voting via LinkedIn', 'Exclusive Sneak Peeks'],
      benefits: [
        {
          title: 'Your feedback matters',
          text: 'Compelling pain points lead to a personal conversation with our founding team.'
        },
        {
          title: 'Exclusive sneak peeks',
          text: 'Every 3 weeks, co-creators get development screenshots – before they hit LinkedIn.'
        }
      ],
      supportingText:
        'Your answers flow directly into our product development. Become part of the team that shapes BenchTrust.',
      formHeadline: 'Become a BenchTrust Co-Creator.',
      fields: {
        name: 'Name',
        email: 'Business email',
        role: 'I am',
        feedback: 'What is your biggest frustration when buying or selling B2B software and services today?'
      },
      placeholders: {
        name: 'Alex Morgan',
        email: 'alex@company.com',
        role: 'Select your role',
        feedback: 'Share your biggest pain point. Your input feeds directly into our development...'
      },
      roleOptions: [
        { value: 'buyer', label: 'Buyer' },
        { value: 'provider', label: 'Provider' }
      ],
      submit: 'Join as Co-Creator',
      privacyHint:
        'By signing up, you secure exclusive access to the beta version in June. We will only contact you for important launch updates and targeted feature surveys. <a href="/en/privacy/" class="underline hover:text-white">Privacy</a> | <a href="/en/terms/" class="underline hover:text-white">Terms</a>',
      successMessage: 'Welcome to the Co-Creator Panel! We will be in touch.',
      errorMessage: 'Submission failed. Please try again in a moment.',
      configErrorMessage:
        'HubSpot is not configured yet. Add portal ID and form ID in the environment file to activate submissions.'
    },
    finalCta: {
      headline: 'See you on LinkedIn!',
      text: 'Not ready to sign up yet, but still want to know where this journey is going? Join our growing community. Follow the BenchTrust team on the road to launch in June, discuss AI in procurement with us and get every update first-hand.',
      linkedinLabel: 'Become a LinkedIn follower now'
    },
    footer: {
      legal: 'Legal notice',
      privacy: 'Privacy',
      tagline: 'AI-native decision infrastructure for modern B2B procurement.',
      linkedinLabel: 'Follow BenchTrust go live on LinkedIn'
    }
  },
  de: {
    meta: {
      title: 'BenchTrust | Wo B2B-Entscheidungen entstehen',
      description:
        'BenchTrust ist die AI-native Entscheidungsumgebung, in der Einkäufer schneller vergleichen und Anbieter früher im B2B-Entscheidungsprozess sichtbar werden.'
    },
    hero: {
      pretitle: 'Launching June 2026',
      headline: 'B2B-Einkauf ohne Blindflug.',
      claim: 'Smarter Procurement. Powered by AI. Driven by Trust.',
      subheadline:
        'BenchTrust ist die erste KI-orchestrierte Sourcing-Plattform, die B2B-Einkäufer und Anbieter exakt dort zusammenbringt, wo heute Entscheidungen fallen.',
      primaryCta: '👉 Early Access sichern',
      primaryCtaHref: '#waitlist',
      secondaryCta: '🔗 Begleiten Sie uns auf LinkedIn',
      secondaryCtaHref: linkedInUrl,
      secondaryCtaExternal: true,
      highlights: ['Decision Infrastructure für modernen Einkauf', 'Vertrauenswürdiger Vergleich vor der RFP', 'Frühere Sichtbarkeit für die richtigen Anbieter'],
      trustBar: [
        { icon: '⭐', label: '2.000+ Anbieter im Vergleich' },
        { icon: '✓', label: 'Verifizierte Daten' },
        { icon: '⚡', label: 'KI-gestützte Analyse' },
        { icon: '🔒', label: 'DSGVO-konform' }
      ],
      panel: {
        eyebrow: 'Platform Sneak Peek',
        headline: 'Ein erster Blick auf Conversational Sourcing mit BenchTrust AI.',
        badge: 'Pre-launch',
        browserLabel: 'benchtrust.ai preview',
        promptLabel: 'Prompt',
        promptText: 'Zeigen Sie mir die stärksten SaaS-Optionen für den Einkauf, mit schneller Vergleichbarkeit, messbarem ROI und verifizierten Anbieter-Signalen.',
        resultLabel: 'AI-generiertes Ergebnis',
        resultTitle: '3 hochpassende Sourcing-Optionen in Sekunden sichtbar.',
        resultText: 'BenchTrust gruppiert relevante Anbieter, benchmarkt Reifegrade, hebt Trust-Signale hervor und bereitet den nächsten Schritt Richtung Shortlist oder RFP vor.',
        resultTags: ['Verifizierte Anbieter', 'Benchmark Fit 92 %', 'ROI-basierter Vergleich', 'RFP als nächster Schritt']
      },
      metrics: [
        { value: 'Früher', label: 'BenchTrust bringt vertrauenswürdige Anbieter-Sichtbarkeit vor die finale Shortlist.' },
        { value: 'Schneller', label: 'Einkäufer kommen mit weniger manuellem Aufwand von Search zu Compare und RFP.' },
        { value: 'Trusted', label: 'Entscheidungen basieren auf verifizierten Daten, Peer Input und AI-geführtem Kontext.' }
      ]
    },
    problem: {
      eyebrow: 'Der Markt-Shift',
      headline: 'Der Markt-Shift: B2B-Entscheidungen fallen heute anders.',
      text:
        'Die klassische Marktrecherche ist tot. Kaufentscheidungen fallen längst, bevor der erste Vertriebsmitarbeiter ans Telefon geht – in intelligenten, KI-gestützten Rechercheumgebungen. Wer hier nicht verifiziert und sichtbar ist, verliert den Deal unbemerkt. BenchTrust ändert die Spielregeln: Wir machen die komplexe Suche für Einkäufer in Sekunden transparent und geben Anbietern ihren Einfluss auf die Kaufentscheidung zurück.',
      factsEyebrow: 'Die neue Realität im B2B-Sourcing:',
      points: [
        { title: 'Präferenz vor Vertrieb', text: 'Die Shortlist steht meist schon, bevor der Anbieter überhaupt kontaktiert wird.' },
        { title: 'KI ersetzt Google', text: 'Einkäufer suchen nicht mehr endlos selbst – sie lassen vergleichen, filtern und bewerten.' },
        { title: 'Sichtbarkeit ist Umsatz', text: 'Wer in der frühen Recherchephase unsichtbar bleibt, fliegt aus dem Pitch.' }
      ],
      signals: [
        {
          title: 'Für Einkäufer',
          headline: 'Radikal schnellere Entscheidungen.',
          text: 'Schluss mit dem Recherche-Chaos und endlosen Excel-Listen. Vergleichen Sie B2B-Lösungen datenbasiert, verifiziert und präzise auf den Punkt – und sparen Sie Wochen an manueller Arbeit.'
        },
        {
          title: 'Für Anbieter',
          headline: 'Deals gewinnen, bevor sie ausschreiben.',
          text: 'Laufen Sie dem Markt nicht mehr hinterher. Werden Sie genau dort präsent, wo Einkäufer heute ihre Präferenzen bilden, und wandeln Sie verdeckte KI-Suchen in echte, qualifizierte Leads um.'
        }
      ]
    },
    audience: {
      eyebrow: 'Komplette Transparenz für Einkauf und Anbieter.',
      headline: 'Eine Plattform. Zwei klare Perspektiven.',
      intro: [
        'Keine Medienbrüche.',
        'Keine fragmentierten Tools.',
        'Nur effizientes Sourcing.'
      ],
      cards: [
        {
          id: 'buyer-path',
          variant: 'buyer',
          label: 'Für Einkäufer',
          title: 'Ihr Sourcing Copilot',
          text:
            'Vergleichen Sie Software und Services in Minuten statt Wochen. Datengetrieben, objektiv und für den Einkauf 100 % kostenfrei.',
          points: [
            'Schneller zur Shortlist: Automatisierte Reifegradanalysen und objektives Benchmarking.',
            'Souverän entscheiden: Fundierte ROI-Rechner und verifizierte Peer-Insights.',
            'Effizient ausschreiben: Passgenaue RFPs mit wenigen Klicks versenden.'
          ],
          ctaLabel: '▶ Provider Search Preview',
          ctaHref: '#waitlist'
        },
        {
          id: 'provider-path',
          variant: 'provider',
          label: 'Für Anbieter',
          title: 'Ihre Lead Engine',
          text:
            'Seien Sie Teil der Entscheidung, nicht nur der Shortlist. Verwandeln Sie blinden Traffic in qualifizierte B2B-Leads.',
          points: [
            'Einfluss zurückgewinnen: Verifiziertes Profil claimen und sofort sichtbar werden.',
            'Qualifizierte Nachfrage: Direkte RFP-Anfragen erhalten – ganz ohne Reibungsverluste.',
            'Deals sichern: Verdeckte Nachfrage in messbaren Umsatz verwandeln.'
          ],
          ctaLabel: '▶ Provider Offering Preview',
          ctaHref: '#waitlist'
        }
      ]
    },
    launchCommunity: {
      eyebrow: 'Co-Creator Panel',
      headline: 'Der Countdown läuft. Bauen Sie mit uns die Zukunft.',
      text:
        'Im Juni 2026 geht BenchTrust live – und Ihr Input bestimmt, wie die Plattform aussehen wird. Wir bauen diese Lösung nicht im stillen Kämmerlein, sondern gemeinsam mit Einkäufern und Anbietern, die den B2B-Markt kennen.',
      body:
        'Als Co-Creator erhalten Sie exklusive Sneak Peeks, nehmen an Feature-Votings teil und können in persönlichen Founder Chats direkten Einfluss auf die Produktentwicklung nehmen.',
      bullets: ['15-Minuten Founder Chats zu Ihren Pain Points', 'Feature-Voting via LinkedIn', 'Exklusive Sneak Peeks alle 3 Wochen'],
      ctaLabel: '👉 Jetzt Follower auf LinkedIn werden'
    },
    trust: {
      eyebrow: 'Warum BenchTrust',
      headline: 'Schärfere Entscheidungen brauchen mehr als nur Sichtbarkeit.',
      intro:
        'BenchTrust soll sich wie vertrauenswürdige Decision Infrastructure anfühlen, nicht wie ein generischer Lead-Gen-Funnel.',
      items: [
        { title: 'Trusted data', text: 'Strukturierte Anbieter-Signale reduzieren Rauschen und beschleunigen den Vergleich.' },
        { title: 'Peer insights', text: 'Relevanter Marktkontext und Proof Points für echte Kauf-Sicherheit.' },
        { title: 'AI-powered guidance', text: 'Unterstützung bei Komplexität, ohne Teams in Recherchearbeit zu verlieren.' },
        { title: 'Lower-friction decisions', text: 'Ein glatterer Pfad von Verstehen zu Shortlist und RFP.' },
        { title: 'Earlier visibility', text: 'Anbieter kommen in die Journey, bevor Entscheidungen bereits festgezurrt sind.' }
      ]
    },
    opportunity: {
      eyebrow: 'Provider Opportunity',
      headline: 'Sie sind vielleicht schon sichtbar. Aber sind Sie Teil der Entscheidung?',
      text:
        'BenchTrust ist für die Momente gebaut, die die Anbieterwahl prägen, bevor formale Outreach-Phasen beginnen. Genau dort gewinnen Anbieter Einfluss oder verschwinden aus der Auswahl.',
      points: [
        'Schützen Sie Opportunities, die Ihr Vertrieb sonst nie sehen würde.',
        'Tauchen Sie früher mit stärkerem Trust- und Fit-Signal auf.',
        'Machen Sie aus verdeckter Nachfrage qualifizierte Gespräche.'
      ],
      ctaLabel: 'Profil aktivieren'
    },
    waitlist: {
      eyebrow: 'Co-Creator Panel',
      headline: 'Werden Sie BenchTrust Co-Creator.',
      text:
        'Wir bauen BenchTrust nicht im stillen Kämmerlein – sondern mit Ihnen. Ihr Input bestimmt, wie die Plattform im Juni aussehen wird. Tauschen Sie Expertenwissen gegen exklusiven Vorab-Zugang.',
      audienceTags: ['15-Minuten Founder Chat', 'Feature-Voting via LinkedIn', 'Exklusive Sneak Peeks'],
      benefits: [
        {
          title: 'Ihr Feedback zählt',
          text: 'Spannende Pain Points führen zu einem persönlichen Gespräch mit unserem Gründer-Team.'
        },
        {
          title: 'Exklusive Sneak Peeks',
          text: 'Alle 3 Wochen erhalten Co-Creator Screenshots aus der Entwicklung – noch bevor sie auf LinkedIn erscheinen.'
        }
      ],
      supportingText:
        'Ihre Antworten fließen direkt in unsere Produktentwicklung ein. Werden Sie Teil des Teams, das BenchTrust formt.',
      formHeadline: 'Werden Sie BenchTrust Co-Creator.',
      fields: {
        name: 'Name',
        email: 'Geschäfts-E-Mail',
        role: 'Ich bin',
        feedback: 'Was ist aktuell Ihre größte Frustration beim Einkauf oder Vertrieb von Software und Services?'
      },
      placeholders: {
        name: 'Max Mustermann',
        email: 'max@unternehmen.de',
        role: 'Rolle auswählen',
        feedback: 'Teilen Sie uns Ihren größten Pain Point mit. Ihr Input fließt direkt in die Entwicklung ein...'
      },
      roleOptions: [
        { value: 'buyer', label: 'Einkäufer' },
        { value: 'provider', label: 'Anbieter' }
      ],
      submit: 'Als Co-Creator eintragen',
      privacyHint:
        'Mit Ihrer Anmeldung sichern Sie sich exklusiven Zugang zur Beta-Version im Juni. Wir kontaktieren Sie für wichtige Launch-Updates und gezielte Umfragen zu neuen Features. <a href="/datenschutz/" class="underline hover:text-white">Datenschutz</a> | <a href="/agb/" class="underline hover:text-white">AGB</a>',
      successMessage: 'Willkommen im Co-Creator Panel! Wir melden uns bei Ihnen.',
      errorMessage: 'Die Übermittlung ist fehlgeschlagen. Bitte versuchen Sie es erneut.',
      configErrorMessage:
        'HubSpot ist noch nicht konfiguriert. Hinterlegen Sie Portal-ID und Formular-ID in der Umgebungsdatei.'
    },
    finalCta: {
      headline: 'Wir sehen uns auf LinkedIn!',
      text: 'Sie möchten sich noch nicht eintragen, aber trotzdem wissen, wie die Reise weitergeht? Kein Problem. Werden Sie Teil unserer wachsenden Community. Begleiten Sie unser Team auf dem Weg zum Live-Gang im Juni, diskutieren Sie mit uns über KI im Procurement und erhalten Sie alle Updates aus erster Hand.',
      linkedinLabel: 'Jetzt Follower auf LinkedIn werden'
    },
    footer: {
      legal: 'Impressum',
      privacy: 'Datenschutz',
      tagline: 'AI-native Decision Infrastructure für modernes B2B-Procurement.',
      linkedinLabel: 'Folgen Sie BenchTrust zum Go-live auf LinkedIn'
    }
  }
} as const;

export type PageContent = (typeof content)[Locale];