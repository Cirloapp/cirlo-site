import React from 'react';

const APP_STORE='https://apps.apple.com/us/app/cirlo/id6751201819';
const PLAY='https://play.google.com/store/apps/details?id=com.mycompany.cirlo';

export default function NewCirloLanding(){
  const download=()=>{const u=navigator.userAgent||'';location.href=/android/i.test(u)?PLAY:/iPhone|iPad|iPod/i.test(u)?APP_STORE:'/download'};
  const women=[
    {name:'Denise',season:'Marriage',proof:'Married 34 years · Raised 3',img:'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1800'},
    {name:'Renee',season:'Starting over',proof:'New city · New chapter at 52',img:'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1800'},
    {name:'Monica',season:'Motherhood',proof:'Three kids · Life · Identity',img:'https://images.pexels.com/photos/5905445/pexels-photo-5905445.jpeg?auto=compress&cs=tinysrgb&w=1800'}
  ];
  return <div className="bg-[#F3F5EC] text-[#242A20]">
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Libre+Caslon+Display&display=swap');
      html{scroll-behavior:smooth}body{margin:0;background:#F3F5EC;font-family:'DM Sans',sans-serif}.serif{font-family:'Libre Caslon Display',Georgia,serif}
      .hero{min-height:92vh}.eyebrow{font-size:11px;letter-spacing:.2em;text-transform:uppercase;font-weight:600}
      .h1{font-size:clamp(4rem,8vw,8.8rem);line-height:.88;letter-spacing:-.045em}.h2{font-size:clamp(3rem,5.2vw,6rem);line-height:.96;letter-spacing:-.035em}
      .cardimg{transition:transform .8s ease}.card:hover .cardimg{transform:scale(1.025)}
      @media(prefers-reduced-motion:reduce){.cardimg{transition:none}}
    `}</style>

    <header className="absolute inset-x-0 top-0 z-50 text-white">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-7 lg:px-10">
        <a href="/" className="text-[28px] font-semibold tracking-[-.06em]">Cirlo</a>
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
              <p className="max-w-xl text-lg leading-8 text-white/90">Real women who've lived the season you're in. Send a voice note. Hear back from someone who gets it.</p>
              <button onClick={download} className="w-fit bg-[#C8F135] px-8 py-4 text-sm font-semibold uppercase tracking-[.1em] text-[#242A20]">Find my Cirlo</button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F3F5EC] px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div><p className="eyebrow text-[#66705B]">The Cirlo difference</p><h2 className="h2 serif mt-5">Wisdom without the performance.</h2></div>
          <div className="max-w-2xl lg:justify-self-end"><p className="text-2xl leading-10">Some things are easier to ask someone outside your circle.</p><p className="mt-6 text-lg leading-8 text-[#7C876F]">Private voice notes with vetted women who've lived it—whatever season you're in.</p><a href="#how" className="mt-7 inline-block border-b border-[#66705B] pb-1 text-sm font-semibold uppercase tracking-[.1em]">How Cirlo works</a></div>
        </div>
      </section>

      <section id="cirlos" className="bg-white px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-[1500px]">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"><div><p className="eyebrow text-[#66705B]">Women to know</p><h2 className="h2 serif mt-5">Find someone who's been there.</h2></div><button onClick={download} className="w-fit border-b border-[#242A20] pb-1 text-sm font-semibold uppercase tracking-[.1em]">Explore Cirlos</button></div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {women.map(w=><article key={w.name} className="card group cursor-pointer"><div className="aspect-[4/5] overflow-hidden bg-[#E6EADD]"><img src={w.img} alt={w.name} className="cardimg h-full w-full object-cover"/></div><div className="flex items-start justify-between border-b border-[#CDD3C1] py-5"><div><div className="serif text-3xl">{w.name}</div><div className="mt-1 text-sm text-[#7C876F]">{w.proof}</div></div><div className="bg-[#C8F135] px-3 py-2 text-[10px] font-semibold uppercase tracking-[.12em]">{w.season}</div></div></article>)}
          </div>
        </div>
      </section>

      <section id="how" className="grid bg-[#66705B] text-white lg:grid-cols-2">
        <div className="min-h-[70vh] bg-[url('https://images.pexels.com/photos/9167154/pexels-photo-9167154.jpeg?auto=compress&cs=tinysrgb&w=1800')] bg-cover bg-center"/>
        <div className="flex items-center px-7 py-20 lg:px-16"><div className="max-w-xl"><p className="eyebrow text-[#C8F135]">How it works</p><h2 className="h2 serif mt-5">Ask in your own voice.</h2><p className="mt-7 text-lg leading-8 text-white/80">Say what's happening without turning it into a polished post. Before you send, tell her what you need from the conversation.</p><div className="mt-10 border-t border-white/30">{['Just listen','Tell me what you think','Help me solve it','What should I say?'].map((x,i)=><div key={x} className="flex items-center justify-between border-b border-white/30 py-5 text-xl"><span>{x}</span><span className={i===2?'h-3 w-3 bg-[#C8F135]':'text-[#C8F135]'}>{i===2?'':'→'}</span></div>)}</div></div></div>
      </section>

      <section className="bg-[#F3F5EC] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-[1500px] text-center"><p className="eyebrow text-[#66705B]">What you get</p><h2 className="h2 serif mx-auto mt-5 max-w-4xl">A real voice on the other side.</h2><div className="mx-auto mt-12 grid max-w-5xl border-y border-[#CDD3C1] md:grid-cols-3"><div className="p-8 md:border-r md:border-[#CDD3C1]"><div className="serif text-5xl">01</div><p className="mt-4">Choose a woman by the life she's lived.</p></div><div className="p-8 md:border-r md:border-[#CDD3C1]"><div className="serif text-5xl">02</div><p className="mt-4">Send a private voice note and choose what you need.</p></div><div className="p-8"><div className="serif text-5xl">03</div><p className="mt-4">Hear her perspective back in her own voice.</p></div></div></div>
      </section>

      <section className="relative min-h-[72vh] overflow-hidden text-white">
        <img src="https://images.pexels.com/photos/7610403/pexels-photo-7610403.jpeg?auto=compress&cs=tinysrgb&w=2200" alt="" className="absolute inset-0 h-full w-full object-cover"/>
        <div className="absolute inset-0 bg-[#242A20]/55"/>
        <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-[1500px] items-end px-6 py-16 lg:px-10"><div className="max-w-3xl"><p className="eyebrow text-[#C8F135]">Perspective, not perfection</p><blockquote className="serif mt-6 text-4xl leading-tight md:text-6xl">“Sometimes you don't need another search result. You need a woman who can say, ‘I've been there.’”</blockquote></div></div>
      </section>

      <section id="membership" className="bg-white px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-16 lg:grid-cols-[1fr_.85fr]">
          <div><p className="eyebrow text-[#66705B]">Cirlo membership</p><h2 className="h2 serif mt-5">A woman to ask. Whatever the season.</h2><p className="mt-7 max-w-xl text-lg leading-8 text-[#7C876F]">Your membership gives you ongoing access to the Cirlo network—for perspective, celebration, curiosity, decisions, transitions, and the moments you simply want to talk through with someone who's been there.</p></div>
          <div className="border border-[#CDD3C1] p-8 lg:p-10"><div className="flex items-start justify-between gap-5"><div><div className="serif text-6xl">$24.99</div><p className="mt-1 text-sm text-[#7C876F]">per month · cancel anytime</p></div><span className="bg-[#C8F135] px-3 py-2 text-[10px] font-semibold uppercase tracking-[.12em]">7 days free</span></div><div className="mt-8 border-t border-[#CDD3C1]">{[['Wisdom Notes each month','6'],['Talk to','Any Cirlo'],['Ask the Circle','Included'],['Replies','Within 48 hrs'],['Unused notes','Roll over 60 days']].map(([a,b])=><div key={a} className="flex justify-between border-b border-[#CDD3C1] py-4"><span>{a}</span><b>{b}</b></div>)}</div><button onClick={download} className="mt-8 w-full bg-[#66705B] px-7 py-4 text-sm font-semibold uppercase tracking-[.1em] text-white">Start my free week</button></div>
        </div>
      </section>

      <section id="become" className="grid bg-[#242A20] text-white lg:grid-cols-2">
        <div className="flex items-center px-7 py-24 lg:px-16"><div className="max-w-xl"><p className="eyebrow text-[#C8F135]">Become a Cirlo</p><h2 className="h2 serif mt-5">You've lived a life worth sharing.</h2><p className="mt-7 text-lg leading-8 text-white/75">Your lived experience can be exactly what another woman needs to hear. Respond in your own voice. Earn for the wisdom you share.</p><a href="mailto:hello@cirloapp.com?subject=I%20want%20to%20become%20a%20Cirlo" className="mt-8 inline-block bg-[#C8F135] px-7 py-4 text-sm font-semibold uppercase tracking-[.1em] text-[#242A20]">Become a Cirlo</a></div></div>
        <div className="min-h-[70vh] bg-[url('https://images.pexels.com/photos/7020845/pexels-photo-7020845.jpeg?auto=compress&cs=tinysrgb&w=1800')] bg-cover bg-center"/>
      </section>
    </main>

    <footer className="bg-[#F3F5EC] px-6 py-12 lg:px-10"><div className="mx-auto flex max-w-[1500px] flex-col gap-8 border-t border-[#CDD3C1] pt-10 md:flex-row md:items-end md:justify-between"><div><div className="text-3xl font-semibold tracking-[-.06em]">Cirlo</div><p className="mt-3 text-sm text-[#7C876F]">Different lives. Shared wisdom.</p></div><div className="flex flex-wrap gap-6 text-sm"><a href="/privacy-policy">Privacy</a><a href="/terms-of-service">Terms</a><a href="/accessibility">Accessibility</a><span>hello@cirloapp.com</span></div></div></footer>
  </div>
}