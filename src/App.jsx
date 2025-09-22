import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      {eyebrow && (
        <p className="uppercase tracking-[0.25em] text-[11px] text-zinc-500">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 font-serif text-3xl md:text-4xl text-zinc-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-foreground-400 leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle
          title="Who are we"
        />
        <p className="text-center mx-auto pt-8">
          We are Luisa & Miren, perfection lovers, detail oriented, with a big imagination transforming the ordinary into the extraordinary.
          <br />
          <br />
          We come from very different worlds but il destino has brought us together at a friend's wedding, and ever since a great friendship was born, both professional and personal.
          We are two different people that complement each other perfectly, becoming one.
          <br />
          <br />
          We have the gift of being able to work under pressure without losing control, we know how to smile and put forth our client's needs before ours.
          We are creative and full of ideas, we love unique weddings and we surprise even in difficult situations.
        </p>
          <img src="/miren-luisa.jpeg" alt="Miren e Luisa" className="block w-full max-h-[50vh] object-cover mt-12 rounded-2xl" loading="lazy" />
      </div>
    </section>
  );
}

function Gallery() {
  const images = [
    "/aesthetics-2.jpeg",
    "/aesthetics.jpeg",
    "/disegni.jpeg",
    "/light-tunnel-3.jpeg",
    "/ombrelli.jpeg",
    "/light-tunnel-birdseye.jpeg",
    "/lights.jpeg",
    "/fiori-bianchi.jpeg",
    "/tableau.jpeg",
    "/brunch-2.jpeg",
    "/tavolo-limoni.jpeg",
    "/tavolo-limoni-2.jpeg",
  ];

  return (
    <section id="gallery" className="py-20 md:py-28 bg-zinc-50">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle
          title="Photo Gallery"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar sapien non lorem malesuada."
        />
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((src, i) => (
            <figure
              key={i}
              className="group overflow-hidden rounded-2xl ring-1 ring-zinc-200"
            >
              <img
                src={src}
                alt={`Wedding photo ${i + 1}`}
                className="h-52 w-full object-cover group-hover:scale-105 transition"
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Renderings() {
  const items = [
      "/renderings/2.jpeg",
      "/renderings/1.jpeg",
      "/renderings/3.jpeg",
  ];

  return (
    <section id="renderings" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle
          title="Le tue idee, il nostro design"
          subtitle="Creiamo rendering 3D delle tue idee rimanendo fedeli al tuo stile"
        />

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((r) => (
              <img
                src={r}
                alt={`Rendering ${r}`}
                className="h-96 w-full object-cover rounded-xl"
                loading="lazy"
              />
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const tiers = [
    {
      name: "Coordinazione matrimonio (solo giorno matrimonio)",
      price: "€400",
      desc:
        "Avete già preparato il matrimonio, confidate in noi per essere sereni durante il grande giorno.",
      features: [
        "Coordinazione dei vendors",
        "Coordinazione turntable",
        "Tableau de mariage",
        "Allestimenti minori"
      ],
    },
    {
      name: "Coordinazione evento extra",
      price: "€200",
      desc: "Per altri eventi (pizza party, brunch, welcome dinner, etc.).",
      features: [
        "Coordinazione dei vendors",
        "Coordinazione turntable",
        "Tableau de mariage",
        "Allestimenti minori"
      ],
    },
    {
      name: "Matrimonio completo",
      price: "€2000",
      desc:
        "Servizio completo di wedding planning e design per organizzare il tuo matrimonio da sogno.",
      features: [
        "Progettazione e Pianificazione",
        "Coordinazione",
        "Allestimenti",
        "Stationary",
        "Rendering",
        "Light & Flower design",
        "Comunicazione illimitata"
      ],
      highlight: true,
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 bg-zinc-50">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle
          eyebrow="Wedding Planner & Wedding Designer"
          title="I nostri prezzi"
          subtitle="Scegli il pacchetto che fa per te o contattaci per un preventivo personalizzato."
        />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <article
              key={t.name}
              className={
                "rounded-3xl p-6 border shadow-sm bg-white " +
                (t.highlight
                  ? "border-zinc-900 ring-2 ring-zinc-900"
                  : "border-zinc-200")
              }
            >
              <h3 className="font-serif text-xl text-zinc-900">{t.name}</h3>
              <p className="mt-1 text-3xl font-semibold">{t.price}</p>
              <p className="mt-2 text-sm text-foreground-400">{t.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 mt-0.5 text-zinc-900"
                    >
                      <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={
                  "mt-6 inline-block rounded-2xl px-5 py-3 text-sm transition " +
                  (t.highlight
                    ? "bg-zinc-900 text-white hover:bg-black"
                    : "border border-zinc-300 hover:bg-zinc-50")
                }
              >
                Enquire
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle
          eyebrow="Wedding Planner & Wedding Designer"
          title="Contattaci"
          subtitle="Compila il modulo sottostante o scrivici direttamente ad events@miluintuscany.com"
        />
        <div className="mt-12 sm:w-[50vw] w-full mx-auto grid gap-8 items-start">
          <form
            onSubmit={
              (e) => {
                e.preventDefault();
                console.log(e);
                const form = e.currentTarget;
                const data = Object.fromEntries(new FormData(form).entries());
                fetch(`https://lbbshreos4hukbynoznf5gdaoq0enplx.lambda-url.eu-south-1.on.aws/?${new URLSearchParams(data).toString()}`).then(() => {
                  window.Toastify({
                    text: "Messaggio inviato con successo!",
                    duration: 3000,
                    newWindow: true,
                    gravity: "top", // `top` or `bottom`
                    position: "center", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                  }).showToast();
                  form.reset();
                })
              }
            }
            className="rounded-3xl border border-zinc-200 p-6 bg-white shadow-sm"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <label className="text-sm">
                <span className="text-zinc-700">First name</span>
                <input
                  required
                  name="firstName"
                  className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-400"
                  placeholder="Jane"
                />
              </label>
              <label className="text-sm">
                <span className="text-zinc-700">Last name</span>
                <input
                  required
                  name="lastName"
                  className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-400"
                  placeholder="Doe"
                />
              </label>
            </div>
            <label className="text-sm block mt-4">
              <span className="text-zinc-700">Email</span>
              <input
                type="email"
                required
                name="email"
                className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-400"
                placeholder="you@example.com"
              />
            </label>
            <label className="text-sm block mt-4">
              <span className="text-zinc-700">Message</span>
              <textarea
                rows={5}
                name="message"
                defaultValue={"Ciao! Sarei interessato ad organizzare il mio matrimonio con voi."}
                className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-400"
                placeholder="Tell us about your vision…"
              />
            </label>
            <div className="mt-6 flex gap-3 items-center">
              <button
                type="submit"
                className="rounded-2xl cursor-pointer px-5 py-3 bg-zinc-900 text-white text-sm hover:bg-black transition"
              >
                Invia
              </button>
              <a
                href="mailto:hello@amelieweddings.example"
                className="text-sm text-foreground-400 hover:text-zinc-900"
              >
                o scrivici direttamente
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="text-zinc-900 selection:bg-zinc-900 selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Renderings />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
