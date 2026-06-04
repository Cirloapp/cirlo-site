import React, { useEffect, useState } from 'react';

export default function CirloSite() {
  const googlePlayUrl = 'https://play.google.com/store/apps/details?id=com.mycompany.cirlo';
  const appStoreUrl = 'https://apps.apple.com/us/app/cirlo/id6751201819';

  const [pathname, setPathname] = useState('/');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPathname(window.location.pathname || '/');
    }
  }, []);

  const handleStartRecording = () => {
    if (typeof window === 'undefined') return;

    const ua = window.navigator.userAgent || window.navigator.vendor || '';
    const isAndroid = /android/i.test(ua);
    const isIPhone = /iPhone|iPad|iPod/i.test(ua);

    if (isAndroid) {
      window.location.href = googlePlayUrl;
      return;
    }

    if (isIPhone) {
      window.location.href = appStoreUrl;
      return;
    }

    window.location.href = '/download';
  };

  if (pathname === '/download') {
    return <DownloadPage googlePlayUrl={googlePlayUrl} appStoreUrl={appStoreUrl} />;
  }

if (pathname === '/privacy-policy') {
  return <PrivacyPolicy />;
}

if (pathname === '/terms-of-service') {
  return <TermsOfService />;
}

if (pathname === '/eula') {
  return <Eula />;
}

if (pathname === '/accessibility') {
  return <AccessibilityStatement />;
}

  return <LandingPage handleStartRecording={handleStartRecording} />;
}

