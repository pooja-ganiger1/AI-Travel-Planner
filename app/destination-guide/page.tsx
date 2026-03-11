import Navbar from "@/components/Navbar";

export default function DestinationGuide() {
  return (
    <div className="min-h-screen bg-[#030303]">
      <Navbar />
      <div className="pt-20 px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Destination Guide
          </h1>
          <p className="text-lg text-white/60 mb-12">
            Explore comprehensive guides for popular travel destinations around the world.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
              <h2 className="text-2xl font-bold text-white mb-3">Goa</h2>
              <p className="text-white/60 mb-4">
                Beautiful beaches, vibrant nightlife, and Portuguese heritage await you in this coastal paradise.
              </p>
              <ul className="text-white/60 space-y-2">
                <li>• Best Time: November to February</li>
                <li>• Budget: $30-50 per day</li>
                <li>• Must Visit: Baga Beach, Fort Aguada</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
              <h2 className="text-2xl font-bold text-white mb-3">Kerala</h2>
              <p className="text-white/60 mb-4">
                Backwaters, lush greenery, and tranquil houseboats create a serene tropical experience.
              </p>
              <ul className="text-white/60 space-y-2">
                <li>• Best Time: September to March</li>
                <li>• Budget: $25-40 per day</li>
                <li>• Must Visit: Alleppey, Munnar</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
              <h2 className="text-2xl font-bold text-white mb-3">Jaipur</h2>
              <p className="text-white/60 mb-4">
                The Pink City with majestic forts and vibrant culture offers a glimpse into royal heritage.
              </p>
              <ul className="text-white/60 space-y-2">
                <li>• Best Time: October to March</li>
                <li>• Budget: $20-35 per day</li>
                <li>• Must Visit: City Palace, Hawa Mahal</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
              <h2 className="text-2xl font-bold text-white mb-3">Manali</h2>
              <p className="text-white/60 mb-4">
                Snow-capped mountains, adventure sports, and scenic valleys make it perfect for thrill-seekers.
              </p>
              <ul className="text-white/60 space-y-2">
                <li>• Best Time: March to June, September to October</li>
                <li>• Budget: $25-45 per day</li>
                <li>• Must Visit: Rohtang Pass, Old Manali</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
