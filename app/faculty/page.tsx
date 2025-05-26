import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Board Members | Shri Manjunath School of Nursing",
  description: "Meet our experienced and dedicated Board members",
}

type FacultyMember = {
  name: string;
  position: string;
  qualifications: string[];
  work?: string[];
  imageUrl?: string;
};

const facultyMembers: FacultyMember[] = [
  {
    name: "Sachin Shamrao Mane",
    position: "President",
    qualifications: ["Production Engineer"],
    work: ["ONGC (10 years)", "Fire & Safety Institute (Since 2007)"],
  },

  {
    name: "Moh. Irfan Ali Sheikh",
    position: "Director",
    qualifications: ["B.Sc"],
    work: ["Working in Abu Dhabi (UAE)"],
  },
  {
    name: "Baburao Hatiba Mane",
    position: "Treasurer",
    qualifications: ["M.Com"],
    work: ["Bank Manager (The Mayani Urban Co-op. Bank)"],
  },
  {
    name: "Shrikant Dipak Sathe",
    position: "Director",
    qualifications: ["Advanced Diploma in Fire & Safety"],
    work: ["Chief Fire Officer (Vita Nagarpalika)"],
  },
  {
    name: "Monica Sachin Mane",
    position: "Secretary",
    qualifications: ["M.Sc (Microbiology)"],
  },
  {
    name: "Dr. Mahesh Jagannath Kakade",
    position: "Director",
    qualifications: ["MBBS", "DCH"],
  },
  {
    name: "Dr. Viraj Anil Jagdale",
    position: "Director",
    qualifications: ["BAMS", "PEDIEMS"],
  },
  {
    name: "Bharati Harish Mane",
    position: "Ex-Manager",
    qualifications: ["M.Com"],
  },
  {
    name: "Vijaykumar Laxman Mane",
    position: "Director",
    qualifications: ["MA", "B.Ed (English)"],
  },
  {
    name: "Dadaso Mauti Pisal",
    position: "Director",
    qualifications: ["B.Sc in Agriculture"],
  },

  {
    name: "Hirabai Shamrao Mane",
    position: "Vice President",
    qualifications: [],
  },
];

export default function FacultyPage() {
  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">Our Board Members</h1>
      
      <p className="text-lg mb-10">
        Our Board members bring a wealth of knowledge and experience to provide the highest quality of nursing education.
        Each Board member is committed to supporting our students in their journey to becoming skilled nursing professionals.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {facultyMembers.map((member, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl text-amber-800">{member.name}</CardTitle>
              <p className="font-medium text-gray-700">{member.position}</p>
            </CardHeader>
            <CardContent>
              {member.qualifications.length > 0 && (
                <div className="mb-2">
                  <h4 className="text-sm font-semibold">Qualifications</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600">
                    {member.qualifications.map((qual, idx) => (
                      <li key={idx}>{qual}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {member.work && member.work.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold">Work Experience</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600">
                    {member.work.map((work, idx) => (
                      <li key={idx}>{work}</li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
} 