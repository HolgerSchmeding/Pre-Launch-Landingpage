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
      headline: 'B2B procurement has been a black box for long enough.',
      claim: 'Smarter Procurement. Powered by AI. Driven by Trust.',
      subheadline:
        'BenchTrust is the first AI-orchestrated sourcing platform that brings buyers and providers together exactly where decisions are made today.',
      primaryCta: 'Join the waitlist',
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
      eyebrow: 'Conversational Commerce',
      headline: 'Welcome to the new era of decision-making.',
      text:
        'B2B buying decisions are no longer made on static vendor websites. They happen much earlier, inside intelligent research environments, long before the first sales conversation begins. If providers are not present there with verified data and measurable trust, they lose the deal before they even know it exists. BenchTrust changes that. We make complex market research transparent for buyers in seconds and give providers their influence on the buying decision back.',
      points: [
        'Decisions now happen before direct vendor conversations start.',
        'Buyers need fast orientation, trust and comparison without friction.',
        'Providers lose influence when they are missing from AI-assisted research.',
        'BenchTrust makes research transparent for buyers and restores visibility for providers.'
      ],
      signals: [
        {
          title: 'For buyers',
          text: 'Complex markets become understandable faster, with verified information and less manual research overhead.'
        },
        {
          title: 'For providers',
          text: 'The right vendors stay visible early enough to shape the outcome instead of only reacting to it.'
        }
      ]
    },
    audience: {
      eyebrow: 'Two Perspectives. One Platform.',
      headline: 'Find the right solution or get found as the right solution.',
      intro:
        'BenchTrust brings buyers and providers together in one AI-powered environment. No disconnected tools. No broken handoffs.',
      cards: [
        {
          id: 'buyer-path',
          variant: 'buyer',
          label: 'For Buyers: Your Sourcing Copilot',
          title: 'Compare faster. Decide with more confidence.',
          text:
            'Weeks of manual market research come to an end. Our AI agent analyzes your requirements, runs objective benchmarking and delivers vendor comparisons that actually fit.',
          points: [
            '100% free for buyers',
            'Data-driven maturity assessments and ROI calculators',
            'Send highly relevant RFPs in just a few clicks'
          ],
          ctaLabel: 'Start comparing',
          ctaHref: '#waitlist'
        },
        {
          id: 'provider-path',
          variant: 'provider',
          label: 'For Providers: Your Lead Engine',
          title: 'Win back your influence.',
          text:
            'Stop losing deals because AI-assisted research turns your company into a dead letter box. Become visible exactly when the buyer shortlist is formed: verified, trusted and ready to convert.',
          points: [
            'Claim profile ownership and show brand accountability',
            'Reduce friction and receive qualified leads and RFPs directly',
            'Turn hidden demand into measurable revenue'
          ],
          ctaLabel: 'Claim your profile',
          ctaHref: '#waitlist'
        }
      ]
    },
    launchCommunity: {
      eyebrow: 'Launching June 2026',
      headline: 'The countdown is on. Join us on the way to launch.',
      text:
        'Behind the scenes, the servers are already heating up: BenchTrust officially launches in June 2026. We are not building this solution behind closed doors. We are building it with the community.',
      body:
        'Follow our path to go-live transparently on LinkedIn. Get weekly sneak peeks into the software, discuss the future of B2B procurement with us and do not miss the starting signal.',
      bullets: ['Weekly product sneak peeks', 'Transparent build-in-public launch updates', 'Direct discussion around the future of B2B procurement'],
      ctaLabel: 'Become a LinkedIn follower now'
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
      eyebrow: 'Waitlist',
      headline: 'Be there from day one.',
      text:
        'In June 2026, we open the doors to a new era of B2B procurement. Whether you want smarter, data-driven comparisons as a buyer or a stronger qualified pipeline as a provider, secure your place in the front row now.',
      audienceTags: ['Buyer looking for the right solution', 'Provider focused on visibility'],
      benefits: [
        {
          title: 'Exclusive early access',
          text: 'Be among the first to receive an official invitation when BenchTrust launches in June.'
        },
        {
          title: 'Tailored onboarding',
          text: 'By choosing your role, we can prepare your profile and onboarding path in the background already.'
        }
      ],
      supportingText:
        'Leave your details so BenchTrust can route you into the right launch segment from the very beginning.',
      fields: {
        name: 'Name',
        email: 'Business email',
        role: 'I am'
      },
      placeholders: {
        name: 'Alex Morgan',
        email: 'alex@company.com',
        role: 'Select your role'
      },
      roleOptions: [
        { value: 'buyer', label: 'Buyer looking for the right solution' },
        { value: 'provider', label: 'Provider focused on visibility' }
      ],
      submit: 'Join the waitlist now',
      privacyHint:
        'By submitting the form, you agree that BenchTrust may store and process your contact data for updates around the launch.',
      successMessage: 'Thanks. You are on the BenchTrust waitlist.',
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
      headline: 'Der B2B-Einkauf war lange genug eine Blackbox.',
      claim: 'Smarter Procurement. Powered by AI. Driven by Trust.',
      subheadline:
        'BenchTrust ist die erste KI-orchestrierte Sourcing-Plattform, die Einkäufer und Anbieter genau dort zusammenbringt, wo heute Entscheidungen fallen.',
      primaryCta: 'Auf die Warteliste setzen',
      primaryCtaHref: '#waitlist',
      secondaryCta: 'Begleiten Sie uns zum Launch auf LinkedIn',
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
      eyebrow: 'Conversational Commerce',
      headline: 'Willkommen in der neuen Ära der Entscheidungsfindung.',
      text:
        'B2B-Kaufentscheidungen fallen heute nicht mehr auf statischen Anbieter-Websites. Sie fallen längst vorher, in intelligenten Recherche-Umgebungen, lange bevor der erste Vertriebskontakt zustande kommt. Wer hier nicht mit verifizierten Daten und messbarem Vertrauen präsent ist, verliert den Deal, bevor er überhaupt davon erfährt. BenchTrust ändert das. Wir machen die komplexe Marktrecherche für Einkäufer in Sekunden transparent und geben Anbietern den Einfluss auf die Kaufentscheidung zurück.',
      points: [
        'Entscheidungen entstehen heute vor dem ersten Vertriebsgespräch.',
        'Einkäufer brauchen schnelle Orientierung, Vertrauen und Vergleich ohne Reibung.',
        'Anbieter verlieren Einfluss, wenn sie in AI-gestützter Recherche fehlen.',
        'BenchTrust macht Recherche für Einkäufer transparent und Sichtbarkeit für Anbieter früher möglich.'
      ],
      signals: [
        {
          title: 'Für Einkäufer',
          text: 'Komplexe Märkte werden schneller verständlich, mit verifizierten Informationen und weniger manuellem Rechercheaufwand.'
        },
        {
          title: 'Für Anbieter',
          text: 'Die richtigen Anbieter bleiben früh genug sichtbar, um den Ausgang mitzugestalten, statt ihm nur hinterherzulaufen.'
        }
      ]
    },
    audience: {
      eyebrow: 'Zwei Perspektiven. Eine gemeinsame Plattform.',
      headline: 'Die richtige Lösung finden oder als Lösung gefunden werden.',
      intro:
        'BenchTrust vereint die Bedürfnisse von Einkäufern und Anbietern in einer einzigen, KI-gestützten Umgebung. Keine getrennten Tools, keine Medienbrüche.',
      cards: [
        {
          id: 'buyer-path',
          variant: 'buyer',
          label: 'Für Einkäufer: Ihr Sourcing Copilot',
          title: 'Schneller vergleichen. Souveräner entscheiden.',
          text:
            'Die wochenlange, manuelle Marktrecherche hat ein Ende. Unser KI-Agent analysiert Ihren Bedarf, führt objektives Benchmarking durch und liefert Ihnen passgenaue Anbieter-Vergleiche.',
          points: [
            '100 % kostenfrei für Einkäufer',
            'Datengetriebene Reifegradanalysen und ROI-Rechner',
            'Passgenaue RFPs mit wenigen Klicks versenden'
          ],
          ctaLabel: 'Vergleich starten',
          ctaHref: '#waitlist'
        },
        {
          id: 'provider-path',
          variant: 'provider',
          label: 'Für Anbieter: Ihre Lead Engine',
          title: 'Holen Sie sich den Einfluss zurück.',
          text:
            'Verlieren Sie keine Deals mehr, weil Sie in KI-gestützten Recherchen als toter Briefkasten enden. Werden Sie genau in dem Moment sichtbar, in dem die Shortlist des Einkäufers entsteht: verifiziert, vertrauenswürdig und direkt buchbar.',
          points: [
            'Profil-Hoheit claimen und Brand Accountability zeigen',
            'Reibungsverluste minimieren und qualifizierte Leads sowie RFPs direkt erhalten',
            'Verdeckte Nachfrage in messbaren Umsatz verwandeln'
          ],
          ctaLabel: 'Profil claimen',
          ctaHref: '#waitlist'
        }
      ]
    },
    launchCommunity: {
      eyebrow: 'Launching June 2026',
      headline: 'Der Countdown läuft. Begleiten Sie uns zum Launch.',
      text:
        'Hinter den Kulissen glühen die Server: Im Juni 2026 geht die BenchTrust-Plattform offiziell live. Wir bauen diese Lösung nicht im stillen Kämmerlein, sondern gemeinsam mit der Community.',
      body:
        'Verfolgen Sie unseren Weg bis zum Go-Live transparent auf LinkedIn. Erhalten Sie wöchentlich exklusive Einblicke in die Software, diskutieren Sie mit uns über die Zukunft des B2B-Einkaufs und verpassen Sie nicht den Startschuss.',
      bullets: ['Wöchentliche Sneak Peeks in die Software', 'Transparente Build-in-Public-Updates bis zum Launch', 'Direkter Austausch zur Zukunft des B2B-Einkaufs'],
      ctaLabel: 'Werden Sie jetzt Follower auf LinkedIn'
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
      eyebrow: 'Warteliste',
      headline: 'Seien Sie ab Tag 1 dabei.',
      text:
        'Im Juni 2026 öffnen wir die Türen für die neue Ära des B2B-Einkaufs. Ob Sie als Einkäufer endlich smarte, datengetriebene Vergleiche nutzen wollen oder als Anbieter Ihre qualifizierte Lead-Pipeline füllen möchten: Sichern Sie sich jetzt Ihren Platz in der ersten Reihe.',
      audienceTags: ['Einkäufer auf Lösungssuche', 'Anbieter mit Fokus auf Sichtbarkeit'],
      benefits: [
        {
          title: 'Exklusiver Vorab-Zugang',
          text: 'Sie gehören zu den Ersten, die im Juni zum offiziellen Launch eingeladen werden.'
        },
        {
          title: 'Passgenaues Onboarding',
          text: 'Durch die Wahl Ihrer Rolle bereiten wir Profil und Einstieg bereits im Hintergrund für Sie vor.'
        }
      ],
      supportingText:
        'Hinterlassen Sie Ihre Daten, damit BenchTrust Sie von Anfang an dem richtigen Launch-Segment zuordnen kann.',
      fields: {
        name: 'Name',
        email: 'Geschäfts-E-Mail',
        role: 'Ich bin'
      },
      placeholders: {
        name: 'Max Mustermann',
        email: 'max@unternehmen.de',
        role: 'Rolle auswählen'
      },
      roleOptions: [
        { value: 'buyer', label: 'Einkäufer auf Lösungssuche' },
        { value: 'provider', label: 'Anbieter mit Fokus auf Sichtbarkeit' }
      ],
      submit: 'Jetzt auf die Warteliste setzen',
      privacyHint:
        'Mit dem Absenden stimmen Sie zu, dass BenchTrust Ihre Kontaktdaten für Updates rund um den Launch speichert und verarbeitet.',
      successMessage: 'Vielen Dank. Sie stehen jetzt auf der BenchTrust-Warteliste.',
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