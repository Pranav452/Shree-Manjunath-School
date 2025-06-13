"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"
import { useState } from "react"

type FacultyMember = {
  name: string;
  position: string;
  qualifications: string[];
  work?: string[];
  education?: string[];
  experience?: string[];
  imageUrl?: string;
};

interface BoardMembersClientProps {
  facultyMembers: FacultyMember[];
}

export default function BoardMembersClient({ facultyMembers }: BoardMembersClientProps) {
  const [selectedMember, setSelectedMember] = useState<FacultyMember | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCardClick = (member: FacultyMember) => {
    setSelectedMember(member)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedMember(null)
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {facultyMembers.map((member, index) => (
          <Card 
            key={index} 
            className="hover:shadow-lg transition-shadow cursor-pointer hover:scale-105 transform transition-transform"
            onClick={() => handleCardClick(member)}
          >
            {member.imageUrl && (
              <div className="relative w-full h-48 overflow-hidden rounded-t-lg bg-gray-50">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            )}
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
              
              {member.education && member.education.length > 0 && (
                <div className="mb-2">
                  <h4 className="text-sm font-semibold">Education</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600">
                    {member.education.map((edu, idx) => (
                      <li key={idx}>{edu}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {member.experience && member.experience.length > 0 && (
                <div className="mb-2">
                  <h4 className="text-sm font-semibold">Experience</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600">
                    {member.experience.map((exp, idx) => (
                      <li key={idx}>{exp}</li>
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

      {/* Modal for detailed view */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedMember && (
            <div className="flex flex-col md:flex-row gap-6">
              {/* Image Section */}
              <div className="w-full md:w-1/2">
                {selectedMember.imageUrl ? (
                  <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden bg-gray-50">
                    <Image
                      src={selectedMember.imageUrl}
                      alt={selectedMember.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ) : (
                  <div className="w-full h-64 md:h-80 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 text-lg">No Photo Available</span>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 space-y-6">
                <div>
                  <DialogHeader>
                    <DialogTitle className="text-2xl md:text-3xl text-amber-800 mb-2">
                      {selectedMember.name}
                    </DialogTitle>
                    <p className="text-lg font-medium text-gray-700 mb-4">
                      {selectedMember.position}
                    </p>
                  </DialogHeader>
                </div>

                {selectedMember.qualifications.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Qualifications</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {selectedMember.qualifications.map((qual, idx) => (
                        <li key={idx}>{qual}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedMember.education && selectedMember.education.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Education</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {selectedMember.education.map((edu, idx) => (
                        <li key={idx}>{edu}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedMember.experience && selectedMember.experience.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Experience</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {selectedMember.experience.map((exp, idx) => (
                        <li key={idx}>{exp}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedMember.work && selectedMember.work.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Work Experience</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {selectedMember.work.map((work, idx) => (
                        <li key={idx}>{work}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
} 