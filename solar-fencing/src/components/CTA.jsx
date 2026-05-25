import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import fenceBg from '../assets/solar-fencing-bg.png' // Utilizing your existing high-res structural asset

export default function CTA() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "Action",
    "name": "Request Solar Fencing Quote",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "tel:6383915966",
      "actionPlatform": [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform"
      ]
    }
  }

  return (
    <>
      <Helmet>
        <title>Get Free Solar Fencing Quote | NEHA Solar Power Fence</title>
        <meta name='description' content='Contact NEHA Solar Power Fence for professional solar fencing, chain link fencing and security fencing solutions in Madurai and Tamil Nadu.' />
        <meta name='keywords' content='solar fencing Madurai, free fencing quote, solar fence installation, chain link fencing Tamil Nadu' />
        <meta property='og:title' content='Get A Free Solar Fencing Quote' />
        <meta property='og:description' content='Secure your property with advanced solar fencing solutions from NEHA Solar Power Fence.' />
        <script type="application/ld+json">
          {JSON.stringify(contactSchema)}
        </script>
      </Helmet>

      {/* Laser line tracing styling to simulate a live secure voltage field running down the image */}
      <style>{`
        @keyframes laserScan {
          0% { left: -100%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        .animate-laserScan {
          animation: laserScan 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>

      <section className='relative overflow-hidden py-24 px-6 sm:px-10 lg:px-20 bg-slate-950 border-t border-white/5'>
        
        {/* Ambient Left Backlight Glow */}
        <div className='absolute top-1/2 left-0 -translate-y-1/2 w-[40%] h-[60%] bg-[radial-gradient(circle_at_left,rgba(16,185,129,0.06),transparent_50%)] pointer-events-none' />

        <div className='relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16'>

          {/* Left Block Content - Structural Text Elements */}
          <div className='max-w-2xl text-center lg:text-left'>
            <p className='text-emerald-400 uppercase tracking-[4px] text-xs sm:text-sm font-semibold mb-5'>
              Free Consultation
            </p>

            <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] uppercase tracking-tight'>
              Get A Free Quote
              <br />
              <span className='text-slate-400'>For Your Property</span>
            </h2>

            <p className='mt-7 text-slate-300 text-base sm:text-lg leading-8 font-light'>
              Secure your farms, industries and properties with advanced solar fencing systems designed for long-lasting protection and reliability.
            </p>

            {/* Premium Action Triggers */}
            <div className='flex flex-col sm:flex-row gap-5 mt-10 justify-center lg:justify-start'>
              <Link
                to='/enquiry'
                className='group relative overflow-hidden bg-emerald-600 text-white text-sm font-semibold tracking-wide px-8 py-4 rounded-xl transition-all duration-300 shadow-xl shadow-emerald-950/20 hover:-translate-y-0.5 hover:bg-emerald-500 text-center'
              >
                <span className='relative z-10'>Contact Us</span>
              </Link>

              <a
                href='tel:6383915966'
                className='border border-slate-800 bg-slate-900/20 backdrop-blur-sm text-slate-200 text-sm font-semibold tracking-wide px-8 py-4 rounded-xl hover:bg-slate-900/60 hover:text-white hover:border-slate-600 transition duration-300 text-center'
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Right Visual Module - Premium Slanted Asymmetric Photographic Array */}
          <div className='relative w-full max-w-[500px] aspect-[4/3] lg:aspect-square flex justify-center items-center'>
            
            {/* Soft Ambient Vector Glow behind the framework */}
            <div className='absolute w-[350px] h-[350px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none' />

            {/* The Slanted Asymmetric Image Container Mask */}
            <div className='relative w-full h-full overflow-hidden [skewX(-6deg)] border-l-2 border-r-2 border-emerald-500/20 shadow-[0_30px_70px_rgba(0,0,0,0.8)] group'>
              
              {/* Un-skewing the inner image content layout so the actual photo stays level and realistic */}
              <div 
                className='w-[120%] h-full -ml-[10%] [skewX(6deg)] bg-cover bg-center grayscale opacity-60 transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-80'
                style={{ backgroundImage: `url(${fenceBg})` }}
              />

              {/* Advanced Vignette Overlays directly over the photo structure */}
              <div className='absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950 opacity-90' />
              <div className='absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950 opacity-60' />

              {/* Dynamic Laser Scanning Array Layer representing Active High-Voltage Pulse */}
              <div className='absolute top-1/2 left-0 -translate-y-1/2 w-[35%] h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent blur-[1px] animate-laserScan pointer-events-none' />
              <div className='absolute top-1/3 left-0 -translate-y-1/2 w-[35%] h-[1px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-laserScan [animation-delay:1.5s] pointer-events-none' />
              <div className='absolute top-2/3 left-0 -translate-y-1/2 w-[35%] h-[1px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-laserScan [animation-delay:0.8s] pointer-events-none' />

              {/* Subtle Tech Status Overlay (Floating directly over image canvas) */}
              <div className="absolute bottom-6 left-8 [skewX(6deg)] flex items-center gap-2 font-mono text-[10px] text-emerald-400/80 tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live Array Feed
              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  )
}