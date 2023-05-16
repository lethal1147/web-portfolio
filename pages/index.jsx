import HeroSection from './component/heroSection'
import SkillsSection from './component/skillsSection'
import Navbar from './component/navbar'
import ProjectsSection from './component/projectsSection'
import Footer from './component/footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <Footer />
    </>
  )
}
