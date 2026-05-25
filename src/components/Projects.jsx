import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'

const projects = [
  {
    image: project1,
    title: 'Solar Fencing',
    location: 'Pollachi, Tamil Nadu',
    area: '12 Acres',
    alt: 'Industrial solar fencing project in pollachi Tamil Nadu',
  },
  {
    image: project2,
    title: 'Hanging Fence',
    location: 'Kerala, Tamil Nadu',
    area: '50 Acres',
    alt: 'Hanging fencing installation in Kerala Tamil Nadu',
  },
  {
    image: project3,
    title: 'Wall Fencing',
    location: 'Ooty, Tamil Nadu',
    area: '25 Acres',
    alt: 'wall fencing project in ooty Tamil Nadu',
  },
  {
    image: project4,
    title: 'Diamond fencing',
    location: 'Madurai, Tamil Nadu',
    area: '18 Acres',
    alt: 'Diamond fencing project in Madurai Tamil Nadu',
  },
]

export default function Projects() {
  return (
    <section
      id='projects'
      className='py-20 px-5 sm:px-8 lg:px-12 bg-[#07111d]'
    >
      <div className='max-w-7xl mx-auto'>

        {/* Heading */}
        <div className='text-center mb-16'>

          <p className='text-emerald-400 font-semibold tracking-[3px] uppercase text-sm'>
            Recent Projects
          </p>

          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 text-white leading-tight'>
            Some of Our Completed Projects
          </h2>

          <p className='text-gray-400 mt-5 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed'>
            We provide professional solar fencing and electric security
            fencing solutions across Madurai and Tamil Nadu for farms,
            resorts, industries and agricultural lands.
          </p>

        </div>

        {/* Projects Grid */}
        <div className='grid sm:grid-cols-2 xl:grid-cols-4 gap-8'>

          {projects.map((project, index) => (

            <div
              key={index}
              className='group bg-[#101c2b] rounded-2xl overflow-hidden border border-white/5 hover:border-emerald-400/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(52,211,153,0.15)]'
            >

              {/* Image */}
              <div className='overflow-hidden'>

                <img
                  src={project.image}
                  alt={project.alt}
                  loading='lazy'
                  className='h-72 w-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100'
                />

              </div>

              {/* Content */}
              <div className='p-6'>

                <h3 className='text-xl font-bold text-white leading-snug'>
                  {project.title}
                </h3>

                <p className='text-emerald-400 mt-3 text-sm font-medium'>
                  📍 {project.location}
                </p>

                <p className='text-gray-400 mt-2 text-sm'>
                  Secured Area: {project.area}
                </p>

                <div className='mt-5 flex items-center gap-2 text-emerald-400 text-sm font-semibold'>
                  <span>Completed Successfully</span>
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  )
}