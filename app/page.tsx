import Bookus from "@/ui/nav/welcome/Bookus";
import CentralText from "@/ui/nav/welcome/CentralText";
import HeroSection from "@/ui/nav/welcome/HeroSection";
import Services from "@/ui/nav/welcome/Services";
import Touch from "@/ui/nav/welcome/Touch";
import { BiRightArrowAlt } from 'react-icons/bi'

export default function Home() {
  return (
    <main >
      <HeroSection />
      <Services />
      <Bookus  />
      <Touch />
      <CentralText  title='What We Do' description='There are more.. We thought to ease you into it' more='Learn More ' icon={<BiRightArrowAlt />}  />
    </main>
  );
}
