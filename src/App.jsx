import Header from './components/Header'
import Hero from './components/Hero'
import TrustIndicators from './components/TrustIndicators'
import WhyChooseUs from './components/WhyChooseUs'
import Process from './components/Process'
import Certification from './components/Certification'
import TrainingSupport from './components/TrainingSupport'
import ToolsPlatform from './components/ToolsPlatform'
import FAQ from './components/FAQ'
import Stats from './components/Stats'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <TrustIndicators />
        <WhyChooseUs />
        <Process />
        <Certification />
        <TrainingSupport />
        <ToolsPlatform />
        <FAQ />
        <Stats />
        <Footer />
      </main>
    </div>
  )
}
