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
          Founded in 2024-25, our institution has grown to become a leading center for nursing education in the region, addressing the critical need for skilled nursing professionals.
        </p>
       
        <p className="mb-4">
          Under the leadership of our dedicated board members, including our President Sachin Shamrao Mane and Secretary Monica Sachin Mane, we have developed a curriculum that meets international standards while addressing local healthcare needs. Our programs are designed to prepare students for the challenges of modern healthcare environments.
        </p>
        <p>
          We take pride in our strong connections with healthcare institutions across Maharashtra, providing our students with valuable clinical exposure and internship opportunities. As we continue to grow, we remain focused on our founding principles of excellence, ethics, and empathy in nursing education.
        </p>
        <div className="mt-4">
              <p className="font-medium text-amber-800">Approved by:</p>
              <ul className="list-disc pl-5 text-gray-700 mt-2 space-y-1">
                <li>Indian Nursing Council</li>
                <li>State Government of Maharashtra & Maharashtra Nursing Council</li>
                <li>Maharashtra State Board of Nursing & Paramedical Education, Mumbai</li>
              </ul>
            </div>
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
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
        <p>
          To develop competent, compassionate, and ethically sound nursing professionals who contribute positively to healthcare delivery and advancement in India and globally.
        </p>
        
      </section>

     
    </main>
  )
} 