export default function CTA() {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-black to-[#0b0b0b]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(234,88,12,0.15),transparent_40%),radial-gradient(circle_at_90%_100%,rgba(234,88,12,0.12),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 md:p-16 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-orange-500/20 blur-3xl" />
          <div className="max-w-2xl relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s build something that clicks</h2>
            <p className="mt-3 text-white/70">Tell us about your goals and we’ll craft a plan to hit them.</p>

            <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <input placeholder="Name" className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-orange-500" />
              <input placeholder="Email" className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-orange-500" />
              <input placeholder="Company" className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-orange-500" />
              <input placeholder="Budget" className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-orange-500" />
              <textarea placeholder="What are you trying to achieve?" rows={4} className="md:col-span-2 bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-orange-500" />
              <div className="md:col-span-2">
                <button type="button" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-orange-500 hover:bg-orange-400 text-black font-semibold transition-colors shadow-[0_10px_30px_rgba(234,88,12,0.35)]">
                  Request Proposal
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
