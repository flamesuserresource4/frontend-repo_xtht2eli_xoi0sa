import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white rounded-full px-3 py-1 backdrop-blur pointer-events-none">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs">Data-driven growth for modern brands</span>
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Ignite growth with KLIX Digital
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-xl">
            We blend strategy, creativity, and performance marketing to build memorable brands and measurable results.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-orange-500 hover:bg-orange-400 text-black font-semibold transition-colors shadow-[0_10px_30px_rgba(234,88,12,0.35)]">
              Start a Project
            </a>
            <a href="#services" className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-colors">
              Our Services
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />
    </section>
  )
}
