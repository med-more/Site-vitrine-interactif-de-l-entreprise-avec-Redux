"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Guides = () => {
  const guides = [
    {
      category: "Développement Web",
      color: "primary",
      guides: [
        {
          title: "Créer une SPA avec React",
          description: "Guide complet pour construire une Single Page Application moderne",
          duration: "2h 30min",
          level: "Intermédiaire",
          icon: "⚛️"
        },
        {
          title: "API REST avec Express",
          description: "Développer une API RESTful robuste avec Node.js et Express",
          duration: "3h 15min",
          level: "Avancé",
          icon: "🚀"
        },
        {
          title: "State Management Redux",
          description: "Maîtriser la gestion d'état avec Redux Toolkit",
          duration: "4h 00min",
          level: "Avancé",
          icon: "📦"
        }
      ]
    },
    {
      category: "Design & UX",
      color: "secondary",
      guides: [
        {
          title: "Design System avec Tailwind",
          description: "Créer un système de design cohérent et scalable",
          duration: "2h 45min",
          level: "Intermédiaire",
          icon: "🎨"
        },
        {
          title: "Animations avec Framer Motion",
          description: "Créer des animations fluides et engageantes",
          duration: "3h 30min",
          level: "Intermédiaire",
          icon: "✨"
        },
        {
          title: "UX Research & Testing",
          description: "Méthodologies pour améliorer l'expérience utilisateur",
          duration: "4h 15min",
          level: "Avancé",
          icon: "🔍"
        }
      ]
    },
    {
      category: "DevOps & Déploiement",
      color: "accent",
      guides: [
        {
          title: "Docker pour développeurs",
          description: "Conteneuriser vos applications avec Docker",
          duration: "2h 00min",
          level: "Débutant",
          icon: "🐳"
        },
        {
          title: "CI/CD avec GitHub Actions",
          description: "Automatiser le déploiement avec GitHub Actions",
          duration: "3h 45min",
          level: "Avancé",
          icon: "🔄"
        },
        {
          title: "Monitoring & Performance",
          description: "Surveiller et optimiser les performances",
          duration: "3h 00min",
          level: "Avancé",
          icon: "📊"
        }
      ]
    },
    {
      category: "Sécurité",
      color: "warning",
      guides: [
        {
          title: "Authentification JWT",
          description: "Implémenter une authentification sécurisée",
          duration: "2h 30min",
          level: "Intermédiaire",
          icon: "🔐"
        },
        {
          title: "OWASP Top 10",
          description: "Prévenir les vulnérabilités web courantes",
          duration: "4h 30min",
          level: "Avancé",
          icon: "🛡️"
        },
        {
          title: "HTTPS & Certificats SSL",
          description: "Sécuriser vos applications web",
          duration: "1h 45min",
          level: "Intermédiaire",
          icon: "🔒"
        }
      ]
    }
  ]

  const getLevelColor = (level) => {
    switch (level) {
      case "Débutant": return "bg-green-500/20 text-green-400 border-green-500/30"
      case "Intermédiaire": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "Avancé": return "bg-red-500/20 text-red-400 border-red-500/30"
      default: return "bg-primary-500/20 text-primary-400 border-primary-500/30"
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen pt-20"
    >
      {/* Hero Section */}
      <motion.section className="section-padding bg-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-20 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
        <div className="absolute inset-0 decoration-grid opacity-20"></div>

        <div className="relative container-custom text-center z-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-primary-500 font-semibold text-lg mb-4 block">Guides Pratiques</span>
            <h1 className="heading-xl mb-8">
              Apprendre par
              <br />
              <span className="text-glow">l'Exemple</span>
            </h1>
            <p className="text-xl text-cream-200/80 max-w-3xl mx-auto leading-relaxed">
              Guides étape par étape pour maîtriser les technologies modernes et construire des applications professionnelles
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Guides Sections */}
      <motion.section className="section-padding relative">
        <div className="container-custom">
          <div className="space-y-12">
            {guides.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.8 }}
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-cream-200 mb-4">{category.category}</h2>
                  <div className="w-20 h-1 bg-primary-500 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.guides.map((guide, guideIndex) => (
                    <motion.div
                      key={guide.title}
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + guideIndex * 0.05, duration: 0.6 }}
                      className="card-premium group card-hover"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                          {guide.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-cream-200 mb-2 group-hover:text-gradient transition-all duration-300">
                            {guide.title}
                          </h3>
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {guide.description}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <span className="text-sm text-muted-foreground">⏱️ {guide.duration}</span>
                              <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getLevelColor(guide.level)}`}>
                                {guide.level}
                              </span>
                            </div>
                            <div className="text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              →
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section className="section-padding bg-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl animate-float"></div>
          <div
            className="absolute bottom-10 right-10 w-48 h-48 bg-primary-500/5 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative container-custom text-center z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="heading-lg mb-8">
              Prêt à approfondir vos <br />
              <span className="text-gradient">compétences</span> ?
            </h2>
            <p className="text-xl text-cream-200/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Rejoignez notre communauté et accédez à des ressources exclusives pour accélérer votre carrière.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="btn-primary text-lg px-10 py-5">
                Commencer un projet
              </Link>
              <Link to="/blog" className="btn-secondary text-lg px-10 py-5">
                Voir nos tutoriels
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  )
}

export default Guides 