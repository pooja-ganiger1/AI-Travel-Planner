import Navbar from "@/components/Navbar";

export default function ItineraryBuilder() {
  return (
    <div className="min-h-screen bg-[#030303]">
      <Navbar />
      <div className="pt-20 px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Itinerary Builder
          </h1>
          <p className="text-lg text-white/60 mb-12">
            Create custom travel itineraries tailored to your preferences and budget.
          </p>
          
          <div className="bg-white/5 border border-white/10 rounded-lg p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-2">Destination</label>
                <input
                  type="text"
                  placeholder="Where do you want to go?"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-primary"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Number of Days</label>
                  <input
                    type="number"
                    placeholder="3"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Budget</label>
                  <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary">
                    <option value="low">Low ($20-30/day)</option>
                    <option value="medium">Medium ($30-50/day)</option>
                    <option value="high">High ($50+/day)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Travel Type</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {["Adventure", "Relaxation", "Family", "Solo"].map((type) => (
                    <button
                      key={type}
                      className="bg-white/10 hover:bg-primary/20 border border-white/20 hover:border-primary rounded-lg px-4 py-2 text-white transition-colors"
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg transition-colors">
                Generate Itinerary
              </button>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">Sample Itineraries</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">3 Days in Goa</h3>
                <ul className="text-white/60 space-y-2">
                  <li>Day 1: Beach exploration & water sports</li>
                  <li>Day 2: Fort Aguada & local cuisine</li>
                  <li>Day 3: Nightlife & shopping</li>
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-3">5 Days in Kerala</h3>
                <ul className="text-white/60 space-y-2">
                  <li>Day 1-2: Alleppey backwaters</li>
                  <li>Day 3-4: Munnar tea plantations</li>
                  <li>Day 5: Kochi exploration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
