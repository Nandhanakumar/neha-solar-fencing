import { Helmet } from 'react-helmet-async'

export default function Testimonials() {
  const reviews = [
    {
      name: 'M Mathan',
      location: 'Madurai, Tamil Nadu',
      product: 'Solar Fencing System',
      date: '2026-01-09',
      displayDate: '09-Jan-2026',
      review: 'Professional installation and excellent fencing quality.',
      rating: 5,
    },
    {
      name: 'V Vadivelmurugan',
      location: 'Chennai, Tamil Nadu',
      product: 'Solar Fencing System',
      date: '2026-01-09',
      displayDate: '09-Jan-2026',
      review: 'Quick response and neat installation work.',
      rating: 5,
    },
    {
      name: 'G Gokulakrishnan V',
      location: 'Madurai, Tamil Nadu',
      product: 'Fencing Services',
      date: '2026-01-09',
      displayDate: '09-Jan-2026',
      review: 'Affordable pricing with great service quality.',
      rating: 5,
    },
    {
      name: 'Harini Periyasamy',
      location: 'Madurai, Tamil Nadu',
      product: 'Solar Fencing System',
      date: '2026-01-09',
      displayDate: '09-Jan-2026',
      review: 'Reliable fencing system and friendly support team.',
      rating: 5,
    },
    {
      name: 'Ganeshan',
      location: 'Coimbatore, Tamil Nadu',
      product: 'Solar Fence',
      date: '2024-02-22',
      displayDate: '22-Feb-2024',
      review: 'Smooth installation and professional technicians.',
      rating: 5,
    },
    {
      name: 'Balamurugan',
      location: 'Coimbatore, Tamil Nadu',
      product: 'Solar Fence',
      date: '2023-03-11',
      displayDate: '11-Mar-2023',
      review: 'Strong fencing setup with very low maintenance.',
      rating: 5,
    },
  ]

  // Structured data calculation for local SEO visibility
  const schemaStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "NEHA Solar Power Fence",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Madurai",
      "addressRegion": "TN",
      "addressCountry": "IN"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": reviews.length.toString()
    },
    "review": reviews.map((r) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": r.name
      },
      "datePublished": r.date,
      "reviewBody": r.review,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": r.rating.toString(),
        "bestRating": "5"
      }
    }))
  }

  return (
    <>
      <Helmet>
        {/* Dynamic injection of local review schema markup to support Google review rich snippets */}
        <script type="application/ld+json">
          {JSON.stringify(schemaStructuredData)}
        </script>
      </Helmet>

      <section
        id='testimonials'
        className='py-24 px-6 sm:px-10 bg-slate-950 overflow-hidden'
      >
        {/* Heading Container */}
        <div className='text-center mb-16'>
          <p className='text-emerald-400 font-semibold tracking-[4px] uppercase text-sm'>
            Testimonials
          </p>

          <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 leading-tight uppercase tracking-tight'>
            Trusted By Farmers
            <br />
            <span className='text-slate-400'>& Businesses</span>
          </h2>
        </div>

        {/* Reviews Structural Layout Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto'>
          {reviews.map((review, index) => (
            <div
              key={index}
              className='group relative bg-slate-900/30 backdrop-blur-xl border border-white/5 rounded-3xl p-8 overflow-hidden transition-all duration-700 hover:border-emerald-500/30 hover:shadow-[0_20px_60px_rgba(16,185,129,0.08)]'
            >
              {/* Radial Top Glow Transition Mesh */}
              <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent pointer-events-none'></div>

              {/* Top Structural Accent Strip */}
              <span className='absolute top-0 left-0 h-[3px] w-0 bg-emerald-500 group-hover:w-full transition-all duration-700'></span>

              {/* Dynamic Card Internal Text Node Content */}
              <div className='relative z-10 flex flex-col h-full justify-between'>
                <div>
                  {/* Clean SVG Vector Star Configuration */}
                  <div className='flex items-center gap-1 text-amber-400'>
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Customer Review Description Context */}
                  <p className='text-slate-300 mt-6 leading-8 text-[15px] font-light transition duration-500 group-hover:text-white'>
                    {review.review}
                  </p>
                </div>

                <div>
                  {/* Categorized Product Tagging Marker */}
                  <div className='mt-6 inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium tracking-wide'>
                    {review.product}
                  </div>

                  {/* Footing Meta Data Metrics Profile Container */}
                  <div className='mt-8 flex items-end justify-between border-t border-white/5 pt-4'>
                    <div className="space-y-1">
                      <h4 className='text-white font-semibold text-base tracking-tight'>
                        {review.name}
                      </h4>
                      <p className='text-slate-400 text-xs font-light'>
                        {review.location}
                      </p>
                    </div>

                    <div className='text-right'>
                      <p className='text-slate-500 text-xs font-mono tracking-wider'>
                        {review.displayDate}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lower Blur Glow Node Effect */}
              <div className='absolute -bottom-10 -right-10 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl scale-0 group-hover:scale-100 transition duration-700 pointer-events-none'></div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}