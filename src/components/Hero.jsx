import { Helmet } from 'react-helmet-async'
import heroBg from '../assets/solar-fencing1.png'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <>
      <Helmet>
        <title>NEHA Solar Power Fence | Best Solar Fencing Systems in Madurai</title>

        <meta
          name="description"
          content="Secure your property with NEHA Solar Power Fence. Premium, cost-effective solar fencing systems for farms and industries across Tamil Nadu."
        />

        <meta
          name="keywords"
          content="solar fencing Madurai, farm fencing Tamil Nadu, solar power fence India"
        />

        <meta property="og:title" content="NEHA Solar Power Fence" />
        <meta property="og:description" content="Smart solar fencing systems for total protection." />

        {/* FIX: OG image should be absolute URL in production (important for SEO) */}
        <meta property="og:image" content={heroBg} />
      </Helmet>

      <section
        className="relative min-h-screen flex items-center overflow-hidden px-6 sm:px-10 lg:px-20 py-24 bg-[#0a0a0a]"
        style={{
          backgroundImage: `linear-gradient(rgba(20,20,20,0.88), rgba(20,20,20,0.88)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >

        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.08),transparent_55%)] pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl mx-auto">

          {/* Badge */}
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-emerald-500 w-10 h-10 rounded-full flex items-center justify-center text-zinc-950 font-bold">
              ⚡
            </div>

            <p className="uppercase tracking-[4px] text-xs sm:text-sm text-zinc-400">
              Solar Fencing Solutions In Madurai
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight uppercase">
            SECURE TODAY,
            <br />
            PROTECT <span className="text-emerald-400">TOMORROW</span>
          </h1>

          {/* Description */}
          <p className="mt-8 text-base sm:text-lg text-zinc-300 max-w-2xl leading-8 font-light">
            Advanced solar fencing systems for farms and industries. Reliable, affordable and built to last.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 mt-10">

            <Link
              to="/enquiry"
              className="
                bg-emerald-600 px-8 py-4 rounded-xl text-white font-semibold
                transition-all duration-300
                hover:bg-emerald-500 hover:-translate-y-1
                active:scale-95
                inline-flex justify-center items-center
              "
            >
              Get Free Quote →
            </Link>

            <a
              href="https://wa.me/916383915966"
              target="_blank"
              rel="noopener noreferrer"
              className="
                border border-zinc-800 bg-zinc-900/30 px-8 py-4 rounded-xl text-white font-semibold
                transition-all duration-300
                hover:border-emerald-500/40 hover:bg-zinc-900/60 hover:-translate-y-1
                active:scale-95
                inline-flex justify-center items-center
              "
            >
              WhatsApp Us
            </a>

          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">

            {[
              {
                title: "Powered by Solar",
                desc: "100% solar energy with no electricity cost",
              },
              {
                title: "High Security",
                desc: "Strong deterrent against intruders",
              },
              {
                title: "Low Maintenance",
                desc: "Built to last with minimal upkeep",
              },
              {
                title: "24/7 Protection",
                desc: "Round-the-clock security for your land",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
                  bg-zinc-900/40 p-6 rounded-2xl border border-white/5
                  transition-all duration-300
                  hover:-translate-y-2 hover:border-emerald-500/20
                  active:scale-95
                "
              >
                <h3 className="text-emerald-400 font-bold text-lg">
                  {item.title}
                </h3>

                <p className="text-zinc-300 text-sm mt-3 leading-6 font-light">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>
    </>
  )
}