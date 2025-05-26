import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Shri Manjunath School of Nursing",
  description: "Learn about the history, mission and values of Shri Manjunath School of Nursing",
}

export default function AboutPage() {
  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">About Us</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Story</h2>
        <p className="mb-4">
          Shri Manjunath School of Nursing was established with a vision to create healthcare professionals who combine technical excellence with compassionate care. 
          Founded in 2024-25, our institution has grown to become a leading center for nursing education.
        </p>
        <p>
          With state-of-the-art facilities and experienced faculty, we are committed to providing our students with the knowledge, skills, and values needed to excel in the field of nursing.
        </p>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
        <p>
          To develop competent, compassionate, and ethically sound nursing professionals who contribute positively to healthcare delivery and advancement in India and globally.
        </p>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Values</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Excellence in teaching and learning</li>
          <li>Compassionate care</li>
          <li>Ethical practice</li>
          <li>Innovation and research</li>
          <li>Community service</li>
          <li>Inclusivity and diversity</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">In The News</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="aspect-video mb-4">
            <iframe 
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/p2cBtoKjo_Y"
              title="Yerala News Channel Coverage"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="text-left space-y-2 text-sm md:text-base">
            <div className="mt-4 pt-4 border-t border-gray-300">
              <p className="font-semibold">संपादक - धनंजय क्षीरसागर</p>
              <p className="font-semibold">उपसंपादक - शरदराव कदम</p>
              <p className="italic">वडूज ता. खटाव जि. सातारा</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 