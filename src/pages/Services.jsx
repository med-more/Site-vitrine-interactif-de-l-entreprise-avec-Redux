"use client"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

import { useSelector } from "react-redux"

const Services = () => {
  const services = useSelector((state) => state.services.services)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const processSteps = [
    {
      step: "01",
      title: "Analyse & Stratégie",
      description:
        "Nous analysons vos besoins, définissons ensemble les objectifs et élaborons une stratégie sur-mesure pour votre projet.",
      icon: "🔍",
      color: "from-primary-500 to-primary-600",
    },
    {
      step: "02",
      title: "Design & Prototypage",
      description:
        "Création des maquettes, wireframes et prototypes interactifs pour valider l'expérience utilisateur avant le développement.",
      icon: "🎨",
      color: "from-primary-600 to-primary-700",
    },
    {
      step: "03",
      title: "Développement",
      description:
        "Développement agile avec des points de validation réguliers, en utilisant les technologies les plus adaptées à votre projet.",
      icon: "⚡",
      color: "from-primary-500 to-primary-800",
    },
    {
      step: "04",
      title: "Tests & Déploiement",
      description:
        "Tests approfondis, optimisations de performance, déploiement sécurisé et formation pour une mise en production réussie.",
      icon: "🚀",
      color: "from-primary-400 to-primary-600",
    },
  ]

  const technologies = [
    { name: "React", icon: "⚛️", category: "Frontend" },
    { name: "Vue.js", icon: "💚", category: "Frontend" },
    { name: "Angular", icon: "🅰️", category: "Frontend" },
    { name: "Node.js", icon: "🟢", category: "Backend" },
    { name: "Python", icon: "🐍", category: "Backend" },
    { name: "TypeScript", icon: "🔷", category: "Language" },
    { name: "MongoDB", icon: "🍃", category: "Database" },
    { name: "PostgreSQL", icon: "🐘", category: "Database" },
    { name: "Docker", icon: "🐳", category: "DevOps" },
    { name: "AWS", icon: "☁️", category: "Cloud" },
    { name: "Firebase", icon: "🔥", category: "Cloud" },
    { name: "GraphQL", icon: "🔗", category: "API" },
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
            <span className="text-primary-500 font-semibold text-lg mb-4 block">Nos Expertises</span>
            <h1 className="heading-xl mb-8">
              Services
              <br />
              <span className="text-glow">Premium</span>
            </h1>
            <p className="text-xl text-cream-200/80 max-w-3xl mx-auto leading-relaxed">
              Des solutions complètes et sur-mesure pour tous vos besoins digitaux, avec l'excellence technique que vous
              méritez
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section variants={itemVariants} className="section-padding relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="card-premium group card-hover relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <div className="relative z-10">
                  <div className="flex items-start space-x-6 mb-8">
                    <div className="w-20 h-20 bg-orange-gradient rounded-2xl flex items-center justify-center text-4xl shadow-glow-orange group-hover:shadow-glow-orange-lg transition-all duration-500 group-hover:scale-110 flex-shrink-0">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-cream-200 group-hover:text-gradient transition-all duration-300 mb-2">
                        {service.title}
                      </h3>
                      <div className="text-2xl font-bold text-primary-500">{service.price}</div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">{service.description}</p>

                  <div className="space-y-4 mb-8">
                    <h4 className="font-bold text-cream-200 text-lg flex items-center">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                      Fonctionnalités incluses
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: featureIndex * 0.1, duration: 0.5 }}
                          className="flex items-center space-x-3 p-3 rounded-lg bg-dark-800/50 border border-border/30 hover:border-primary-500/30 transition-all duration-300"
                        >
                          <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                          <span className="text-cream-200/90 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <button className="btn-primary w-full group">
                    <span>Demander un devis</span>
                    <motion.span
                      className="ml-2 inline-block"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      →
                    </motion.span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section variants={itemVariants} className="section-padding bg-section-alt relative">
        <div className="container-custom">
          <div className="text-center mb-20">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary-500 font-semibold text-lg mb-4 block">Notre Méthode</span>
              <h2 className="heading-lg mb-6">
                Processus <span className="text-gradient">éprouvé</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Une méthodologie structurée et transparente pour garantir le succès de votre projet à chaque étape
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="relative group"
              >
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary-500/50 to-transparent z-0"></div>
                )}

                <div className="card-premium text-center relative z-10 card-hover">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-orange-gradient rounded-2xl flex items-center justify-center text-2xl font-bold text-dark-900 mx-auto mb-6 shadow-glow-orange group-hover:shadow-glow-orange-lg transition-all duration-500 group-hover:scale-110">
                      {process.step}
                    </div>

                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {process.icon}
                    </div>

                    <h3 className="text-xl font-bold text-cream-200 mb-4 group-hover:text-gradient transition-all duration-300">
                      {process.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">{process.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Technologies Section */}
      <motion.section variants={itemVariants} className="section-padding relative">
        <div className="container-custom">
          <div className="text-center mb-20">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary-500 font-semibold text-lg mb-4 block">Stack Technique</span>
              <h2 className="heading-lg mb-6">
                Technologies <span className="text-gradient">maîtrisées</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Nous utilisons les technologies les plus modernes et performantes pour créer des solutions robustes et
                évolutives
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="card-glass p-6 text-center group card-hover relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <div className="relative z-10">
                  <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <div className="text-sm font-bold text-cream-200 group-hover:text-gradient transition-all duration-300 mb-2">
                    {tech.name}
                  </div>
                  <div className="text-xs text-primary-500 bg-primary-500/10 px-2 py-1 rounded-full border border-primary-500/20">
                    {tech.category}
                  </div>
                </div>
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
              Prêt à démarrer <br />
              <span className="text-gradient">votre projet</span> ?
            </h2>
            <p className="text-xl text-cream-200/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Contactez-nous pour une consultation gratuite et découvrez comment nous pouvons transformer vos idées en
              réalité digitale.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="btn-primary text-lg px-10 py-5">
                Consultation gratuite
              </Link>
              <Link to="/portfolio" className="btn-secondary text-lg px-10 py-5">
                Voir nos réalisations
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  )
}

export default Services
