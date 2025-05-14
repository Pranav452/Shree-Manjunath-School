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
import Footer from "@/components/sections/footer"
import Header from "@/components/header"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Nurturing />
        <Facilities />
        <Leadership />
        <GNMProgram />
        <Gallery />
        <PremierFacilities />
        <Events />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
