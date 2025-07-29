"use client"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useSelector } from "react-redux"

const Home = () => {
  const services = useSelector((state) => state.services.services)
  const projects = useSelector((state) => state.portfolio.projects)
  const posts = useSelector((state) => state.blog.posts)

  // HOF pour filtrer les derniers projets
  const getLatestProjects = (projects, count = 3) => projects.slice(0, count)
  const getLatestPosts = (posts, count = 3) => [...posts].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, count)

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

  const stats = [
    { number: "150+", label: "Projets réalisés", icon: "🚀" },
    { number: "50+", label: "Clients satisfaits", icon: "😊" },
    { number: "5+", label: "Années d'expérience", icon: "⭐" },
    { number: "24/7", label: "Support client", icon: "🛟" },
  ]

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        variants={itemVariants}
        className="relative min-h-screen flex items-center justify-center bg-hero overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-20 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary-500/5 to-transparent rounded-full animate-pulse"></div>
        </div>

        {/* Decorative Grid */}
        <div className="absolute inset-0 decoration-grid opacity-20"></div>

        <div className="relative container-custom text-center z-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="max-w-5xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-primary-500/30 rounded-full px-6 py-3 mb-8"
            >
              <div className="status-online"></div>
              <span className="text-sm font-medium text-cream-200">Disponible pour nouveaux projets</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="heading-xl mb-8"
            >
              Créons l'avenir
              <br />
              <span className="text-glow">numérique</span>
              <br />
              ensemble
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-xl md:text-2xl text-cream-200/80 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Agence de développement web spécialisée dans les technologies modernes. Nous transformons vos idées en
              expériences digitales exceptionnelles.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link to="/portfolio" className="btn-primary group">
                <span>Découvrir nos projets</span>
                <motion.span
                  className="ml-2 inline-block"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  →
                </motion.span>
              </Link>
              <Link to="/contact" className="btn-secondary group">
                <span>Démarrer un projet</span>
                <motion.span
                  className="ml-2 inline-block"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  ✨
                </motion.span>
              </Link>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
              <div className="flex flex-col items-center space-y-2">
                <span className="text-sm text-cream-200/60">Découvrir</span>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="w-6 h-10 border-2 border-primary-500/50 rounded-full flex justify-center"
                >
                  <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="w-1 h-3 bg-primary-500 rounded-full mt-2"
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section variants={itemVariants} className="section-padding bg-section-alt relative">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center group"
              >
                <div className="card-glass p-8 hover:shadow-glow-orange transition-all duration-500">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">{stat.number}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section variants={itemVariants} className="section-padding relative">
        <div className="container-custom">
          <div className="text-center mb-20">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary-500 font-semibold text-lg mb-4 block">Nos Expertises</span>
              <h2 className="heading-lg mb-6">
                Services <span className="text-gradient">Premium</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Des solutions complètes et sur-mesure pour tous vos besoins digitaux, avec l'excellence technique que
                vous méritez.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="card-premium group card-hover"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl shadow-glow-orange group-hover:shadow-glow-orange-lg transition-all duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-cream-200 mb-4 group-hover:text-gradient transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-cream-200/80">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="text-primary-500 font-bold text-lg">{service.price}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center mt-16"
          >
            <Link to="/services" className="btn-primary">
              Découvrir tous nos services
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Portfolio Preview */}
      <motion.section variants={itemVariants} className="section-padding bg-section-alt relative">
        <div className="container-custom">
          <div className="text-center mb-20">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary-500 font-semibold text-lg mb-4 block">Portfolio</span>
              <h2 className="heading-lg mb-6">
                Projets <span className="text-gradient">Exceptionnels</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Découvrez quelques-unes de nos réalisations les plus marquantes, témoins de notre expertise et de notre
                créativité.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getLatestProjects(projects).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="card-premium group card-hover overflow-hidden"
              >
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex space-x-2">
                      <button className="btn-ghost text-xs py-2 px-4">Voir le projet</button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-primary-500 text-sm font-semibold bg-primary-500/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <div className="flex space-x-1">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <div key={idx} className="w-2 h-2 bg-primary-500/60 rounded-full"></div>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-cream-200 group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-dark-800 text-cream-200/80 px-2 py-1 rounded-md border border-border/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center mt-16"
          >
            <Link to="/portfolio" className="btn-primary">
              Voir tout le portfolio
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Blog Preview */}
      <motion.section variants={itemVariants} className="section-padding relative">
        <div className="container-custom">
          <div className="text-center mb-20">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary-500 font-semibold text-lg mb-4 block">Blog & Actualités</span>
              <h2 className="heading-lg mb-6">
                Derniers <span className="text-gradient">Insights</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Restez à la pointe des tendances tech avec nos articles, tutoriels et analyses approfondies.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getLatestPosts(posts).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="card-premium group card-hover overflow-hidden"
              >
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-500 text-dark-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span>{new Date(post.date).toLocaleDateString("fr-FR")}</span>
                    <span className="mx-2">•</span>
                    <span>{post.author}</span>
                  </div>

                  <h3 className="text-xl font-bold text-cream-200 group-hover:text-gradient transition-all duration-300 leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-dark-800 text-cream-200/80 px-2 py-1 rounded-md border border-border/30"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-primary-500 hover:text-primary-400 font-medium transition-colors duration-300 group"
                  >
                    Lire l'article
                    <motion.span className="ml-2" whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                      →
                    </motion.span>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center mt-16"
          >
            <Link to="/blog" className="btn-primary">
              Voir tous les articles
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section variants={itemVariants} className="section-padding bg-hero relative overflow-hidden">
        {/* Animated Background */}
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
              Prêt à transformer <br />
              <span className="text-gradient">votre vision</span> en réalité ?
            </h2>
            <p className="text-xl text-cream-200/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment nous pouvons vous aider
              à atteindre vos objectifs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="btn-primary text-lg px-10 py-5">
                Démarrer un projet
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

export default Home
