'use client'

import { motion } from 'motion/react'
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react'

export function ResumePage() {
  // Inline data to avoid import issues
  const educationData = [
    {
      "id": "1",
      "degree": "Master of Business Administration",
      "field": "Technology Management",
      "institution": "Stanford University",
      "location": "Stanford, CA",
      "startDate": "2018",
      "endDate": "2020",
      "description": "Focused on product management, technology strategy, and innovation. Completed capstone project on AI-driven product development.",
      "achievements": [
        "GPA: 3.9/4.0",
        "Dean's List all semesters",
        "President of Product Management Club"
      ]
    },
    {
      "id": "2",
      "degree": "Bachelor of Science",
      "field": "Computer Science",
      "institution": "Massachusetts Institute of Technology",
      "location": "Cambridge, MA",
      "startDate": "2014",
      "endDate": "2018",
      "description": "Comprehensive study in software engineering, algorithms, and system design with minor in Business Management.",
      "achievements": [
        "Summa Cum Laude",
        "Outstanding Senior Thesis Award",
        "Google Summer of Code Participant"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl text-white mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Resume</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Education background and professional qualifications
          </p>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-8 h-8 text-emerald-400" />
            <h2 className="text-3xl text-white">Education</h2>
          </div>

          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-emerald-400/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl text-white mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-emerald-400 text-lg mb-3">
                      {edu.field}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.startDate} - {edu.endDate}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-gray-300 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span className="text-lg">{edu.institution}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-400">{edu.location}</span>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {edu.description}
                </p>

                {edu.achievements && edu.achievements.length > 0 && (
                  <div>
                    <h4 className="text-white mb-3 flex items-center gap-2">
                      <Award className="w-4 h-4 text-emerald-400" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-400 flex items-start gap-2">
                          <span className="text-emerald-400 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section (Optional - can be added later) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center py-12"
        >
          <p className="text-gray-400">
            More sections like Work Experience and Skills can be added by editing the data files
          </p>
        </motion.div>
      </div>
    </div>
  )
}