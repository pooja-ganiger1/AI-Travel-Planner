"use client";

import { Home, MapPin, MessageCircle } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

export default function Navbar() {
  const navItems = [
    { name: "Home", url: "/", icon: Home },
    { name: "Planner", url: "/planner", icon: MapPin },
    { name: "Chat", url: "/chat", icon: MessageCircle },
  ];

  return <NavBar items={navItems} />;
}
