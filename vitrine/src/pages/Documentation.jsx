"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Documentation = () => {
  const documentationSections = [
    {
      title: "React",
      description: "Documentation complète pour React et ses écosystèmes",
      items: [
        { name: "React Hooks", description: "Guide complet des hooks React", icon: "⚛️" },
        { name: "Context API", description: "Gestion d'état avec Context", icon: "🔄" },
        { name: "Redux Toolkit", description: "State management avancé", icon: "📦" },
        { name: "React Router", description: "Navigation dans les SPA", icon: "🧭" },
      ]
    },
    {
      title: "Frontend",
      description: "Technologies et outils frontend modernes",
      items: [
        { name: "TypeScript", description: "Typage statique pour JavaScript", icon: "🔷" },
        { name: "Tailwind CSS", description: "Framework CSS utilitaire", icon: "🎨" },
        { name: "Framer Motion", description: "Animations fluides", icon: "✨" },
        { name: "Vite", description: "Build tool ultra-rapide", icon: "⚡" },
      ]
    },
    {
      title: "Backend",
      description: "APIs et serveurs avec Node.js",
      items: [
        { name: "Express.js", description: "Framework web minimaliste", icon: "🚀" },
        { name: "MongoDB", description: "Base de données NoSQL", icon: "🍃" },
        { name: "Mongoose", description: "ODM pour MongoDB", icon: "📝" },
        { name: "JWT", description: "Authentification sécurisée", icon: "🔐" },
      ]
    },
    {
      title: "DevOps",
      description: "Déploiement et infrastructure",
      items: [
        { name: "Docker", description: "Conteneurisation d'applications", icon: "🐳" },
        { name: "Git", description: "Gestion de versions", icon: "📚" },
        { name: "CI/CD", description: "Intégration continue", icon: "🔄" },
        { name: "AWS", description: "Cloud computing", icon: "☁️" },
      ]
    }
  ]

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
            <span className="text-primary-500 font-semibold text-lg mb-4 block">Documentation</span>
            <h1 className="heading-xl mb-8">
              Ressources
              <br />
              <span className="text-glow">Techniques</span>
            </h1>
            <p className="text-xl text-cream-200/80 max-w-3xl mx-auto leading-relaxed">
              Documentation complète, guides pratiques et références techniques pour maîtriser les technologies modernes
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Documentation Sections */}
      <motion.section className="section-padding relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {documentationSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: sectionIndex * 0.1, duration: 0.8 }}
                className="card-premium"
              >
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-cream-200 mb-3">{section.title}</h2>
                  <p className="text-muted-foreground">{section.description}</p>
                </div>

                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.name}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: sectionIndex * 0.1 + itemIndex * 0.05, duration: 0.6 }}
                      className="flex items-center space-x-4 p-4 bg-card/50 rounded-xl border border-border/30 hover:border-primary-500/30 hover:bg-primary-500/5 transition-all duration-300 group"
                    >
                      <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-cream-200 group-hover:text-primary-500 transition-colors duration-300">
                          {item.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <div className="text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        →
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
              Besoin d'aide avec une <br />
              <span className="text-gradient">technologie spécifique</span> ?
            </h2>
            <p className="text-xl text-cream-200/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Notre équipe d'experts est là pour vous accompagner dans vos projets techniques.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="btn-primary text-lg px-10 py-5">
                Nous contacter
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

export default Documentation 