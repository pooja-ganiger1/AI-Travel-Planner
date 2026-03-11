import Navbar from "@/components/Navbar";

export default function TravelStories() {
  const stories = [
    {
      title: "Lost in the Backwaters of Kerala",
      author: "Sarah Johnson",
      excerpt: "A unexpected detour led me to discover the most serene and beautiful corners of Kerala's backwaters.",
      date: "March 2024",
    },
    {
      title: "Adventure in the Himalayas",
      author: "Mike Chen",
      excerpt: "Trekking through snow-capped peaks and meeting locals who changed my perspective on life.",
      date: "February 2024",
    },
    {
      title: "Cultural Immersion in Jaipur",
      author: "Emma Wilson",
      excerpt: "From palace tours to street food adventures, Jaipur taught me the true meaning of hospitality.",
      date: "January 2024",
    },
    {
      title: "Beach Hopping in Goa",
      author: "Alex Rodriguez",
      excerpt: "Discovering hidden beaches and making friends from around the world in this coastal paradise.",
      date: "December 2023",
    },
    {
      title: "Coffee Plantations of Coorg",
      author: "Lisa Anderson",
      excerpt: "Walking through misty hills and learning about coffee cultivation from passionate farmers.",
      date: "November 2023",
    },
    {
      title: "Royal Heritage of Mysore",
      author: "David Kumar",
      excerpt: "Exploring palaces and temples that tell stories of centuries-old traditions and grandeur.",
      date: "October 2023",
    },
  ];

  return (
    <div className="min-h-screen bg-[#030303]">
      <Navbar />
      <div className="pt-20 px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Travel Stories
          </h1>
          <p className="text-lg text-white/60 mb-12">
            Real experiences and adventures from travelers around the world.
          </p>
          
          <div className="space-y-6">
            {stories.map((story, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <h3 className="text-2xl font-bold text-white mb-2">{story.title}</h3>
                <div className="flex items-center gap-4 mb-4 text-white/60 text-sm">
                  <span>By {story.author}</span>
                  <span>•</span>
                  <span>{story.date}</span>
                </div>
                <p className="text-white/60 mb-4">{story.excerpt}</p>
                <button className="text-primary hover:text-primary/80 font-semibold transition-colors">
                  Read Full Story →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
