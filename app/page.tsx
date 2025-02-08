import Bookus from "@/ui/nav/welcome/Bookus";
import CentralText from "@/ui/nav/welcome/CentralText";
import HeroSection from "@/ui/nav/welcome/HeroSection";
import Services from "@/ui/nav/welcome/Services";
import Touch from "@/ui/nav/welcome/Touch";

export default function Home() {
  return (
    <main className="bg-[#0a1119]">
      <HeroSection />
      <Services />
      <Bookus  />
      <Touch />
      <CentralText />
    </main>
  );
}
