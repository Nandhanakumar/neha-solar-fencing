import fencingBg from '../assets/fence1.png'

const services = [
  {
    title: 'Solar Fencing',
    desc: 'High quality solar fencing systems for farms and residential properties.',
    icon: (
      <svg className="w-6 h-6 stroke-zinc-400 group-hover:stroke-emerald-400 transition-colors duration-300 fill-none stroke-[1.5]" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'Farm Fencing',
    desc: 'Protect your crops and livestock from wild animals and intruders.',
     icon: ( <svg className="w-6 h-6 stroke-zinc-400 group-hover:stroke-emerald-400 transition-colors duration-300 fill-none stroke-[1.5]" viewBox="0 0 24 24"> <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18M6.343 6.343l11.314 11.314M6.343 17.657L17.657 6.343" /> </svg> ),
  },
  {
    title: 'Industrial Security',
    desc: 'Advanced high-tension security systems for commercial properties.',
   icon: ( <svg className="w-6 h-6 stroke-zinc-400 group-hover:stroke-emerald-400 transition-colors duration-300 fill-none stroke-[1.5]" viewBox="0 0 24 24"> <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /> </svg> ),
  },
  {
    title: 'Professional Installation',
    desc: 'Precision installation by certified technicians with quality assurance.',
   icon: ( <svg className="w-6 h-6 stroke-zinc-400 group-hover:stroke-emerald-400 transition-colors duration-300 fill-none stroke-[1.5]" viewBox="0 0 24 24"> <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A1.5 1.5 0 0019.5 21l2.58-2.58a1.5 1.5 0 000-2.12l-5.83-5.83M11.42 15.17l2.83-2.83M11.42 15.17L4.12 7.88a3 3 0 00-4.24 4.24l7.29 7.29m4.24-4.24l3.18-3.18M14.25 12.34L21.75 4.84a2.25 2.25 0 00-3.18-3.18l-7.5 7.5M14.25 12.34L11.42 15.17" /> </svg> ),
  },
  {
    title: 'System Maintenance',
    desc: 'Regular maintenance and diagnostics to ensure long-term reliability.',
    icon: ( <svg className="w-6 h-6 stroke-zinc-400 group-hover:stroke-emerald-400 transition-colors duration-300 fill-none stroke-[1.5]" viewBox="0 0 24 24"> <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127c.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l.546.946a1.125 1.125 0 01-.26 1.398l-.966.736a1.123 1.123 0 00-.422 1.02c.005.083.007.165.007.248 0 .083-.002.165-.007.248a1.124 1.124 0 00.422 1.02l.966.735a1.125 1.125 0 01.26 1.399l-.546.946a1.125 1.125 0 01-1.37.491l-1.216-.456c-.356-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.213-1.281a1.125 1.125 0 00-.646-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-.546-.947a1.125 1.125 0 01.26-1.398l.967-.736A1.125 1.125 0 005.52 12c0-.083.002-.165.006-.248a1.124 1.124 0 00-.422-1.02l-.966-.735a1.125 1.125 0 01-.26-1.399l.546-.946a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.645-.869l.214-1.28z" /> <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /> </svg> ),
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-28 px-6 sm:px-12 lg:px-24 overflow-hidden bg-[#0a0a0a] bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(10,10,10,0.78), rgba(10,10,10,0.88)), url(${fencingBg})`,
      }}
    >

      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.06),transparent_45%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          <span className="inline-flex items-center gap-2 text-emerald-400 font-semibold tracking-widest uppercase text-xs bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/10">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Our Core Competencies
          </span>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-6 uppercase">
            High-Performance <span className="text-emerald-300">Fencing Solutions</span>
          </h2>

          <p className="text-zinc-400 mt-6 text-base sm:text-lg font-light">
            Engineered fencing solutions for farms, industries, and commercial properties across Tamil Nadu.
          </p>

        </div>

        {/* GRID (FIXED RESPONSIVE STRUCTURE) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((item, index) => (
            <article
              key={index}
              className="
                group relative bg-zinc-950/40 backdrop-blur-md
                border border-white/5 rounded-2xl p-8
                transition-all duration-300
                hover:-translate-y-2
                hover:border-emerald-500/20
                hover:bg-zinc-900/60
              "
            >

              {/* Glow hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-b from-white/5 to-transparent rounded-2xl pointer-events-none" />

              {/* ICON */}
              <div className="w-12 h-12 rounded-xl bg-zinc-900/80 border border-white/5 flex items-center justify-center mb-6 group-hover:border-emerald-500/20 transition">
                {item.icon}
              </div>

              {/* TEXT */}
              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-emerald-300 transition">
                {item.title}
              </h3>

              <p className="text-zinc-400 text-sm leading-relaxed font-light group-hover:text-zinc-300 transition">
                {item.desc}
              </p>

            </article>
          ))}

        </div>

      </div>
    </section>
  )
}