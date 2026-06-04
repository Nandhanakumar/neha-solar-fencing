import { Helmet } from 'react-helmet-async'

const features = [
  {
    title: 'High Quality',
    desc: 'Premium quality materials and durable fencing systems built for long-lasting protection.',
    icon: (
      <svg className="w-6 h-6 stroke-zinc-400 group-hover:stroke-emerald-400 transition-colors duration-300 fill-none stroke-[1.5]" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Affordable Pricing',
    desc: 'Cost effective fencing solutions with the best value for farms and industries.',
    icon: (
      <svg className="w-6 h-6 stroke-zinc-400 group-hover:stroke-emerald-400 transition-colors duration-300 fill-none stroke-[1.5]" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5h16.5M5.25 4.5V10.5m13.5-6v6m-12 0h10.5m-10.5 0a3.75 3.75 0 107.5 0m-7.5 0V18m7.5-7.5v6.75m-7.5 0h7.5m-7.5 0a3.75 3.75 0 117.5 0m-7.5 0v1.5m7.5-1.5v1.5" />
      </svg>
    ),
  },
  {
    title: 'Expert Team',
    desc: 'Experienced technicians delivering professional installation and support services.',
    icon: (
      <svg className="w-6 h-6 stroke-zinc-400 group-hover:stroke-emerald-400 transition-colors duration-300 fill-none stroke-[1.5]" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.83-5.83m0 0a2.953 2.953 0 01-3.623-3.623L19.5 3.75h-3.375c-.414 0-.75.336-.75.75V9l-5.25 5.25m3.75 3.75l.25-.25V15h-1.5v1.5h-.75V15h-1.5v1.5H7.5v-1.5h-.75V15H5.25v1.5H3.75a.75.75 0 00-.75.75V21h6.75c.414 0 .75-.336.75-.75V16.5h1.5v-1.33z" />
      </svg>
    ),
  },
  {
    title: 'Quick Support',
    desc: 'Fast customer assistance and maintenance support whenever you need help.',
    icon: (
      <svg className="w-6 h-6 stroke-zinc-400 group-hover:stroke-emerald-400 transition-colors duration-300 fill-none stroke-[1.5]" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
]

export default function WhyChoose() {
  return (
    <>
      <Helmet>
        <title>Why Choose NEHA Solar Power Fence | Solar Fencing Madurai</title>
        <meta name='description' content='Discover why customers choose NEHA Solar Power Fence for reliable solar fencing, expert installation and affordable security solutions in Madurai.' />
        <meta name='keywords' content='solar fencing Madurai, fencing company Tamil Nadu, farm fencing, industrial fencing, solar fence installation' />
        <meta property='og:title' content='Why Choose NEHA Solar Power Fence' />
        <meta property='og:description' content='Professional solar fencing solutions with expert support and high quality installation services.' />
      </Helmet>

      <section
        className='relative py-28 px-6 sm:px-12 lg:px-24 bg-cover bg-center overflow-hidden bg-[#0a0a0a]'
        style={{
          // Pulled overlay back to 0.70 / 0.80 opacity so the forest silhouette is clearly visible
          backgroundImage:
            "linear-gradient(rgba(10, 10, 10, 0.70), rgba(10, 10, 10, 0.80)), url('https://images.unsplash.com/photo-1473448912268-2022ce9509d8')",
        }}
      >
        {/* Crisp Emerald Ambient Spot Flare */}
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.06),transparent_40%)] pointer-events-none' />

        <div className='relative z-10 max-w-7xl mx-auto'>
          
          {/* Header */}
          <div className='text-center max-w-3xl mx-auto'>
            <span className='inline-flex items-center gap-2 text-emerald-400 font-semibold tracking-widest uppercase text-xs bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/10'>
              <span className='w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse' />
              Why Choose Us
            </span>

            <h2 className='text-4xl sm:text-5xl font-extrabold text-white mt-6 tracking-tight sm:leading-tight uppercase'>
              Why We Are <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200'>Different</span>
            </h2>

            <p className='text-zinc-400 mt-6 leading-relaxed text-base sm:text-lg font-light'>
              We provide advanced solar fencing systems with reliable protection, professional installation, and dedicated customer support for agricultural, industrial, and residential sectors.
            </p>
          </div>

          {/* Cards Display Grid */}
           <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20'>

            {features.map((item, index) => (
              <div
                key={index}
                className='group relative bg-zinc-950/40 backdrop-blur-md border border-white/5 rounded-2xl p-8 transition-all duration-300 ease-out

                hover:-translate-y-2
                hover:scale-[1.02]
                hover:border-emerald-400/30
                hover:bg-zinc-900/70
                hover:shadow-[0_20px_60px_rgba(16,185,129,0.15)]

                active:scale-[0.98]
              '
              >

                <div className='w-12 h-12 rounded-xl bg-zinc-900/80 border border-white/5 flex items-center justify-center mb-6 transition-all duration-300 group-hover:border-emerald-500/20 group-hover:bg-emerald-950/20'>
                  {item.icon}
                </div>

                <h3 className='text-lg font-semibold text-white mb-3 transition group-hover:text-emerald-300'>
                  {item.title}
                </h3>

                <p className='text-zinc-400 text-sm leading-relaxed transition group-hover:text-zinc-300'>
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