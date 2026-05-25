import { Helmet } from 'react-helmet-async'

export default function Footer() {
  return (
    <>
      <Helmet>
        <title>
          NEHA Solar Power Fence | Solar Fencing in Madurai
        </title>

        <meta
          name='description'
          content='NEHA Solar Power Fence provides solar fencing, chain link fencing and ready-made compound wall fencing services in Madurai, Tamil Nadu.'
        />

        <meta
          name='keywords'
          content='solar fencing Madurai, chain link fence, compound wall fencing, solar power fence Tamil Nadu, fencing services'
        />

        <meta
          property='og:title'
          content='NEHA Solar Power Fence'
        />

        <meta
          property='og:description'
          content='Professional solar fencing and security fencing solutions in Madurai.'
        />
      </Helmet>

      <footer className='bg-[#050b13] border-t border-white/10 py-20 px-6 sm:px-10 lg:px-20 overflow-hidden'>

        <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14'>

          {/* Company */}
          <div>

            <h2 className='text-3xl font-bold text-white leading-tight'>
              NEHA
            </h2>

            <p className='text-emerald-400 tracking-[3px] uppercase text-sm mt-2'>
              Solar Power Fence
            </p>

            <p className='text-gray-400 mt-6 leading-7 text-sm'>
              Professional solar fencing and security fencing solutions
              for farms, industries and residential properties across
              Madurai and Tamil Nadu.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className='text-xl font-bold text-white mb-6'>
              Quick Links
            </h3>

            <ul className='space-y-4 text-gray-400 text-sm'>

              <li className='hover:text-green-400 transition duration-300 cursor-pointer'>
                Home
              </li>

              <li className='hover:text-green-400 transition duration-300 cursor-pointer'>
                Services
              </li>

              <li className='hover:text-green-400 transition duration-300 cursor-pointer'>
                Projects
              </li>

              <li className='hover:text-green-400 transition duration-300 cursor-pointer'>
                Testimonials
              </li>

              <li className='hover:text-green-400 transition duration-300 cursor-pointer'>
                Contact
              </li>

            </ul>

          </div>

          {/* Services */}
          <div>

            <h3 className='text-xl font-bold text-white mb-6'>
              Services
            </h3>

            <ul className='space-y-4 text-gray-400 text-sm'>

              <li className='hover:text-green-400 transition duration-300'>
                Solar Fence
              </li>

              <li className='hover:text-green-400 transition duration-300'>
                Chain Link Fence
              </li>

              <li className='hover:text-green-400 transition duration-300'>
                Readymade Compound Wall Fence
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className='text-xl font-bold text-white mb-6'>
              Contact Info
            </h3>

            <ul className='space-y-5 text-gray-400 text-sm'>

              <li>
                📍 MMA Nagar, Sangaiya Nagar,
                <br />
                Pothumbu, Madurai - 625018
              </li>

              <li>
                📞 +91 63839 15966
                <br />
                +91 93858 51443
                <br />
                +91 78718 51443
              </li>

              <li>
                💬 WhatsApp:
                <br />
                6383915966,
                9385851443,
                7871851443
              </li>

              <li className='break-all'>
                ✉️ nagarajneha90@gmail.com
              </li>

            </ul>

          </div>

        </div>

        {/* Bottom */}
        <div className='border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-5'>

          <p className='text-gray-500 text-sm text-center md:text-left'>
            © 2026 NEHA Solar Power Fence. All Rights Reserved.
          </p>

          <p className='text-gray-500 text-sm'>
            Designed by SarvX Tech 
          </p>

        </div>

      </footer>
    </>
  )
}