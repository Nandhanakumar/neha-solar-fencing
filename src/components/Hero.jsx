import { Helmet } from 'react-helmet-async'
import heroBg from '../assets/solar-fencing1.png'
import '../index.css'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <>
      <Helmet>
        <title>NEHA Solar Power Fence | Best Solar Fencing Systems in Madurai</title>

        <meta
          name="description"
          content="Secure your property with NEHA Solar Power Fence. Premium, cost-effective, and smart solar-powered fencing systems for agricultural farms and industries across Madurai, Tamil Nadu."
        />

        <meta
          name="keywords"
          content="solar power fence Madurai, security fencing solutions, farm fencing Tamil Nadu, automatic power fences, cost effective solar guard"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="NEHA Solar Power Fence | Secure Today, Protect Tomorrow"
        />

        <meta
          property="og:description"
          content="Industrial and agricultural solar power fence systems engineered for maximum protection and durability."
        />

        <meta property="og:type" content="website" />
        <meta property="og:image" content={heroBg} />
      </Helmet>

      <section
        className='relative min-h-screen flex items-center overflow-hidden bg-cover bg-center px-6 sm:px-10 lg:px-20 py-24 bg-[#0a0a0a]'
        style={{
          backgroundImage: `linear-gradient(rgba(29, 29, 29, 0.88), rgba(29, 29, 29, 0.88)), url(${heroBg})`,
        }}
      >
        {/* Ambient Glow */}
        <div className='absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.08),transparent_50%)] pointer-events-none'></div>

        <div className='relative z-10 w-full max-w-7xl mx-auto'>

          {/* Badge */}
          <div className='flex items-center gap-3 mb-6'>
            <div className='bg-emerald-500 w-11 h-11 rounded-full flex items-center justify-center text-zinc-950 font-bold shadow-lg shadow-emerald-500/20'>
              <svg
                className="w-5 h-5 stroke-zinc-950 fill-none stroke-[2]"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </div>

            <p className='uppercase tracking-[4px] text-xs sm:text-sm text-zinc-400 font-medium'>
              Solar Fencing Solutions In Madurai
            </p>
          </div>

          {/* Heading */}
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] uppercase'>
            SECURE TODAY,
            <br />
            PROTECT <span className='text-emerald-400'>TOMORROW</span>
          </h1>

          {/* Description */}
          <p className='mt-8 text-base sm:text-lg text-zinc-300 max-w-2xl leading-8 font-light'>
            Advanced solar fencing systems for farms, industries and properties.
            Reliable, affordable and built to last.
          </p>

          {/* Buttons */}
          <div className='flex flex-col sm:flex-row gap-5 mt-10'>

            {/* Quote Button */}
            <Link
              to='/enquiry'
              className='group relative overflow-hidden bg-emerald-600 px-8 py-4 rounded-xl text-white font-semibold shadow-xl shadow-emerald-950/40 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-500 inline-flex items-center justify-center'
              aria-label='Get a free quote'
            >
              <span className='relative z-10 flex items-center justify-center gap-2'>
                Get Free Quote →
              </span>
            </Link>

            {/* WhatsApp Button */}
            <a
              href='https://wa.me/916383915966'
              target='_blank'
              rel='noopener noreferrer'
              className='group border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm px-8 py-4 rounded-xl text-white font-semibold relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-zinc-900/60 inline-flex items-center justify-center'
              aria-label='Contact us via WhatsApp'
            >
              <span className='relative z-10'>
                WhatsApp Us
              </span>
            </a>

          </div>

          {/* Feature Cards */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16'>

            <div className='bg-zinc-900/40 backdrop-blur-md p-6 rounded-2xl border border-white/5 hover:border-emerald-500/20 transition duration-300 hover:-translate-y-2'>
              <h3 className='text-emerald-400 font-bold text-lg tracking-tight'>
                Powered by Solar
              </h3>

              <p className='text-zinc-300 text-sm mt-3 leading-6 font-light'>
                100% solar energy with no electricity cost
              </p>
            </div>

            <div className='bg-zinc-900/40 backdrop-blur-md p-6 rounded-2xl border border-white/5 hover:border-emerald-500/20 transition duration-300 hover:-translate-y-2'>
              <h3 className='text-emerald-400 font-bold text-lg tracking-tight'>
                High Security
              </h3>

              <p className='text-zinc-300 text-sm mt-3 leading-6 font-light'>
                Strong deterrent against intruders
              </p>
            </div>

            <div className='bg-zinc-900/40 backdrop-blur-md p-6 rounded-2xl border border-white/5 hover:border-emerald-500/20 transition duration-300 hover:-translate-y-2'>
              <h3 className='text-emerald-400 font-bold text-lg tracking-tight'>
                Low Maintenance
              </h3>

              <p className='text-zinc-300 text-sm mt-3 leading-6 font-light'>
                Built to last with minimal upkeep
              </p>
            </div>

            <div className='bg-zinc-900/40 backdrop-blur-md p-6 rounded-2xl border border-white/5 hover:border-emerald-500/20 transition duration-300 hover:-translate-y-2'>
              <h3 className='text-emerald-400 font-bold text-lg tracking-tight'>
                24/7 Protection
              </h3>

              <p className='text-zinc-300 text-sm mt-3 leading-6 font-light'>
                Round-the-clock security for your land
              </p>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}