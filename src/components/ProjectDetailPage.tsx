'use client'

import { motion } from 'motion/react'
import { ExternalLink, Github, Linkedin, ArrowLeft, CheckCircle } from 'lucide-react'
import { Button } from './ui/button'

interface ProjectDetailPageProps {
  projectId: string
}

export function ProjectDetailPage({ projectId }: ProjectDetailPageProps) {
  // Inline data to avoid import issues
  const projectsData = [
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
      "linkedinUrl": "",
      "detailedDescription": "This comprehensive e-commerce platform was built to provide a seamless shopping experience. It includes features like user authentication, product catalog, shopping cart, and secure payment processing through Stripe integration.",
      "features": [
        "User authentication and authorization",
        "Product catalog with search and filters",
        "Shopping cart and checkout process",
        "Payment integration with Stripe",
        "Admin dashboard for inventory management",
        "Order tracking and email notifications"
      ],
      "challenges": "The main challenge was implementing a scalable architecture that could handle high traffic during peak shopping seasons.",
      "solution": "We implemented a microservices architecture with Redis caching and load balancing to ensure optimal performance.",
      "gallery": [
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800"
      ]
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
      "linkedinUrl": "https://linkedin.com/post/example",
      "detailedDescription": "A powerful task management application designed for teams to collaborate effectively. Features real-time updates, task assignments, and progress tracking.",
      "features": [
        "Real-time task updates",
        "Team collaboration features",
        "Drag-and-drop task organization",
        "File attachments and comments",
        "Project timelines and milestones",
        "Analytics and reporting"
      ],
      "challenges": "Implementing real-time synchronization across multiple users without performance degradation.",
      "solution": "Used Firebase Realtime Database with optimistic UI updates to ensure a smooth user experience.",
      "gallery": [
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800"
      ]
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
      "linkedinUrl": "https://linkedin.com/post/example",
      "detailedDescription": "An intelligent analytics dashboard that leverages machine learning to provide predictive insights and data visualization.",
      "features": [
        "AI-powered predictive analytics",
        "Interactive data visualizations",
        "Custom dashboard creation",
        "Real-time data processing",
        "Automated reporting",
        "Integration with multiple data sources"
      ],
      "challenges": "Processing large datasets in real-time while maintaining responsive UI.",
      "solution": "Implemented server-side processing with WebSocket connections for efficient data streaming.",
      "gallery": [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
      ]
    }
  ]
  
  const project = projectsData.find((p: any) => p.id === projectId)

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl text-white mb-4">Project Not Found</h2>
          <a href="#/projects" className="text-emerald-400 hover:text-emerald-300">
            Back to Projects
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <a
            href="#/projects"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </a>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-start justify-between mb-6">
            <div>
              <span className="text-emerald-400 text-sm font-semibold mb-2 block">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-5xl text-white mb-4">
                {project.title}
              </h1>
              <p className="text-gray-400 text-lg">
                {project.description}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {project.githubUrl && (
              <Button
                onClick={() => window.open(project.githubUrl, '_blank')}
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </Button>
            )}
            
            {project.liveUrl && (
              <Button
                onClick={() => window.open(project.liveUrl, '_blank')}
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </Button>
            )}
            
            {project.linkedinUrl && (
              <Button
                onClick={() => window.open(project.linkedinUrl, '_blank')}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn Post
              </Button>
            )}
          </div>
        </motion.div>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 rounded-2xl overflow-hidden"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[400px] object-cover"
          />
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl text-white mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech: string) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-emerald-400/30 text-emerald-400 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Detailed Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl text-white mb-4">About This Project</h2>
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <p className="text-gray-300 leading-relaxed">
              {project.detailedDescription}
            </p>
          </div>
        </motion.div>

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl text-white mb-4">Key Features</h2>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Challenges & Solution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {project.challenges && (
            <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-400/30 rounded-xl p-8">
              <h3 className="text-xl text-white mb-3">Challenges</h3>
              <p className="text-gray-300">{project.challenges}</p>
            </div>
          )}
          
          {project.solution && (
            <div className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border border-emerald-400/30 rounded-xl p-8">
              <h3 className="text-xl text-white mb-3">Solution</h3>
              <p className="text-gray-300">{project.solution}</p>
            </div>
          )}
        </motion.div>

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-12"
          >
            <h2 className="text-2xl text-white mb-6">Project Gallery</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.gallery.map((image: string, index: number) => (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden border border-white/10 hover:border-emerald-400/50 transition-all duration-300"
                >
                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}