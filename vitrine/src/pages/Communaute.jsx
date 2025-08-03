"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Communaute = () => {
  const communityFeatures = [
    {
      title: "Forum de Discussion",
      description: "Échangez avec d'autres développeurs, posez vos questions et partagez vos expériences",
      icon: "💬",
      members: "2,847",
      color: "primary"
    },
    {
      title: "Événements & Meetups",
      description: "Participez à nos événements en ligne et en présentiel pour réseauter",
      icon: "🎉",
      members: "1,234",
      color: "secondary"
    },
    {
      title: "Mentorat",
      description: "Bénéficiez de l'accompagnement d'experts pour progresser dans votre carrière",
      icon: "👨‍🏫",
      members: "456",
      color: "accent"
    },
    {
      title: "Projets Collaboratifs",
      description: "Rejoignez des projets open source et contribuez à l'écosystème tech",
      icon: "🤝",
      members: "789",
      color: "warning"
    }
  ]

  const upcomingEvents = [
    {
      title: "Workshop React Hooks",
      date: "15 Jan 2025",
      time: "14h00 - 16h00",
      type: "Workshop",
      attendees: "45/50",
      status: "upcoming"
    },
    {
      title: "Meetup Node.js Performance",
      date: "22 Jan 2025",
      time: "19h00 - 21h00",
      type: "Meetup",
      attendees: "32/40",
      status: "upcoming"
    },
    {
      title: "Code Review Session",
      date: "29 Jan 2025",
      time: "16h00 - 18h00",
      type: "Session",
      attendees: "18/25",
      status: "upcoming"
    }
  ]

  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Développeuse Frontend",
      company: "TechCorp",
      content: "La communauté 404.js m'a permis de progresser rapidement grâce aux échanges avec d'autres développeurs et aux ressources partagées.",
      avatar: "👩‍💻"
    },
    {
      name: "Thomas Martin",
      role: "Lead Developer",
      company: "StartupXYZ",
      content: "Les événements et workshops sont de grande qualité. J'ai appris énormément et rencontré des professionnels passionnés.",
      avatar: "👨‍💻"
    },
    {
      name: "Sophie Laurent",
      role: "Full Stack Developer",
      company: "DigitalAgency",
      content: "Le mentorat m'a aidé à surmonter mes blocages techniques et à prendre confiance en mes compétences.",
      avatar: "👩‍💼"
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
            <span className="text-primary-500 font-semibold text-lg mb-4 block">Communauté</span>
            <h1 className="heading-xl mb-8">
              Rejoignez notre
              <br />
              <span className="text-glow">Communauté</span>
            </h1>
            <p className="text-xl text-cream-200/80 max-w-3xl mx-auto leading-relaxed">
              Connectez-vous avec d'autres développeurs, partagez vos connaissances et grandissez ensemble
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                Rejoindre la communauté
              </Link>
              <Link to="/blog" className="btn-secondary text-lg px-8 py-4">
                Voir nos événements
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Community Features */}
      <motion.section className="section-padding relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-cream-200 mb-4">Nos Espaces Communautaires</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez les différents espaces où vous pouvez interagir, apprendre et grandir avec d'autres développeurs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {communityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="card-premium group card-hover"
              >
                <div className="flex items-start space-x-6">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-cream-200 mb-3 group-hover:text-gradient transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-primary-500 font-semibold">
                        {feature.members} membres
                      </span>
                      <Link
                        to="/contact"
                        className="text-primary-500 hover:text-primary-400 font-semibold text-sm transition-colors duration-300"
                      >
                        Rejoindre →
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Upcoming Events */}
      <motion.section className="section-padding bg-section-alt relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-cream-200 mb-4">Événements à Venir</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Participez à nos prochains événements pour apprendre, réseauter et rester à jour avec les dernières technologies
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="card-premium group card-hover"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                        📅
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-cream-200 mb-2 group-hover:text-gradient transition-all duration-300">
                          {event.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>📅 {event.date}</span>
                          <span>🕒 {event.time}</span>
                          <span className="bg-primary-500/20 text-primary-400 px-2 py-1 rounded-full text-xs">
                            {event.type}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground mb-2">
                        {event.attendees} participants
                      </div>
                      <Link
                        to="/contact"
                        className="btn-primary text-sm px-4 py-2"
                      >
                        S'inscrire
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section className="section-padding relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-cream-200 mb-4">Ce que disent nos membres</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez les témoignages de membres de notre communauté qui ont grandi avec nous
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="card-premium text-center"
              >
                <div className="text-4xl mb-4">{testimonial.avatar}</div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <h4 className="font-semibold text-cream-200 mb-1">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-primary-500">{testimonial.company}</p>
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
              Prêt à rejoindre notre <br />
              <span className="text-gradient">communauté</span> ?
            </h2>
            <p className="text-xl text-cream-200/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Rejoignez des milliers de développeurs passionnés et accélérez votre carrière avec nous.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="btn-primary text-lg px-10 py-5">
                Commencer maintenant
              </Link>
              <Link to="/blog" className="btn-secondary text-lg px-10 py-5">
                Découvrir nos événements
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  )
}

export default Communaute 