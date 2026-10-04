import React from 'react';

const APP_STORE='https://apps.apple.com/us/app/cirlo/id6751201819';
const PLAY='https://play.google.com/store/apps/details?id=com.mycompany.cirlo';

export default function NewCirloLanding(){
  const download=()=>{const u=navigator.userAgent||''; location.href=/android/i.test(u)?PLAY:/iPhone|iPad|iPod/i.test(u)?APP_STORE:'/download'};
  return <div className="min-h-screen bg-[#f8f5f2] text-[#241b19]">
    <style>{`
      .display{font-family:Georgia,'Times New Roman',serif}
      .hairline{border-color:rgba(61,42,38,.14)}
      html{scroll-behavior:smooth}
    `}</style>

    <header className="sticky top-0 z-50 border-b hairline bg-[#f8f5f2]/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 lg:px-12">
        <a href="/" className="text-2xl font-semibold tracking-tight text-[#9e706e]"><span className="display mr-1 text-3xl">C.</span>Cirlo</a>
        <nav className="hidden gap-8 text-sm md:flex"><a href="#how">How it works</a><a href="#membership">Membership</a><a href="#cirlo">Become a Cirlo</a></nav>
        <button onClick={download} className="rounded-full bg-[#9e706e] px-5 py-2.5 text-sm font-semibold text-white">Get Cirlo</button>
      </div>
    </header>

    <main>
      <section className="flex min-h-[82vh] items-center px-6 py-20 lg:px-12">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="max-w-5xl">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[.18em] text-[#9e706e]">Woman to woman</p>
            <h1 className="text-6xl font-semibold leading-[.93] tracking-[-.055em] sm:text-7xl lg:text-[104px]">Every woman needs a woman <span className="display italic font-normal text-[#9e706e]">who's been there.</span></h1>
            <p className="mt-8 max-w-2xl text-xl leading-8 text-[#6e5c57] sm:text-2xl">Send a private voice note to a woman who's lived through the season you're in. Hear back in her own voice.</p>
            <div className="mt-9 flex flex-wrap gap-3"><button onClick={download} className="rounded-full bg-[#9e706e] px-7 py-4 font-semibold text-white">Find your Cirlo</button><a href="#cirlo" className="rounded-full border hairline bg-white px-7 py-4 font-semibold">Become a Cirlo</a></div>
          </div>
        </div>
      </section>

      <section className="bg-[#6d4d4c] px-6 py-24 text-white lg:px-12">
        <div className="mx-auto max-w-[1440px]"><p className="display max-w-5xl text-4xl leading-[1.08] sm:text-5xl lg:text-7xl">Some things you don't want to Google. You don't want to post them. And you may not want to ask your friends.</p><p className="mt-8 max-w-2xl text-xl leading-8 text-white/70">Sometimes you just want to talk to a woman who's been through it.</p></div>
      </section>

      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-2 lg:items-center">
          <div><p className="text-sm font-semibold uppercase tracking-[.18em] text-[#9e706e]">For real life</p><h2 className="mt-5 text-5xl font-semibold leading-[.98] tracking-[-.04em] sm:text-6xl">“My husband and I keep having the same fight.”</h2></div>
          <div className="max-w-xl"><p className="text-2xl leading-9 text-[#65534f]">You don't necessarily want therapy. You don't want your friends knowing your business. You just wish you could talk to a woman who's been married 25 years and has been through something similar.</p><p className="mt-6 text-xl font-semibold text-[#9e706e]">That's what Cirlo is for.</p></div>
        </div>
      </section>

      <section id="how" className="border-y hairline bg-white px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-[1440px]"><p className="text-sm font-semibold uppercase tracking-[.18em] text-[#9e706e]">How it works</p><h2 className="mt-5 text-5xl font-semibold tracking-[-.04em] sm:text-6xl">Say it. Choose what you need. Hear from her.</h2>
          <div className="mt-16 grid gap-10 md:grid-cols-3">{[
            ['01','Talk','Send a private voice note. Say it exactly how it comes out.'],
            ['02','Choose','Just listen. Tell me what you think. Help me solve it. What should I say?'],
            ['03','Hear back',"A woman who's lived it responds in her own voice."]
          ].map(([n,t,d])=><div key={n} className="border-t hairline pt-6"><div className="text-sm text-[#9e706e]">{n}</div><h3 className="mt-8 text-3xl font-semibold">{t}</h3><p className="mt-4 max-w-sm text-lg leading-7 text-[#6e5c57]">{d}</p></div>)}</div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-[1440px]"><div className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[.18em] text-[#9e706e]">Whatever the season</p><h2 className="mt-5 text-5xl font-semibold tracking-[-.04em] sm:text-6xl">Find someone who gets this part.</h2></div>
          <div className="mt-14 grid border-t hairline md:grid-cols-2">
            {[['Motherhood',"I don't like the mom I'm becoming lately."],['Marriage',"We love each other. We just can't get past this."],['Friendship',"I don't know whether to address it or let it go."],['Starting over',"Everyone else seems so far ahead."]].map(([t,q],i)=><div key={t} className={"py-10 md:p-10 "+(i%2===0?'md:border-r hairline':'')+" border-b hairline"}><p className="text-sm font-semibold uppercase tracking-wider text-[#9e706e]">{t}</p><p className="display mt-5 text-3xl leading-tight sm:text-4xl">“{q}”</p></div>)}
          </div>
        </div>
      </section>

      <section className="bg-[#e9dcd8] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-[1440px]"><h2 className="display max-w-5xl text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">Not every hard day needs an appointment. Sometimes you just need a woman who's been there.</h2><p className="mt-8 max-w-2xl text-xl leading-8 text-[#65534f]">Cirlo isn't therapy, coaching, or social media. It's a private place for everyday life conversations with experienced women who've lived through similar seasons.</p></div>
      </section>

      <section id="membership" className="px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-2 lg:items-end">
          <div><p className="text-sm font-semibold uppercase tracking-[.18em] text-[#9e706e]">Membership</p><h2 className="mt-5 text-5xl font-semibold tracking-[-.04em] sm:text-6xl">Your circle of women who've been there.</h2></div>
          <div className="lg:pl-16"><div className="text-6xl font-semibold">$24.99<span className="text-xl font-normal text-[#75635e]"> / month</span></div><p className="mt-3 text-lg text-[#75635e]">First week free. Cancel anytime.</p><div className="mt-7 space-y-2 text-lg"><p>4 private Wisdom Notes each month</p><p>Choose any Cirlo</p><p>Replies within 48 hours</p></div><button onClick={download} className="mt-8 rounded-full bg-[#9e706e] px-7 py-4 font-semibold text-white">Start free for 7 days</button></div>
        </div>
      </section>

      <section id="cirlo" className="bg-[#241b19] px-6 py-24 text-white lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-2">
          <div><p className="text-sm font-semibold uppercase tracking-[.18em] text-[#c89d99]">For the women who've lived it</p><h2 className="mt-5 text-6xl font-semibold leading-[.95] tracking-[-.04em] sm:text-7xl">You've lived it. <span className="display italic font-normal text-[#c89d99]">Share it.</span></h2></div>
          <div className="max-w-xl lg:pt-8"><p className="text-xl leading-8 text-white/70">Turn the seasons you've lived through into wisdom another woman can lean on. Respond in your own voice, on your own time, and earn for the wisdom you share.</p><a href="mailto:hello@cirloapp.com?subject=I%20want%20to%20become%20a%20Cirlo" className="mt-8 inline-block rounded-full bg-[#a97875] px-7 py-4 font-semibold">Become a Cirlo</a></div>
        </div>
      </section>

      <section className="px-6 py-28 text-center lg:px-12"><h2 className="mx-auto max-w-5xl text-5xl font-semibold leading-[.98] tracking-[-.04em] sm:text-7xl">You don't need all the answers.<br/><span className="display italic font-normal text-[#9e706e]">You need someone who's been there.</span></h2><button onClick={download} className="mt-10 rounded-full bg-[#9e706e] px-8 py-4 font-semibold text-white">Find your Cirlo</button></section>
    </main>

    <footer className="border-t hairline px-6 py-8 text-sm text-[#76635e] lg:px-12"><div className="mx-auto flex max-w-[1440px] flex-wrap justify-between gap-5"><div><span className="display text-xl text-[#9e706e]">C.</span> Cirlo</div><div className="flex gap-5"><a href="/privacy-policy">Privacy</a><a href="/terms-of-service">Terms</a><a href="/accessibility">Accessibility</a></div></div></footer>
  </div>
}