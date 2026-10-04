import React from 'react';

const APP_STORE='https://apps.apple.com/us/app/cirlo/id6751201819';
const PLAY='https://play.google.com/store/apps/details?id=com.mycompany.cirlo';

export default function NewCirloLanding(){
  const download=()=>{const u=navigator.userAgent||''; location.href=/android/i.test(u)?PLAY:/iPhone|iPad|iPod/i.test(u)?APP_STORE:'/download'};
  const seasons=['Marriage','Raising little ones','Working motherhood','Blended family','Starting over','Friendships','Faith','Finding yourself again'];
  const needs=['Just listen','Tell me what you think','Help me solve it','What should I say?'];
  return <div className="min-h-screen bg-[#fbf8f6] text-[#211817] font-sans">
    <header className="sticky top-0 z-50 border-b border-[#eadfda] bg-[#fbf8f6]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
        <a href="/" className="flex items-center gap-2 text-2xl font-semibold text-[#a87573]"><span className="font-serif text-4xl">C.</span> Cirlo</a>
        <nav className="hidden items-center gap-7 text-sm text-[#6f5c57] md:flex"><a href="#how">How it works</a><a href="#seasons">Find your Cirlo</a><a href="#pricing">Membership</a><a href="#become">Become a Cirlo</a></nav>
        <button onClick={download} className="rounded-full bg-[#ad7a78] px-5 py-3 text-sm font-semibold text-white">Find your Cirlo</button>
      </div>
    </header>
    <main>
      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-16 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-10 lg:pt-24">
        <div>
          <div className="inline-flex rounded-full bg-[#f1e3e1] px-4 py-2 text-sm font-semibold text-[#9f6f6d]">Private voice-note wisdom, woman to woman.</div>
          <h1 className="mt-7 max-w-3xl text-6xl font-bold leading-[.94] tracking-[-.055em] sm:text-7xl lg:text-[86px]">Every woman needs a woman <span className="font-serif italic font-normal text-[#ad7a78]">who's been there.</span></h1>
          <p className="mt-7 max-w-2xl text-xl leading-8 text-[#6f5c57] sm:text-2xl sm:leading-9">Whatever season you're in, you don't have to figure it out alone. Send a private voice note to a woman who's lived it—and hear back in her own voice.</p>
          <div className="mt-9 flex flex-wrap gap-4"><button onClick={download} className="rounded-2xl bg-[#a97573] px-7 py-4 text-lg font-bold text-white shadow-xl">Find my Cirlo</button><a href="#become" className="rounded-2xl border border-[#d7c5c1] bg-white px-7 py-4 text-lg font-bold text-[#6f4e4e]">I've lived it. Become a Cirlo.</a></div>
          <div className="mt-5 text-sm text-[#8d7973]">First week free · Private by design · Real women, real voices</div>
        </div>
        <div className="mx-auto w-full max-w-[470px] rounded-[38px] border border-[#e8dcd8] bg-white p-6 shadow-2xl">
          <div className="mb-5 flex items-center justify-between"><span className="text-sm text-[#9b8882]">What's on your mind?</span><div className="h-10 w-10 rounded-full bg-[#ead7d4]"/></div>
          <div className="rounded-[28px] bg-[#f1e7e4] p-6"><div className="flex h-44 items-center justify-center rounded-2xl bg-[#d9c2bd]"><div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-3xl text-[#ad7a78]">●</div></div><div className="mt-5 text-2xl font-bold">Talk to a Cirlo.</div><p className="mt-2 leading-7 text-[#725f59]">Say what's going on. No polishing. No performing.</p></div>
          <div className="mt-5 text-sm font-bold uppercase tracking-wider text-[#a87573]">What do you need?</div>
          <div className="mt-3 flex flex-wrap gap-2">{needs.map((x,i)=><span key={x} className={i===2?"rounded-full bg-[#ad7a78] px-3 py-2 text-sm text-white":"rounded-full bg-[#f4efed] px-3 py-2 text-sm text-[#594845]"}>{x}</span>)}</div>
          <button onClick={download} className="mt-6 w-full rounded-full bg-[#ad7a78] py-4 font-bold text-white">Send a private voice note</button>
        </div>
      </section>

      <section className="bg-[#6f4e4e] px-5 py-12 text-center text-white"><p className="font-serif mx-auto max-w-5xl text-3xl leading-tight sm:text-5xl">Not advice from the internet. <i className="text-[#efd1cd]">Wisdom from a woman who's lived it.</i></p></section>

      <section id="how" className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <div className="max-w-3xl"><div className="text-sm font-bold uppercase tracking-[.18em] text-[#a87573]">How Cirlo works</div><h2 className="mt-4 text-5xl font-bold tracking-[-.04em] sm:text-6xl">Talk like you would to someone you trust.</h2></div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">{[['01',"Tell her what's going on.",'Record a private voice note. Say it messy, emotional, unfinished—however it comes out.'],['02','Tell her what you need.','Choose Just listen, Tell me what you think, Help me solve it, or What should I say?'],['03',"Hear from someone who's been there.",'A Cirlo responds in her own voice with the perspective only lived experience can give.']].map(([n,t,d])=><div key={n} className="rounded-[30px] border border-[#eadfda] bg-white p-7"><div className="font-serif text-4xl text-[#ad7a78]">{n}</div><h3 className="mt-6 text-2xl font-bold">{t}</h3><p className="mt-3 leading-7 text-[#725f59]">{d}</p></div>)}</div>
      </section>

      <section id="seasons" className="bg-[#f0e5e2] px-5 py-20"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div><div className="text-sm font-bold uppercase tracking-[.18em] text-[#a87573]">Your season matters</div><h2 className="mt-4 text-5xl font-bold tracking-[-.04em] sm:text-6xl">Find a woman who gets <i className="font-serif font-normal text-[#a87573]">this</i> part.</h2><p className="mt-6 text-xl leading-8 text-[#725f59]">Cirlo connects you with women based on the seasons they've actually lived through—not a title, follower count, or perfect résumé.</p></div>
        <div className="flex flex-wrap gap-3">{seasons.map((s,i)=><div key={s} className={i<3?"rounded-full border border-[#ad7a78] bg-[#ad7a78] px-5 py-3 font-semibold text-white":"rounded-full border border-[#dac9c5] bg-white px-5 py-3 font-semibold text-[#66524e]"}>{s}</div>)}</div>
      </div></section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10"><div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-[36px] bg-white p-8 shadow-xl"><div className="text-sm font-bold uppercase tracking-wider text-[#a87573]">Your Cirlo</div><h2 className="mt-4 text-4xl font-bold">Women who've lived through the seasons you're in.</h2><div className="mt-8 rounded-[28px] bg-[#f4ece9] p-6"><div className="flex items-center gap-4"><div className="h-16 w-16 rounded-full bg-[#cdaaa4]"/><div><b className="text-xl">Meet your Cirlo</b><div className="text-[#806b65]">Listen to her intro. See what she's lived.</div></div></div><div className="mt-5 flex flex-wrap gap-2 text-sm"><span className="rounded-full bg-white px-3 py-2">Marriage</span><span className="rounded-full bg-white px-3 py-2">Little ones</span><span className="rounded-full bg-white px-3 py-2">Faith</span></div></div></div>
        <div className="rounded-[36px] bg-[#ad7a78] p-8 text-white"><div className="text-sm font-bold uppercase tracking-wider text-white/70">Private by design</div><h2 className="mt-4 text-4xl font-bold">No feed. No comments section. No performing.</h2><p className="mt-6 text-xl leading-8 text-white/85">Your voice notes are conversations, not content. Ask what you wouldn't post. Say what you haven't figured out yet. Keep the wisdom that helps.</p></div>
      </div></section>

      <section id="when" className="bg-[#fffdfc] px-5 py-20"><div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center"><div className="text-sm font-bold uppercase tracking-[.18em] text-[#a87573]">This is what Cirlo is for</div><h2 className="mt-4 text-5xl font-bold tracking-[-.04em] sm:text-6xl">Some things you don't want to Google.</h2><p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-[#725f59]">You may not want to tell your friends. You definitely don't want to post it online. Sometimes you just want to talk to a woman who's lived through something similar.</p></div>
        <div className="mx-auto mt-12 max-w-5xl rounded-[38px] bg-[#f0e5e2] p-7 sm:p-10"><div className="text-sm font-bold uppercase tracking-wider text-[#a87573]">Marriage</div><blockquote className="font-serif mt-4 text-3xl leading-tight text-[#2d201e] sm:text-4xl">“My husband and I love each other, but we keep having the same fight. I don't necessarily want therapy. I don't want my friends knowing our business. I just wish I could talk to a woman who's been married 25 years and has been through something similar.”</blockquote><div className="mt-7 rounded-2xl bg-white p-5 text-lg leading-7 text-[#66524e]"><b>With Cirlo:</b> Find a woman who's been married for decades and has weathered hard seasons. Tell her what's happening privately. Ask her to listen, tell you what she thinks, help you work through it, or help you figure out what to say.</div></div>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {[
            ['Motherhood','“My 3-year-old is pushing every button I have, and lately I don’t like the mom I’m becoming.”',"Talk to a woman who's raised little ones and remembers this season."],
            ['Finding yourself','“I love being a mom, but somewhere along the way I stopped feeling like myself.”',"Talk to a woman who's found herself again after motherhood."],
            ['Friendship','“My closest friendship doesn’t feel the same anymore. I don’t know whether to address it or let it go.”',"Talk to a woman who's navigated changing adult friendships."],
            ['Starting over','“I’m beginning again and everyone else seems so far ahead.”',"Talk to a woman who's rebuilt a life she didn't expect to rebuild."]
          ].map(([label,quote,answer])=><div key={label} className="rounded-[28px] border border-[#eadfda] bg-white p-7"><div className="text-sm font-bold uppercase tracking-wider text-[#a87573]">{label}</div><div className="font-serif mt-4 text-2xl leading-8 text-[#302321]">{quote}</div><div className="mt-5 border-t border-[#eee3df] pt-5 leading-7 text-[#725f59]">{answer}</div></div>)}
        </div>
        <div className="mx-auto mt-12 max-w-4xl rounded-[32px] bg-[#6f4e4e] p-8 text-center text-white"><h3 className="text-3xl font-bold sm:text-4xl">Not every hard day needs an appointment. Sometimes you just need a woman who's been there.</h3><p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/80">Cirlo isn't therapy, coaching, or social media. It's a private place for everyday life conversations with experienced women who've lived through similar seasons.</p><button onClick={download} className="mt-7 rounded-2xl bg-white px-7 py-4 text-lg font-bold text-[#6f4e4e]">Find a woman who's been there</button></div>
      </div></section>

      <section id="pricing" className="px-5 py-20"><div className="mx-auto max-w-5xl text-center"><div className="text-sm font-bold uppercase tracking-[.18em] text-[#a87573]">Membership</div><h2 className="mt-4 text-5xl font-bold tracking-[-.04em] sm:text-6xl">Wisdom whenever you need it.</h2><p className="mx-auto mt-5 max-w-2xl text-xl leading-8 text-[#725f59]">One membership. Every Cirlo. Talk to whoever feels right.</p>
        <div className="mx-auto mt-10 max-w-xl rounded-[36px] bg-white p-8 text-left shadow-2xl"><div className="text-sm font-bold text-[#a87573]">CIRLO MEMBERSHIP</div><div className="mt-3 text-5xl font-bold">$24.99<span className="text-xl font-medium text-[#806b65]"> / month</span></div><div className="mt-2 text-[#806b65]">First week free. Cancel anytime.</div><div className="mt-7 space-y-3 text-lg">{['4 Wisdom Notes a month','Send to any Cirlo, or Ask the Circle','Replies within 48 hours','Unused notes roll over for 60 days'].map(x=><div key={x}>✓ &nbsp;{x}</div>)}</div><button onClick={download} className="mt-8 w-full rounded-full bg-[#ad7a78] py-4 text-lg font-bold text-white">Start my free week</button></div>
      </div></section>

      <section id="become" className="bg-[#211817] px-5 py-20 text-white"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
        <div><div className="text-sm font-bold uppercase tracking-[.18em] text-[#d5aaa5]">Become a Cirlo</div><h2 className="mt-4 text-5xl font-bold tracking-[-.04em] sm:text-6xl">You've lived it. <span className="font-serif italic font-normal text-[#d5aaa5]">Share it.</span></h2><p className="mt-6 max-w-xl text-xl leading-8 text-white/70">The things you've learned through marriage, motherhood, family, work, faith, loss, rebuilding, or simply living can be exactly what another woman needs to hear.</p><a href="mailto:hello@cirloapp.com?subject=I%20want%20to%20become%20a%20Cirlo" className="mt-8 inline-block rounded-2xl bg-[#ad7a78] px-7 py-4 text-lg font-bold text-white">Apply to become a Cirlo</a></div>
        <div className="rounded-[32px] bg-white/10 p-7"><div className="text-3xl font-bold">Your wisdom is valuable.</div><div className="mt-6 space-y-4 text-lg text-white/75"><div>✓ Create a profile around the seasons you've lived.</div><div>✓ Receive private voice notes from women who choose you.</div><div>✓ Respond in your own voice, on your own time.</div><div>✓ Earn for the wisdom you share.</div></div><div className="mt-7 rounded-2xl bg-white/10 p-5 text-sm text-white/60">Cirlos are reviewed before going live so women can choose from trusted, thoughtful voices.</div></div>
      </div></section>

      <section className="px-5 py-20"><div className="mx-auto max-w-6xl rounded-[40px] bg-[#ead9d5] px-7 py-14 text-center"><h2 className="mx-auto max-w-4xl text-5xl font-bold tracking-[-.04em] sm:text-6xl">You don't need someone with all the answers. <span className="font-serif italic font-normal text-[#a87573]">You need someone who's been there.</span></h2><button onClick={download} className="mt-8 rounded-2xl bg-[#ad7a78] px-8 py-4 text-lg font-bold text-white">Find my Cirlo</button></div></section>
    </main>
    <footer className="border-t border-[#e5d8d3] px-5 py-10 text-sm text-[#806d67]"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5"><div><span className="font-serif text-2xl text-[#a87573]">C.</span> Cirlo — Woman to woman, season to season.</div><div className="flex flex-wrap gap-5"><a href="/privacy-policy">Privacy</a><a href="/terms-of-service">Terms</a><a href="/eula">EULA</a><a href="/accessibility">Accessibility</a></div></div></footer>
  </div>
}