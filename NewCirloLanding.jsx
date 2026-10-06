import React from 'react';

const APP_STORE='https://apps.apple.com/us/app/cirlo/id6751201819';
const PLAY='https://play.google.com/store/apps/details?id=com.mycompany.cirlo';

export default function NewCirloLanding(){
  const download=()=>{const u=navigator.userAgent||'';location.href=/android/i.test(u)?PLAY:/iPhone|iPad|iPod/i.test(u)?APP_STORE:'/download'};
  const women=[
    {name:'Denise',season:'Marriage',proof:'34 YEARS MARRIED · 3 KIDS RAISED',img:'https://images.pexels.com/photos/733500/pexels-photo-733500.jpeg?auto=compress&cs=tinysrgb&w=1800'},
    {name:'Renee',season:'Starting over',proof:'STARTED OVER AT 52 · NEW CITY · NEW CHAPTER',img:'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1800'},
    {name:'Monica',season:'Motherhood',proof:'3 KIDS · 2 CAREERS · ZERO THEORY',img:'https://images.pexels.com/photos/1749799/pexels-photo-1749799.jpeg?auto=compress&cs=tinysrgb&w=1800'}
  ];
  return <div className="bg-[#F3F5EC] text-[#242A20]">
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Libre+Caslon+Display&display=swap');
      html{scroll-behavior:smooth}body{margin:0;background:#F3F5EC;font-family:'DM Sans',sans-serif}.serif{font-family:'Libre Caslon Display',Georgia,serif}
      .hero{min-height:92vh}.eyebrow{font-size:11px;letter-spacing:.2em;text-transform:uppercase;font-weight:600}
      .h1{font-size:clamp(4rem,8.7vw,9.6rem);line-height:.82;letter-spacing:-.055em;}.h2{font-size:clamp(3rem,5.5vw,6.4rem);line-height:.9;letter-spacing:-.045em;}
      .cardimg{transition:transform .8s ease}.card:hover .cardimg{transform:scale(1.025)}
      @media(prefers-reduced-motion:reduce){.cardimg{transition:none}}
    `}</style>

    <header className="absolute inset-x-0 top-0 z-50 text-white">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-7 lg:px-10">
        <a href="/" aria-label="Cirlo home"><img src="/cirlo-logo-lime.svg" alt="Cirlo" className="h-10 w-auto"/></a>
        <nav className="hidden items-center gap-9 text-[12px] font-medium md:flex">
          <a href="#cirlos">Find a Cirlo</a><a href="#how">How it works</a><a href="#membership">Membership</a><a href="#become">Become a Cirlo</a>
        </nav>
        <button onClick={download} className="border border-white/70 px-5 py-3 text-[12px] font-semibold uppercase tracking-[.12em]">Get started</button>
      </div>
    </header>

    <main>
      <section className="hero relative flex items-end overflow-hidden bg-[#66705B] text-white">
        <div className="absolute -right-[10vw] -top-[12vw] h-[48vw] w-[48vw] rounded-full border border-[#C8F135]/35"/>
        <div className="absolute right-[8vw] top-[18vh] h-3 w-3 bg-[#C8F135]"/>
        <div className="absolute bottom-[12vh] right-[14vw] text-[22vw] font-semibold leading-none text-white/[.035]">C</div>
        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 pb-14 pt-36 lg:px-10 lg:pb-20">
          <div className="max-w-[1050px]">
            <p className="eyebrow text-[#C8F135]">Real women · Lived wisdom · Private voice notes</p>
            <h1 className="h1 serif mt-6">Every woman needs a woman who's been there.</h1>
            <div className="mt-10 flex flex-col gap-7 border-t border-white/40 pt-7 md:flex-row md:items-center md:justify-between">
              <p className="max-w-xl text-lg leading-8 text-white/90">Life has questions. Somebody's lived the answer.</p>
              <button onClick={download} className="w-fit bg-[#C8F135] px-8 py-4 text-sm font-semibold uppercase tracking-[.1em] text-[#242A20]">FIND HER ↗</button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F3F5EC] px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div><p className="eyebrow text-[#66705B]">The Cirlo difference</p><h2 className="h2 serif mt-5">Why figure everything out from scratch?</h2></div>
          <div className="max-w-2xl lg:justify-self-end"><p className="text-2xl leading-10">Ask someone who's already done the thing.</p><p className="mt-6 text-lg leading-8 text-[#7C876F]">Real women. Real experience. Useful for the big stuff, small stuff, and oddly specific stuff.</p><a href="#how" className="mt-7 inline-block border-b border-[#66705B] pb-1 text-sm font-semibold uppercase tracking-[.1em]">How Cirlo works</a></div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#C8F135] py-4 text-[#242A20]">
        <div className="whitespace-nowrap text-center text-sm font-bold uppercase tracking-[.18em]">FIRST BABY? ASK HER &nbsp; • &nbsp; NEW BOSS? ASK HER &nbsp; • &nbsp; MOVING CITIES? ASK HER &nbsp; • &nbsp; THINKING ABOUT BANGS? DEFINITELY ASK HER</div>
      </section>

      <section id="cirlos" className="bg-white px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-[1500px]">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"><div><p className="eyebrow text-[#66705B]">There’s a woman for that.</p><h2 className="h2 serif mt-5">There’s a woman for that.</h2></div><button onClick={download} className="w-fit border-b border-[#242A20] pb-1 text-sm font-semibold uppercase tracking-[.1em]">ASK HER ↗</button></div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {women.map(w=><article key={w.name} className="card group cursor-pointer"><div className="aspect-[3/2] overflow-hidden bg-[#E6EADD]"><img src={w.img} alt={w.name} className="cardimg h-full w-full object-cover grayscale contrast-125"/></div><div className="flex items-start justify-between border-b border-[#CDD3C1] py-5"><div><div className="serif text-3xl">{w.name}</div><div className="mt-1 text-sm text-[#7C876F]">{w.proof}</div></div><div className="bg-[#C8F135] px-3 py-2 text-[10px] font-semibold uppercase tracking-[.12em]">{w.season}</div></div></article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#242A20] px-6 py-24 text-white lg:px-10">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]">
            <div><p className="eyebrow text-[#C8F135]">Today / 001</p><p className="mt-5 max-w-xs text-sm leading-6 text-white/55">One question a day. Because you have other things to do.</p></div>
            <div><h2 className="h2 serif">What's something you started later than everyone else?</h2>
              <div className="mt-12 border-t border-white/25">
                {[['DENISE, 61','0:47'],['MONICA, 43','1:12'],['RENEE, 52','0:39']].map(([n,t],i)=><div key={n} className="grid grid-cols-[1fr_auto] items-center border-b border-white/25 py-5 md:grid-cols-[180px_1fr_auto]"><b className="text-sm tracking-[.08em]">{n}</b><div className="hidden items-center gap-1 md:flex">{[18,34,22,48,28,39,17,44,25,33,20,40].map((h,j)=><span key={j} className="w-[3px] bg-[#C8F135]" style={{height:(h*(.65+i*.08))+'px'}}/>)}</div><span className="text-sm text-white/55">{t} &nbsp; ▶</span></div>)}
              </div>
              <button onClick={download} className="mt-8 bg-[#C8F135] px-7 py-4 text-xs font-bold uppercase tracking-[.14em] text-[#242A20]">BE NOSY ↗</button>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="grid bg-[#66705B] text-white lg:grid-cols-2">
        <div className="min-h-[70vh] bg-[url('https://images.pexels.com/photos/9167154/pexels-photo-9167154.jpeg?auto=compress&cs=tinysrgb&w=1800')] bg-cover bg-center"/>
        <div className="flex items-center px-7 py-20 lg:px-16"><div className="max-w-xl"><p className="eyebrow text-[#C8F135]">How it works</p><h2 className="h2 serif mt-5">Ask the thing you can't exactly Google.</h2><p className="mt-7 text-lg leading-8 text-white/80">Career move. First baby. Solo trip. Bangs. Just ask.</p><div className="mt-10 border-t border-white/30">{['Just listen','Tell me what you think','Help me solve it','What should I say?'].map((x,i)=><div key={x} className="flex items-center justify-between border-b border-white/30 py-5 text-xl"><span>{x}</span><span className={i===2?'h-3 w-3 bg-[#C8F135]':'text-[#C8F135]'}>{i===2?'':'→'}</span></div>)}</div></div></div>
      </section>

      <section className="bg-[#F3F5EC] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-[1500px] text-center"><p className="eyebrow text-[#66705B]">What you get</p><h2 className="h2 serif mx-auto mt-5 max-w-4xl">Someone has already done this.</h2><div className="mx-auto mt-12 grid max-w-5xl border-y border-[#CDD3C1] md:grid-cols-3"><div className="p-8 md:border-r md:border-[#CDD3C1]"><div className="serif text-5xl">01</div><p className="mt-4">Choose a woman by the life she's lived.</p></div><div className="p-8 md:border-r md:border-[#CDD3C1]"><div className="serif text-5xl">02</div><p className="mt-4">Send a private voice note and choose what you need.</p></div><div className="p-8"><div className="serif text-5xl">03</div><p className="mt-4">Hear her perspective back in her own voice.</p></div></div></div>
      </section>

      <section className="relative overflow-hidden bg-[#7C876F] px-6 py-24 text-[#242A20] lg:px-10">
        <div className="absolute -right-24 -top-32 text-[32rem] font-semibold leading-none text-[#C8F135]/10">C</div>
        <div className="relative mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[.45fr_1fr]"><p className="eyebrow pt-3">No theory</p><blockquote className="serif text-5xl leading-[1.02] md:text-7xl">You could research it for three hours. Or ask someone who's done it.</blockquote></div>
      </section>

      <section id="membership" className="bg-white px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-16 lg:grid-cols-[1fr_.85fr]">
          <div><p className="eyebrow text-[#66705B]">Cirlo membership</p><h2 className="h2 serif mt-5">Three women. Three conversations. </h2><p className="mt-7 max-w-xl text-lg leading-8 text-[#7C876F]">Three private Connections a month. Unlimited Daily listening. No meter running while you talk.</p></div>
          <div className="border border-[#CDD3C1] p-8 lg:p-10"><div className="flex items-start justify-between gap-5"><div><div className="serif text-6xl">$24.99</div><p className="mt-1 text-sm text-[#7C876F]">per month · cancel anytime</p></div><span className="bg-[#C8F135] px-3 py-2 text-[10px] font-semibold uppercase tracking-[.12em]">7 days free</span></div><div className="mt-8 border-t border-[#CDD3C1]">{[['Private Connections','3 / month'],['Each Connection','Private conversation'],['Daily listening','Unlimited'],['Talk to','Any available Cirlo'],['Unused Connections','Roll over 60 days']].map(([a,b])=><div key={a} className="flex justify-between border-b border-[#CDD3C1] py-4"><span>{a}</span><b>{b}</b></div>)}</div><button onClick={download} className="mt-8 w-full bg-[#66705B] px-7 py-4 text-sm font-semibold uppercase tracking-[.1em] text-white">Start my free week</button></div>
        </div>
      </section>

      <section id="become" className="grid bg-[#242A20] text-white lg:grid-cols-2">
        <div className="flex items-center px-7 py-24 lg:px-16"><div className="max-w-xl"><p className="eyebrow text-[#C8F135]">Become a Cirlo</p><h2 className="h2 serif mt-5">Been there? Be a Cirlo.</h2><p className="mt-7 text-lg leading-8 text-white/75">Share what you know. Get paid for it.</p><a href="mailto:hello@cirloapp.com?subject=I%20want%20to%20become%20a%20Cirlo" className="mt-8 inline-block bg-[#C8F135] px-7 py-4 text-sm font-semibold uppercase tracking-[.1em] text-[#242A20]">Become a Cirlo</a></div></div>
        <div className="min-h-[70vh] bg-[url('https://images.pexels.com/photos/7020845/pexels-photo-7020845.jpeg?auto=compress&cs=tinysrgb&w=1800')] bg-cover bg-center"/>
      </section>
    </main>

    <footer className="bg-[#F3F5EC] px-6 py-12 lg:px-10"><div className="mx-auto flex max-w-[1500px] flex-col gap-8 border-t border-[#CDD3C1] pt-10 md:flex-row md:items-end md:justify-between"><div><img src="/cirlo-logo-lime.svg" alt="Cirlo" className="h-12 w-auto"/><p className="mt-3 text-sm text-[#7C876F]">There’s a woman for that.</p></div><div className="flex flex-wrap gap-6 text-sm"><a href="/privacy-policy">Privacy</a><a href="/terms-of-service">Terms</a><a href="/accessibility">Accessibility</a><span>hello@cirloapp.com</span></div></div></footer>
  </div>
}