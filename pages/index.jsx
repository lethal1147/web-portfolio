import HeroSection from './component/heroSection'
import SkillsSection from './component/skillsSection'
import Navbar from './component/navbar'
import reactLogo from '/public/react-logo.png'
import javaLogo from '/public/JavaScript-logo.png'
import htmlLogo from '/public/html-logo.png'
import cssLogo from '/public/css-logo.png'
import nodejsLogo from '/public/nodejs-logo.png'
import nextjsLogo from '/public/nextjs-logo.png'
import typescriptLogo from '/public/Typescript_logo.png'

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SkillsSection />
    </>
  )
}
