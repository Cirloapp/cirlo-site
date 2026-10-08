import React from 'react';

const APP_STORE='https://apps.apple.com/us/app/cirlo/id6751201819';
const PLAY='https://play.google.com/store/apps/details?id=com.mycompany.cirlo';

export default function NewCirloLanding(){
 const download=()=>{const u=navigator.userAgent||'';location.href=/android/i.test(u)?PLAY:/iPhone|iPad|iPod/i.test(u)?APP_STORE:'/download'};
 const answers=[
  {name:'Denise',age:'61',time:'0:47',img:'https://images.pexels.com/photos/1707820/pexels-photo-1707820.jpeg?auto=compress&cs=tinysrgb&w=1200'},
  {name:'Monica',age:'43',time:'1:12',img:'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200'},
  {name:'Renee',age:'52',time:'0:39',img:'https://images.pexels.com/photos/5905445/pexels-photo-5905445.jpeg?auto=compress&cs=tinysrgb&w=1200'}
 ];
 return <div className="min-h-screen bg-[#F3F5EC] text-[#242A20]">
  <style>{`
   @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Libre+Caslon+Display&display=swap');
   *{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:#F3F5EC;font-family:'DM Sans',sans-serif}.serif{font-family:'Libre Caslon Display',Georgia,serif}.eyebrow{font-size:11px;letter-spacing:.2em;text-transform:uppercase;font-weight:600}.rule{border-color:#CDD3C1}.wave span{display:block;width:2px;background:#242A20}.portrait{filter:grayscale(1) contrast(1.12)}
  `}</style>

  <header className="border-b rule">
   <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 lg:px-10">
    <a href="/" aria-label="Cirlo home"><img src="/cirlo-logo-lime.svg" alt="Cirlo" className="h-10 w-auto"/></a>
    <nav className="hidden items-center gap-9 text-xs md:flex"><a href="#how">How it works</a><a href="#cirlos">Meet the Cirlos</a><a href="#membership">Membership</a></nav>
    <button onClick={download} className="rounded-full bg-[#C8F135] px-6 py-3 text-xs font-bold uppercase tracking-[.1em]">Join waitlist</button>
   </div>
  </header>

  <main>
   <section className="mx-auto grid max-w-[1440px] gap-10 px-6 py-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-10 lg:py-20">
    <div className="max-w-[620px]">
     <p className="eyebrow text-[#66705B]">Real women. Real experience.</p>
     <h1 className="serif mt-5 text-[clamp(3.8rem,6.5vw,7.2rem)] leading-[.9] tracking-[-.045em]">Every woman needs a woman who's been there.</h1>
     <p className="mt-7 text-sm font-semibold uppercase tracking-[.24em]">There's a woman for that.</p>
     <button onClick={download} className="mt-8 rounded-full bg-[#C8F135] px-8 py-4 text-sm font-bold uppercase tracking-[.12em]">Find her &nbsp; →</button>
    </div>
    <div className="relative overflow-hidden bg-[#242A20] text-white">
     <img src="https://images.pexels.com/photos/1707820/pexels-photo-1707820.jpeg?auto=compress&cs=tinysrgb&w=1800" alt="Denise" className="portrait h-[560px] w-full object-cover object-center opacity-90"/>
     <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"/>
     <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">
      <div className="serif text-3xl">Denise, 61</div>
      <div className="mt-2 text-xs uppercase leading-5 tracking-[.14em] text-white/75">34 years married · 3 kids raised · Built a business</div>
      <div className="mt-6 flex items-center gap-4"><button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C8F135] text-lg text-[#242A20]">▶</button><div className="wave flex h-9 items-center gap-[3px]">{[12,22,16,30,19,27,13,32,18,24,14,28,20].map((h,i)=><span key={i} style={{height:h}} className="!bg-white"/>)}</div><span className="text-xs">0:48</span></div>
     </div>
    </div>
   </section>

   <section className="border-y rule bg-[#F8F9F3]">
    <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-16 lg:grid-cols-[.72fr_1.28fr] lg:px-10">
     <div><p className="eyebrow text-[#66705B]">Today we asked</p><h2 className="serif mt-5 text-5xl leading-[.98] tracking-[-.035em] md:text-6xl">What's something women don't realize until they're older?</h2><button onClick={download} className="mt-8 rounded-full border border-[#242A20] px-7 py-3 text-xs font-bold uppercase tracking-[.12em]">Be nosy &nbsp; →</button></div>
     <div className="grid gap-5 sm:grid-cols-3">{answers.map(a=><article key={a.name}><img src={a.img} alt={a.name} className="portrait aspect-[4/3] w-full object-cover"/><div className="serif mt-3 text-xl">{a.name}, {a.age}</div><div className="mt-2 flex items-center gap-3"><button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C8F135] text-[11px]">▶</button><div className="wave flex h-6 items-center gap-[2px]">{[8,14,10,19,12,17,9,20,11,15].map((h,i)=><span key={i} style={{height:h}}/>)}</div><span className="ml-auto text-xs">{a.time}</span></div></article>)}</div>
    </div>
   </section>

   <section id="how" className="mx-auto grid max-w-[1440px] gap-14 px-6 py-20 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:px-10">
    <div className="relative mx-auto w-full max-w-[430px] rotate-[-4deg] overflow-hidden rounded-[48px] border-[10px] border-[#242A20] bg-[#242A20] shadow-2xl">
     <div className="relative min-h-[650px] overflow-hidden bg-[#242A20] text-white">
      <img src="https://images.pexels.com/photos/733500/pexels-photo-733500.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" className="portrait absolute inset-0 h-full w-full object-cover opacity-55"/>
      <div className="absolute inset-0 bg-gradient-to-t from-[#242A20] via-transparent to-[#242A20]/40"/>
      <div className="relative p-7"><div className="text-lg font-semibold tracking-[.3em] text-[#C8F135]">CIRLO</div><div className="serif mt-20 text-5xl leading-[.95]">Real questions.<br/>Real women.</div><div className="mt-10 space-y-2 text-xs uppercase tracking-[.16em]"><div>Marriage</div><div>Motherhood</div><div>Career moves</div><div>Money</div><div>Style</div><div>And more</div></div></div>
     </div>
    </div>
    <div className="max-w-xl"><p className="eyebrow text-[#66705B]">The Cirlo app</p><h2 className="serif mt-5 text-6xl leading-[.95] tracking-[-.04em] md:text-7xl">There's a woman for that.</h2><div className="mt-8 border-l border-[#CDD3C1] pl-7 text-lg leading-9"><p>Listen to real experiences.</p><p>Find women who've lived it.</p><p>Ask your own questions.</p><p>Hear back in their voice.</p></div><button onClick={download} className="mt-9 rounded-full bg-[#C8F135] px-8 py-4 text-sm font-bold uppercase tracking-[.12em]">Join waitlist &nbsp; →</button></div>
   </section>

   <section id="membership" className="border-y rule bg-[#E6EADD]">
    <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-16 lg:grid-cols-[.7fr_1.3fr] lg:px-10">
     <div><p className="eyebrow text-[#66705B]">Membership</p><h2 className="serif mt-5 text-5xl leading-none">Real access.<br/>Real women.</h2><p className="mt-5">7 days free. $24.99/month.</p></div>
     <div className="grid gap-3 self-center text-base">{['3 private Cirlo Connections per month','Unlimited Daily listening','Access to all available Cirlos','Saved responses','Unused Connections roll over for 60 days'].map(x=><div key={x} className="flex items-center gap-4 border-b rule py-3"><span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#66705B] text-xs">✓</span>{x}</div>)}<button onClick={download} className="mt-5 w-fit rounded-full bg-[#C8F135] px-8 py-4 text-sm font-bold uppercase tracking-[.12em]">Join waitlist &nbsp; →</button></div>
    </div>
   </section>

   <section id="cirlos" className="grid bg-[#242A20] text-white lg:grid-cols-[.58fr_1fr]">
    <img src="https://images.pexels.com/photos/16121479/pexels-photo-16121479.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className="portrait h-full min-h-[400px] w-full object-cover opacity-85"/>
    <div className="flex items-center px-7 py-16 lg:px-16"><div><h2 className="serif text-6xl leading-[.95] md:text-7xl">Been there?<br/>Be a Cirlo.</h2><p className="mt-6 text-lg leading-8 text-white/75">Share what you know.<br/>Get paid for it.</p><a href="mailto:hello@cirloapp.com?subject=Become%20a%20Cirlo" className="mt-8 inline-block rounded-full border border-white px-7 py-4 text-xs font-bold uppercase tracking-[.12em]">Learn more &nbsp; →</a></div></div>
   </section>
  </main>

  <footer className="px-6 py-9 lg:px-10"><div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-6"><div className="text-2xl font-semibold tracking-[.22em]">CIRLO</div><div className="flex gap-6 text-xs"><a href="/privacy-policy">Privacy</a><a href="/terms-of-service">Terms</a><a href="/accessibility">Accessibility</a><a href="/subscription-terms">Membership & Cancellation</a><a href="/delete-account">Delete Account</a><a href="/support">Support</a></div><div className="text-xs uppercase tracking-[.18em]">There's a woman for that.</div></div></footer>
 </div>
}