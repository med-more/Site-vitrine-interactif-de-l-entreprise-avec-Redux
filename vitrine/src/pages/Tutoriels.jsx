"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Tutoriels = () => {
  const tutoriels = [
    {
      category: "React & Frontend",
      icon: "⚛️",
      tutorials: [
        {
          title: "Créer un Hook personnalisé",
          description: "Apprenez à créer vos propres hooks React pour réutiliser la logique",
          duration: "15 min",
          difficulty: "Intermédiaire",
          video: true,
          code: true
        },
        {
          title: "Optimiser les performances React",
          description: "Techniques avancées pour améliorer les performances de vos composants",
          duration: "25 min",
          difficulty: "Avancé",
          video: true,
          code: true
        },
        {
          title: "Gestion d'état avec Context",
          description: "Remplacez Redux avec Context API pour des applications simples",
          duration: "20 min",
          difficulty: "Intermédiaire",
          video: true,
          code: true
        }
      ]
    },
    {
      category: "Backend & API",
      icon: "🚀",
      tutorials: [
        {
          title: "API REST avec Express",
          description: "Construire une API RESTful complète avec authentification",
          duration: "35 min",
          difficulty: "Avancé",
          video: true,
          code: true
        },
        {
          title: "MongoDB avec Mongoose",
          description: "Modéliser vos données et créer des schémas robustes",
          duration: "30 min",
          difficulty: "Intermédiaire",
          video: true,
          code: true
        },
        {
          title: "Middleware Express",
          description: "Créer des middlewares personnalisés pour votre API",
          duration: "18 min",
          difficulty: "Intermédiaire",
          video: true,
          code: true
        }
      ]
    },
    {
      category: "CSS & Design",
      icon: "🎨",
      tutorials: [
        {
          title: "Animations CSS avancées",
          description: "Créer des animations fluides et performantes avec CSS",
          duration: "22 min",
          difficulty: "Intermédiaire",
          video: true,
          code: true
        },
        {
          title: "Grid Layout moderne",
          description: "Maîtriser CSS Grid pour des layouts complexes",
          duration: "28 min",
          difficulty: "Intermédiaire",
          video: true,
          code: true
        },
        {
          title: "Design System avec Tailwind",
          description: "Créer un système de design cohérent et scalable",
          duration: "40 min",
          difficulty: "Avancé",
          video: true,
          code: true
        }
      ]
    },
    {
      category: "Outils & Workflow",
      icon: "🛠️",
      tutorials: [
        {
          title: "Configuration Vite",
          description: "Optimiser votre environnement de développement avec Vite",
          duration: "12 min",
          difficulty: "Débutant",
          video: true,
          code: true
        },
        {
          title: "Git Workflow avancé",
          description: "Stratégies de branching et gestion des conflits",
          duration: "32 min",
          difficulty: "Avancé",
          video: true,
          code: false
        },
        {
          title: "Docker pour développeurs",
          description: "Conteneuriser vos applications de développement",
          duration: "45 min",
          difficulty: "Avancé",
          video: true,
          code: true
        }
      ]
    }
  ]

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
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
            <span className="text-primary-500 font-semibold text-lg mb-4 block">Tutoriels Vidéo</span>
            <h1 className="heading-xl mb-8">
              Apprendre en
              <br />
              <span className="text-glow">Pratique</span>
            </h1>
            <p className="text-xl text-cream-200/80 max-w-3xl mx-auto leading-relaxed">
              Tutoriels vidéo détaillés avec code source pour maîtriser les technologies web modernes
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Tutorials Sections */}
      <motion.section className="section-padding relative">
        <div className="container-custom">
          <div className="space-y-16">
            {tutoriels.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.8 }}
              >
                <div className="mb-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="text-4xl">{category.icon}</div>
                    <h2 className="text-3xl font-bold text-cream-200">{category.category}</h2>
                  </div>
                  <div className="w-20 h-1 bg-primary-500 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.tutorials.map((tutorial, tutorialIndex) => (
                    <motion.div
                      key={tutorial.title}
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + tutorialIndex * 0.05, duration: 0.6 }}
                      className="card-premium group card-hover"
                    >
                      <div className="relative">
                        {/* Video Preview Placeholder */}
                        <div className="relative mb-4 overflow-hidden rounded-xl bg-gradient-to-br from-primary-500/20 to-primary-500/5">
                          <div className="aspect-video flex items-center justify-center">
                            <div className="text-6xl opacity-50">📹</div>
                          </div>
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <span className="text-2xl">▶️</span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <h3 className="text-xl font-bold text-cream-200 group-hover:text-gradient transition-all duration-300">
                            {tutorial.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {tutorial.description}
                          </p>
                          
                          <div className="flex items-center justify-between pt-3">
                            <div className="flex items-center space-x-3">
                              <span className="text-sm text-muted-foreground">⏱️ {tutorial.duration}</span>
                              <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getDifficultyColor(tutorial.difficulty)}`}>
                                {tutorial.difficulty}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              {tutorial.video && (
                                <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full border border-blue-500/30">
                                  📹 Vidéo
                                </span>
                              )}
                              {tutorial.code && (
                                <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full border border-green-500/30">
                                  💻 Code
                                </span>
                              )}
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
              Besoin d'un tutoriel <br />
              <span className="text-gradient">spécifique</span> ?
            </h2>
            <p className="text-xl text-cream-200/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Dites-nous sur quelle technologie vous aimeriez apprendre et nous créerons un tutoriel pour vous.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="btn-primary text-lg px-10 py-5">
                Demander un tutoriel
              </Link>
              <Link to="/blog" className="btn-secondary text-lg px-10 py-5">
                Voir nos articles
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  )
}

export default Tutoriels 