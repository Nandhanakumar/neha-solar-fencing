import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Testimonials from '../components/Testimonials'
import WhyChoose from '../components/WhyChoose'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
      <WhyChoose />
      <CTA />
      <Footer />
    </div>
  )
}