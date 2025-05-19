import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admissions | Shri Manjunath School of Nursing",
  description: "Information about admissions at Shri Manjunath School of Nursing",
}

export default function AdmissionsPage() {
  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">Admissions</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Application Process</h2>
        <p className="mb-6">
          Information about the application process for Shri Manjunath School of Nursing will be available here, including application requirements, deadlines, and procedures.
        </p>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Eligibility Criteria</h2>
        <p className="mb-6">
          Details about eligibility requirements for various programs will be listed here.
        </p>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Important Dates</h2>
        <p className="mb-6">
          Key dates for the admission process will be posted here once they are finalized.
        </p>
      </section>
      
      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Ready to Apply?</h3>
        <p className="mb-4">For more information about our admissions process, please contact us.</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition-colors">Contact Admissions</button>
      </div>
    </main>
  )
} 