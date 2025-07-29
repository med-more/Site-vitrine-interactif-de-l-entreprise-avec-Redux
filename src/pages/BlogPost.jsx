"use client"
import { useParams, Link, Navigate } from "react-router-dom"
import { motion } from "framer-motion"
import { useSelector } from "react-redux"

const BlogPost = () => {
  const { id } = useParams()
  const posts = useSelector((state) => state.blog.posts)

  const findPostById = (posts, id) => posts.find((post) => post.id === Number.parseInt(id))
  const post = findPostById(posts, id)

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  const getSimilarPosts = (posts, currentPost, count = 3) =>
    posts.filter((p) => p.id !== currentPost.id && p.category === currentPost.category).slice(0, count)

  const similarPosts = getSimilarPosts(posts, post)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen pt-20"
    >
      {/* Hero Section */}
      <section className="section-padding bg-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-20 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
        <div className="absolute inset-0 decoration-grid opacity-20"></div>

        <div className="relative container-custom z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Link
              to="/blog"
              className="inline-flex items-center text-primary-500 hover:text-primary-400 font-semibold mb-8 transition-colors duration-300 group"
            >
              <motion.span className="mr-2" whileHover={{ x: -5 }} transition={{ type: "spring", stiffness: 400 }}>
                ←
              </motion.span>
              Retour au blog
            </Link>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-primary-500 text-dark-900 px-4 py-2 rounded-full text-sm font-bold shadow-glow-orange">
                {post.category}
              </span>
              <span className="text-cream-200/60 text-sm">
                {new Date(post.date).toLocaleDateString("fr-FR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="text-cream-200/60 text-sm">•</span>
              <span className="text-cream-200/60 text-sm">Par {post.author}</span>
            </div>

            <h1 className="heading-lg mb-8 leading-tight">{post.title}</h1>

            <p className="text-xl text-cream-200/80 leading-relaxed max-w-3xl">{post.excerpt}</p>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding bg-section-alt relative">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {/* Featured Image */}
              <div className="card-premium p-4 mb-12 overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg?height=600&width=1200&query=tech blog featured image"}
                  alt={post.title}
                  className="w-full h-96 object-cover rounded-xl shadow-2xl"
                />
              </div>

              {/* Article Body */}
              <div className="card-premium prose prose-lg max-w-none">
                <div className="text-cream-200/90 leading-relaxed text-lg whitespace-pre-wrap">{post.content}</div>
              </div>

              {/* Tags Section */}
              <div className="card-glass p-8 mt-12">
                <h3 className="text-xl font-bold text-cream-200 mb-6 flex items-center">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                  Tags de l'article
                </h3>
                <div className="flex flex-wrap gap-3">
                  {post.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.05 }}
                      className="bg-primary-500/10 text-primary-500 px-4 py-2 rounded-full text-sm font-semibold border border-primary-500/20 hover:bg-primary-500/20 transition-all duration-300 cursor-pointer"
                    >
                      #{tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Author Info */}
              <div className="card-premium mt-12">
                <div className="flex items-center space-x-6">
                  <div className="w-20 h-20 bg-orange-gradient rounded-2xl flex items-center justify-center text-2xl shadow-glow-orange">
                    👤
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-cream-200 mb-2">{post.author}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Développeur passionné et expert en technologies modernes, {post.author} partage régulièrement ses
                      connaissances et expériences à travers nos articles techniques.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Similar Posts */}
      {similarPosts.length > 0 && (
        <section className="section-padding relative">
          <div className="container-custom">
            <div className="text-center mb-16">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-primary-500 font-semibold text-lg mb-4 block">Lecture Recommandée</span>
                <h2 className="heading-md mb-6">
                  Articles <span className="text-gradient">similaires</span>
                </h2>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {similarPosts.map((similarPost, index) => (
                <motion.article
                  key={similarPost.id}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className="card-premium group card-hover overflow-hidden"
                >
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <img
                      src={similarPost.image || "/placeholder.svg?height=300&width=500&query=related tech article"}
                      alt={similarPost.title}
                      className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-500 text-dark-900 px-3 py-1 rounded-full text-sm font-bold shadow-glow-orange">
                        {similarPost.category}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span>{new Date(similarPost.date).toLocaleDateString("fr-FR")}</span>
                      <span className="mx-2">•</span>
                      <span>{similarPost.author}</span>
                    </div>

                    <h3 className="text-xl font-bold text-cream-200 group-hover:text-gradient transition-all duration-300 leading-tight">
                      {similarPost.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">{similarPost.excerpt}</p>

                    <Link
                      to={`/blog/${similarPost.id}`}
                      className="inline-flex items-center text-primary-500 hover:text-primary-400 font-semibold transition-colors duration-300 group"
                    >
                      Lire l'article
                      <motion.span
                        className="ml-2"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        →
                      </motion.span>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-hero relative overflow-hidden">
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
              Envie d'en savoir <span className="text-gradient">plus</span> ?
            </h2>
            <p className="text-xl text-cream-200/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Découvrez nos autres articles ou contactez-nous pour discuter de vos projets techniques.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/blog" className="btn-primary text-lg px-10 py-5">
                Tous les articles
              </Link>
              <Link to="/contact" className="btn-secondary text-lg px-10 py-5">
                Nous contacter
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default BlogPost
