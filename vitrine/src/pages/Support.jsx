"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Support = () => {
  const [selectedCategory, setSelectedCategory] = useState("general")

  const supportCategories = [
    {
      id: "general",
      title: "Support Général",
      icon: "🎧",
      description: "Questions générales et assistance de base"
    },
    {
      id: "technical",
      title: "Support Technique",
      icon: "🛠️",
      description: "Problèmes techniques et bugs"
    },
    {
      id: "billing",
      title: "Facturation",
      icon: "💰",
      description: "Questions sur les tarifs et paiements"
    },
    {
      id: "feature",
      title: "Demandes de Fonctionnalités",
      icon: "💡",
      description: "Nouvelles fonctionnalités et améliorations"
    }
  ]

  const supportChannels = [
    {
      title: "Chat en Direct",
      description: "Obtenez une réponse immédiate de notre équipe",
      icon: "💬",
      availability: "Lun-Ven, 9h-18h",
      responseTime: "Quelques minutes",
      priority: "high"
    },
    {
      title: "Email Support",
      description: "Pour les questions détaillées et les dossiers complexes",
      icon: "📧",
      availability: "24h/24",
      responseTime: "2-4 heures",
      priority: "medium"
    },
    {
      title: "Téléphone",
      description: "Pour les urgences et les consultations importantes",
      icon: "📞",
      availability: "Lun-Ven, 9h-18h",
      responseTime: "Immédiat",
      priority: "high"
    },
    {
      title: "Documentation",
      description: "Guides détaillés et tutoriels en ligne",
      icon: "📚",
      availability: "24h/24",
      responseTime: "Immédiat",
      priority: "low"
    }
  ]

  const faqItems = [
    {
      question: "Comment puis-je signaler un bug ?",
      answer: "Vous pouvez signaler un bug via notre chat en direct, par email avec les détails du problème, ou en créant un ticket dans votre espace client. Incluez toujours les étapes pour reproduire le problème."
    },
    {
      question: "Quels sont vos délais de réponse ?",
      answer: "Chat en direct : réponse immédiate. Email : 2-4 heures en heures ouvrables. Téléphone : réponse immédiate. Pour les urgences critiques, nous avons une hotline 24h/24."
    },
    {
      question: "Puis-je demander une fonctionnalité spécifique ?",
      answer: "Oui, nous encourageons les demandes de fonctionnalités ! Envoyez-nous votre suggestion par email ou via notre formulaire. Nous évaluons chaque demande et vous tenons informé de son statut."
    },
    {
      question: "Comment accéder à la documentation ?",
      answer: "Notre documentation complète est accessible gratuitement sur notre site. Elle inclut des guides, tutoriels vidéo, et exemples de code pour toutes nos technologies."
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
            <span className="text-primary-500 font-semibold text-lg mb-4 block">Support Client</span>
            <h1 className="heading-xl mb-8">
              Nous sommes là
              <br />
              <span className="text-glow">pour vous aider</span>
            </h1>
            <p className="text-xl text-cream-200/80 max-w-3xl mx-auto leading-relaxed">
              Notre équipe d'experts est disponible pour vous accompagner à chaque étape de votre projet
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Support Channels */}
      <motion.section className="section-padding relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-cream-200 mb-4">Canaux de Support</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choisissez le canal qui vous convient le mieux selon votre urgence et votre type de question
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="card-premium text-center group card-hover"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {channel.icon}
                </div>
                <h3 className="text-xl font-bold text-cream-200 mb-3 group-hover:text-gradient transition-all duration-300">
                  {channel.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {channel.description}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-primary-500">🕒</span>
                    <span className="text-muted-foreground">{channel.availability}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-primary-500">⚡</span>
                    <span className="text-muted-foreground">{channel.responseTime}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section className="section-padding bg-section-alt relative">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-cream-200 mb-4">Contactez-nous</h2>
              <p className="text-muted-foreground">
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais
              </p>
            </div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="card-premium"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-cream-200 mb-2">Nom complet *</label>
                    <input
                      type="text"
                      required
                      className="input-premium"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-cream-200 mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      className="input-premium"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-cream-200 mb-2">Catégorie</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="input-premium"
                  >
                    {supportCategories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-cream-200 mb-2">Sujet *</label>
                  <input
                    type="text"
                    required
                    className="input-premium"
                    placeholder="Résumé de votre demande"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-cream-200 mb-2">Message *</label>
                  <textarea
                    required
                    rows={6}
                    className="textarea-premium"
                    placeholder="Décrivez votre problème ou votre demande en détail..."
                  />
                </div>

                <div className="flex items-center space-x-4">
                  <button type="submit" className="btn-primary">
                    Envoyer le message
                  </button>
                  <span className="text-sm text-muted-foreground">
                    Réponse garantie sous 4 heures
                  </span>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section className="section-padding relative">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-cream-200 mb-4">Questions Fréquentes</h2>
            <p className="text-muted-foreground">
              Trouvez rapidement des réponses aux questions les plus courantes
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={item.question}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="card-premium"
              >
                <h3 className="text-lg font-semibold text-cream-200 mb-3">
                  {item.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </p>
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
              Besoin d'une <br />
              <span className="text-gradient">assistance urgente</span> ?
            </h2>
            <p className="text-xl text-cream-200/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Pour les urgences critiques, contactez-nous directement par téléphone ou chat en direct.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="tel:+33123456789" className="btn-primary text-lg px-10 py-5">
                📞 Appeler maintenant
              </a>
              <Link to="/contact" className="btn-secondary text-lg px-10 py-5">
                Chat en direct
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  )
}

export default Support 