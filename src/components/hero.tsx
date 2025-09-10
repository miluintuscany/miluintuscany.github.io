export function Hero() {
  return (
    <section
      id="intro"
      className="relative overflow-hidden"
      aria-label="Short introduction"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_50%_10%,#f4f1ee,transparent),conic-gradient(from_180deg_at_50%_50%,#fff,#f8f8f8,#f4f4f5,#fff)]" />
      <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="hidden items-center sm:flex">
            <img
              src="/milu-logo.jpeg"
              alt="MiLu Weddings"
              className="h-64 my-16 -mt-10 w-auto rounded-lg"
            />
          </div>
          <p className="uppercase tracking-[0.25em] text-xs text-milu-bg-400">
            <span className="whitespace-nowrap">Wedding Planner</span>
            <span className="whitespace-nowrap">&nbsp;& Wedding Designer</span>
          </p>
          <h1 className="mt-3 font-serif text-4xl md:text-5xl leading-tight text-zinc-900">
            <span className="font-semibold">Your</span> personal wedding in
            Tuscany
          </h1>
          <p className="mt-5 text-foreground-400 leading-relaxed">
            We offer our services in Tuscany, from conception and planning to
            the day of the event. We organise weddings, destination weddings,
            private events and ceremonies, and we put all our passion at your
            disposal to lighten your load and turn your event into a small work
            of art.
            <br />
            Our goal is to make the event a mirror of yourselves, letting your
            personality shine through.
          </p>
          <div className="mt-8 flex gap-3">
            <a
              href="#contact"
              className="rounded-2xl px-5 py-3 bg-zinc-900 text-white text-sm hover:bg-black transition shadow-sm"
            >
              Contact us
            </a>
            <a
              href="#services"
              className="rounded-2xl px-5 py-3 border border-zinc-300 text-sm hover:bg-zinc-50 transition"
            >
              Explore Services
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl ring-1 ring-black/5">
            <video
              src="/intro-video.mp4"
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
}
