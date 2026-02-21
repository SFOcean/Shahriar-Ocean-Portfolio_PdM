'use client'

import { motion } from 'motion/react'
import { ExternalLink, Github, Linkedin } from 'lucide-react'
import { useState } from 'react'

interface Project {
  id: string
  title: string
  shortDescription: string
  image: string
  category: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  linkedinUrl?: string
}

export function AllProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  
  // Inline data to avoid import issues
  const projects: Project[] = [
    {
      "id": "1",
      "title": "E-Commerce Platform",
      "description": "A full-featured e-commerce platform with payment integration",
      "shortDescription": "Modern e-commerce solution with React and Node.js",
      "image": "https://images.unsplash.com/photo-1557821552-17105176677c?w=800",
      "category": "Web Development",
      "technologies": ["React", "Node.js", "MongoDB", "Stripe"],
      "githubUrl": "https://github.com/yourusername/project",
      "liveUrl": "https://example.com",
      "linkedinUrl": ""
    },
    {
      "id": "2",
      "title": "Task Management App",
      "description": "Collaborative task management application for teams",
      "shortDescription": "Team collaboration tool with real-time updates",
      "image": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
      "category": "Productivity",
      "technologies": ["React", "Firebase", "Material-UI"],
      "githubUrl": "https://github.com/yourusername/project",
      "liveUrl": "",
      "linkedinUrl": "https://linkedin.com/post/example"
    },
    {
      "id": "3",
      "title": "AI-Powered Analytics Dashboard",
      "description": "Advanced analytics dashboard with AI-driven insights",
      "shortDescription": "Analytics platform with machine learning capabilities",
      "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      "category": "Data Analytics",
      "technologies": ["React", "Python", "TensorFlow", "D3.js"],
      "githubUrl": "",
      "liveUrl": "https://example.com",
      "linkedinUrl": "https://linkedin.com/post/example"
    }
  ]
  
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))]
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl text-white mb-6">
            All <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Projects</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my portfolio of projects showcasing various technologies and solutions
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-emerald-500 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-emerald-400/50 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-xs text-emerald-400 font-semibold">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4">
                  {project.shortDescription}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/5 text-gray-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <a
                    href={`#/project/${project.id}`}
                    className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white text-center px-4 py-2 rounded-lg transition-all duration-300"
                  >
                    View Details
                  </a>
                  
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-lg flex items-center justify-center transition-all duration-300"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-lg flex items-center justify-center transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    
                    {project.linkedinUrl && (
                      <a
                        href={project.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-lg flex items-center justify-center transition-all duration-300"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}