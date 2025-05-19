import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Programs from "@/components/sections/programs"
import Nurturing from "@/components/sections/nurturing"
import Facilities from "@/components/sections/facilities"
import Leadership from "@/components/sections/leadership"
import GNMProgram from "@/components/sections/gnm-program"
import Gallery from "@/components/sections/gallery"
import PremierFacilities from "@/components/sections/premier-facilities"
import Events from "@/components/sections/events"
import CTA from "@/components/sections/cta"
import Contact from "@/components/sections/contact"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Nurturing />
      <Programs />
      <Facilities />
      <Leadership />
      <GNMProgram />
      <Gallery />
      <PremierFacilities />
      <Events />
      <CTA />
      <Contact />
    </>
  )
}
