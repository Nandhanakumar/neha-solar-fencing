import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import fenceBg from '../assets/solar-fencing-bg.png'

export default function CTA() {

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactAction",
    "name": "Request Solar Fencing Quote",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "tel:6383915966"
    }
  }

  return (
    <>
      <Helmet>
        <title>Get Free Solar Fencing Quote | NEHA Solar Power Fence</title>

        <meta
          name="description"
          content="Contact NEHA Solar Power Fence for professional solar fencing, chain link fencing and security fencing solutions in Madurai and Tamil Nadu."
        />

        <meta
          name="keywords"
          content="solar fencing Madurai, fencing quote Tamil Nadu, chain link fencing India"
        />

        <meta property="og:title" content="Get A Free Solar Fencing Quote" />
        <meta property="og:description" content="Secure your property with advanced solar fencing solutions." />

        <script type="application/ld+json">
          {JSON.stringify(contactSchema)}
        </script>
      </Helmet>

      <section className="relative overflow-hidden py-24 px-6 sm:px-10 lg:px-20 bg-slate-950 border-t border-white/5">

        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(16,185,129,0.06),transparent_55%)] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* LEFT */}
          <div className="max-w-2xl text-center lg:text-left">

            <p className="text-emerald-400 uppercase tracking-[4px] text-xs sm:text-sm font-semibold mb-5">
              Free Consultation
            </p>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight uppercase">
              Get A Free Quote
              <br />
              <span className="text-slate-400">For Your Property</span>
            </h2>

            <p className="mt-7 text-slate-300 text-base sm:text-lg leading-8 font-light">
              Secure your farms, industries and properties with advanced solar fencing systems built for durability and protection.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 mt-10 justify-center lg:justify-start">

              <Link
                to="/enquiry"
                className="
                  bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold
                  transition-all duration-300
                  hover:bg-emerald-500 hover:-translate-y-1
                  active:scale-95
                  text-center
                "
              >
                Contact Us
              </Link>

              <a
                href="tel:6383915966"
                className="
                  border border-slate-800 bg-slate-900/20 text-slate-200 px-8 py-4 rounded-xl font-semibold
                  transition-all duration-300
                  hover:bg-slate-900/60 hover:border-slate-600 hover:text-white
                  active:scale-95
                  text-center
                "
              >
                Call Now
              </a>

            </div>

          </div>

          {/* RIGHT - STRAIGHT IMAGE (FIXED) */}
          <div className="relative w-full max-w-[500px] aspect-[4/3] lg:aspect-square flex justify-center items-center">

            {/* Glow */}
            <div className="absolute w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-3xl" />

            {/* IMAGE CARD (STRAIGHT) */}
            <div className="relative w-full h-full overflow-hidden border border-emerald-500/20 shadow-2xl group">

              <div
                className="
                  w-full h-full
                  bg-cover bg-center
                  grayscale opacity-60
                  transition-all duration-700
                  group-hover:scale-105
                  group-hover:grayscale-0
                  group-hover:opacity-80
                "
                style={{ backgroundImage: `url(${fenceBg})` }}
              />

              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950 opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950 opacity-60" />

              {/* Pulse line */}
       {/* Laser Lines */}
{/* Laser Lines */}
<div className="absolute top-[30%] left-0 w-full">
  <div className="laser-line" />
</div>

<div className="absolute top-[50%] left-0 w-full">
  <div className="laser-line [animation-delay:1.2s]" />
</div>

<div className="absolute top-[70%] left-0 w-full">
  <div className="laser-line [animation-delay:2.4s]" />
</div>

              {/* Label */}
              <div className="absolute bottom-6 left-6 flex items-center gap-2 text-[10px] text-emerald-400 tracking-widest uppercase">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                Live Array Feed
              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  )
}