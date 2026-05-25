import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import enquiryBanner from '../assets/enquiry-banner.png'
export default function Enquiry() {
  return (
    <>
      <Helmet>
        <title>Contact & Enquiry | NEHA Solar Power Fence Madurai</title>
        <meta name='description' content='Get a free quote from NEHA Solar Power Fence. Contact our Madurai office for high-quality farm, industrial, and readymade compound wall fencing services.' />
      </Helmet>

      <Navbar />

      <section className='bg-[#0a0a0a] min-h-screen py-24 px-6 sm:px-12 lg:px-24 relative overflow-hidden'>
        {/* Subtle Ambient Background Layer Flare */}
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.04),transparent_45%)] pointer-events-none' />

        <div className='max-w-7xl mx-auto relative z-10'>

{/* Banner Hero Row */}
<div
  className='rounded-3xl overflow-hidden relative h-[320px] flex items-center px-8 sm:px-12 border border-white/5'
  style={{
    backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.70), rgba(10, 10, 10, 0.85)), url(${enquiryBanner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
            <div>
              <span className='inline-flex items-center gap-2 text-emerald-400 font-semibold tracking-widest uppercase text-xs bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/10'>
                <span className='w-1.5 h-1.5 rounded-full bg-emerald-400' />
                Online Desk
              </span>

              <h1 className='text-4xl sm:text-5xl md:text-6xl font-black text-white mt-4 tracking-tight uppercase'>
                Request An <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200'>Enquiry</span>
              </h1>

              <p className='text-zinc-400 mt-4 max-w-xl text-base sm:text-lg font-light leading-relaxed'>
                Fill out the secure design profile map below and our engineering estimation technicians will establish communication shortly.
              </p>
            </div>
          </div>

          {/* Main Structural Twin Columns Grid */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16'>

            {/* Left Column: Core Contact Anchors */}
            <div className='bg-zinc-950/40 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-white/5 flex flex-col justify-between'>
              <div>
                <span className='text-emerald-400 font-semibold uppercase tracking-wider text-xs block mb-3'>
                  Get In Touch
                </span>

                <h2 className='text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase'>
                  We Are Here To <br className='hidden sm:inline' />Secure Your Assets
                </h2>

                <p className='text-zinc-400 mt-4 leading-relaxed font-light text-sm sm:text-base'>
                  Contact the direct headquarters desk of <strong className='text-zinc-200 font-semibold'>NEHA SOLAR POWER FENCE</strong> for architectural layout mapping, farm safety grids, chain links, and ready-made precast concrete compound panel boundaries in Madurai and across Tamil Nadu.
                </p>

                {/* Contact Anchor Grid Cards */}
                <div className='space-y-4 mt-10'>

                  {/* Telephone Card */}
                  <div className='flex items-start gap-5 border border-white/5 p-5 rounded-2xl bg-zinc-900/20 hover:border-emerald-500/20 transition-all duration-300 group'>
                    <div className='bg-zinc-900 border border-white/5 text-emerald-400 p-3.5 rounded-xl group-hover:bg-emerald-950/20 transition-colors'>
                      <svg className="w-6 h-6 fill-none stroke-current stroke-[1.5]" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.557-5.273-4.006-6.832-6.832l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.75z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className='font-semibold text-lg text-white tracking-tight'>Call Now</h3>
                      <div className='text-zinc-400 mt-1.5 flex flex-col gap-1 text-sm sm:text-base font-light'>
                        <a href='tel:+916383915966' className='hover:text-emerald-400 transition'>+91 63839 15966</a>
                        <a href='tel:+919385851443' className='hover:text-emerald-400 transition'>+91 93858 51443</a>
                        <a href='tel:+917871851443' className='hover:text-emerald-400 transition'>+91 78718 51443</a>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Broadcast Card */}
                  <div className='flex items-start gap-5 border border-white/5 p-5 rounded-2xl bg-zinc-900/20 hover:border-emerald-500/20 transition-all duration-300 group'>
                    <div className='bg-zinc-900 border border-white/5 text-emerald-400 p-3.5 rounded-xl group-hover:bg-emerald-950/20 transition-colors'>
                      <svg className="w-6 h-6 fill-none stroke-current stroke-[1.5]" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641l-.318 1.235c-.149.58.419 1.13 1.09.92l1.603-.546c.408-.14.897-.009 1.264.26A9.167 9.167 0 0011.996 20.25h.004z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className='font-semibold text-lg text-white tracking-tight'>WhatsApp Support</h3>
                      <div className='text-zinc-400 mt-1.5 flex flex-col gap-1 text-sm sm:text-base font-light'>
                        <a href='https://wa.me/916383915966' target='_blank' rel='noreferrer' className='hover:text-emerald-400 transition'>+91 63839 15966</a>
                        <a href='https://wa.me/919385851443' target='_blank' rel='noreferrer' className='hover:text-emerald-400 transition'>+91 93858 51443</a>
                        <a href='https://wa.me/917871851443' target='_blank' rel='noreferrer' className='hover:text-emerald-400 transition'>+91 78718 51443</a>
                      </div>
                    </div>
                  </div>

                  {/* Mailbox Card */}
                  <div className='flex items-start gap-5 border border-white/5 p-5 rounded-2xl bg-zinc-900/20 hover:border-emerald-500/20 transition-all duration-300 group'>
                    <div className='bg-zinc-900 border border-white/5 text-emerald-400 p-3.5 rounded-xl group-hover:bg-emerald-950/20 transition-colors'>
                      <svg className="w-6 h-6 fill-none stroke-current stroke-[1.5]" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <h3 className='font-semibold text-lg text-white tracking-tight'>Email Inbox</h3>
                      <p className='text-zinc-400 mt-1.5 text-sm sm:text-base font-light'>
                        <a href='mailto:NAGARAJNEHA90@GMAIL.COM' className='hover:text-emerald-400 transition break-all'>
                          NAGARAJNEHA90@GMAIL.COM
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Physical Address Card */}
                  <div className='flex items-start gap-5 border border-white/5 p-5 rounded-2xl bg-zinc-900/20 hover:border-emerald-500/20 transition-all duration-300 group'>
                    <div className='bg-zinc-900 border border-white/5 text-emerald-400 p-3.5 rounded-xl group-hover:bg-emerald-950/20 transition-colors'>
                      <svg className="w-6 h-6 fill-none stroke-current stroke-[1.5]" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className='font-semibold text-lg text-white tracking-tight'>Office Address</h3>
                      <p className='text-zinc-400 mt-1.5 text-sm leading-relaxed font-light uppercase tracking-wide'>
                        MMA Nagar, Sangaiya Nagar,<br />Pothumbu, Madurai - 625018.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Verified Trust Badges */}
              <div className='grid grid-cols-3 gap-4 mt-10 pt-6 border-t border-white/5'>
                <div className='bg-zinc-900/40 p-4 rounded-xl text-center border border-white/5'>
                  <h4 className='text-emerald-400 font-bold text-sm sm:text-base uppercase tracking-tight'>100% Secure</h4>
                  <p className='text-zinc-500 text-xs mt-1 font-light'>Data Encrypted</p>
                </div>
                <div className='bg-zinc-900/40 p-4 rounded-xl text-center border border-white/5'>
                  <h4 className='text-emerald-400 font-bold text-sm sm:text-base uppercase tracking-tight'>Fast Reply</h4>
                  <p className='text-zinc-500 text-xs mt-1 font-light'>Within 24 Hours</p>
                </div>
                <div className='bg-zinc-900/40 p-4 rounded-xl text-center border border-white/5'>
                  <h4 className='text-emerald-400 font-bold text-sm sm:text-base uppercase tracking-tight'>Free Quote</h4>
                  <p className='text-zinc-500 text-xs mt-1 font-light'>Zero Commits</p>
                </div>
              </div>

            </div>

            {/* Right Column: High-Performance Enquiry Submission Sheet */}
            <div className='bg-zinc-950/40 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-white/5 shadow-2xl'>
              <h2 className='text-3xl font-extrabold text-white mb-10 tracking-tight uppercase'>
                Send Your Specification
              </h2>

              {/* Form is set up to securely send data to your specific email address */}
              <form 
                action="https://formsubmit.co/NAGARAJNEHA90@GMAIL.COM" 
                method="POST" 
                className='space-y-6'
              >
                {/* Anti-Spam HoneyPot */}
                <input type="text" name="_honey" style={{ display: 'none' }} />
                
                {/* Disable reCAPTCHA screen for a cleaner user experience */}
                <input type="hidden" name="_captcha" value="false" />
                
                {/* Custom subject line for incoming notification emails */}
                <input type="hidden" name="_subject" value="New Website Fence Blueprint Enquiry!" />

                <div>
                  <label className='block mb-2 font-medium text-xs uppercase tracking-widest text-zinc-400'>
                    Your Name
                  </label>
                  <input
                    type='text'
                    name='Client Name'
                    required
                    placeholder='Enter legal or corporate identity name'
                    className='w-full bg-zinc-900/50 border border-white/5 rounded-2xl p-4 outline-none text-white font-light text-sm placeholder:text-zinc-600 focus:border-emerald-500/50 transition-colors'
                  />
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                  <div>
                    <label className='block mb-2 font-medium text-xs uppercase tracking-widest text-zinc-400'>
                      Phone Number
                    </label>
                    <input
                      type='tel'
                      name='Phone Number'
                      required
                      placeholder='Mobile contact number'
                      className='w-full bg-zinc-900/50 border border-white/5 rounded-2xl p-4 outline-none text-white font-light text-sm placeholder:text-zinc-600 focus:border-emerald-500/50 transition-colors'
                    />
                  </div>

                  <div>
                    <label className='block mb-2 font-medium text-xs uppercase tracking-widest text-zinc-400'>
                      Email Address
                    </label>
                    <input
                      type='email'
                      name='Email'
                      required
                      placeholder='name@domain.com'
                      className='w-full bg-zinc-900/50 border border-white/5 rounded-2xl p-4 outline-none text-white font-light text-sm placeholder:text-zinc-600 focus:border-emerald-500/50 transition-colors'
                    />
                  </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                  <div>
                    <label className='block mb-2 font-medium text-xs uppercase tracking-widest text-zinc-400'>
                      Service Vector
                    </label>
                    <select
                      name='Requested Service'
                      className='w-full bg-zinc-900/50 border border-white/5 rounded-2xl p-4 outline-none text-zinc-300 font-light text-sm focus:border-emerald-500/50 transition-colors'
                    >
                      <option value="Solar Power Fence">Solar Power Fence</option>
                      <option value="Chain Link Fencing">Chain Link Fencing</option>
                      <option value="Readymade Compound Wall">Readymade Compound Wall</option>
                      <option value="Custom Full Boundary">Custom Full Infrastructure Boundary</option>
                      <option value="System Diagnostics & Maintenance">System Diagnostics & Maintenance</option>
                    </select>
                  </div>

                  <div>
                    <label className='block mb-2 font-medium text-xs uppercase tracking-widest text-zinc-400'>
                      Property Classification
                    </label>
                    <select
                      name='Property Classification'
                      className='w-full bg-zinc-900/50 border border-white/5 rounded-2xl p-4 outline-none text-zinc-300 font-light text-sm focus:border-emerald-500/50 transition-colors'
                    >
                      <option value="Agricultural Farm Land">Agricultural Farm Land</option>
                      <option value="Heavy Industrial / Factory">Heavy Industrial / Factory</option>
                      <option value="Commercial Property / Warehouse">Commercial Property / Warehouse</option>
                      <option value="Residential Estate">Residential Estate</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className='block mb-2 font-medium text-xs uppercase tracking-widest text-zinc-400'>
                    Estimated Perimeter Line / Land Size
                  </label>
                  <input
                    type='text'
                    name='Land Size Details'
                    placeholder='e.g., 5 Acres / 1200 running feet perimeter line'
                    className='w-full bg-zinc-900/50 border border-white/5 rounded-2xl p-4 outline-none text-white font-light text-sm placeholder:text-zinc-600 focus:border-emerald-500/50 transition-colors'
                  />
                </div>

                <div>
                  <label className='block mb-2 font-medium text-xs uppercase tracking-widest text-zinc-400'>
                    Structural Project Scope Details
                  </label>
                  <textarea
                    rows='4'
                    name='Project Description'
                    required
                    placeholder='Describe your security parameters, soil conditions or terrain obstacles...'
                    className='w-full bg-zinc-900/50 border border-white/5 rounded-2xl p-4 outline-none text-white font-light text-sm placeholder:text-zinc-600 focus:border-emerald-500/50 transition-colors resize-none'
                  />
                </div>

                <button
                  type='submit'
                  className='w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 transition-all duration-300 text-white py-4.5 rounded-2xl text-base font-semibold tracking-wide shadow-lg shadow-emerald-950/20 uppercase mt-4 cursor-pointer'
                >
                  Transmit Blueprint Enquiry →
                </button>

              </form>
            </div>

          </div>

        </div>
      </section>
    </>
  )
} 