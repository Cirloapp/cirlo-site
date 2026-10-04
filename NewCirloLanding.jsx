import React from 'react';

const APP_STORE='https://apps.apple.com/us/app/cirlo/id6751201819';
const PLAY='https://play.google.com/store/apps/details?id=com.mycompany.cirlo';

export default function NewCirloLanding(){
  const download=()=>{const u=navigator.userAgent||''; location.href=/android/i.test(u)?PLAY:/iPhone|iPad|iPod/i.test(u)?APP_STORE:'/download'};
  return <div className="bg-[#fffdfb] text-[#352729] antialiased">
    <style>{`
      html{scroll-behavior:smooth} body{margin:0;background:#fffdfb}
      .serif{font-family:Georgia,'Times New Roman',serif}
      .hero-title{font-size:clamp(4.2rem,9.2vw,9.2rem);line-height:.86;letter-spacing:-.07em}
      .section-title{font-size:clamp(3.3rem,7vw,7.4rem);line-height:.9;letter-spacing:-.06em}
      .fade{animation:rise .8s ease both}@keyframes rise{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
    `}</style>

    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-6 lg:px-10">
        <a href="/" className="text-xl font-bold tracking-[-.04em]">cirlo<span className="text-[#a87370]">.</span></a>
        <div className="flex items-center gap-3">
          <a href="#cirlo" className="hidden rounded-full bg-white/80 px-5 py-3 text-sm font-semibold backdrop-blur md:block">Become a Cirlo</a>
          <button onClick={download} className="rounded-full bg-[#a87370] px-5 py-3 text-sm font-semibold text-white">Get the app</button>
        </div>
      </div>
    </header>

    <main>
      <section className="relative flex min-h-screen items-end overflow-hidden px-6 pb-12 pt-32 lg:px-10 lg:pb-16">
        <div className="absolute right-[-12vw] top-[8vh] h-[54vw] w-[54vw] max-h-[780px] max-w-[780px] rounded-full bg-[#b8d4e8] blur-[1px]"/>
        <div className="absolute right-[12vw] top-[22vh] h-[30vw] w-[30vw] max-h-[430px] max-w-[430px] rounded-full bg-[#b7c83f] opacity-95"/>
        <div className="relative z-10 mx-auto w-full max-w-[1600px]">
          <div className="fade max-w-[1250px]">
            <p className="mb-7 text-xs font-bold uppercase tracking-[.22em]">Private voice-note wisdom</p>
            <h1 className="hero-title font-semibold">A woman<br/>who's <span className="serif italic font-normal text-[#a87370]">been there.</span></h1>
            <div className="mt-9 flex max-w-3xl flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-xl text-xl leading-8 text-[#65585a] sm:text-2xl">Say what's going on. Hear back from a woman who's lived through something similar.</p>
              <button onClick={download} className="shrink-0 rounded-full bg-[#a87370] px-7 py-4 font-semibold text-white">Find your Cirlo →</button>
            </div>
          </div>
        </div>
      </section>

      <section className="flex min-h-screen items-center bg-[#edf5fb] px-6 py-24 text-[#302321] lg:px-10">
        <div className="mx-auto w-full max-w-[1600px]">
          <p className="mb-8 text-xs font-bold uppercase tracking-[.22em] text-[#a87370]">Why Cirlo</p>
          <h2 className="section-title max-w-[1350px] font-semibold">Some things you don't want to <span className="text-[#a87370]">Google.</span></h2>
          <p className="mt-10 max-w-2xl text-xl leading-8 text-[#65585a] sm:text-2xl">Sometimes you want perspective. Sometimes an idea. Sometimes reassurance. Sometimes you just want to hear from a woman a few chapters ahead.</p>
        </div>
      </section>

      <section className="min-h-screen px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid min-h-[75vh] gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
            <div>
              <p className="mb-7 text-xs font-bold uppercase tracking-[.22em] text-[#a87370]">Marriage</p>
              <h2 className="section-title font-semibold">“We keep having the <span className="serif italic font-normal text-[#a87370]">same fight.</span>”</h2>
            </div>
            <div className="max-w-xl lg:justify-self-end">
              <p className="text-2xl leading-9 text-[#65585a]">Maybe you want perspective from someone outside the situation—someone with years you haven't lived yet.</p>
              <p className="mt-7 text-2xl leading-9">You want to ask a woman who's been married 25 years what she's learned, what mattered, and what she wishes she'd known sooner.</p>
              <p className="mt-8 font-semibold text-[#a87370]">Hard moment or happy one. That's Cirlo.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="relative overflow-hidden bg-[#f4efed] px-6 py-24 text-[#352729] lg:px-10">
        <div className="absolute right-[7%] top-16 h-5 w-5 rounded-full bg-[#b8c83f]"/><div className="mx-auto max-w-[1600px]">\n          <p className="mb-8 text-xs font-bold uppercase tracking-[.22em]">How it works <span className="ml-2 inline-block h-2 w-2 rounded-full bg-[#b8c83f] align-middle"/></p>
          <h2 className="section-title max-w-6xl font-semibold">Talk.<br/>Choose.<br/><span className="serif italic font-normal">Hear back.</span></h2>
          <div className="mt-20 grid gap-px bg-[#d8d1cc] md:grid-cols-3">
            {[['01','Talk','Send a private voice note.'],['02','Choose','Just listen. Tell me what you think. Help me solve it. What should I say?'],['03','Hear back',"A woman who's lived it responds in her own voice."]].map(([n,t,d])=><div key={n} className="bg-[#f4efed] py-8 md:px-8"><div className="text-xs font-bold">{n}</div><div className="mt-16 text-4xl font-semibold">{t}</div><p className="mt-4 max-w-sm text-lg leading-7 text-[#65585a]">{d}</p></div>)}
          </div>
        </div>
      </section>

      <section className="px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-[1600px]">
          <p className="mb-8 text-xs font-bold uppercase tracking-[.22em] text-[#a87370]">Whatever the season <span className="ml-2 text-[#a5b52f]">✦</span></p>
          <div className="grid gap-10 lg:grid-cols-[1fr_220px] lg:items-end"><h2 className="section-title max-w-6xl font-semibold">Find someone who gets <span className="serif italic font-normal text-[#a87370]">this part.</span></h2><div className="hidden lg:block"><div className="ml-auto h-28 w-28 rounded-full bg-[#b8d4e8]"/><div className="-mt-8 ml-5 h-10 w-10 rounded-full bg-[#b8c83f]"/></div></div>
          <div className="mt-20 border-t border-[#d8d1cc]">
            {[['Motherhood',"What family traditions are your kids still talking about?"],['Marriage',"What helped you keep liking each other through the busy years?"],['Life',"What do you wish you knew at my age?"],['Next chapter',"How did you know it was time to make the change?"]].map(([t,q])=><div key={t} className="grid gap-4 border-b border-[#d8d1cc] py-7 md:grid-cols-[220px_1fr] md:items-center"><span className="text-xs font-bold uppercase tracking-[.18em] text-[#827276]">{t}</span><span className="text-2xl font-medium tracking-[-.02em] sm:text-3xl">{q}</span></div>)}
          </div>
        </div>
      </section>

      <section className="flex min-h-[75vh] items-center bg-[#a87370] px-6 py-24 text-white lg:px-10">
        <div className="mx-auto w-full max-w-[1600px]">
          <h2 className="section-title max-w-[1350px] font-semibold">For the questions, choices, joys and messy middle.</h2>
          <p className="mt-10 max-w-3xl text-2xl leading-9 text-white/75">Real life is bigger than the hard moments. So is Cirlo.</p>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#65585a]">Marriage. Motherhood. Friendship. Work. Family. Faith. Starting over. Growing into yourself. Ask what you're wondering and hear from someone who's lived a little further into the story.</p>
        </div>
      </section>

      <section id="membership" className="px-6 py-28 lg:px-10">
        <div className="mx-auto grid max-w-[1600px] gap-16 lg:grid-cols-2 lg:items-end">
          <div><p className="mb-8 text-xs font-bold uppercase tracking-[.22em] text-[#a87370]">Membership</p><h2 className="section-title font-semibold">Your circle.<br/><span className="serif italic font-normal text-[#a87370]">On call.</span></h2></div>
          <div className="lg:pb-2"><div className="flex items-start gap-4"><div className="text-7xl font-semibold tracking-[-.06em]">$24.99</div><span className="mt-2 rounded-full bg-[#b8c83f] px-3 py-1 text-xs font-bold text-[#4f541f]">7 DAYS FREE</span></div><p className="mt-2 text-xl text-[#827276]">per month · first week free</p><div className="mt-8 space-y-2 text-lg"><p>4 private Wisdom Notes</p><p>Any Cirlo</p><p>Replies within 48 hours</p></div><button onClick={download} className="mt-9 rounded-full bg-[#a87370] px-7 py-4 font-semibold text-white">Start free →</button></div>
        </div>
      </section>

      <section id="cirlo" className="flex min-h-[80vh] items-center bg-[#edf5fb] px-6 py-24 text-[#302321] lg:px-10">
        <div className="mx-auto grid w-full max-w-[1600px] gap-14 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <div><p className="mb-8 text-xs font-bold uppercase tracking-[.22em] text-[#a87370]">Become a Cirlo</p><h2 className="section-title font-semibold">You've lived it.<br/><span className="serif italic font-normal text-[#a87370]">Share it.</span></h2></div>
          <div className="max-w-xl"><p className="text-xl leading-8 text-[#65585a]">Your lived experience can be exactly what another woman needs to hear. Respond in your own voice. Earn for the wisdom you share.</p><a href="mailto:hello@cirloapp.com?subject=I%20want%20to%20become%20a%20Cirlo" className="mt-9 inline-block rounded-full bg-[#a87370] px-7 py-4 font-semibold text-white">Become a Cirlo →</a></div>
        </div>
      </section>

      <section className="flex min-h-[70vh] items-center px-6 py-24 text-center lg:px-10"><div className="mx-auto max-w-[1300px]"><h2 className="section-title font-semibold">Someone's been there.</h2><button onClick={download} className="mt-10 rounded-full bg-[#a87370] px-8 py-4 font-semibold text-white">Find her →</button></div></section>
    </main>

    <footer className="border-t border-[#e9e1dc] px-6 py-8 text-xs lg:px-10"><div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-5"><b>cirlo.</b><div className="flex gap-6 text-[#7d6e70]"><a href="/privacy-policy">Privacy</a><a href="/terms-of-service">Terms</a><a href="/accessibility">Accessibility</a></div></div></footer>
  </div>
}