function LandingPage({ handleStartRecording }) {
  const testimonials = [
    {
      quote:
        '“I recorded my daughter’s first laugh on the same day. I know I’ll never forget it — but hearing my own voice describe the moment will mean something different when she\'s 18.”',
      name: 'Sarah R.',
      meta: 'Mom to Amara, 5 months · Portland',
      initials: 'SR',
    },
    {
      quote:
        '“I was postpartum and struggling. I recorded the hard stuff too. I want her to know that I loved her before I figured it all out.”',
      name: 'Maya L.',
      meta: 'Mom to Nora, 8 months · Austin',
      initials: 'ML',
    },
    {
      quote:
        '“My husband kept asking why I was talking to my phone. Then I played him one back. He downloaded it that night.”',
      name: 'Jess P.',
      meta: 'Mom to Leo, 11 months · Chicago',
      initials: 'JP',
    },
  ];

  const plans = [
    {
      label: 'FREE',
      name: 'Starter',
      price: '$0',
      subtitle: 'Forever free · Up to 25 capsules',
      features: [
        '25 Talk Capsules',
        'Age-based timeline',
        'Daily reminder',
        'Private by default'
      ],
      cta: 'Download free',
      note: 'Enough to get started—upgrade when you’re ready to capture more.',
      featured: false,
    },
    {
      label: 'MOST POPULAR',
      name: 'Cirlo Plus',
      price: '$4.99',
      subtitle: 'per month · cancel anytime',
      features: [
        'Unlimited capsules',
        'Time capsule scheduling',
        'Cloud backup + MP3 export',
        'Multiple child profiles',
        'Guided age prompts'
      ],
      cta: 'Start free trial',
      note: 'Never miss a moment—capture as much as you want, whenever it happens.',
      featured: true,
    },
  ];

  const featureCards = [
    {
      title: 'Voice-first, always',
      text: 'No journaling. Your voice captures what text never could—exactly how it felt in the moment.',
      dark: false,
    },
    {
      title: 'Private by default',
      text: 'No feeds. No followers. No pressure. Everything stays yours unless you choose to share it.',
      dark: false,
    },
    {
      title: 'Organized timeline',
      text: 'Tag or sort by age to find it fast. Keep each season of your baby’s life—and yours—organized so nothing gets buried.',
      dark: true,
    },
    {
      title: 'Future delivery',
      text: 'For the things you can’t say yet—your fears, hopes, prayers, joys. Save it for when they’re old enough to hear it.',
      dark: true,
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Just talk',
      text: 'Open Cirlo. Tap record. Say it while it’s fresh. 60 seconds is enough.',
    },
    {
      number: '02',
      title: 'Save it instantly',
      text: 'Record and it’s saved—tag it or sort by age anytime. Private by default. No setup, no pressure.',
    },
    {
      number: '03',
      title: 'They hear it someday',
      text: 'Save it now for later. Share it with family, send it on a random Tuesday, or save it for a future birthday—when it will matter most.',
    },
  ];

  const faqs = [
    ['Do I have to write anything?', 'No. Cirlo is voice-first. You tap, talk, and capture the moment.'],
    ['Is Cirlo public?', 'No. Everything is private by default unless you choose to share it.'],
    ['Can the Cirlo team hear my recordings?', 'No. No one can hear your recordings except you—unless you choose to share them.'],
    ['Can I find recordings later?', 'Yes. Your Talk Capsules stay organized using the tags and titles you choose, so they’re easy to find and come back to in your vault.'],
    ['Will my recordings be safe?', 'Yes. Your recordings are securely stored and backed up so they’re always there when you need them.'],
    ['Can I send a recording for a family member to hear?', 'Not yet. This is a feature coming soon—we’re actively working on it.'],
    ['What if I change phones or emails?', 'Your vault stays with you. You can update your information anytime and your recordings stay secure and accessible.'],
  ];

  const waveform = [8, 14, 10, 16, 12, 9, 15, 11, 13, 8, 14, 10];

  return (
    <div className="min-h-screen bg-[#f3efec] text-[#2a1612] font-sans">
      <header className="sticky top-0 z-50 border-b border-[#e8ddd4] bg-[#f3efec]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div className="flex items-center gap-2 text-3xl font-semibold text-[#a67c7c]"><span className="text-4xl">C.</span><span>Cirlo</span></div>
          <nav className="hidden items-center gap-8 text-sm text-[#7a6256] md:flex">
            <a href="#how-it-works" className="hover:text-[#2a1612]">How it works</a>
            <a href="#features" className="hover:text-[#2a1612]">Features</a>
            <a href="#pricing" className="hover:text-[#2a1612]">Pricing</a>
            <a href="#faq" className="hover:text-[#2a1612]">FAQ</a>
          </nav>
          <button
            onClick={handleStartRecording}
            className="rounded-full bg-[#a67c7c] px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-95"
          >
            Start recording today
          </button>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10 lg:py-24">
          <div>
            <div className="inline-flex rounded-full border border-[#efd7dc] px-4 py-2 text-sm font-semibold text-[#a67c7c]">
              • Capture your voice for them—now and later
            </div>
            <h1 className="mt-8 text-6xl font-semibold leading-[0.95] tracking-[-0.02em] text-[#27110c] sm:text-7xl lg:text-[96px]">
              Say it now.
              <span className="mt-2 block italic text-[#a67c7c]">They won’t hear this version of you again.</span>
            </h1>
            <p className="mt-6 text-3xl italic text-[#7a6256] sm:text-4xl">
              60 seconds. That’s all it takes to keep today.
            </p>
            <div className="mt-8 max-w-2xl space-y-5 text-xl leading-10 text-[#735e53]">
              <p>If you’ve ever thought “I’ll remember this”—you won’t.</p>
              <p>Your baby is changing faster than you think. Open Cirlo. Tap record. Say it while it’s still fresh.</p>
              <p>No journaling. No pressure. Just your voice—captured before it’s gone.</p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={handleStartRecording}
                className="rounded-2xl bg-[#6f4e4e] px-6 py-4 text-base font-semibold text-white"
              >
                Start recording today
              </button>
            </div>
            <div className="mt-6 text-lg text-[#b49a8b]">Free. No credit card. Takes 60 seconds.</div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute left-0 top-24 rounded-3xl bg-[#a67c7c] px-5 py-4 text-white shadow-lg">
              <div className="text-xl font-semibold">57 capsules recorded</div>
              <div className="mt-1 text-sm text-white/85">2 months, 1 week</div>
            </div>
            <div className="absolute bottom-16 right-0 rounded-3xl bg-white px-5 py-4 text-[#735e53] shadow-lg">
              <div className="mt-2 max-w-[180px] text-xl leading-8">He’ll hear this on his 18th birthday.</div>
            </div>
            <div className="mx-auto w-[360px] rounded-[48px] bg-[#6f4e4e] p-6 shadow-[0_28px_80px_rgba(34,17,11,0.2)] sm:w-[400px]">
              <div className="rounded-[36px] bg-[#fbf8f6] p-6">
                <div className="text-4xl font-semibold italic text-[#27110c]">Liam&apos;s Capsules</div>
                <div className="mt-3 text-sm font-semibold uppercase tracking-[0.08em] text-[#b49a8b]">Baby is 4 months old</div>
                <div className="mt-6 space-y-4">
                  {[{
                    age: '3 months · 2 weeks',
                    date: 'Apr 14',
                    title: 'You laughed for the first time today—and I can’t stop thinking about it',
                    time: '0:58',
                  }, {
                    age: '3 months · 1 week',
                    date: 'Apr 7',
                    title: 'What I’m worried about this week—and what’s happening in the world',
                    time: '1:02',
                  }].map((item) => (
                    <div key={item.title} className="rounded-[24px] border border-[#eee3df] bg-white p-5 shadow-sm">
                      <div className="flex items-center justify-between text-sm font-semibold text-[#a67c7c]">
                        <span>{item.age}</span>
                        <span className="text-[#b49a8b]">{item.date}</span>
                      </div>
                      <div className="mt-3 text-xl font-medium leading-8 text-[#2a1612]">{item.title}</div>
                      <div className="mt-3 flex items-end gap-1">
                        {waveform.map((h, i) => (
                          <div
                            key={`${item.title}-${i}`}
                            className="w-1.5 rounded bg-[#d4939c]"
                            style={{
                              height: `${h}px`,
                              animation: `wave 1s ease-in-out ${i * 0.1}s infinite alternate`,
                            }}
                          />
                        ))}
                      </div>
                      <div className="mt-2 text-sm text-[#b49a8b]">{item.time} · private</div>
                    </div>
                  ))}
                </div>
                <button className="mt-6 w-full rounded-full bg-[#a67c7c] px-6 py-4 text-lg font-semibold text-white">
                  Record today’s Capsule
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
          <div className="rounded-[40px] bg-[#6f4e4e] px-10 py-16 text-center text-white shadow-[0_18px_50px_rgba(34,17,11,0.18)]">
            <p className="mx-auto max-w-6xl text-5xl italic leading-[1.25] text-white/95 sm:text-6xl">
              “You’re always behind the camera. Cirlo saves what photos never will — your voice, your love, and who you were in these baby days.”
            </p>
            <div className="mt-10 text-xl uppercase tracking-[0.14em] text-white/55">The Cirlo promise</div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="inline-flex rounded-full border border-[#efd7dc] px-4 py-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#a67c7c]">
            Features
          </div>
          <h2 className="mt-8 max-w-4xl text-6xl font-semibold leading-[0.95] tracking-[-0.02em] text-[#27110c] sm:text-7xl">
            Built for the in-between.
            <span className="mt-2 block italic text-[#a67c7c]">the everyday you’ll want back.</span>
          </h2>
          <div className="mt-8 max-w-4xl space-y-2 text-2xl leading-10 text-[#735e53]">
            <p>It’s not the big milestones.</p>
            <p>It’s what you said today.</p>
            <p>How you felt.</p>
            <p>The little things you won’t remember tomorrow.</p>
            <p>Those are what we wish we kept.</p>
          </div>

          <div className="mt-12 rounded-[40px] border border-[#efd7dc] bg-[#fbf1f3] p-10 lg:flex lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <h3 className="mt-4 text-5xl font-semibold italic text-[#a67c7c]">Time capsule delivery</h3>
              <div className="mt-6 space-y-2 text-2xl leading-10 text-[#735e53]">
                <p>Record something they’ll hear years from now.</p>
                <p>On their 5th birthday. Their 18th. Their wedding day.</p>
                <p>Your voice—exactly as you are today.</p>
              </div>
            </div>
            <div className="mt-8 rounded-[28px] bg-[#a67c7c] px-10 py-8 text-center text-white lg:mt-0">
              <div className="text-sm font-semibold uppercase tracking-[0.12em] text-white/80">Scheduled for</div>
              <div className="mt-3 text-7xl font-semibold">2043</div>
              <div className="mt-2 text-xl">Her 18th birthday</div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {featureCards.map((card) => (
              <div
                key={card.title}
                className={card.dark ? 'rounded-[32px] bg-[#6f4e4e] p-8 text-white' : 'rounded-[32px] border border-[#e7ddd6] bg-white p-8'}
              >
                <div className="h-2" />
                <h3 className={card.dark ? 'mt-6 text-4xl font-semibold text-white' : 'mt-6 text-4xl font-semibold text-[#27110c]'}>{card.title}</h3>
                <p className={card.dark ? 'mt-4 text-2xl leading-10 text-white/80' : 'mt-4 text-2xl leading-10 text-[#735e53]'}>{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="inline-flex rounded-full border border-[#efd7dc] px-4 py-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#a67c7c]">
            How it works
          </div>
          <h2 className="mt-8 max-w-5xl text-6xl font-semibold leading-[0.95] tracking-[-0.02em] text-[#27110c] sm:text-7xl">
            Three taps.
            <span className="mt-2 block italic text-[#a67c7c]">A lifetime of memories.</span>
          </h2>
          <p className="mt-8 max-w-5xl text-2xl leading-10 text-[#735e53]">
            No writing. No setup. No perfect words required. Cirlo is built for real life with a newborn — which means it needs to be fast.
          </p>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="rounded-[32px] border border-[#e7ddd6] bg-white p-8">
                <div className="text-6xl font-semibold italic text-[#e8bcc4]">{step.number}</div>
                <h3 className="mt-6 text-4xl font-semibold text-[#27110c]">{step.title}</h3>
                <p className="mt-4 text-2xl leading-10 text-[#735e53]">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="inline-flex rounded-full border border-[#efd7dc] px-4 py-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#a67c7c]">
            Early users
          </div>
          <h2 className="mt-8 max-w-4xl text-6xl font-semibold leading-[0.95] tracking-[-0.02em] text-[#27110c] sm:text-7xl">
            What moms are
            <span className="mt-2 block italic text-[#a67c7c]">saying</span>
          </h2>
          <p className="mt-8 max-w-3xl text-2xl leading-10 text-[#735e53]">
            Real quotes from our beta moms — the women who helped shape what Cirlo is.
          </p>

          <div className="mt-12 grid gap-6 xl:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="rounded-[32px] border border-[#e7ddd6] bg-white p-8">
                <div className="text-3xl text-[#a67c7c]">★★★★★</div>
                <p className="mt-6 text-[28px] italic leading-[1.5] text-[#2a1612]">{item.quote}</p>
                <div className="mt-10 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f8e9ee] font-semibold text-[#a67c7c]">{item.initials}</div>
                  <div>
                    <div className="text-2xl font-semibold text-[#27110c]">{item.name}</div>
                    <div className="text-lg text-[#b49a8b]">{item.meta}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="inline-flex rounded-full border border-[#efd7dc] px-4 py-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#a67c7c]">
            Pricing
          </div>
          <h2 className="mt-8 max-w-5xl text-6xl font-semibold leading-[0.95] tracking-[-0.02em] text-[#27110c] sm:text-7xl">
            Start free.
            <span className="mt-2 block italic text-[#a67c7c]">Keep what matters.</span>
          </h2>
          <p className="mt-8 max-w-4xl text-2xl leading-10 text-[#735e53]">
            Start free. Keep what matters. Upgrade when you’re ready.
          </p>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={plan.featured ? 'rounded-[36px] bg-[#6f4e4e] p-10 text-white shadow-[0_18px_50px_rgba(34,17,11,0.12)]' : 'rounded-[36px] border border-[#e7ddd6] bg-white p-10'}
              >
                <div className={plan.featured ? 'inline-flex rounded-full bg-[#a67c7c] px-4 py-2 text-sm font-semibold uppercase tracking-[0.12em] text-white' : 'inline-flex rounded-full bg-[#efe5db] px-4 py-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#8a715e]'}>
                  {plan.label}
                </div>
                <h3 className={plan.featured ? 'mt-8 text-6xl font-semibold text-white' : 'mt-8 text-6xl font-semibold text-[#27110c]'}>{plan.name}</h3>
                <div className={plan.featured ? 'mt-2 text-7xl font-semibold text-white' : 'mt-2 text-7xl font-semibold text-[#27110c]'}>{plan.price}</div>
                <div className={plan.featured ? 'mt-3 text-2xl text-white/65' : 'mt-3 text-2xl text-[#b49a8b]'}>{plan.subtitle}</div>
                <ul className={plan.featured ? 'mt-10 space-y-5 text-2xl text-white/88' : 'mt-10 space-y-5 text-2xl text-[#5f4d55]'}>
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className={plan.featured ? 'mt-1 text-white/80' : 'mt-1 text-[#a67c7c]'}>●</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className={plan.featured ? 'mt-8 text-xl leading-9 text-white/70' : 'mt-8 text-xl leading-9 text-[#7a6256]'}>{plan.note}</p>
                <button
                  onClick={handleStartRecording}
                  className={plan.featured ? 'mt-10 w-full rounded-full bg-[#a67c7c] px-8 py-5 text-2xl font-semibold text-white transition hover:opacity-95' : 'mt-10 w-full rounded-full border border-[#d8cec8] px-8 py-5 text-2xl font-semibold text-[#27110c] transition hover:bg-[#faf8f6]'}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="relative overflow-hidden rounded-[44px] bg-[#a67c7c] px-8 py-16 text-center text-white sm:px-12">
            <div className="absolute -right-20 bottom-[-140px] h-[340px] w-[340px] rounded-full bg-white/10" />
            <h2 className="relative z-10 mx-auto max-w-5xl text-6xl font-semibold leading-[0.95] tracking-[-0.02em] sm:text-7xl">
              This season is going faster than you think.
            </h2>
            <p className="relative z-10 mt-8 text-2xl leading-10 text-white/90">
              Record today before it’s gone. 60 seconds. Your voice. Something they’ll keep forever.
            </p>
            <div className="relative z-10 mt-10 flex flex-wrap justify-center gap-4">
              <button
                onClick={handleStartRecording}
                className="rounded-2xl bg-white px-6 py-4 text-xl font-semibold text-[#27110c]"
              >
                Start recording today
              </button>
            </div>
            <div className="relative z-10 mt-8 text-2xl text-white/85">Free. No credit card. Takes 60 seconds.</div>
          </div>
        </section>

        <footer className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="border-t border-[#e5d8ce] pt-12">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="flex items-center gap-2 text-5xl font-semibold text-[#a67c7c]"><span className="text-6xl">C.</span><span>Cirlo</span></div>
                <p className="mt-6 max-w-sm text-2xl leading-10 text-[#b49a8b]">
                  Say it now. We make sure they hear it—later.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8 text-2xl text-[#a98f80]">
                <div>
                <div className="font-semibold uppercase tracking-[0.08em] text-[#7a6256]">Resources</div>
                  <div className="mt-6 flex flex-col gap-4">
                    <a href="/privacy-policy">Privacy Policy</a>

<a href="/terms-of-service">Terms of Service</a>

<a href="/eula">End User License Agreement (EULA)</a>

<a href="/accessibility">Accessibility Statement</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 flex flex-col gap-6 border-t border-[#e5d8ce] pt-8 text-xl text-[#b49a8b] lg:flex-row lg:items-center lg:justify-between">
              <div>© 2025 Cirlo · hello@cirloapp.com</div>
              <div>For the moms who won’t want to forget this.</div>
            </div>
          </div>
        </footer>

        <section className="mx-auto max-w-3xl px-6 pb-10 lg:px-10">
          <div className="rounded-[28px] border border-[#e7ddd6] bg-white p-6 text-center text-[#735e53] shadow-sm">
            <div className="text-lg font-semibold text-[#27110c]">Not on your phone right now?</div>
            <div className="mt-2 text-base leading-7">
              We’ll send you to the right app store automatically. If you’re on desktop, you’ll land on a simple download page with both options.
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
          <div className="border-t border-[#e5d8ce] pt-16">
            <div className="inline-flex rounded-full border border-[#efd7dc] px-4 py-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#a67c7c]">
              FAQ
            </div>
            <h2 className="mt-8 text-5xl font-semibold tracking-[-0.02em] text-[#27110c] sm:text-6xl">Questions moms ask first.</h2>
            <div className="mt-10 grid gap-5">
              {faqs.map(([q, a]) => (
                <div key={q} className="rounded-[28px] border border-[#e7ddd6] bg-white p-8">
                  <div className="text-3xl font-semibold text-[#27110c]">{q}</div>
                  <div className="mt-4 text-2xl leading-10 text-[#735e53]">{a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        body {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }

        @keyframes wave {
          0% { transform: scaleY(0.5); opacity: 0.6; }
          100% { transform: scaleY(1.4); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

function DownloadPage({ googlePlayUrl, appStoreUrl }) {
  return (
    <div className="min-h-screen bg-[#f3efec] px-6 py-16 text-[#2a1612] font-sans lg:px-10">
      <div className="mx-auto max-w-3xl rounded-[40px] border border-[#e7ddd6] bg-white p-10 text-center shadow-sm">
        <div className="flex items-center justify-center gap-2 text-4xl font-semibold text-[#a67c7c]">
          <span className="text-5xl">C.</span>
          <span>Cirlo</span>
        </div>
        <h1 className="mt-8 text-5xl font-semibold tracking-[-0.02em] text-[#27110c] sm:text-6xl">
          Download Cirlo
        </h1>
        <p className="mt-6 text-xl leading-9 text-[#735e53]">
          Choose your app store below and start recording today.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href={appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-[#6f4e4e] px-8 py-4 text-lg font-semibold text-white"
          >
            Download on the App Store
          </a>
          <a
            href={googlePlayUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-[#a67c7c] px-8 py-4 text-lg font-semibold text-white"
          >
            Get it on Google Play
          </a>
        </div>
        <div className="mt-8 text-base text-[#b49a8b]">Free. No credit card. Takes 60 seconds.</div>
      </div>
    </div>
  );
}
function LegalPage({ title, children }) {
  return (
    <div className="min-h-screen bg-[#f7f1ed] px-6 py-12">
      <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-sm md:p-12">
        <a href="/" className="text-[#a67c7c] underline">
          ← Back to Cirlo
        </a>

        <h1 className="mt-8 text-4xl font-semibold text-[#2b1713]">
          {title}
        </h1>

        <div className="mt-8 space-y-4 text-[#735e53] leading-8">
          {children}
        </div>
      </div>
    </div>
  );
}
function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy">
      Privacy Policy
Effective Date: September 23, 2025
Last Updated: May 31, 2026
Introduction
Welcome to Cirlo, a product of Origin & Co. ("Company," "we," "our," or "us").
Cirlo is a voice-first memory preservation platform designed to help users capture, organize, and preserve personal voice recordings, stories, reflections, life lessons, and meaningful moments. While Cirlo is especially popular among first-time mothers and families, the platform may be used by anyone who wishes to preserve memories and experiences through voice.
Your privacy is important to us. This Privacy Policy explains what information we collect, how we use it, how we protect it, and the choices available to you.
Information We Collect
We may collect:
Account Information
Name (if provided)
Email address
Login credentials and authentication information
User Content
Audio recordings
Recording titles
Tags, categories, and notes
Content you voluntarily upload or create within Cirlo
Technical Information
Device type
Operating system
Browser information
IP address
App usage information
Analytics and performance data
How We Collect Information
We collect information:
Directly from you when you create an account or use Cirlo
Automatically through analytics and performance monitoring tools
Through third-party authentication and infrastructure providers
How We Use Information
We use information to:
Provide and maintain Cirlo
Store and organize your recordings
Improve app functionality and user experience
Respond to support requests
Communicate service updates and product announcements
Protect the security and integrity of the platform
Storage of Recordings
Audio recordings, titles, tags, and related content may be stored using secure cloud infrastructure providers, including Google Firebase, in order to provide the Cirlo service.
We implement reasonable administrative, technical, and organizational safeguards designed to protect your information. However, no method of electronic storage, transmission, or security measure can be guaranteed to be completely secure. Accordingly, we cannot guarantee the absolute security of your information.

Sharing Information
We do not sell your personal information.
We may share information:
With service providers that help operate Cirlo
To comply with legal obligations
To protect the rights, safety, or security of users or the Company
In connection with a business transfer, merger, or acquisition
Data Retention
We retain information only as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce agreements.
Your Rights
Depending on your location, you may have rights to:
Access your information
Correct inaccurate information
Request deletion of your account and data
Withdraw consent where applicable
To exercise these rights, contact us at hello@cirloapp.com.
Children's Privacy
Cirlo is not intended for children under the age of 13.
We do not knowingly collect personal information from children under 13. If we become aware that such information has been collected, we will take reasonable steps to delete it.
Changes to This Policy
We may update this Privacy Policy periodically. Updated versions will be posted with a revised "Last Updated" date.
Contact Us
Origin & Co.
hello@cirloapp.com
www.cirloapp.com
    </LegalPage>
  );
}

function TermsOfService() {
  return (
    <LegalPage title="Terms of Service">
     Terms of Service
Effective Date: September 23, 2025
Last Updated: May 31, 2026
Agreement to Terms
Welcome to Cirlo, a product of Origin & Co.
By accessing or using Cirlo, you agree to be bound by these Terms of Service. If you do not agree, you may not use the Services.
Description of Service
Cirlo is a voice-first memory preservation platform that enables users to capture, organize, store, and revisit personal stories, memories, reflections, life lessons, and meaningful moments.
Eligibility
You must be at least 13 years old to use Cirlo.
By using Cirlo, you represent that you meet this requirement.
User Accounts
You are responsible for maintaining the confidentiality of your account credentials and for all activity occurring under your account.
User Content
You retain ownership of all content you create, upload, or store within Cirlo.
You grant Origin & Co. a limited, non-exclusive license to store, process, display, transmit, and back up your content solely for the purpose of operating and improving the Services.
Acceptable Use
You agree not to:
Violate any law or regulation
Infringe another person's intellectual property rights
Upload malicious software or harmful content
Harass, threaten, or abuse others
Attempt unauthorized access to systems or accounts
Intellectual Property
All Cirlo software, branding, logos, designs, features, and content provided by Origin & Co. remain our exclusive property unless otherwise stated.
Subscriptions
Certain features may require a paid subscription.
Subscription pricing, billing, and renewal terms will be disclosed within the application.
Termination
We may suspend or terminate access to Cirlo if you violate these Terms or misuse the Services.
Disclaimer
Cirlo is provided on an "as is" and "as available" basis without warranties of any kind.
We do not guarantee uninterrupted, secure, or error-free operation.
Limitation of Liability
To the fullest extent permitted by law, Origin & Co. shall not be liable for indirect, incidental, consequential, special, or punitive damages arising from your use of Cirlo.
Governing Law
These Terms are governed by the laws of the State of Missouri.
Contact
hello@cirloapp.com
    </LegalPage>
  );
}

function Eula() {
  return (
    <LegalPage title="End User License Agreement (EULA)">
      End User License Agreement (EULA)
Effective Date: September 23, 2025
Last Updated: May 31, 2026
License Grant
Origin & Co. grants you a limited, non-exclusive, non-transferable, revocable license to use Cirlo for personal, non-commercial purposes.
Ownership
Cirlo and all associated intellectual property remain the property of Origin & Co.
This Agreement does not transfer ownership rights to you.
User Content
You retain ownership of your recordings, stories, notes, and other content.
By using Cirlo, you grant Origin & Co. a limited license to store, process, transmit, back up, and display your content solely as necessary to provide and improve the Services.
Restrictions
You may not:
Copy or redistribute Cirlo
Reverse engineer or decompile the software
Attempt unauthorized access to systems
Use Cirlo for unlawful purposes
No Professional Advice
Cirlo is designed to help users preserve memories, stories, reflections, family moments, and life experiences.
Cirlo does not provide legal, medical, psychological, financial, or other professional advice.
Privacy
Your use of Cirlo is subject to our Privacy Policy.
Termination
We may suspend or terminate your access if you violate this Agreement.
Disclaimer of Warranties
Cirlo is provided "as is" without warranties of any kind.
Limitation of Liability
To the fullest extent permitted by law, Origin & Co. shall not be liable for indirect, incidental, consequential, or special damages resulting from use of the application.
Governing Law
This Agreement is governed by the laws of the State of Missouri.
Contact
hello@cirloapp.com
    </LegalPage>
  );
}

function AccessibilityStatement() {
  return (
    <LegalPage title="Accessibility Statement">
      Accessibility Statement

Effective Date: September 23, 2025
Last Updated: May 31, 2026

Origin & Co. is committed to making the Cirlo app and our website (www.cirloapp.com) accessible to all users.

What Accessibility Means

An accessible site allows visitors with disabilities to browse with the same or similar ease and enjoyment as other visitors, using built-in system capabilities and assistive technologies.

Accessibility Efforts

We have adapted this site in accordance with WCAG 2.1 Level AA guidelines. Examples of adjustments include:

• Used the Accessibility Wizard to find and fix potential accessibility issues
• Set the language of the site
• Set the content order of the site’s pages
• Defined clear heading structures on all of the site’s pages
• Added alternative text to images
• Implemented color combinations that meet the required color contrast
• Reduced the use of motion on the site
• Ensured all videos, audio, and files on the site are accessible

Partial Compliance

Some pages may include third-party content (e.g., embedded tools, external platforms). While we strive for accessibility, we cannot guarantee the compliance of such content. We welcome feedback if you encounter barriers.

Our Commitment

We are dedicated to continuous improvement and follow best practices outlined in the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA wherever reasonably possible. Our goal is that all individuals can:

• Navigate with assistive technologies
• Access and understand our content
• Use our tools with minimal barriers

Ongoing Improvements

Accessibility remains an ongoing priority as we continue to improve and expand the Cirlo website and mobile application. We are committed to identifying and addressing accessibility barriers and improving the experience for all users.

Requests, Issues and Suggestions

If you experience difficulty accessing any part of our site or app, please let us know:

hello@cirloapp.com

We will work promptly to address your concern and ensure you have access to the information or service you need.
    </LegalPage>
  );
}
