import Navbar from "@/components/Navbar";

export default function BudgetGuides() {
  const budgetGuides = [
    {
      destination: "Goa",
      budget: "$30-50/day",
      breakdown: {
        accommodation: "$10-15",
        food: "$8-12",
        activities: "$8-15",
        transport: "$4-8",
      },
      tips: "Stay in hostels or budget hotels. Eat at local shacks for authentic and cheap food.",
    },
    {
      destination: "Kerala",
      budget: "$25-40/day",
      breakdown: {
        accommodation: "$8-12",
        food: "$7-10",
        activities: "$7-12",
        transport: "$3-6",
      },
      tips: "Backwaters tours are affordable. Local buses are very cheap for transportation.",
    },
    {
      destination: "Jaipur",
      budget: "$20-35/day",
      breakdown: {
        accommodation: "$7-10",
        food: "$6-9",
        activities: "$5-10",
        transport: "$2-6",
      },
      tips: "Many monuments have free entry on certain days. Street food is delicious and cheap.",
    },
    {
      destination: "Manali",
      budget: "$25-45/day",
      breakdown: {
        accommodation: "$10-15",
        food: "$8-12",
        activities: "$5-15",
        transport: "$2-3",
      },
      tips: "Adventure activities can be pricey. Consider group tours for better rates.",
    },
    {
      destination: "Mysore",
      budget: "$20-35/day",
      breakdown: {
        accommodation: "$7-10",
        food: "$6-9",
        activities: "$5-10",
        transport: "$2-6",
      },
      tips: "Palace entry is affordable. Local markets offer great shopping deals.",
    },
    {
      destination: "Coorg",
      budget: "$25-40/day",
      breakdown: {
        accommodation: "$8-12",
        food: "$7-10",
        activities: "$7-12",
        transport: "$3-6",
      },
      tips: "Coffee plantation tours are reasonably priced. Homestays offer good value.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#030303]">
      <Navbar />
      <div className="pt-20 px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Budget Guides
          </h1>
          <p className="text-lg text-white/60 mb-12">
            Detailed budget breakdowns for popular destinations to help you plan your trip.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {budgetGuides.map((guide, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-lg p-6"
              >
                <h3 className="text-2xl font-bold text-white mb-2">{guide.destination}</h3>
                <div className="text-primary font-semibold mb-4">{guide.budget}</div>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Daily Breakdown:</h4>
                  <div className="space-y-2 text-white/60 text-sm">
                    <div className="flex justify-between">
                      <span>Accommodation:</span>
                      <span>{guide.breakdown.accommodation}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Food:</span>
                      <span>{guide.breakdown.food}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Activities:</span>
                      <span>{guide.breakdown.activities}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Transport:</span>
                      <span>{guide.breakdown.transport}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded p-3">
                  <p className="text-white/60 text-sm">{guide.tips}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
