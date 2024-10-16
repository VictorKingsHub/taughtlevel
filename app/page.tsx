import HeroSection from "@/ui/nav/welcome/HeroSection";
import Services from "@/ui/nav/welcome/Services";
import Touch from "@/ui/nav/welcome/Touch";
import Image from "next/image";

export default function Home() {
  return (
    <main >
      <HeroSection />
      <Services />
      <Touch />
    </main>
  );
}
