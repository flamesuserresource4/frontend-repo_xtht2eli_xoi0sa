import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <CTA />
      <footer className="py-10 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-white/60 text-sm">
          <p>© {new Date().getFullYear()} KLIX Digital. All rights reserved.</p>
          <p>Built for modern growth teams.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
