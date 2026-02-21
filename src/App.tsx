import { Navigation } from './components/Navigation'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { SkillsSection } from './components/SkillsSection'
import { ProjectsSection } from './components/ProjectsSection'
import { ContactSection } from './components/ContactSection'
import { CertificationsSection } from './components/CertificationsSection'
import { ResumePage } from './components/ResumePage'

export default function App() {
  return (
    <div className="dark min-h-screen bg-black text-white">
      <Navigation />
      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <div id="certifications">
          <CertificationsSection />
        </div>
        <div id="resume">
          <ResumePage />
        </div>
        <ContactSection />
      </main>
    </div>
  )
}