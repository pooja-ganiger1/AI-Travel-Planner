import Navbar from "@/components/Navbar";

export default function TravelTips() {
  const tips = [
    {
      title: "Pack Smart",
      description: "Use packing cubes to organize your luggage efficiently. Pack versatile clothing that can be mixed and matched.",
    },
    {
      title: "Budget Planning",
      description: "Research daily costs before traveling. Set a daily budget and track your expenses to avoid overspending.",
    },
    {
      title: "Travel Insurance",
      description: "Always get travel insurance that covers medical emergencies, flight cancellations, and lost luggage.",
    },
    {
      title: "Local Transportation",
      description: "Use local buses and trains instead of taxis. Download offline maps and transportation apps.",
    },
    {
      title: "Food Safety",
      description: "Eat where locals eat. Avoid tap water in some countries and stick to bottled water.",
    },
    {
      title: "Stay Connected",
      description: "Get a local SIM card or international roaming plan. Download offline maps and translation apps.",
    },
    {
      title: "Respect Local Culture",
      description: "Learn basic phrases in the local language. Respect local customs and dress codes.",
    },
    {
      title: "Travel Documents",
      description: "Keep copies of important documents. Store digital copies in cloud storage for backup.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#030303]">
      <Navbar />
      <div className="pt-20 px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Travel Tips
          </h1>
          <p className="text-lg text-white/60 mb-12">
            Essential tips and tricks to make your travels smoother and more enjoyable.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors"
              >
                <h3 className="text-xl font-bold text-white mb-3">{tip.title}</h3>
                <p className="text-white/60">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
