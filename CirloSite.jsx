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

if (pathname === '/delete-account') {
  return <LegalPage title="Delete Your Cirlo Account" html={"<p>You can delete your Cirlo account and its data at any time.</p>\n<h2>In the app</h2>\n<p>Open Cirlo, tap <strong>You</strong>, then <strong>Settings \u2192 Delete my account</strong>. For your security, you may be asked to sign in again first.</p>\n<h2>Without the app</h2>\n<p>Email <a href=\"mailto:hello@cirloapp.com?subject=Delete%20my%20Cirlo%20account\">hello@cirloapp.com</a> from the email address on your account with the subject \u201cDelete my Cirlo account.\u201d We will confirm and delete it within 7 days.</p>\n<h2>What is deleted</h2>\n<ul>\n<li>your account, name, and email address</li>\n<li>your saved answers and the Cirlos you follow</li>\n<li>for Cirlos: your profile, photo, intro recording, and voice answers</li>\n</ul>\n<h2>What may be kept</h2>\n<p>Copies in backups are removed within 30 days. Payment and tax records for Cirlos are kept as long as the law requires. Reports you submitted about content may be kept to keep Cirlo safe.</p>"} />;
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
const LEGAL_CSS = `
.legal{font-family:'DM Sans',system-ui,sans-serif;color:#3A4135;font-size:16px;line-height:1.7}
.legal .dates{color:#66705B;font-size:14px;margin:0 0 28px}
.legal h2{font-family:'Libre Caslon Display',Georgia,serif;color:#242A20;font-size:26px;line-height:1.2;margin:40px 0 10px;font-weight:400}
.legal h3{color:#242A20;font-size:17px;font-weight:600;margin:24px 0 6px}
.legal p{margin:0 0 14px}.legal ul{padding-left:22px;margin:0 0 14px;list-style:disc}.legal li{margin:4px 0}
.legal a{color:#242A20;text-decoration:underline}.legal strong{color:#242A20}
`;

function LegalPage({ title, html }) {
  return (
    <div className="min-h-screen bg-[#F3F5EC] text-[#242A20]">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Libre+Caslon+Display&display=swap');body{margin:0;background:#F3F5EC}` + LEGAL_CSS}</style>
      <header className="border-b border-[#CDD3C1]">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
          <a href="/" aria-label="Cirlo home"><img src="/cirlo-logo-lime.svg" alt="Cirlo" className="h-9 w-auto" /></a>
          <a href="/" className="text-xs font-bold uppercase tracking-[.12em]">← Back to Cirlo</a>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <h1 style={{fontFamily:"'Libre Caslon Display',Georgia,serif",fontWeight:400}} className="text-5xl leading-[1.02] tracking-[-.03em] md:text-6xl">{title}</h1>
        <div className="legal mt-5" dangerouslySetInnerHTML={{ __html: html }} />
      </main>
      <footer className="border-t border-[#CDD3C1] px-6 py-8">
        <div className="mx-auto flex max-w-3xl flex-wrap gap-6 text-xs">
          <a href="/privacy-policy">Privacy</a><a href="/terms-of-service">Terms</a><a href="/eula">EULA</a><a href="/accessibility">Accessibility</a><a href="/delete-account">Delete account</a><a href="mailto:hello@cirloapp.com">Contact</a>
        </div>
      </footer>
    </div>
  );
}

function PrivacyPolicy() {
  return <LegalPage title="Privacy Policy" html={"<p class=\"dates\">Effective Date: October 8, 2026 \u00b7 Last Updated: October 8, 2026</p><p>This Privacy Policy explains how Origin &amp; Co LLC (\"Company,\" \"we,\" \"our,\" or \"us\") collects, uses, shares, and protects your information when you use the Cirlo mobile app and website (together, \"Cirlo\").</p>\n<p>Cirlo is a voice app where experienced women (\"Cirlos\") answer a Daily Question in their own voice, based on what they have lived. Members listen, save the answers that speak to them, and follow the Cirlos they want to keep hearing from. Cirlo shares personal experience. It is not therapy, counseling, medical, legal, or financial advice, and it is not an emergency service. If you are in crisis or in danger, call or text 988 (Suicide &amp; Crisis Lifeline) or call 911.</p>\n<p>By using Cirlo, you agree to this Privacy Policy and our <a href=\"/terms-of-service\">Terms of Service</a>.</p>\n<h2>1. Who Can Use Cirlo</h2>\n<p>Cirlo is only for adults 18 and older. We do not knowingly collect information from anyone under 18. If we learn that a minor has created an account, we will delete it.</p>\n<h2>2. Information We Collect</h2>\n<h3>Information you give us</h3>\n<ul>\n<li><strong>Account information:</strong> your first name, email address, and password, or your Apple sign-in details.</li>\n<li><strong>Activity in the app:</strong> the answers you save, the answers you mark \"Relate,\" the Cirlos you follow, and whether you have requested early access to future features.</li>\n<li><strong>Messages to us:</strong> anything you send when you contact us.</li>\n</ul>\n<h3>Additional information from Cirlos</h3>\n<p>If you apply or serve as a Cirlo, we also collect:</p>\n<ul>\n<li>your first name, age, photo, tagline, the seasons of life you have lived through, and your intro recording</li>\n<li>the voice answers you record to Daily Questions</li>\n<li>application and review details, and records of published answers and payments</li>\n<li>the payment and tax information needed to pay you, such as your payment method details and a Form W-9</li>\n</ul>\n<h3>Information collected automatically</h3>\n<ul>\n<li>device type, operating system, app version, and general usage data</li>\n<li>crash, error, and performance data</li>\n<li>a push notification token, if you allow notifications</li>\n</ul>\n<h2>3. How We Use Your Information</h2>\n<p>We use your information to:</p>\n<ul>\n<li>create and manage your account</li>\n<li>show the Daily Question and the Cirlos' answers</li>\n<li>save the answers you keep and the Cirlos you follow</li>\n<li>review Cirlo applications and answers before they are published</li>\n<li>pay Cirlos for published answers and meet tax reporting requirements</li>\n<li>send notifications about new questions, answers, and account activity</li>\n<li>respond to your questions and support requests</li>\n<li>keep Cirlo safe, enforce our Terms, and prevent misuse</li>\n<li>fix problems and improve Cirlo</li>\n</ul>\n<p>We do not sell your personal information, and we do not use voice recordings for advertising.</p>\n<h2>4. Who Can See Your Information</h2>\n<ul>\n<li><strong>Members:</strong> your name, saved answers, \"Relate\" taps, and the Cirlos you follow are private to you. Cirlos and other members cannot see them.</li>\n<li><strong>Cirlos:</strong> once approved, a Cirlo's first name, age, photo, tagline, seasons of life, intro recording, and published answers can be seen and heard by everyone signed in to Cirlo. Answers are only shown after we review and approve them.</li>\n<li><strong>Our team:</strong> we access account information and recordings only when needed to review applications and answers, provide support, investigate misuse, or comply with the law.</li>\n</ul>\n<h2>5. Sharing With Service Providers</h2>\n<p>We share information only as needed to run Cirlo, with providers who are required to protect it:</p>\n<ul>\n<li><strong>Google Firebase:</strong> account sign-in, database, file storage, and notifications</li>\n<li><strong>Google Firebase Crashlytics and Performance Monitoring:</strong> crash and performance reports</li>\n<li><strong>PostHog:</strong> anonymous app usage analytics</li>\n<li><strong>Apple App Store and Google Play:</strong> app distribution</li>\n<li><strong>Payment providers:</strong> paying Cirlos</li>\n<li><strong>Email and support tools:</strong> responding to you</li>\n</ul>\n<p>We may also disclose information if required by law, to protect someone's safety, to investigate fraud or abuse, or as part of a merger, sale, or transfer of our business.</p>\n<h2>6. How Long We Keep Information</h2>\n<p>We keep your information while your account is active.</p>\n<p>When you delete your account in the app, your account, saved answers, and follows are deleted right away. If you are a Cirlo, your profile, answers, and recordings are deleted too. Copies in our backups are removed within 30 days. Some records may be kept longer when the law requires it, such as payment and tax records.</p>\n<h2>7. Deleting Your Account</h2>\n<p>You can delete your account anytime in the app under <strong>Settings \u2192 Delete my account</strong>. You can also request deletion at <a href=\"/delete-account\">cirloapp.com/delete-account</a> or by emailing hello@cirloapp.com.</p>\n<h2>8. Your Privacy Rights</h2>\n<p>Depending on where you live, you may have the right to:</p>\n<ul>\n<li>access the personal information we hold about you</li>\n<li>correct inaccurate information</li>\n<li>delete your information</li>\n<li>receive a copy of your information</li>\n<li>opt out of certain uses of your information</li>\n<li>not be treated differently for using these rights</li>\n</ul>\n<p>To make a request, email hello@cirloapp.com. We may need to verify your identity before completing it.</p>\n<h2>9. Security</h2>\n<p>We use reasonable safeguards to protect your information, including encrypted connections and access controls. No system is completely secure, so please use a strong password and keep your login private.</p>\n<h2>10. Changes to This Policy</h2>\n<p>We may update this Privacy Policy as Cirlo changes, including when we add new features. If we make material changes, we will update the date above and notify you in the app or by email.</p>\n<h2>11. Contact Us</h2>\n<p>Origin &amp; Co LLC<br>4239 Lindell Blvd<br>Saint Louis, MO 63108<br>Email: hello@cirloapp.com</p>"} />;
}

function TermsOfService() {
  return <LegalPage title="Terms of Service" html={"<p class=\"dates\">Effective Date: October 8, 2026 \u00b7 Last Updated: October 8, 2026</p><p>These Terms of Service (\"Terms\") are an agreement between you and Origin &amp; Co LLC (\"Company,\" \"we,\" \"our,\" or \"us\") for your use of the Cirlo mobile app and website (together, \"Cirlo\"). By creating an account or using Cirlo, you agree to these Terms and our <a href=\"/privacy-policy\">Privacy Policy</a>. If you do not agree, do not use Cirlo.</p>\n<h2>1. What Cirlo Is</h2>\n<p>Cirlo is a voice app where experienced women (\"Cirlos\") answer a Daily Question in their own voice, based on what they have lived. Members (\"Members\") listen to their answers, save the ones that speak to them, and follow the Cirlos they want to keep hearing from.</p>\n<h2>2. What Cirlo Is Not</h2>\n<p>Cirlo shares personal experience. <strong>Cirlo is not therapy, counseling, or medical, mental health, legal, or financial advice, and it is not an emergency or crisis service.</strong> Cirlos share their own stories and opinions. They are not acting as licensed professionals, even if they hold a license in their own careers. Do not rely on Cirlo for decisions that need professional advice.</p>\n<p><strong>If you are in crisis or in danger, call or text 988 (Suicide &amp; Crisis Lifeline) or call 911.</strong></p>\n<h2>3. Eligibility</h2>\n<p>You must be at least 18 years old to use Cirlo. By using Cirlo, you confirm that you are 18 or older and able to agree to these Terms.</p>\n<h2>4. Your Account</h2>\n<p>You are responsible for your account, keeping your login private, and all activity under your account. Give accurate information when you sign up and keep it current. You may not create an account for someone else or share your account.</p>\n<h2>5. Price</h2>\n<p>Cirlo is free to use. If we offer paid features in the future, we will show the price and terms in the app before you buy, and you will never be charged without agreeing first.</p>\n<h2>6. Listening to Answers</h2>\n<ul>\n<li>Answers are personal stories and opinions of the Cirlos who recorded them, not statements by Origin &amp; Co.</li>\n<li>You may listen to and save answers inside Cirlo for your personal use. Do not record, download, copy, share, or publish answers or Cirlo profiles outside Cirlo.</li>\n</ul>\n<h2>7. Community Guidelines</h2>\n<p>Cirlo works because it is kind, honest, and respectful. You agree not to:</p>\n<ul>\n<li>harass, threaten, shame, bully, or discriminate against anyone</li>\n<li>share sexual, hateful, violent, or illegal content</li>\n<li>share another person's private information</li>\n<li>pretend to be someone else or misrepresent your experience</li>\n<li>promote products, services, or solicitations</li>\n<li>share content that encourages self-harm or harm to others</li>\n<li>try to access other accounts, interfere with Cirlo, or copy or reverse-engineer the app</li>\n<li>use Cirlo for any unlawful purpose</li>\n</ul>\n<p>If you see something that breaks these guidelines, email hello@cirloapp.com. We may remove content, limit features, or suspend or terminate accounts that break these Terms. We may also contact emergency services if we believe someone is in danger.</p>\n<h2>8. Cirlo Terms</h2>\n<p>These terms also apply if you apply to be or serve as a Cirlo.</p>\n<ul>\n<li><strong>Applying:</strong> Cirlos sign up in the app, complete a profile, and record an intro. We review every application, and approval is at our discretion. Your profile is not shown to Members until you are approved.</li>\n<li><strong>Your answers:</strong> you record answers to Daily Questions in your own voice, based on your own experience. Every answer is reviewed before it is published, and we may decline or remove any answer.</li>\n<li><strong>Your content:</strong> you own your recordings. By submitting an answer, intro, or profile, you give us a worldwide, non-exclusive, royalty-free license to host, store, publish, play, and display it in Cirlo. This license lasts while your content is on Cirlo and ends when it is removed.</li>\n<li><strong>Honesty and privacy:</strong> share only your own experiences. Do not name, identify, or share private details about other people without their permission, and do not give professional advice.</li>\n<li><strong>Payment:</strong> we pay you for each answer we approve and publish, at the rate we confirm with you in writing. Answers that are declined or not published are not paid. Payments are made monthly for the answers published the previous month, using the payment method you provide.</li>\n<li><strong>Independent contractor:</strong> Cirlos are independent contractors, not employees, agents, or partners of Origin &amp; Co. You are responsible for your own taxes. We may require a Form W-9 before paying you, and we will issue tax forms as required by law.</li>\n<li><strong>Ending:</strong> you may stop being a Cirlo anytime by telling us or deleting your account. We may end your participation at any time. Payment for answers already published before the end date will still be made.</li>\n</ul>\n<h2>9. Our Rights</h2>\n<p>Cirlo, including its software, design, name, and logos, belongs to Origin &amp; Co. You may not use our branding without permission. We may change, suspend, or discontinue any part of Cirlo at any time.</p>\n<h2>10. Ending Your Use</h2>\n<p>You may stop using Cirlo and delete your account anytime under Settings \u2192 Delete my account. We may suspend or end your access if you break these Terms, create risk for others, or if we stop offering Cirlo.</p>\n<h2>11. Disclaimers</h2>\n<p>Cirlo is provided \"as is\" and \"as available.\" To the fullest extent allowed by law, we make no warranties of any kind, including that Cirlo will be uninterrupted, error-free, or secure. Perspectives shared by Cirlos are their own personal experiences and opinions, not ours, and we are not responsible for decisions you make based on them.</p>\n<h2>12. Limitation of Liability</h2>\n<p>To the fullest extent allowed by law, Origin &amp; Co will not be liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of data, profits, or goodwill, arising from your use of Cirlo. Our total liability for any claim related to Cirlo is limited to the greater of the amount you paid us in the 12 months before the claim or $100.</p>\n<h2>13. Indemnity</h2>\n<p>You agree to cover any claims, losses, or costs brought against Origin &amp; Co that arise from your content, your use of Cirlo, or your violation of these Terms.</p>\n<h2>14. Governing Law</h2>\n<p>These Terms are governed by the laws of the State of Missouri, without regard to conflict-of-law rules. Any dispute will be handled in the state or federal courts located in St. Louis County, Missouri.</p>\n<h2>15. App Store Terms</h2>\n<p>If you downloaded Cirlo from the Apple App Store, our <a href=\"/eula\">End User License Agreement</a> also applies. Apple and Google are not responsible for Cirlo or its content.</p>\n<h2>16. Changes to These Terms</h2>\n<p>We may update these Terms as Cirlo changes, including when we add new features. If we make material changes, we will update the date above and notify you in the app or by email. Continuing to use Cirlo after changes take effect means you accept the updated Terms.</p>\n<h2>17. Contact Us</h2>\n<p>Origin &amp; Co LLC<br>4239 Lindell Blvd<br>Saint Louis, MO 63108<br>Email: hello@cirloapp.com</p>"} />;
}

function Eula() {
  return <LegalPage title="End User License Agreement (EULA)" html={"<p class=\"dates\">Effective Date: October 8, 2026 \u00b7 Last Updated: October 8, 2026</p><p>This End User License Agreement (\"Agreement\") is between you and Origin &amp; Co LLC (\"Company,\" \"we,\" or \"us\") and covers your use of the Cirlo mobile app (\"App\"). It works together with our <a href=\"/terms-of-service\">Terms of Service</a> and <a href=\"/privacy-policy\">Privacy Policy</a>.</p>\n<h2>1. License</h2>\n<p>We grant you a limited, personal, non-exclusive, non-transferable, revocable license to download and use the App on devices you own or control, for your personal, non-commercial use, as allowed by these terms and the rules of the app store you downloaded it from.</p>\n<h2>2. Restrictions</h2>\n<p>You may not copy, modify, distribute, sell, rent, or sublicense the App; reverse-engineer or try to extract its source code; remove any notices; or use the App to break the law or our Terms of Service.</p>\n<h2>3. Ownership</h2>\n<p>The App and all rights in it belong to Origin &amp; Co. This Agreement gives you a license to use the App, not ownership of it. You keep ownership of the recordings and content you create, as described in our Terms of Service.</p>\n<h2>4. Price</h2>\n<p>The App is free. If paid features are offered in the future, they will be sold as in-app purchases through the Apple App Store or Google Play and governed by their payment terms and our Terms of Service.</p>\n<h2>5. Not Professional or Emergency Services</h2>\n<p>The App shares personal experience. It is not therapy, counseling, medical, legal, or financial advice, and it is not an emergency service. If you are in crisis, call or text 988 or call 911.</p>\n<h2>6. Termination</h2>\n<p>This license ends automatically if you break this Agreement or our Terms of Service, or when you delete your account and the App. When it ends, you must stop using the App.</p>\n<h2>7. No Warranty</h2>\n<p>The App is provided \"as is\" and \"as available,\" without warranties of any kind, to the fullest extent allowed by law.</p>\n<h2>8. Limitation of Liability</h2>\n<p>To the fullest extent allowed by law, Origin &amp; Co is not liable for indirect, incidental, special, or consequential damages arising from your use of the App.</p>\n<h2>9. Apple App Store Terms</h2>\n<p>If you downloaded the App from the Apple App Store:</p>\n<ul>\n<li>This Agreement is between you and Origin &amp; Co only, not Apple. Origin &amp; Co, not Apple, is responsible for the App and its content.</li>\n<li>Apple has no obligation to provide maintenance or support for the App.</li>\n<li>If the App fails to meet any applicable warranty, you may notify Apple, and Apple may refund the purchase price, if any. Apple has no other warranty obligation for the App.</li>\n<li>Apple is not responsible for any claims relating to the App, including product liability claims, claims that the App fails to meet legal or regulatory requirements, or consumer protection claims.</li>\n<li>Apple is not responsible for investigating or handling any claim that the App infringes someone else's intellectual property.</li>\n<li>You confirm that you are not located in a country subject to a U.S. government embargo or listed on any U.S. government list of prohibited or restricted parties.</li>\n<li>Apple and its subsidiaries are third-party beneficiaries of this Agreement and may enforce it against you.</li>\n</ul>\n<h2>10. Governing Law</h2>\n<p>This Agreement is governed by the laws of the State of Missouri.</p>\n<h2>11. Contact Us</h2>\n<p>Origin &amp; Co LLC<br>4239 Lindell Blvd<br>Saint Louis, MO 63108<br>Email: hello@cirloapp.com</p>"} />;
}

function AccessibilityStatement() {
  return <LegalPage title="Accessibility Statement" html={"<p class=\"dates\">Effective Date: October 8, 2026 \u00b7 Last Updated: October 8, 2026</p><p>Origin &amp; Co LLC is committed to making the Cirlo app and website (www.cirloapp.com) accessible to everyone.</p>\n<h2>Our Approach</h2>\n<p>We aim to follow the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA. This includes:</p>\n<ul>\n<li>clear headings and a logical reading order</li>\n<li>alternative text for images</li>\n<li>color combinations that meet contrast requirements</li>\n<li>support for screen readers and system text sizes</li>\n<li>limited use of motion</li>\n</ul>\n<h2>Third-Party Content</h2>\n<p>Some features, such as app store pages and forms, are provided by third parties. We cannot guarantee their accessibility, but we welcome your feedback.</p>\n<h2>Contact Us</h2>\n<p>If you have trouble using any part of Cirlo, email hello@cirloapp.com and we will work to help promptly.</p>"} />;
}
