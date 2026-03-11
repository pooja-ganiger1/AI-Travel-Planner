"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, MapPin, DollarSign, Calendar, Compass } from "lucide-react";

interface TravelFormProps {
  onSubmit: (data: TravelFormData) => void;
  loading: boolean;
}

export interface TravelFormData {
  destination: string;
  budget: string;
  days: string;
  travelType: string;
}

export default function TravelForm({ onSubmit, loading }: TravelFormProps) {
  const [formData, setFormData] = useState<TravelFormData>({
    destination: "",
    budget: "",
    days: "",
    travelType: "Adventure",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Card className="border-white/[0.08] shadow-lg shadow-primary/5 bg-white/[0.02] backdrop-blur-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl text-white">Plan Your Trip</CardTitle>
        <CardDescription className="text-white/40">
          Fill in the details and let AI create your perfect itinerary
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-medium text-white flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              Destination
            </label>
            <Input
              placeholder="Where do you want to go?"
              value={formData.destination}
              onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
              required
              className="border-white/[0.08] bg-white/[0.03] focus:border-primary focus:ring-primary text-white placeholder:text-white/30"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-white flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-primary" />
              Budget
            </label>
            <Input
              placeholder="Low / Medium / Luxury"
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              required
              className="border-white/[0.08] bg-white/[0.03] focus:border-primary focus:ring-primary text-white placeholder:text-white/30"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-white flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              Number of Days
            </label>
            <Input
              type="number"
              placeholder="How many days?"
              value={formData.days}
              onChange={(e) => setFormData({ ...formData, days: e.target.value })}
              required
              min="1"
              className="border-white/[0.08] bg-white/[0.03] focus:border-primary focus:ring-primary text-white placeholder:text-white/30"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-white flex items-center gap-2">
              <Compass className="h-4 w-4 text-primary" />
              Travel Type
            </label>
            <select
              className="w-full px-3 py-2 border border-white/[0.08] rounded-md bg-white/[0.03] text-white focus:border-primary focus:ring-2 focus:ring-primary focus:ring-offset-0 transition-all"
              value={formData.travelType}
              onChange={(e) => setFormData({ ...formData, travelType: e.target.value })}
            >
              <option value="Adventure">Adventure</option>
              <option value="Relaxation">Relaxation</option>
              <option value="Family">Family</option>
              <option value="Solo">Solo</option>
            </select>
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.02] h-11"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating Your Journey...
              </>
            ) : (
              "Generate Itinerary"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
