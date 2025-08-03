"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set())

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  const faqCategories = [
    {
      title: "Services & Développement",
      icon: "🛠️",
      questions: [
        {
          question: "Quels types de projets développez-vous ?",
          answer: "Nous développons des applications web modernes, des sites e-commerce, des applications mobiles, des APIs et des systèmes de gestion de contenu. Notre expertise couvre React, Node.js, MongoDB et les technologies cloud."
        },
        {
          question: "Combien de temps faut-il pour développer un projet ?",
          answer: "La durée dépend de la complexité du projet. Un site vitrine simple prend 2-4 semaines, une application web complète 2-3 mois, et un e-commerce complexe 3-6 mois. Nous fournissons un planning détaillé lors de la consultation."
        },
        {
          question: "Proposez-vous la maintenance après livraison ?",
          answer: "Oui, nous proposons des contrats de maintenance incluant mises à jour, corrections de bugs, optimisations de performance et support technique. Nous assurons également l'hébergement et la sauvegarde de vos données."
        }
      ]
    },
    {
      title: "Technologies & Expertise",
      icon: "⚡",
      questions: [
        {
          question: "Quelles technologies utilisez-vous ?",
          answer: "Frontend : React, TypeScript, Tailwind CSS, Framer Motion. Backend : Node.js, Express, MongoDB. DevOps : Docker, AWS, GitHub Actions. Nous restons à jour avec les dernières technologies et bonnes pratiques."
        },
        {
          question: "Pouvez-vous travailler avec des technologies spécifiques ?",
          answer: "Nous sommes flexibles et pouvons adapter nos solutions à vos besoins. Si vous avez des préférences technologiques ou des contraintes spécifiques, nous les intégrons dans notre approche de développement."
        },
        {
          question: "Comment assurez-vous la sécurité des applications ?",
          answer: "Nous implémentons les meilleures pratiques de sécurité : authentification JWT, validation des données, protection CSRF, HTTPS obligatoire, et audits de sécurité réguliers. Nous suivons les recommandations OWASP."
        }
      ]
    },
    {
      title: "Processus & Collaboration",
      icon: "🤝",
      questions: [
        {
          question: "Comment se déroule la collaboration ?",
          answer: "Nous commençons par une consultation gratuite pour comprendre vos besoins. Ensuite, nous établissons un cahier des charges détaillé, un planning et un budget. Nous travaillons en sprints avec des livraisons régulières et des retours d'expérience."
        },
        {
          question: "Pouvez-vous reprendre un projet existant ?",
          answer: "Oui, nous pouvons reprendre et améliorer des projets existants. Nous analysons d'abord le code existant, identifions les améliorations possibles et proposons un plan de refactoring et d'optimisation."
        },
        {
          question: "Comment gérez-vous les modifications en cours de projet ?",
          answer: "Nous utilisons une approche agile avec des sprints de 2 semaines. Les modifications sont discutées et planifiées ensemble. Les changements majeurs peuvent nécessiter une révision du planning et du budget."
        }
      ]
    },
    {
      title: "Tarifs & Paiement",
      icon: "💰",
      questions: [
        {
          question: "Comment sont calculés vos tarifs ?",
          answer: "Nos tarifs sont basés sur la complexité du projet, le temps de développement estimé et les fonctionnalités requises. Nous proposons des devis détaillés et transparents, sans frais cachés."
        },
        {
          question: "Proposez-vous des modalités de paiement flexibles ?",
          answer: "Oui, nous proposons plusieurs options : paiement en plusieurs fois, paiement par phases de développement, ou paiement mensuel pour les projets de longue durée. Nous adaptons nos conditions à vos besoins."
        },
        {
          question: "Y a-t-il des frais de maintenance mensuels ?",
          answer: "Nous proposons des forfaits de maintenance optionnels incluant mises à jour, support technique et hébergement. Les tarifs varient selon le niveau de service choisi et la complexité de l'application."
        }
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
            <span className="text-primary-500 font-semibold text-lg mb-4 block">FAQ</span>
            <h1 className="heading-xl mb-8">
              Questions
              <br />
              <span className="text-glow">Fréquentes</span>
            </h1>
            <p className="text-xl text-cream-200/80 max-w-3xl mx-auto leading-relaxed">
              Trouvez rapidement des réponses à vos questions sur nos services, technologies et processus de développement
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Sections */}
      <motion.section className="section-padding relative">
        <div className="container-custom">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.8 }}
              >
                <div className="mb-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="text-4xl">{category.icon}</div>
                    <h2 className="text-3xl font-bold text-cream-200">{category.title}</h2>
                  </div>
                  <div className="w-20 h-1 bg-primary-500 rounded-full"></div>
                </div>

                <div className="space-y-4">
                  {category.questions.map((item, itemIndex) => {
                    const globalIndex = categoryIndex * category.questions.length + itemIndex
                    const isOpen = openItems.has(globalIndex)

                    return (
                      <motion.div
                        key={item.question}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 + itemIndex * 0.05, duration: 0.6 }}
                        className="card-premium"
                      >
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-primary-500/5 transition-all duration-300 rounded-xl"
                        >
                          <h3 className="text-lg font-semibold text-cream-200 pr-4">
                            {item.question}
                          </h3>
                          <div className="flex-shrink-0">
                            <motion.div
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                              className="w-6 h-6 bg-primary-500/20 rounded-full flex items-center justify-center"
                            >
                              <span className="text-primary-500 text-sm">▼</span>
                            </motion.div>
                          </div>
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-6">
                                <div className="pt-4 border-t border-border/30">
                                  <p className="text-muted-foreground leading-relaxed">
                                    {item.answer}
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )
                  })}
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
              Vous n'avez pas trouvé <br />
              <span className="text-gradient">votre réponse</span> ?
            </h2>
            <p className="text-xl text-cream-200/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Notre équipe est là pour répondre à toutes vos questions et vous accompagner dans vos projets.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="btn-primary text-lg px-10 py-5">
                Nous contacter
              </Link>
              <Link to="/services" className="btn-secondary text-lg px-10 py-5">
                Nos services
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  )
}

export default FAQ 