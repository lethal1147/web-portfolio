import HeroSection from './component/heroSection'
import SkillsSection from './component/skillsSection'
import Navbar from './component/navbar'
import ProjectsSection from './component/projectsSection'
import Footer from './component/footer'
import Contact from './component/contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <Contact />
      {/* <Footer /> */}
    </>
  )
}
