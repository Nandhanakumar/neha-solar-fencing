import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import enquiryBanner from '../assets/enquiry-banner.png'

export default function Enquiry() {
  return (
    <>
      <Helmet>
        <title>Contact & Enquiry | NEHA Solar Power Fence Madurai</title>

        <meta
          name='description'
          content='Get a free quote from NEHA Solar Power Fence. Contact our Madurai office for high-quality farm, industrial, and readymade compound wall fencing services.'
        />
      </Helmet>

      <Navbar />

      <section className='bg-[#0a0a0a] min-h-screen py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-20 relative overflow-hidden'>

        {/* Ambient Background */}
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.04),transparent_45%)] pointer-events-none' />

        <div className='max-w-7xl mx-auto relative z-10'>

          {/* Banner */}
          <div
            className='rounded-3xl overflow-hidden relative min-h-[320px] sm:min-h-[360px] flex items-center px-6 sm:px-10 lg:px-14 py-10 border border-white/5'
            style={{
              backgroundImage: `linear-gradient(rgba(10,10,10,0.72), rgba(10,10,10,0.86)), url(${enquiryBanner})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >

            <div className='max-w-3xl'>

              <span className='inline-flex items-center gap-2 text-emerald-400 font-semibold tracking-[3px] uppercase text-[10px] sm:text-xs bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/10'>

                <span className='w-1.5 h-1.5 rounded-full bg-emerald-400' />

                Online Desk

              </span>

              <h1 className='text-3xl sm:text-5xl lg:text-6xl font-black text-white mt-5 tracking-tight uppercase leading-tight'>

                Request An{' '}

                <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200'>
                  Enquiry
                </span>

              </h1>

              <p className='text-zinc-400 mt-5 text-sm sm:text-base lg:text-lg font-light leading-7 max-w-2xl'>
                Fill out the secure design profile map below and our engineering estimation technicians will establish communication shortly.
              </p>

            </div>

          </div>

          {/* Main Grid */}
          <div className='grid grid-cols-1 xl:grid-cols-2 gap-10 lg:gap-12 mt-12 lg:mt-16'>

            {/* LEFT */}
            <div className='bg-zinc-950/40 backdrop-blur-md p-6 sm:p-8 lg:p-10 rounded-3xl border border-white/5 flex flex-col justify-between'>

              <div>

                <span className='text-emerald-400 font-semibold uppercase tracking-wider text-xs block mb-3'>
                  Get In Touch
                </span>

                <h2 className='text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight uppercase leading-tight'>
                  We Are Here To
                  <br className='hidden sm:block' />
                  Secure Your Assets
                </h2>

                <p className='text-zinc-400 mt-5 leading-7 font-light text-sm sm:text-base'>
                  Contact the direct headquarters desk of{' '}
                  <strong className='text-zinc-200 font-semibold'>
                    NEHA SOLAR POWER FENCE
                  </strong>{' '}
                  for architectural layout mapping, farm safety grids, chain links, and ready-made precast concrete compound panel boundaries in Madurai and across Tamil Nadu.
                </p>

                {/* Contact Cards */}
                <div className='space-y-4 mt-8'>

                  {/* Phone */}
                  <div className='flex flex-col sm:flex-row items-start gap-5 border border-white/5 p-5 rounded-2xl bg-zinc-900/20 hover:border-emerald-500/20 transition-all duration-300'>

                    <div className='bg-zinc-900 border border-white/5 text-emerald-400 p-3.5 rounded-xl shrink-0'>
                      <svg className='w-6 h-6 fill-none stroke-current stroke-[1.5]' viewBox='0 0 24 24'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.557-5.273-4.006-6.832-6.832l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.75z'
                        />
                      </svg>
                    </div>

                    <div>

                      <h3 className='font-semibold text-lg text-white'>
                        Call Now
                      </h3>

                      <div className='text-zinc-400 mt-2 flex flex-col gap-2 text-sm sm:text-base font-light break-all'>

                        <a
                          href='tel:+916383915966'
                          className='hover:text-emerald-400 transition'
                        >
                          +91 63839 15966
                        </a>

                        <a
                          href='tel:+919385851443'
                          className='hover:text-emerald-400 transition'
                        >
                          +91 93858 51443
                        </a>

                        <a
                          href='tel:+917871851443'
                          className='hover:text-emerald-400 transition'
                        >
                          +91 78718 51443
                        </a>

                      </div>

                    </div>

                  </div>

                  {/* WhatsApp */}
                  <div className='flex flex-col sm:flex-row items-start gap-5 border border-white/5 p-5 rounded-2xl bg-zinc-900/20 hover:border-emerald-500/20 transition-all duration-300'>

                    <div className='bg-zinc-900 border border-white/5 text-emerald-400 p-3.5 rounded-xl shrink-0'>
                      <svg className='w-6 h-6 fill-none stroke-current stroke-[1.5]' viewBox='0 0 24 24'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641l-.318 1.235c-.149.58.419 1.13 1.09.92l1.603-.546c.408-.14.897-.009 1.264.26A9.167 9.167 0 0011.996 20.25h.004z'
                        />
                      </svg>
                    </div>

                    <div>

                      <h3 className='font-semibold text-lg text-white'>
                        WhatsApp Support
                      </h3>

                      <div className='text-zinc-400 mt-2 flex flex-col gap-2 text-sm sm:text-base font-light break-all'>

                        <a
                          href='https://wa.me/916383915966'
                          target='_blank'
                          rel='noreferrer'
                          className='hover:text-emerald-400 transition'
                        >
                          +91 63839 15966
                        </a>

                        <a
                          href='https://wa.me/919385851443'
                          target='_blank'
                          rel='noreferrer'
                          className='hover:text-emerald-400 transition'
                        >
                          +91 93858 51443
                        </a>

                        <a
                          href='https://wa.me/917871851443'
                          target='_blank'
                          rel='noreferrer'
                          className='hover:text-emerald-400 transition'
                        >
                          +91 78718 51443
                        </a>

                      </div>

                    </div>

                  </div>

                  {/* Email */}
                  <div className='flex flex-col sm:flex-row items-start gap-5 border border-white/5 p-5 rounded-2xl bg-zinc-900/20 hover:border-emerald-500/20 transition-all duration-300'>

                    <div className='bg-zinc-900 border border-white/5 text-emerald-400 p-3.5 rounded-xl shrink-0'>
                      <svg className='w-6 h-6 fill-none stroke-current stroke-[1.5]' viewBox='0 0 24 24'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
                        />
                      </svg>
                    </div>

                    <div>

                      <h3 className='font-semibold text-lg text-white'>
                        Email Inbox
                      </h3>

                      <a
                        href='mailto:NAGARAJNEHA90@GMAIL.COM'
                        className='text-zinc-400 mt-2 text-sm sm:text-base font-light hover:text-emerald-400 transition break-all inline-block'
                      >
                        NAGARAJNEHA90@GMAIL.COM
                      </a>

                    </div>

                  </div>

                  {/* Address */}
                  <div className='flex flex-col sm:flex-row items-start gap-5 border border-white/5 p-5 rounded-2xl bg-zinc-900/20 hover:border-emerald-500/20 transition-all duration-300'>

                    <div className='bg-zinc-900 border border-white/5 text-emerald-400 p-3.5 rounded-xl shrink-0'>
                      <svg className='w-6 h-6 fill-none stroke-current stroke-[1.5]' viewBox='0 0 24 24'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
                        />
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z'
                        />
                      </svg>
                    </div>

                    <div>

                      <h3 className='font-semibold text-lg text-white'>
                        Office Address
                      </h3>

                      <p className='text-zinc-400 mt-2 text-sm leading-7 font-light uppercase tracking-wide'>
                        MMA Nagar, Sangaiya Nagar,
                        <br />
                        Pothumbu, Madurai - 625018.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

              {/* Trust Badges */}
              <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 pt-6 border-t border-white/5'>

                <div className='bg-zinc-900/40 p-4 rounded-xl text-center border border-white/5'>
                  <h4 className='text-emerald-400 font-bold text-sm uppercase'>
                    100% Secure
                  </h4>

                  <p className='text-zinc-500 text-xs mt-1'>
                    Data Encrypted
                  </p>
                </div>

                <div className='bg-zinc-900/40 p-4 rounded-xl text-center border border-white/5'>
                  <h4 className='text-emerald-400 font-bold text-sm uppercase'>
                    Fast Reply
                  </h4>

                  <p className='text-zinc-500 text-xs mt-1'>
                    Within 24 Hours
                  </p>
                </div>

                <div className='bg-zinc-900/40 p-4 rounded-xl text-center border border-white/5'>
                  <h4 className='text-emerald-400 font-bold text-sm uppercase'>
                    Free Quote
                  </h4>

                  <p className='text-zinc-500 text-xs mt-1'>
                    Zero Commits
                  </p>
                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div className='bg-zinc-950/40 backdrop-blur-md p-6 sm:p-8 lg:p-10 rounded-3xl border border-white/5 shadow-2xl'>

              <h2 className='text-2xl sm:text-3xl font-extrabold text-white mb-8 uppercase'>
                Send Your Specification
              </h2>

     <form
  action="https://formsubmit.co/nagarajneha90@gmail.com"
  method="POST"
  className="space-y-6"
>

  {/* FormSubmit settings */}
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_subject" value="New Enquiry - NEHA Solar Fencing Website" />

  {/* Name */}
  <div>
    <label className='block mb-2 font-medium text-xs uppercase tracking-widest text-zinc-400'>
      Your Name
    </label>

    <input
      type='text'
      name="name"
      required
      placeholder='Enter legal or corporate identity name'
      className='w-full bg-zinc-900/50 border border-white/5 rounded-2xl p-4 text-white text-sm placeholder:text-zinc-600 outline-none focus:border-emerald-500/50'
    />
  </div>

  {/* Phone + Email */}
  <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>

    <div>
      <label className='block mb-2 font-medium text-xs uppercase tracking-widest text-zinc-400'>
        Phone Number
      </label>

      <input
        type='tel'
        name="phone"
        required
        placeholder='Mobile contact number'
        className='w-full bg-zinc-900/50 border border-white/5 rounded-2xl p-4 text-white text-sm placeholder:text-zinc-600 outline-none focus:border-emerald-500/50'
      />
    </div>

    <div>
      <label className='block mb-2 font-medium text-xs uppercase tracking-widest text-zinc-400'>
        Email Address
      </label>

      <input
        type='email'
        name="email"
        required
        placeholder='name@domain.com'
        className='w-full bg-zinc-900/50 border border-white/5 rounded-2xl p-4 text-white text-sm placeholder:text-zinc-600 outline-none focus:border-emerald-500/50'
      />
    </div>

  </div>

  {/* Selects */}
  <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>

    <select
      name="service"
      className='w-full bg-zinc-900/50 border border-white/5 rounded-2xl p-4 text-zinc-300 text-sm outline-none focus:border-emerald-500/50'
    >
      <option>Solar Power Fence</option>
      <option>Chain Link Fencing</option>
      <option>Readymade Compound Wall</option>
    </select>

    <select
      name="property"
      className='w-full bg-zinc-900/50 border border-white/5 rounded-2xl p-4 text-zinc-300 text-sm outline-none focus:border-emerald-500/50'
    >
      <option>Agricultural Farm Land</option>
      <option>Industrial Property</option>
      <option>Residential Estate</option>
    </select>

  </div>

  {/* Message */}
  <textarea
    name="message"
    rows="5"
    placeholder='Describe your project details...'
    className='w-full bg-zinc-900/50 border border-white/5 rounded-2xl p-4 text-white text-sm placeholder:text-zinc-600 outline-none resize-none focus:border-emerald-500/50'
  />

  {/* Submit */}
  <button
    type="submit"
    className='w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 transition-all duration-300 text-white py-4 rounded-2xl text-sm sm:text-base font-semibold uppercase'
  >
    Submit Enquiry →
  </button>

</form>

            </div>

          </div>

        </div>

      </section>
    </>
  )
}