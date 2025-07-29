"use client"

import { Link } from "react-router-dom"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useSelector, useDispatch } from "react-redux"
import { filterProjects } from "../store/slices/portfolioSlice"

const Portfolio = () => {
  const dispatch = useDispatch()
  const { projects, filteredProjects } = useSelector((state) => state.portfolio)
  const [activeFilter, setActiveFilter] = useState("all")

  const getUniqueCategories = (projects) => {
    const categories = projects.map((project) => project.category)
    return ["all", ...new Set(categories)]
  }

  const categories = getUniqueCategories(projects)
  const displayProjects = filteredProjects.length > 0 ? filteredProjects : projects

  const handleFilterChange = (category) => {
    setActiveFilter(category)
    dispatch(filterProjects(category))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const stats = [
    { number: "150+", label: "Projets réalisés", icon: "🚀" },
    { number: "50+", label: "Clients satisfaits", icon: "😊" },
    { number: "98%", label: "Taux de satisfaction", icon: "⭐" },
    { number: "24/7", label: "Support continu", icon: "🛟" },
  ]

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="min-h-screen pt-20">
      {/* Hero Section */}
      <motion.section variants={itemVariants} className="section-padding bg-hero relative overflow-hidden">
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
            <span className="text-primary-500 font-semibold text-lg mb-4 block">Nos Réalisations</span>
            <h1 className="heading-xl mb-8">
              Portfolio
              <br />
              <span className="text-glow">Exceptionnel</span>
            </h1>
            <p className="text-xl text-cream-200/80 max-w-3xl mx-auto leading-relaxed">
              Découvrez nos projets les plus marquants, témoins de notre expertise et de notre créativité
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Filter Section */}
      <motion.section variants={itemVariants} className="py-12 bg-section-alt border-b border-border/30">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => handleFilterChange(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-orange-gradient text-dark-900 shadow-glow-orange"
                    : "bg-card border border-border/50 text-cream-200 hover:border-primary-500/50 hover:bg-primary-500/10"
                }`}
              >
                {category === "all" ? "Tous les projets" : category}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <motion.section variants={itemVariants} className="section-padding relative">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" key={activeFilter}>
              {displayProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="card-premium group card-hover overflow-hidden relative"
                >
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <img
                      src={project.image || "/placeholder.svg?height=400&width=600&query=modern web application"}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-500 text-dark-900 px-3 py-1 rounded-full text-sm font-bold shadow-glow-orange">
                        {project.category}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="flex space-x-3">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 btn-primary text-center text-sm py-2"
                        >
                          Voir le site
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 btn-secondary text-center text-sm py-2"
                        >
                          Code source
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-cream-200 group-hover:text-gradient transition-all duration-300">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-primary-500/10 text-primary-500 px-3 py-1 rounded-full border border-primary-500/20 hover:bg-primary-500/20 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section variants={itemVariants} className="section-padding bg-section-alt relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary-500 font-semibold text-lg mb-4 block">Nos Performances</span>
              <h2 className="heading-lg mb-6">
                Résultats en <span className="text-gradient">chiffres</span>
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="card-glass p-8 text-center group hover:shadow-glow-orange transition-all duration-500"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section variants={itemVariants} className="section-padding bg-hero relative overflow-hidden">
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
              Votre projet sera le <br />
              <span className="text-gradient">prochain</span> de cette liste
            </h2>
            <p className="text-xl text-cream-200/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Rejoignez nos clients satisfaits et donnez vie à votre vision avec notre expertise technique et créative.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="btn-primary text-lg px-10 py-5">
                Démarrer mon projet
              </Link>
              <Link to="/services" className="btn-secondary text-lg px-10 py-5">
                Découvrir nos services
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  )
}

export default Portfolio
