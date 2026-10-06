import React from 'react';

const APP_STORE='https://apps.apple.com/us/app/cirlo/id6751201819';
const PLAY='https://play.google.com/store/apps/details?id=com.mycompany.cirlo';

export default function NewCirloLanding(){
 const download=()=>{const u=navigator.userAgent||'';location.href=/android/i.test(u)?PLAY:/iPhone|iPad|iPod/i.test(u)?APP_STORE:'/download'};
 const stories=[
  {n:'01',k:'MARRIAGE',age:'34 YEARS',line:'Ask her something.',name:'Denise',meta:'Married 34 years · Raised 3',img:'https://images.pexels.com/photos/20414870/pexels-photo-20414870/free-photo-of-elderly-woman-sitting-in-black-dress.jpeg?auto=compress&cs=tinysrgb&w=1800'},
  {n:'02',k:'STARTING OVER',age:'52',line:'She started over.',name:'Renee',meta:'New city · New chapter',img:'https://images.pexels.com/photos/36220496/pexels-photo-36220496/free-photo-of-black-and-white-fashion-editorial-with-a-modern-flair.jpeg?auto=compress&cs=tinysrgb&w=1800'},
  {n:'03',k:'MOTHERHOOD',age:'THREE KIDS',line:'She has thoughts.',name:'Monica',meta:'Life · Identity · Perspective',img:'https://images.pexels.com/photos/21714470/pexels-photo-21714470/free-photo-of-black-and-white-photo-of-woman-on-street.jpeg?auto=compress&cs=tinysrgb&w=1800'}
 ];
 return <div className="bg-[#F7F2E9] text-[#21171C] antialiased">
 <style>{`
 html{scroll-behavior:smooth}body{margin:0;background:#F7F2E9}
 .display{font-size:clamp(4.2rem,9.4vw,10rem);line-height:.82;letter-spacing:-.075em}
 .headline{font-size:clamp(3.2rem,6.8vw,7.2rem);line-height:.88;letter-spacing:-.06em}
 .rule{border-color:#D8CCBE}
 .story img{transition:transform 1.2s cubic-bezier(.2,.7,.2,1)}.story:hover img{transform:scale(1.025)}
 .ticker{animation:ticker 28s linear infinite}@keyframes ticker{to{transform:translateX(-50%)}}
 @media(prefers-reduced-motion:reduce){.ticker{animation:none}.story img{transition:none}}
 `}</style>
 <header className="fixed inset-x-0 top-0 z-50 bg-[#F7F2E9]/90 backdrop-blur-md">
  <div className="mx-auto flex max-w-[1720px] items-center justify-between px-6 py-5 lg:px-10">
   <a href="/" className="text-2xl font-semibold tracking-[-.06em]">Cirlo</a>
   <nav className="hidden gap-8 text-xs font-semibold uppercase tracking-[.12em] md:flex"><a href="#stories">People</a><a href="#product">How it works</a><a href="#membership">Membership</a><a href="#become">Become a Cirlo</a></nav>
   <button onClick={download} className="rounded-full bg-[#C8F135] px-5 py-3 text-sm font-bold text-[#21171C]">Find someone</button>
  </div>
 </header>

 <main>
  <section className="relative min-h-screen overflow-hidden">
   <img src="https://images.pexels.com/photos/20414870/pexels-photo-20414870/free-photo-of-elderly-woman-sitting-in-black-dress.jpeg?auto=compress&cs=tinysrgb&w=2200" alt="A woman with lived experience" className="absolute inset-0 h-full w-full object-cover object-center"/>
   <div className="absolute inset-0 bg-gradient-to-r from-[#21171C]/85 via-[#21171C]/45 to-transparent"/>
   <div className="relative z-10 mx-auto flex min-h-screen max-w-[1720px] items-end px-6 pb-14 pt-32 text-white lg:px-10 lg:pb-20">
    <div className="max-w-[1180px]">
     <p className="text-xs font-bold uppercase tracking-[.24em] text-[#C8F135]">Cirlo / Real women. Lived wisdom.</p>
     <h1 className="display mt-7 font-semibold">Every woman needs<br/>a woman <span className="text-[#C8F135]">who's been there.</span></h1>
     <div className="mt-9 flex flex-col gap-7 border-t border-white/30 pt-7 md:flex-row md:items-end md:justify-between">
      <p className="max-w-xl text-xl leading-8 text-white/85">Real women who’ve lived the season you’re in. Send a voice note. Hear back in her own voice.</p>
      <button onClick={download} className="w-fit rounded-full bg-[#C8F135] px-7 py-4 text-base font-bold text-[#21171C]">Find my Cirlo →</button>
     </div>
    </div>
   </div>
  </section>

  <section id="stories">
   {stories.map((s,i)=><article key={s.n} className="story relative min-h-screen overflow-hidden">
    <img src={s.img} alt={s.name} className={`absolute inset-0 h-full w-full object-cover ${i===0?'object-center':i===1?'object-[center_45%]':'object-[center_35%]'}`}/>
    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/10"/>
    <div className="relative z-10 flex min-h-screen flex-col justify-between px-6 py-10 text-white lg:px-10">
     <div className="flex justify-between text-xs font-bold uppercase tracking-[.22em]"><span>{s.n} — {s.k}</span><span className={i===1?'border-b-2 border-[#C8F135] pb-1':''}>{s.meta}</span></div>
     <div className="max-w-5xl pb-8"><div className="text-sm font-bold uppercase tracking-[.2em] text-white/70">{s.age}</div><h2 className="headline mt-4 font-semibold">{s.line}</h2><div className="mt-8 flex items-center gap-5"><button onClick={download} className="rounded-full bg-[#F7F2E9] px-6 py-3 font-semibold text-[#21171C]">Ask {s.name} →</button>{i===0&&<span className="h-2.5 w-2.5 rounded-full bg-[#C8F135]"/>}</div></div>
    </div>
   </article>)}
  </section>

  <section className="overflow-hidden border-y rule bg-[#681D36] py-5 text-white">
   <div className="ticker flex w-max gap-16 whitespace-nowrap text-xs font-bold uppercase tracking-[.2em]">{Array(2).fill(['Married 34 years','Changed careers at 40','Raised three','Started over at 52','Built a business','Found herself again']).flat().map((x,i)=><span key={i}>{x}<span className="ml-16 text-[#C8F135]">●</span></span>)}</div>
  </section>

  <section className="grid min-h-[72vh] overflow-hidden lg:grid-cols-[1.35fr_.65fr]">
   <div className="min-h-[58vh] bg-[url('https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1800')] bg-cover bg-center"/>
   <div className="flex items-end bg-[#681D36] px-7 py-12 text-white lg:px-10"><div><div className="mb-6 h-[2px] w-16 bg-[#C8F135]"></div><p className="text-xs font-bold uppercase tracking-[.22em] text-white/70">Life, in progress</p><p className="mt-5 text-4xl font-semibold leading-tight">The good parts count, too.</p></div></div>
  </section>

  <section className="px-6 py-28 lg:px-10">
   <div className="mx-auto grid max-w-[1720px] gap-16 lg:grid-cols-[1.15fr_.85fr]">
    <div><div className="text-xs font-bold uppercase tracking-[.22em] text-[#681D36]">Cirlo</div><h2 className="display mt-7 font-semibold text-[#681D36]">Borrow<br/>experience.</h2></div>
    <div className="self-end pb-4"><p className="max-w-xl text-2xl leading-9">Private voice notes with women who've already lived the chapter you're entering.</p><button onClick={download} className="mt-8 text-lg font-bold">Find someone <span className="text-[#9DBD22]">→</span></button></div>
   </div>
  </section>

  <section id="product" className="bg-[#21171C] text-white">
   <div className="grid min-h-screen lg:grid-cols-2">
    <div className="flex items-center px-6 py-24 lg:px-12"><div><div className="text-xs font-bold uppercase tracking-[.22em] text-[#C8F135]">Your question / Her perspective</div><h2 className="headline mt-8 font-semibold">What's on<br/>your mind?</h2><div className="mt-12 flex h-20 items-center gap-2 border-y border-white/20">{[18,34,52,28,62,40,72,31,48,24,58,36].map((h,i)=><span key={i} className="w-1 rounded-full bg-[#C8F135]" style={{height:h}}/>)}</div></div></div>
    <div className="flex items-center bg-[#EFE7DA] px-6 py-24 text-[#21171C] lg:px-12"><div><p className="text-xs font-bold uppercase tracking-[.22em] text-[#681D36]">Choose what you need</p><div className="mt-10 space-y-0 border-t rule">{['Just listen','Tell me what you think','Help me solve it','What should I say?'].map((x,i)=><div key={x} className="flex items-center justify-between border-b rule py-6 text-2xl font-semibold"><span>{x}</span><span className={i===2?'h-3 w-3 rounded-full bg-[#C8F135]':'text-sm'}>{i===2?'':'↗'}</span></div>)}</div></div></div>
   </div>
  </section>

  <section className="px-6 py-28 lg:px-10">
   <div className="mx-auto grid max-w-[1720px] gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
    <div><p className="text-xs font-bold uppercase tracking-[.22em] text-[#681D36]">34 years of marriage</p><h2 className="headline mt-7 font-semibold">4 minutes<br/>away.</h2></div>
    <div className="border-l-2 border-[#C8F135] pl-7"><p className="text-xs font-bold uppercase tracking-[.22em]">Denise is responding…</p><div className="mt-5 flex items-center gap-1">{[20,36,28,52,30,44,22,60,34,26].map((h,i)=><span key={i} className="w-1 bg-[#681D36]" style={{height:h}}/>)}</div></div>
   </div>
  </section>

  <section id="membership" className="bg-[#F2EBDD] px-6 py-28 lg:px-10">
   <div className="mx-auto grid max-w-[1720px] gap-14 lg:grid-cols-2 lg:items-end">
    <div><p className="text-xs font-bold uppercase tracking-[.22em] text-[#681D36]">Membership</p><h2 className="headline mt-7 font-semibold">Someone's<br/>been there.</h2><button onClick={download} className="mt-8 border-b-2 border-[#C8F135] pb-1 text-lg font-bold">Find her →</button></div>
    <div className="lg:justify-self-end lg:min-w-[470px]"><div className="flex items-start gap-4"><div className="text-7xl font-semibold tracking-[-.06em]">$24.99</div><span className="mt-2 bg-[#C8F135] px-3 py-1 text-xs font-bold">7 DAYS FREE</span></div><p className="mt-2 text-lg text-[#6D5B5D]">per month · cancel anytime</p><div className="mt-9 border-t rule"><div className="flex justify-between border-b rule py-4"><span>Wisdom Notes each month</span><b>6</b></div><div className="flex justify-between border-b rule py-4"><span>Talk to</span><b>Any Cirlo</b></div><div className="flex justify-between border-b rule py-4"><span>Ask the Circle</span><b>Included</b></div><div className="flex justify-between border-b rule py-4"><span>Replies</span><b>Within 48 hrs</b></div><div className="flex justify-between border-b rule py-4"><span>Unused notes</span><b>Roll over 60 days</b></div></div><p className="mt-6 text-sm text-[#6D5B5D]">Need more? Add extra Wisdom Notes anytime.</p><button onClick={download} className="mt-7 rounded-full bg-[#C8F135] px-7 py-4 font-bold text-[#21171C]">Start my free week →</button></div>
   </div>
  </section>

  <section id="become" className="grid min-h-[85vh] lg:grid-cols-2">
   <div className="min-h-[55vh] bg-[url('https://images.pexels.com/photos/2050994/pexels-photo-2050994.jpeg?auto=compress&cs=tinysrgb&w=1800')] bg-cover bg-center"/>
   <div className="flex items-center px-6 py-24 lg:px-14"><div><p className="text-xs font-bold uppercase tracking-[.22em] text-[#681D36]">Become a Cirlo</p><h2 className="headline mt-7 font-semibold">You've lived a life<br/><span className="text-[#681D36]">worth sharing.</span></h2><p className="mt-8 max-w-xl text-xl leading-8 text-[#6D5B5D]">Your lived experience can be exactly what another woman needs to hear. Respond in your own voice. Earn for the wisdom you share.</p><a href="mailto:hello@cirloapp.com?subject=I%20want%20to%20become%20a%20Cirlo" className="mt-8 inline-block border-b-2 border-[#C8F135] pb-1 text-lg font-bold">Become a Cirlo →</a></div></div>
  </section>
 </main>

 <footer className="border-t rule px-6 py-9 text-xs lg:px-10"><div className="mx-auto flex max-w-[1720px] flex-wrap items-center justify-between gap-6"><b className="text-2xl">Cirlo</b><div className="flex gap-6 text-[#6D5B5D]"><a href="/privacy-policy">Privacy</a><a href="/terms-of-service">Terms</a><a href="/accessibility">Accessibility</a></div><div>Different lives. Shared wisdom.</div></div></footer>
 </div>
}