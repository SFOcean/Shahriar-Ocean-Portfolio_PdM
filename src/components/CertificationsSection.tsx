'use client'

import { motion } from 'motion/react'
import { Award, ExternalLink, Calendar } from 'lucide-react'

export function CertificationsSection() {
  // Inline data to avoid import issues
  const certificationsData = [
    {
      "id": "1",
      "name": "Certified Scrum Product Owner (CSPO)",
      "issuer": "Scrum Alliance",
      "date": "2023",
      "credentialId": "000123456",
      "credentialUrl": "https://example.com/credential",
      "description": "Advanced certification in Agile product ownership and stakeholder management.",
      "logo": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200"
    },
    {
      "id": "2",
      "name": "AWS Certified Solutions Architect",
      "issuer": "Amazon Web Services",
      "date": "2022",
      "credentialId": "AWS-SA-789",
      "credentialUrl": "https://aws.amazon.com/certification",
      "description": "Professional certification demonstrating expertise in designing distributed systems on AWS.",
      "logo": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200"
    },
    {
      "id": "3",
      "name": "Google Analytics Certification",
      "issuer": "Google",
      "date": "2023",
      "credentialId": "GA-456789",
      "credentialUrl": "https://analytics.google.com/analytics/academy/",
      "description": "Certified in advanced analytics implementation and data-driven decision making.",
      "logo": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200"
    },
    {
      "id": "4",
      "name": "Product Management Professional",
      "issuer": "Product School",
      "date": "2021",
      "credentialId": "PM-2021-567",
      "credentialUrl": "https://productschool.com",
      "description": "Comprehensive training in product strategy, roadmapping, and user research.",
      "logo": "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=200"
    }
  ]

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Training</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional certifications and continuous learning achievements
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-emerald-400/50 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                {/* Certification Logo/Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg overflow-hidden border border-white/10 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 flex items-center justify-center">
                    {cert.logo ? (
                      <img
                        src={cert.logo}
                        alt={cert.issuer}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Award className="w-8 h-8 text-emerald-400" />
                    )}
                  </div>
                </div>

                {/* Certification Details */}
                <div className="flex-1">
                  <h3 className="text-xl text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {cert.name}
                  </h3>
                  
                  <p className="text-emerald-400 mb-2">
                    {cert.issuer}
                  </p>

                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                    {cert.credentialId && (
                      <>
                        <span>•</span>
                        <span className="text-xs">ID: {cert.credentialId}</span>
                      </>
                    )}
                  </div>

                  <p className="text-gray-300 text-sm mb-4">
                    {cert.description}
                  </p>

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-sm transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Credential
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add New Certification Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm">
            To add or edit certifications, update the <code className="bg-white/10 px-2 py-1 rounded">/data/certifications.json</code> file
          </p>
        </motion.div>
      </div>
    </section>
  )
}