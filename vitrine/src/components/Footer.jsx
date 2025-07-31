"use client"

import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: "Navigation",
      links: [
        { name: "Accueil", path: "/" },
        { name: "À propos", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Développement Web", path: "/services" },
        { name: "Applications Mobile", path: "/services" },
        { name: "E-commerce", path: "/services" },
        { name: "Consulting", path: "/services" },
        { name: "UI/UX Design", path: "/services" },
        { name: "SEO", path: "/services" },
      ],
    },
    {
      title: "Ressources",
      links: [
        { name: "Documentation", path: "/documentation" },
        { name: "Guides", path: "/guides" },
        { name: "Tutoriels", path: "/tutoriels" },
        { name: "FAQ", path: "/faq" },
        { name: "Support", path: "/support" },
        { name: "Communauté", path: "/communaute" },
      ],
    },
  ]

  const socialLinks = [
    { name: "GitHub", icon: "🐙", url: "https://github.com/med-more/Site-vitrine-interactif-de-l-entreprise-avec-Redux.git" },
    { name: "LinkedIn", icon: "💼", url: "https://www.linkedin.com/in/mohammed-baba-919b28336/" },
  ]

  return (
    <footer className="relative bg-section-alt border-t border-border/30">
      {/* Decorative Background */}
      <div className="absolute inset-0 decoration-dots opacity-30"></div>

      <div className="relative container-custom section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link to="/" className="flex items-center space-x-3 mb-6 group">
                <div className="w-12 h-12 bg-orange-gradient rounded-xl flex items-center justify-center shadow-glow-orange group-hover:shadow-glow-orange-lg transition-all duration-300">
                  <span className="text-dark-900 font-bold text-xl">4</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-gradient">404.js</span>
                  <div className="text-xs text-muted-foreground -mt-1">Web Agency</div>
                </div>
              </Link>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                Nous créons des expériences digitales exceptionnelles qui transforment vos idées en solutions
                innovantes. Spécialisés dans les technologies modernes pour des résultats extraordinaires.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-primary-500">📧</span>
                  </div>
                  <span className="text-cream-200">contact@404js.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-primary-500">📞</span>
                  </div>
                  <span className="text-cream-200">+212 652645566</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-primary-500">📍</span>
                  </div>
                  <span className="text-cream-200">Casablanca</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {footerSections.map((section, sectionIndex) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                >
                  <h3 className="text-lg font-semibold text-cream-200 mb-6 relative">
                    {section.title}
                    <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-primary-500"></div>
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <motion.li
                        key={link.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: sectionIndex * 0.1 + linkIndex * 0.05 }}
                      >
                        <Link
                          to={link.path}
                          className="text-muted-foreground hover:text-primary-500 transition-colors duration-300 text-sm block py-1"
                        >
                          {link.name}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="card-premium mb-16"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-cream-200 mb-4">Restez informé de nos dernières actualités</h3>
            <p className="text-muted-foreground mb-8">
              Recevez nos conseils, tutoriels et actualités tech directement dans votre boîte mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input type="email" placeholder="Votre adresse email" className="input-premium flex-1" />
              <button className="btn-primary whitespace-nowrap">S'abonner</button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="border-t border-border/30 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-muted-foreground text-sm"
            >
              © {currentYear} 404.js. Tous droits réservés. Fait avec ❤️ à Casa.
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-card border border-border/50 rounded-lg flex items-center justify-center hover:border-primary-500/50 hover:bg-primary-500/10 transition-all duration-300 group"
                  title={social.name}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">{social.icon}</span>
                </motion.a>
              ))}
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center space-x-6 text-sm"
            >
              <Link
                to="/privacy"
                className="text-muted-foreground hover:text-primary-500 transition-colors duration-300"
              >
                Confidentialité
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary-500 transition-colors duration-300">
                Conditions
              </Link>
              <Link
                to="/cookies"
                className="text-muted-foreground hover:text-primary-500 transition-colors duration-300"
              >
                Cookies
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary-500 rounded-full animate-pulse opacity-60"></div>
      <div
        className="absolute top-40 right-20 w-1 h-1 bg-primary-500 rounded-full animate-pulse opacity-40"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-primary-500 rounded-full animate-pulse opacity-50"
        style={{ animationDelay: "2s" }}
      ></div>
    </footer>
  )
}

export default Footer
