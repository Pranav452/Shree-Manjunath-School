import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Events | Shri Manjunath School of Nursing, Vaduj",
  description: "Events and activities at Shri Manjunath School of Nursing, Vaduj",
}

export default function EventsPage() {
  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">Events</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Upcoming Events</h2>
        <p className="mb-6">
          Information about upcoming events at Shri Manjunath School of Nursing, Vaduj will be posted here. Check back regularly for updates on workshops, seminars, and other educational activities.
        </p>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Past Events</h2>
        <p className="mb-6">
          A record of past events held at Shri Manjunath School of Nursing, Vaduj will be displayed here.
        </p>
      </section>
      
      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
        <p className="mb-4">Check back regularly for information about upcoming events and activities.</p>
      </div>
    </main>
  )
} 