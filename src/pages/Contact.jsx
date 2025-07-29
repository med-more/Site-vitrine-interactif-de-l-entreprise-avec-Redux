"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    budget: "",
    timeline: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulation d'envoi
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form après 3 secondes
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
        budget: "",
        timeline: "",
      })
    }, 3000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      details: ["contact@404js.com", "hello@404js.com"],
      color: "from-primary-500 to-primary-600",
    },
    {
      icon: "📞",
      title: "Téléphone",
      details: ["+33 1 23 45 67 89", "+33 6 12 34 56 78"],
      color: "from-primary-600 to-primary-700",
    },
    {
      icon: "📍",
      title: "Adresse",
      details: ["123 Rue de la Tech", "75001 Paris, France"],
      color: "from-primary-500 to-primary-800",
    },
    {
      icon: "⏰",
      title: "Horaires",
      details: ["Lun - Ven : 9h00 - 18h00", "Sam : 10h00 - 16h00"],
      color: "from-primary-400 to-primary-600",
    },
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
            <span className="text-primary-500 font-semibold text-lg mb-4 block">Parlons de votre projet</span>
            <h1 className="heading-xl mb-8">
              Contactez
              <br />
              <span className="text-glow">-nous</span>
            </h1>
            <p className="text-xl text-cream-200/80 max-w-3xl mx-auto leading-relaxed">
              Prêt à démarrer votre projet ? Parlons-en ensemble et donnons vie à vos idées !
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Form & Info */}
      <motion.section variants={itemVariants} className="section-padding relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="card-premium"
            >
              <h2 className="text-3xl font-bold text-gradient mb-8">Démarrons votre projet</h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl">✅</span>
                  </div>
                  <h3 className="text-2xl font-bold text-green-400 mb-4">Message envoyé avec succès !</h3>
                  <p className="text-muted-foreground">Nous vous répondrons dans les plus brefs délais.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-cream-200 mb-2">Nom complet *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="input-premium"
                        placeholder="Votre nom complet"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-cream-200 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="input-premium"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-cream-200 mb-2">Entreprise</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="input-premium"
                        placeholder="Nom de votre entreprise"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-cream-200 mb-2">Budget estimé</label>
                      <select name="budget" value={formData.budget} onChange={handleChange} className="input-premium">
                        <option value="">Sélectionner un budget</option>
                        <option value="less_than_5k">Moins de 5 000€</option>
                        <option value="5k_to_10k">5 000€ - 10 000€</option>
                        <option value="10k_to_25k">10 000€ - 25 000€</option>
                        <option value="25k_to_50k">25 000€ - 50 000€</option>
                        <option value="more_than_50k">Plus de 50 000€</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-cream-200 mb-2">Sujet *</label>
                      <input
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="input-premium"
                        placeholder="Sujet de votre demande"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-cream-200 mb-2">Délai souhaité</label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="input-premium"
                      >
                        <option value="">Sélectionner un délai</option>
                        <option value="urgent">Urgent (moins de 1 mois)</option>
                        <option value="normal">Normal (1-3 mois)</option>
                        <option value="flexible">Flexible (3-6 mois)</option>
                        <option value="long_term">Long terme (6+ mois)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-cream-200 mb-2">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre projet, vos besoins et vos objectifs en détail..."
                      className="textarea-premium"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
                      isSubmitting
                        ? "bg-muted cursor-not-allowed opacity-50"
                        : "bg-orange-gradient text-dark-900 shadow-glow-orange hover:shadow-glow-orange-lg"
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <div className="loading-spinner mr-3"></div>
                        Envoi en cours...
                      </span>
                    ) : (
                      "Envoyer le message"
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gradient mb-6">Informations de contact</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Nous sommes là pour vous accompagner dans tous vos projets digitaux. N'hésitez pas à nous contacter
                  pour discuter de vos besoins et obtenir un devis personnalisé.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="card-glass p-6 group hover:shadow-glow-orange transition-all duration-500 relative overflow-hidden"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-10 transition-all duration-500`}
                    ></div>

                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-orange-gradient rounded-xl flex items-center justify-center text-2xl mb-4 shadow-glow-orange group-hover:shadow-glow-orange-lg transition-all duration-500 group-hover:scale-110">
                        {info.icon}
                      </div>
                      <h3 className="font-bold text-lg text-cream-200 group-hover:text-gradient transition-all duration-300 mb-3">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Response Guarantee */}
              <div className="card-premium relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent"></div>
                <div className="relative z-10">
                  <h3 className="font-bold text-xl text-gradient mb-4 flex items-center">
                    <span className="w-3 h-3 bg-primary-500 rounded-full mr-3 animate-pulse"></span>
                    Réponse rapide garantie
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Nous nous engageons à vous répondre dans les 24h ouvrées. Pour les urgences, n'hésitez pas à nous
                    appeler directement.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-semibold border border-green-500/30">
                      ✓ Devis gratuit
                    </span>
                    <span className="bg-primary-500/20 text-primary-500 px-4 py-2 rounded-full text-sm font-semibold border border-primary-500/30">
                      ✓ Consultation offerte
                    </span>
                    <span className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold border border-blue-500/30">
                      ✓ Support 24/7
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.section variants={itemVariants} className="section-padding bg-section-alt relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary-500 font-semibold text-lg mb-4 block">Venez nous voir</span>
              <h2 className="heading-md mb-6">
                Notre <span className="text-gradient">localisation</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Situés au cœur de Paris, nos bureaux sont facilement accessibles en transport en commun
              </p>
            </motion.div>
          </div>

          <div className="card-premium overflow-hidden">
            <div className="bg-gradient-to-br from-dark-800 to-dark-900 h-96 rounded-xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 decoration-dots opacity-30"></div>
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-orange-gradient rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6 shadow-glow-orange animate-pulse">
                  🗺️
                </div>
                <h3 className="text-2xl font-bold text-cream-200 mb-4">Carte interactive</h3>
                <p className="text-muted-foreground mb-6">123 Rue de la Tech, 75001 Paris, France</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="btn-primary">Obtenir l'itinéraire</button>
                  <button className="btn-secondary">Voir sur Google Maps</button>
                </div>
              </div>
            </div>
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
              Une question ? <br />
              <span className="text-gradient">Parlons-en</span> !
            </h2>
            <p className="text-xl text-cream-200/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions et vous accompagner
              dans vos projets.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="tel:+33123456789" className="btn-primary text-lg px-10 py-5">
                📞 Appeler maintenant
              </a>
              <a href="mailto:contact@404js.com" className="btn-secondary text-lg px-10 py-5">
                📧 Envoyer un email
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  )
}

export default Contact
