import Features from "@/components/home-page/Features";
import Hero from "@/components/home-page/Hero";
import { useSession } from "next-auth/react";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
    </div>
  );
}
