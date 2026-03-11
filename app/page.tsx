"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import DestinationCard from "@/components/DestinationCard";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { FlickeringFooter } from "@/components/ui/flickering-footer";
import { Bot, ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  const router = useRouter();

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
    <>
      <div className="min-h-screen bg-[#030303]">
        {/* Hero Section with Geometric Shapes */}
        <HeroGeometric
          badge="AI-Powered Travel Planning"
          title1="Plan Your Dream Trip with AI"
          title2=""
          description="Get smart itineraries, destination recommendations, and travel advice instantly. Your perfect journey starts here."
        >
          <Button 
            size="lg" 
            onClick={() => router.push("/planner")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 text-base px-6 h-12 sm:text-lg sm:px-8 sm:h-14 whitespace-nowrap cursor-pointer"
          >
            Start Planning
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <Button 
            size="lg" 
            onClick={() => router.push("/chat")}
            variant="outline" 
            className="border-2 border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.08] text-white hover:text-primary transition-all duration-300 text-base px-6 h-12 sm:text-lg sm:px-8 sm:h-14 whitespace-nowrap cursor-pointer"
          >
            <Bot className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Chat with AI
          </Button>
        </HeroGeometric>

        {/* Popular Destinations */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Popular Destinations
              </h2>
              <p className="text-lg text-white/40 max-w-2xl mx-auto">
                Explore trending travel spots and hidden gems
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {destinations.map((dest, index) => (
                <DestinationCard key={index} title={dest.title} description={dest.description} image={dest.image} />
              ))}
            </div>
          </div>
        </section>
      </div>
      <FlickeringFooter />
    </>
  );
}
