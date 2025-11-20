import { Rocket, BarChart3, Megaphone, LineChart } from 'lucide-react'

const services = [
  {
    icon: Rocket,
    title: 'Brand Acceleration',
    desc: 'Positioning, identity, and content systems that stand out in crowded markets.',
  },
  {
    icon: BarChart3,
    title: 'Performance Marketing',
    desc: 'Full-funnel campaigns across search, social, and programmatic for measurable ROI.',
  },
  {
    icon: Megaphone,
    title: 'Creative Production',
    desc: 'High-impact creative for ads, landing pages, and campaigns that convert.',
  },
  {
    icon: LineChart,
    title: 'Analytics & CRO',
    desc: 'Attribution, dashboards, and conversion optimization to scale profitably.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(234,88,12,0.15),transparent_40%),radial-gradient(circle_at_80%_100%,rgba(234,88,12,0.12),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What we do</h2>
          <p className="mt-3 text-white/70">Integrated growth marketing services built for speed, clarity, and scale.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-all">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-black shadow-[0_10px_30px_rgba(234,88,12,0.35)]">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
