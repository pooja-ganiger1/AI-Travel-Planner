import Navbar from "@/components/Navbar";
import DestinationCard from "@/components/DestinationCard";

export default function PopularDestinations() {
  const destinations = [
    {
      title: "Goa",
      description: "Beautiful beaches, vibrant nightlife, and Portuguese heritage",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80",
    },
    {
      title: "Coorg",
      description: "Misty hills, coffee plantations, and serene waterfalls",
      image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=800&q=80",
    },
    {
      title: "Mysore",
      description: "Royal palaces, rich heritage, and cultural experiences",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80",
    },
    {
      title: "Kerala",
      description: "Backwaters, lush greenery, and tranquil houseboats",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80",
    },
    {
      title: "Jaipur",
      description: "Pink city with majestic forts and vibrant culture",
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80",
    },
    {
      title: "Manali",
      description: "Snow-capped mountains, adventure sports, and scenic valleys",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-[#030303]">
      <Navbar />
      <div className="pt-20 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Popular Destinations
          </h1>
          <p className="text-lg text-white/60 mb-12">
            Discover trending travel spots and hidden gems around the world.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {destinations.map((dest, index) => (
              <DestinationCard
                key={index}
                title={dest.title}
                description={dest.description}
                image={dest.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
