import React from 'react';

const APP_STORE='https://apps.apple.com/us/app/cirlo/id6751201819';
const PLAY='https://play.google.com/store/apps/details?id=com.mycompany.cirlo';

export default function NewCirloLanding(){
 const download=()=>{const u=navigator.userAgent||'';location.href=/android/i.test(u)?PLAY:/iPhone|iPad|iPod/i.test(u)?APP_STORE:'/download'};
 const stories=[
  {n:'01',k:'MARRIAGE',age:'34 YEARS',line:'Ask her something.',name:'Denise',meta:'Married 34 years · Raised 3',img:'https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg?auto=compress&cs=tinysrgb&w=1800'},
  {n:'02',k:'STARTING OVER',age:'52',line:'She started over.',name:'Renee',meta:'New city · New chapter',img:'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1800'},
  {n:'03',k:'MOTHERHOOD',age:'THREE KIDS',line:'She has thoughts.',name:'Monica',meta:'Motherhood · Marriage · Life',img:'https://images.pexels.com/photos/3764014/pexels-photo-3764014.jpeg?auto=compress&cs=tinysrgb&w=1800'}
 ];
 return <div className="bg-[#fefefd] text-[#272326] antialiased">
 <style>{`
 html{scroll-behavior:smooth}body{margin:0;background:#fefefd}
 .display{font-size:clamp(4.2rem,9.4vw,10rem);line-height:.82;letter-spacing:-.075em}
 .headline{font-size:clamp(3.2rem,6.8vw,7.2rem);line-height:.88;letter-spacing:-.06em}
 .rule{border-color:#ded9d8}
 .story img{transition:transform 1.2s cubic-bezier(.2,.7,.2,1)}.story:hover img{transform:scale(1.025)}
 .ticker{animation:ticker 28s linear infinite}@keyframes ticker{to{transform:translateX(-50%)}}
 @media(prefers-reduced-motion:reduce){.ticker{animation:none}.story img{transition:none}}
 `}</style>
 <header className="fixed inset-x-0 top-0 z-50 bg-[#fefefd]/90 backdrop-blur-md">
  <div className="mx-auto flex max-w-[1720px] items-center justify-between px-6 py-5 lg:px-10">
   <a href="/" className="text-2xl font-semibold tracking-[-.06em]">Cirlo</a>
   <nav className="hidden gap-8 text-xs font-semibold uppercase tracking-[.12em] md:flex"><a href="#stories">People</a><a href="#product">How it works</a><a href="#membership">Membership</a><a href="#become">Become a Cirlo</a></nav>
   <button onClick={download} className="rounded-full bg-[#a87877] px-5 py-3 text-sm font-semibold text-white">Find someone</button>
  </div>
 </header>

 <main>
  <section className="flex min-h-screen items-end px-6 pb-12 pt-28 lg:px-10">
   <div className="mx-auto w-full max-w-[1720px]">
    <div className="grid gap-10 lg:grid-cols-[1.3fr_.7fr] lg:items-end">
     <h1 className="display font-semibold">You haven't<br/>lived it yet.<br/><span className="text-[#a87877]">Someone has.</span></h1>
     <div className="max-w-md pb-3 lg:justify-self-end"><p className="text-xs font-bold uppercase tracking-[.22em] text-[#a87877]">Cirlo / 2026</p><p className="mt-5 text-xl leading-8 text-[#746b6d]">Lived experience, made accessible.</p><button onClick={download} className="mt-7 border-b-2 border-[#c4d43e] pb-1 text-lg font-bold">Find her →</button></div>
    </div>
   </div>
  </section>

  <section id="stories">
   {stories.map((s,i)=><article key={s.n} className="story relative min-h-screen overflow-hidden">
    <img src={s.img} alt={s.name} className="absolute inset-0 h-full w-full object-cover"/>
    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/10"/>
    <div className="relative z-10 flex min-h-screen flex-col justify-between px-6 py-10 text-white lg:px-10">
     <div className="flex justify-between text-xs font-bold uppercase tracking-[.22em]"><span>{s.n} — {s.k}</span><span className={i===1?'border-b-2 border-[#c4d43e] pb-1':''}>{s.meta}</span></div>
     <div className="max-w-5xl pb-8"><div className="text-sm font-bold uppercase tracking-[.2em] text-white/70">{s.age}</div><h2 className="headline mt-4 font-semibold">{s.line}</h2><div className="mt-8 flex items-center gap-5"><button onClick={download} className="rounded-full bg-[#fefefd] px-6 py-3 font-semibold text-[#272326]">Ask {s.name} →</button>{i===0&&<span className="h-2.5 w-2.5 rounded-full bg-[#c4d43e]"/>}</div></div>
    </div>
   </article>)}
  </section>

  <section className="overflow-hidden border-y rule bg-[#a87877] py-5 text-white">
   <div className="ticker flex w-max gap-16 whitespace-nowrap text-xs font-bold uppercase tracking-[.2em]">{Array(2).fill(['Married 34 years','Changed careers at 40','Raised three','Started over at 52','Built a business','Found herself again']).flat().map((x,i)=><span key={i}>{x}<span className="ml-16 text-[#c4d43e]">●</span></span>)}</div>
  </section>

  <section className="px-6 py-28 lg:px-10">
   <div className="mx-auto grid max-w-[1720px] gap-16 lg:grid-cols-[1.15fr_.85fr]">
    <div><div className="text-xs font-bold uppercase tracking-[.22em] text-[#a87877]">Cirlo</div><h2 className="display mt-7 font-semibold text-[#a87877]">Borrow<br/>experience.</h2></div>
    <div className="self-end pb-4"><p className="max-w-xl text-2xl leading-9">Private voice notes with women who've already lived the chapter you're entering.</p><button onClick={download} className="mt-8 text-lg font-bold">Find someone <span className="text-[#a4b42f]">→</span></button></div>
   </div>
  </section>

  <section id="product" className="bg-[#272326] text-white">
   <div className="grid min-h-screen lg:grid-cols-2">
    <div className="flex items-center px-6 py-24 lg:px-12"><div><div className="text-xs font-bold uppercase tracking-[.22em] text-[#c4d43e]">Your question / Her perspective</div><h2 className="headline mt-8 font-semibold">What's on<br/>your mind?</h2><div className="mt-12 flex h-20 items-center gap-2 border-y border-white/20">{[18,34,52,28,62,40,72,31,48,24,58,36].map((h,i)=><span key={i} className="w-1 rounded-full bg-[#c4d43e]" style={{height:h}}/>)}</div></div></div>
    <div className="flex items-center bg-[#f3efee] px-6 py-24 text-[#272326] lg:px-12"><div><p className="text-xs font-bold uppercase tracking-[.22em] text-[#a87877]">Choose what you need</p><div className="mt-10 space-y-0 border-t rule">{['Just listen','Tell me what you think','Help me solve it','What should I say?'].map((x,i)=><div key={x} className="flex items-center justify-between border-b rule py-6 text-2xl font-semibold"><span>{x}</span><span className={i===2?'h-3 w-3 rounded-full bg-[#c4d43e]':'text-sm'}>{i===2?'':'↗'}</span></div>)}</div></div></div>
   </div>
  </section>

  <section className="px-6 py-28 lg:px-10">
   <div className="mx-auto grid max-w-[1720px] gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
    <div><p className="text-xs font-bold uppercase tracking-[.22em] text-[#a87877]">34 years of marriage</p><h2 className="headline mt-7 font-semibold">4 minutes<br/>away.</h2></div>
    <div className="border-l-2 border-[#c4d43e] pl-7"><p className="text-xs font-bold uppercase tracking-[.22em]">Denise is responding…</p><div className="mt-5 flex items-center gap-1">{[20,36,28,52,30,44,22,60,34,26].map((h,i)=><span key={i} className="w-1 bg-[#a87877]" style={{height:h}}/>)}</div></div>
   </div>
  </section>

  <section id="membership" className="bg-[#eef5f8] px-6 py-28 lg:px-10">
   <div className="mx-auto grid max-w-[1720px] gap-14 lg:grid-cols-2 lg:items-end">
    <div><p className="text-xs font-bold uppercase tracking-[.22em] text-[#a87877]">Membership</p><h2 className="headline mt-7 font-semibold">Someone's<br/>been there.</h2><button onClick={download} className="mt-8 border-b-2 border-[#c4d43e] pb-1 text-lg font-bold">Find her →</button></div>
    <div className="lg:justify-self-end"><div className="text-7xl font-semibold tracking-[-.06em]">$24.99</div><p className="mt-2 text-lg text-[#746b6d]">per month · first week free</p><div className="mt-8 space-y-2 text-lg"><p>4 private Wisdom Notes</p><p>Choose any Cirlo</p><p>Replies within 48 hours</p></div></div>
   </div>
  </section>

  <section id="become" className="grid min-h-[85vh] lg:grid-cols-2">
   <div className="min-h-[55vh] bg-[url('https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg?auto=compress&cs=tinysrgb&w=1800')] bg-cover bg-center"/>
   <div className="flex items-center px-6 py-24 lg:px-14"><div><p className="text-xs font-bold uppercase tracking-[.22em] text-[#a87877]">Become a Cirlo</p><h2 className="headline mt-7 font-semibold">You've lived a life<br/><span className="text-[#a87877]">worth sharing.</span></h2><p className="mt-8 max-w-xl text-xl leading-8 text-[#746b6d]">Your lived experience can be exactly what another woman needs to hear. Respond in your own voice. Earn for the wisdom you share.</p><a href="mailto:hello@cirloapp.com?subject=I%20want%20to%20become%20a%20Cirlo" className="mt-8 inline-block border-b-2 border-[#c4d43e] pb-1 text-lg font-bold">Become a Cirlo →</a></div></div>
  </section>
 </main>

 <footer className="border-t rule px-6 py-9 text-xs lg:px-10"><div className="mx-auto flex max-w-[1720px] flex-wrap items-center justify-between gap-6"><b className="text-2xl">Cirlo</b><div className="flex gap-6 text-[#746b6d]"><a href="/privacy-policy">Privacy</a><a href="/terms-of-service">Terms</a><a href="/accessibility">Accessibility</a></div><div>Different lives. Shared wisdom.</div></div></footer>
 </div>
}