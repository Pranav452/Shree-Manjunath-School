import { Metadata } from "next"
import BoardMembersClient from "@/components/board-members-client"

export const metadata: Metadata = {
  title: "Board Members | Shri Manjunath School of Nursing",
  description: "Meet our experienced and dedicated Board members",
}

type FacultyMember = {
  name: string;
  position: string;
  qualifications: string[];
  work?: string[];
  education?: string[];
  experience?: string[];
  imageUrl?: string;
};

const facultyMembers: FacultyMember[] = [
  // President
  {
    name: "Sachin Shamrao Mane",
    position: "President",
    qualifications: ["Production Engineer"],
    work: ["ONGC (10 years)", "Fire & Safety Institute (Since 2007)"],
    imageUrl: "/board-members/sachim-mane.jpg",
  },
  // Vice President
  {
    name: "Hirabai Shamrao Mane",
    position: "Vice President",
    qualifications: [],
  },
  // Secretary
  {
    name: "Monica Sachin Mane",
    position: "Secretary",
    qualifications: ["M.Sc (Microbiology)"],
    imageUrl: "/board-members/Mrs-monica.jpg",
  },
  // Treasurer
  {
    name: "Baburao Hatiba Mane",
    position: "Treasurer",
    qualifications: ["M.Com"],
    work: ["Bank Manager (The Mayani Urban Co-op. Bank)"],
  },
  // Directors
  {
    name: "Bharati Harish Mane",
    position: "Director",
    qualifications: ["M.Com"],
    education: [
      "Master of Commerce (M.Com) - Financial Management",
      "Bachelor of Commerce (B.Com) - Accounting & Finance"
    ],
    experience: [
      "Former Manager at Regional Cooperative Bank (15 years)",
      "Financial Planning and Budget Management",
      "Administrative Operations in Educational Institutions",
      "Community Development and Women Empowerment Programs"
    ],
    imageUrl: "/board-members/Bharati-mane.jpg",
  },
  {
    name: "Moh. Irfan Ali Sheikh",
    position: "Director",
    qualifications: ["B.Sc"],
    work: ["Working in Abu Dhabi (UAE)"],
    imageUrl: "/board-members/Moh-Irfan-Ali-Sheikh.jpg",
  },
  {
    name: "Shrikant Dipak Sathe",
    position: "Director",
    qualifications: ["Advanced Diploma in Fire & Safety"],
    work: ["Chief Fire Officer (Vita Nagarpalika)"],
  },
  {
    name: "Dr. Mahesh Jagannath Kakade",
    position: "Director",
    qualifications: ["MBBS", "DCH"],
    imageUrl: "/board-members/Dr-mahesh.jpg",
  },
  {
    name: "Dr. Viraj Anil Jagdale",
    position: "Director",
    qualifications: ["BAMS", "PEDIEMS"],
    imageUrl: "/board-members/Dr-Viraj.jpg",
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
    imageUrl: "/board-members/Dadaso-Mauti-Pisal.jpg",
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
      
      <BoardMembersClient facultyMembers={facultyMembers} />
    </main>
  );
} 