"use client"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

import { useSelector } from "react-redux"

const About = () => {
  const team = useSelector((state) => state.team.members)

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

  const values = [
    {
      icon: "🚀",
      title: "Innovation",
      description:
        "Nous restons à la pointe des technologies pour offrir des solutions modernes et performantes qui dépassent les attentes.",
      color: "from-primary-500 to-primary-600",
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description:
        "Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins et créer ensemble.",
      color: "from-primary-600 to-primary-700",
    },
    {
      icon: "⚡",
      title: "Excellence",
      description:
        "Nous nous engageons à livrer des produits de la plus haute qualité dans les délais convenus, sans compromis.",
      color: "from-primary-500 to-primary-800",
    },
    {
      icon: "🎯",
      title: "Précision",
      description: "Chaque détail compte. Nous apportons une attention méticuleuse à tous les aspects de nos projets.",
      color: "from-primary-400 to-primary-600",
    },
  ]

  const achievements = [
    { number: "150+", label: "Projets livrés", icon: "📦" },
    { number: "98%", label: "Satisfaction client", icon: "😊" },
    { number: "5+", label: "Années d'expertise", icon: "⭐" },
    { number: "24h", label: "Temps de réponse", icon: "⚡" },
  ]

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="min-h-screen pt-20">
      {/* Hero Section */}
      <motion.section variants={itemVariants} className="section-padding bg-hero relative overflow-hidden">
        {/* Animated Background */}
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
            <span className="text-primary-500 font-semibold text-lg mb-4 block">Notre Histoire</span>
            <h1 className="heading-xl mb-8">
              L'équipe derrière
              <br />
              <span className="text-glow">404.js</span>
            </h1>
            <p className="text-xl text-cream-200/80 max-w-3xl mx-auto leading-relaxed">
              Une équipe passionnée de créateurs digitaux dédiée à transformer vos idées en expériences exceptionnelles
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section variants={itemVariants} className="section-padding relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary-500 font-semibold text-lg mb-4 block">Notre Mission</span>
              <h2 className="heading-md mb-8">
                Créer l'avenir <span className="text-gradient">numérique</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Chez 404.js, nous croyons que chaque projet mérite une approche unique et innovante. Notre mission est
                  de transformer vos idées en solutions digitales performantes et esthétiques qui dépassent vos
                  attentes.
                </p>
                <p>
                  Nous nous spécialisons dans les technologies modernes comme React, Vue.js, Node.js et bien d'autres,
                  pour créer des expériences utilisateur exceptionnelles qui marquent les esprits.
                </p>
                <p>
                  Notre approche collaborative nous permet de comprendre parfaitement vos besoins et de livrer des
                  solutions sur-mesure qui propulsent votre business vers de nouveaux sommets.
                </p>
              </div>

              {/* Achievements */}
              <div className="grid grid-cols-2 gap-6 mt-12">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="card-glass p-6 text-center group hover:shadow-glow-orange transition-all duration-500"
                  >
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {achievement.icon}
                    </div>
                    <div className="text-3xl font-bold text-gradient mb-1">{achievement.number}</div>
                    <div className="text-sm text-muted-foreground">{achievement.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="card-premium p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent"></div>
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Notre équipe au travail"
                  className="w-full h-96 object-cover rounded-xl shadow-2xl"
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-strong p-4 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <div className="status-online"></div>
                      <span className="text-cream-200 font-medium">Équipe disponible 24/7</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section variants={itemVariants} className="section-padding bg-section-alt relative">
        <div className="container-custom">
          <div className="text-center mb-20">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary-500 font-semibold text-lg mb-4 block">Nos Valeurs</span>
              <h2 className="heading-lg mb-6">
                Ce qui nous <span className="text-gradient">guide</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Les principes fondamentaux qui définissent notre approche et notre engagement envers l'excellence
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="card-premium group card-hover text-center relative overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-all duration-500`}
                ></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-orange-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 text-4xl shadow-glow-orange group-hover:shadow-glow-orange-lg transition-all duration-500 group-hover:scale-110">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-cream-200 mb-4 group-hover:text-gradient transition-all duration-300">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section variants={itemVariants} className="section-padding relative">
        <div className="container-custom">
          <div className="text-center mb-20">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary-500 font-semibold text-lg mb-4 block">Notre Équipe</span>
              <h2 className="heading-lg mb-6">
                Les talents qui donnent <span className="text-gradient">vie</span> à vos projets
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Rencontrez les experts passionnés qui transforment vos idées en réalités digitales exceptionnelles
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="card-premium group card-hover overflow-hidden relative"
              >
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img
                    src={member.image || "/placeholder.svg?height=400&width=400&query=professional developer portrait"}
                    alt={member.name}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                  {/* Social Links Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex justify-center space-x-3">
                      {Object.entries(member.social).map(([platform, url]) => (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-card/80 backdrop-blur-sm border border-primary-500/30 rounded-lg flex items-center justify-center hover:bg-primary-500/20 transition-all duration-300"
                        >
                          <span className="text-lg">
                            {platform === "linkedin" && "💼"}
                            {platform === "github" && "🐙"}
                            {platform === "twitter" && "🐦"}
                            {platform === "dribbble" && "🎨"}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-cream-200 group-hover:text-gradient transition-all duration-300">
                      {member.name}
                    </h3>
                    <p className="text-primary-500 font-semibold text-lg">{member.role}</p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-center">{member.bio}</p>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs bg-primary-500/10 text-primary-500 px-3 py-1 rounded-full border border-primary-500/20 hover:bg-primary-500/20 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
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
              Rejoignez l'aventure <span className="text-gradient">404.js</span>
            </h2>
            <p className="text-xl text-cream-200/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Vous partagez notre passion pour l'innovation ? Nous sommes toujours à la recherche de talents
              exceptionnels pour rejoindre notre équipe.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="btn-primary text-lg px-10 py-5">
                Nous rejoindre
              </Link>
              <Link to="/portfolio" className="btn-secondary text-lg px-10 py-5">
                Voir nos projets
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  )
}

export default About
