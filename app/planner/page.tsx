"use client";

import { useState } from "react";
import TravelForm, { TravelFormData } from "@/components/TravelForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { askAI } from "@/lib/bytez";
import { MapPin, DollarSign, Calendar, Lightbulb, Sparkles, Compass } from "lucide-react";

export default function PlannerPage() {
  const [loading, setLoading] = useState(false);
  const [itinerary, setItinerary] = useState<string>("");
  const [formData, setFormData] = useState<TravelFormData | null>(null);

  const handleSubmit = async (data: TravelFormData) => {
    setLoading(true);
    setFormData(data);
    setItinerary("");

    const prompt = `Create a detailed travel itinerary for:
Destination: ${data.destination}
Days: ${data.days}
Budget: ${data.budget}
Travel type: ${data.travelType}

Include:
- Daily plan with activities
- Best places to visit
- Food recommendations
- Estimated budget breakdown
- Travel tips

Format the response in a clear, organized way.`;

    try {
      const response = await askAI(prompt);
      setItinerary(response);
    } catch (error) {
      setItinerary("Failed to generate itinerary. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#030303]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.03] border border-white/[0.08] text-primary rounded-full text-sm font-medium mb-4">
            <Compass className="h-4 w-4" />
            AI-Powered Itinerary
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Travel Planner
          </h1>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">
            Tell us about your dream destination and let AI create a personalized itinerary
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div>
            <TravelForm onSubmit={handleSubmit} loading={loading} />
            
            {/* Tips Card */}
            <Card className="mt-6 border-white/[0.08] bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2 text-white">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  Pro Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-white/40">
                <p>• Be specific about your destination for better results</p>
                <p>• Include your budget range (Low/Medium/Luxury)</p>
                <p>• Mention any special interests or requirements</p>
              </CardContent>
            </Card>
          </div>

          {/* Results Section */}
          <div>
            {formData && itinerary && (
              <div className="space-y-6">
                <Card className="border-white/[0.08] shadow-lg shadow-primary/5 bg-white/[0.02] backdrop-blur-sm">
                  <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 border-b border-white/[0.08]">
                    <CardTitle className="text-xl text-white">Trip Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-6">
                    <div className="flex items-center gap-3 p-3 bg-white/[0.03] rounded-lg border border-white/[0.05]">
                      <div className="p-2 bg-primary rounded-lg shadow-lg shadow-primary/20">
                        <MapPin className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <div>
                        <span className="text-xs text-white/40 block">Destination</span>
                        <span className="font-semibold text-white">{formData.destination}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/[0.03] rounded-lg border border-white/[0.05]">
                      <div className="p-2 bg-primary rounded-lg shadow-lg shadow-primary/20">
                        <Calendar className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <div>
                        <span className="text-xs text-white/40 block">Duration</span>
                        <span className="font-semibold text-white">{formData.days} days</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/[0.03] rounded-lg border border-white/[0.05]">
                      <div className="p-2 bg-primary rounded-lg shadow-lg shadow-primary/20">
                        <DollarSign className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <div>
                        <span className="text-xs text-white/40 block">Budget</span>
                        <span className="font-semibold text-white">{formData.budget}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/[0.03] rounded-lg border border-white/[0.05]">
                      <div className="p-2 bg-primary rounded-lg shadow-lg shadow-primary/20">
                        <Sparkles className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <div>
                        <span className="text-xs text-white/40 block">Type</span>
                        <span className="font-semibold text-white">{formData.travelType}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-white/[0.08] shadow-lg shadow-primary/5 bg-white/[0.02] backdrop-blur-sm">
                  <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 border-b border-white/[0.08]">
                    <CardTitle className="text-xl text-white">Your Itinerary</CardTitle>
                    <CardDescription className="text-white/40">
                      AI-generated travel plan
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="prose prose-sm max-w-none">
                      <pre className="whitespace-pre-wrap font-sans text-sm text-white/80 leading-relaxed bg-white/[0.03] p-4 rounded-lg border border-white/[0.05]">
                        {itinerary}
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {!itinerary && !loading && (
              <Card className="h-full flex items-center justify-center border-white/[0.08] bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm min-h-[500px]">
                <CardContent className="text-center py-12">
                  <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/20">
                    <MapPin className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Ready to Plan?
                  </h3>
                  <p className="text-white/40 max-w-sm mx-auto">
                    Fill in the form to generate your personalized travel itinerary with AI
                  </p>
                </CardContent>
              </Card>
            )}

            {loading && (
              <Card className="h-full flex items-center justify-center border-white/[0.08] bg-white/[0.02] backdrop-blur-sm min-h-[500px]">
                <CardContent className="text-center py-12">
                  <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 animate-pulse shadow-lg shadow-primary/20">
                    <Sparkles className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Creating Your Journey...
                  </h3>
                  <p className="text-white/40">
                    Our AI is crafting the perfect itinerary for you
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
