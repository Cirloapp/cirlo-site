import React from 'react';

const APP_STORE='https://apps.apple.com/us/app/cirlo/id6751201819';
const PLAY='https://play.google.com/store/apps/details?id=com.mycompany.cirlo';

export default function NewCirloLanding(){
  const download=()=>{const u=navigator.userAgent||''; location.href=/android/i.test(u)?PLAY:/iPhone|iPad|iPod/i.test(u)?APP_STORE:'/download'};
  const uses=[
    ['The thing you never want to forget','Record the tiny details while they are still fresh: the sound of their laugh, the way they curl into you, the nickname you swear you’ll always remember.','“Today you laughed so hard you got the hiccups. I wish I could freeze this exact sound.”'],
    ['A message for who they become','Talk to the older version of your baby. Save what you hope they know about themselves, your family, and how deeply they were loved from the beginning.','“Open this when you’re 18. I want you to know who you were before the world told you who to be.”'],
    ['The motherhood side of the story','Keep your story too—the beautiful days, the exhausting ones, the things you are learning, and the version of you that is growing alongside them.','“You finally fell asleep on my chest. I’m exhausted, but I already know I’ll miss this.”'],
    ['Milestones in your own voice','First smile. First laugh. First word. First steps. Capture what happened and how it felt, instead of letting the memory become another photo in your camera roll.','“Your first word was mama. I cried before you even finished saying it.”'],
    ['A private family time capsule','Record the stories behind the people, traditions, places, and moments that made their childhood theirs. Keep it private until you decide it is time to share.','“This is the story of the day we brought you home.”'],
    ['When you only have 60 seconds','Cirlo is made for real life. No perfect journal entry. No scrapbook to finish. Tap record while feeding, rocking, walking, or sitting in the car.','“Quick note before I forget…”'],
  ];

  const appScreens=[
    ['/app-record-prompt.jpg','A gentle prompt when your brain is blank','Age-based prompts help you notice the details changing right now.'],
    ['/app-recording.jpg','Tap. Talk. Done.','Record in the moment. No polished words or long journal entry required.'],
    ['/app-capsules.jpg','A timeline you’ll actually revisit','Search and filter your real Capsules instead of losing memories in a camera roll.']
  ];

  return <div className="min-h-screen bg-[#f7f2ef] text-[#271712] font-sans">
    <style>{`
      .serif{font-family:Georgia,'Times New Roman',serif}
      .phone{box-shadow:0 30px 80px rgba(62,35,31,.18)}
      .cta{box-shadow:0 14px 34px rgba(112,77,75,.22)}
      .app-shot{image-rendering:auto;transform:translateZ(0);}
    `}</style>

    <header className="sticky top-0 z-50 border-b border-[#eadfda] bg-[#f7f2ef]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
        <a href="/" className="flex items-center gap-2 text-2xl font-semibold text-[#9f7473]"><span className="serif text-4xl">C.</span> Cirlo</a>
        <nav className="hidden gap-8 text-sm text-[#705d55] md:flex"><a href="#inside">See the app</a><a href="#use">How moms use it</a><a href="#how">How it works</a><a href="#faq">FAQ</a></nav>
        <button onClick={download} className="rounded-full bg-[#795553] px-5 py-3 text-sm font-semibold text-white">Get Cirlo free</button>
      </div>
    </header>

    <main>
      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-16 lg:grid-cols-[1.03fr_.97fr] lg:items-center lg:px-10 lg:pt-24">
        <div>
          <div className="inline-flex rounded-full border border-[#d9bdbc] bg-white/60 px-4 py-2 text-sm font-semibold text-[#9f7473]">For the days you know you’ll miss someday</div>
          <h1 className="serif mt-7 text-6xl font-semibold leading-[.96] tracking-[-.04em] sm:text-7xl lg:text-[88px]">Your baby will never be <span className="italic text-[#a87877]">this little</span> again.</h1>
          <p className="mt-7 max-w-2xl text-2xl leading-10 text-[#705d55]">Cirlo helps you save the part photos can’t: <b>your voice, your feelings, and the story of who they were right now.</b></p>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#7f6c63]">Tap record. Talk for a minute. Keep it private. Build a voice archive of the baby days while you are still living them.</p>
          <div className="mt-9 flex flex-wrap items-center gap-4"><button onClick={download} className="cta rounded-2xl bg-[#6f4e4e] px-7 py-4 text-lg font-semibold text-white">Start your first Capsule — free</button><a href="#inside" className="font-semibold text-[#795553]">See the real app ↓</a></div>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#9a8580]"><span>✓ Free to start</span><span>✓ Private by default</span><span>✓ No journaling required</span></div>
        </div>
        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="absolute -left-4 top-20 z-10 rounded-2xl bg-white px-4 py-3 text-sm shadow-lg"><b className="block text-[#795553]">4 weeks old</b><span className="text-[#8d7970]">Record their laugh before it changes.</span></div>
          <div className="phone mx-auto w-[220px] overflow-hidden rounded-[34px] border-[7px] border-[#3d2926] bg-white">
            <img src="/app-capsules.jpg" alt="Real Cirlo app showing a baby's private capsule timeline" width="220" className="app-shot block h-auto w-[220px] max-w-none"/>
          </div>
          <div className="absolute -bottom-4 right-0 z-10 max-w-[210px] rounded-2xl bg-[#a87877] px-4 py-3 text-sm text-white shadow-lg">Not another baby tracker. <b>A memory vault in your own voice.</b></div>
        </div>
      </section>

      <section className="bg-[#6f4e4e] px-5 py-12 text-center text-white"><p className="serif mx-auto max-w-5xl text-3xl italic leading-tight sm:text-5xl">You’re in almost every memory—but usually behind the camera. Cirlo makes sure <span className="text-[#efcfcc]">your voice is in the story too.</span></p></section>

      <section id="inside" className="mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <div className="max-w-3xl"><div className="text-sm font-bold uppercase tracking-[.18em] text-[#a87877]">This is the real app</div><h2 className="serif mt-4 text-5xl leading-none sm:text-6xl">Made for one-handed, sleep-deprived motherhood.</h2><p className="mt-6 text-xl leading-9 text-[#705d55]">No blank journal page staring back at you. Cirlo gives you a simple place to get a prompt, record your voice, and return to the moments you wanted to keep.</p></div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {appScreens.map(([img,title,text])=><div key={title} className="rounded-[32px] bg-white p-5 shadow-sm">
            <div className="flex min-h-[500px] items-start justify-center overflow-hidden rounded-[26px] border border-[#eadfda] bg-[#fbf8f6] py-4">
              <img src={img} alt={`Cirlo app: ${title}`} width="220" className="app-shot block h-auto w-[220px] max-w-none"/>
            </div>
            <h3 className="mt-5 text-xl font-bold">{title}</h3><p className="mt-2 leading-7 text-[#7f6c63]">{text}</p>
          </div>)}
        </div>
        <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-[#9a8580]">Real Cirlo screens shown at their native web display size for clarity.</p>
      </section>

      <section id="use" className="bg-[#efe5e1] px-5 py-20"><div className="mx-auto max-w-7xl"><div className="max-w-4xl"><div className="text-sm font-bold uppercase tracking-[.18em] text-[#a87877]">How you can use Cirlo</div><h2 className="serif mt-4 text-5xl leading-none sm:text-6xl">There is no “right” thing to record.</h2><p className="mt-6 text-xl leading-9 text-[#705d55]">The best Capsules can sound like real life—not a performance. Here are examples of the kinds of moments Cirlo was built to hold.</p></div><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{uses.map(([t,d,q])=><article key={t} className="rounded-[28px] border border-[#dfceca] bg-[#faf7f5] p-7"><div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#a87877] text-white">🎙</div><h3 className="serif text-3xl font-semibold">{t}</h3><p className="mt-4 leading-7 text-[#705d55]">{d}</p><div className="mt-6 rounded-2xl bg-white p-4 text-[#8e6866]"><div className="mb-2 text-xs font-bold uppercase tracking-wider">A Capsule could start with</div><p className="serif text-lg italic leading-7">{q}</p></div></article>)}</div><div className="mt-10 text-center"><button onClick={download} className="cta rounded-2xl bg-[#6f4e4e] px-7 py-4 text-lg font-semibold text-white">Save one ordinary moment today</button></div></div></section>

      <section id="how" className="mx-auto max-w-7xl px-5 py-20 lg:px-10"><div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]"><div><div className="text-sm font-bold uppercase tracking-[.18em] text-[#a87877]">60 seconds is enough</div><h2 className="serif mt-4 text-5xl leading-none sm:text-6xl">The memory habit that fits into motherhood.</h2></div><div className="space-y-4">{[['01','Open Cirlo when you think, “I want to remember this.”'],['02','Tap record and talk like you’re speaking directly to them.'],['03','Give it a title. Cirlo keeps it private and organized for you.']].map(([n,t])=><div key={n} className="flex gap-5 rounded-3xl border border-[#e3d5d0] bg-white p-6"><div className="serif text-4xl text-[#a87877]">{n}</div><div className="text-xl font-semibold leading-8">{t}</div></div>)}</div></div></section>

      <section className="px-5 pb-20"><div className="mx-auto max-w-6xl rounded-[42px] bg-[#a87877] px-7 py-14 text-center text-white sm:px-14"><div className="text-sm font-bold uppercase tracking-[.18em] text-white/70">For the mom who keeps meaning to start</div><h2 className="serif mx-auto mt-5 max-w-4xl text-5xl leading-none sm:text-6xl">You don’t need to catch up. <i>Start with today.</i></h2><p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-white/85">Record one ordinary minute tonight. Someday, ordinary may be exactly what you want back.</p><button onClick={download} className="mt-8 rounded-2xl bg-white px-7 py-4 text-lg font-bold text-[#6f4e4e]">Create your first Capsule</button><div className="mt-4 text-sm text-white/70">Free to start · Private by default</div></div></section>

      <section id="faq" className="mx-auto max-w-5xl px-5 pb-24"><h2 className="serif text-center text-5xl">Before you record your first one</h2><div className="mt-10 space-y-3">{[['Do I have to journal or write?','No. Cirlo is voice-first. Record your thought, add a short title, and you’re done.'],['Is it public?','No. Capsules are private by default. There is no public feed and no pressure to perform.'],['What if I don’t know what to say?','Cirlo includes age-based prompts, but you can record anything. The ordinary details are often the ones that become most meaningful.'],['Can I find old recordings later?','Yes. Your Capsules live in an organized timeline and can be searched and filtered.']].map(([q,a])=><details key={q} className="rounded-2xl border border-[#e3d5d0] bg-white p-5"><summary className="cursor-pointer text-lg font-bold">{q}</summary><p className="mt-3 leading-7 text-[#705d55]">{a}</p></details>)}</div></section>
    </main>

    <footer className="border-t border-[#e3d5d0] px-5 py-10 text-sm text-[#806d64]"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4"><div><span className="serif text-2xl text-[#a87877]">C.</span> Cirlo — Keep the voice behind the memories.</div><div className="flex gap-5"><a href="/privacy-policy">Privacy</a><a href="/terms-of-service">Terms</a><a href="/accessibility">Accessibility</a></div></div></footer>
  </div>
}
