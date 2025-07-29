"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { useSelector, useDispatch } from "react-redux"
import { addPost, updatePost, deletePost, filterByCategory, searchPosts, sortPosts } from "../store/slices/blogSlice"

const Blog = () => {
  const dispatch = useDispatch()
  const { posts, filteredPosts, currentFilter, searchTerm } = useSelector((state) => state.blog)
  const [showForm, setShowForm] = useState(false)
  const [editingPost, setEditingPost] = useState(null)
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    excerpt: "",
    author: "",
    category: "",
    image: "",
    tags: [],
  })
  const [selectedFile, setSelectedFile] = useState(null)
  const [imagePreview, setImagePreview] = useState("")

  const getUniqueCategories = (posts) => {
    const categories = posts.map((post) => post.category)
    return ["all", ...new Set(categories)]
  }

  const categories = getUniqueCategories(posts)
  const displayPosts = filteredPosts.length > 0 || searchTerm || currentFilter !== "all" ? filteredPosts : posts

  useEffect(() => {
    if (filteredPosts.length === 0 && currentFilter === "all" && !searchTerm) {
      dispatch(filterByCategory("all"))
    }
  }, [dispatch, filteredPosts.length, currentFilter, searchTerm])

  const handleSubmit = (e) => {
    e.preventDefault()
    const tagsArray = formData.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag)

    if (editingPost) {
      dispatch(
        updatePost({
          ...formData,
          id: editingPost.id,
          tags: tagsArray,
        }),
      )
    } else {
      dispatch(
        addPost({
          ...formData,
          tags: tagsArray,
          image: formData.image || `/placeholder.svg?height=300&width=500&query=${formData.title}`,
        }),
      )
    }

    resetForm()
  }

  const resetForm = () => {
    setFormData({
      title: "",
      content: "",
      excerpt: "",
      author: "",
      category: "",
      image: "",
      tags: [],
    })
    setSelectedFile(null)
    setImagePreview("")
    setShowForm(false)
    setEditingPost(null)
  }

  const handleEdit = (post) => {
    setFormData({
      ...post,
      tags: post.tags.join(", "),
    })
    setEditingPost(post)
    setShowForm(true)
  }

  const handleDelete = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cet article ?")) {
      dispatch(deletePost(id))
    }
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setSelectedFile(file)
      const reader = new FileReader()
      reader.onload = (e) => {
        setImagePreview(e.target.result)
        setFormData({ ...formData, image: e.target.result })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleImageUrlChange = (e) => {
    setFormData({ ...formData, image: e.target.value })
    setSelectedFile(null)
    setImagePreview("")
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
            <span className="text-primary-500 font-semibold text-lg mb-4 block">Blog & Actualités</span>
            <h1 className="heading-xl mb-8">
              Insights
              <br />
              <span className="text-glow">Tech</span>
            </h1>
            <p className="text-xl text-cream-200/80 max-w-3xl mx-auto leading-relaxed">
              Actualités, tutoriels et analyses approfondies sur le développement web et les technologies modernes
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Controls Section */}
      <motion.section variants={itemVariants} className="py-12 bg-section-alt border-b border-border/30">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher des articles..."
                  onChange={(e) => dispatch(searchPosts(e.target.value))}
                  className="input-premium pl-12"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-500">🔍</div>
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => dispatch(filterByCategory(category))}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    currentFilter === category
                      ? "bg-orange-gradient text-dark-900 shadow-glow-orange"
                      : "bg-card border border-border/50 text-cream-200 hover:border-primary-500/50 hover:bg-primary-500/10"
                  }`}
                >
                  {category === "all" ? "Tous" : category}
                </motion.button>
              ))}
            </div>

            {/* Sort & Add */}
            <div className="flex gap-3">
              <select onChange={(e) => dispatch(sortPosts(e.target.value))} className="input-premium text-sm py-2 px-4">
                <option value="date">Trier par date</option>
                <option value="title">Trier par titre</option>
                <option value="author">Trier par auteur</option>
              </select>
              <motion.button
                onClick={() => setShowForm(true)}
                className="btn-primary text-sm px-6 py-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ✍️ Nouvel article
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Form Modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="card-premium w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gradient">
                  {editingPost ? "Modifier l'article" : "Nouvel article"}
                </h2>
                <button
                  onClick={resetForm}
                  className="w-10 h-10 bg-card rounded-lg flex items-center justify-center hover:bg-primary-500/20 transition-all duration-300"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-cream-200 mb-2">Titre *</label>
                    <input
                      type="text"
                      required
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="input-premium"
                      placeholder="Titre de l'article"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-cream-200 mb-2">Catégorie *</label>
                    <input
                      type="text"
                      required
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="input-premium"
                      placeholder="React, Vue.js, Node.js..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-cream-200 mb-2">Extrait *</label>
                  <input
                    type="text"
                    required
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    className="input-premium"
                    placeholder="Résumé de l'article en une phrase"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-cream-200 mb-2">Contenu *</label>
                  <textarea
                    required
                    rows={8}
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    className="textarea-premium"
                    placeholder="Contenu complet de l'article..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-cream-200 mb-2">Auteur *</label>
                    <input
                      type="text"
                      required
                      value={formData.author}
                      onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                      className="input-premium"
                      placeholder="Nom de l'auteur"
                    />
                  </div>
                  <div>



                    
                    <label className="block text-sm font-semibold text-cream-200 mb-2">Image de l'article</label>
                    <div className="space-y-3">
                      {/* File Upload */}
                      <div>
                        <label className="block text-xs font-medium text-cream-200/70 mb-2">Uploader une image</label>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="input-premium text-sm py-2"
                        />
                      </div>
                      
                      {/* URL Input */}
                      <div>
                        <label className="block text-xs font-medium text-cream-200/70 mb-2">Ou utiliser une URL</label>
                        <input
                          type="url"
                          value={formData.image}
                          onChange={handleImageUrlChange}
                          className="input-premium text-sm py-2"
                          placeholder="https://example.com/image.jpg"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image Preview */}
                {(imagePreview || formData.image) && (
                  <div>
                    <label className="block text-sm font-semibold text-cream-200 mb-2">Aperçu de l'image</label>
                    <div className="relative">
                      <img
                        src={imagePreview || formData.image}
                        alt="Aperçu"
                        className="w-full h-48 object-cover rounded-xl border border-border/30"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setImagePreview("")
                          setSelectedFile(null)
                          setFormData({ ...formData, image: "" })
                        }}
                        className="absolute top-2 right-2 w-8 h-8 bg-red-500/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-500 transition-all duration-300"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-semibold text-cream-200 mb-2">Tags</label>
                  <input
                    type="text"
                    value={formData.tags}
                    onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                    className="input-premium"
                    placeholder="JavaScript, React, Frontend (séparés par des virgules)"
                  />
                </div>

                <div className="flex gap-4 pt-6 border-t border-border/30">
                  <button type="submit" className="btn-primary flex-1">
                    {editingPost ? "Mettre à jour" : "Publier l'article"}
                  </button>
                  <button type="button" onClick={resetForm} className="btn-secondary flex-1">
                    Annuler
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Blog Posts */}
      <motion.section variants={itemVariants} className="section-padding relative">
        <div className="container-custom">
          {displayPosts.length === 0 ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-20">
              <div className="text-6xl mb-6">📝</div>
              <h3 className="text-2xl font-bold text-cream-200 mb-4">Aucun article trouvé</h3>
              <p className="text-muted-foreground mb-8">
                Essayez de modifier vos critères de recherche ou créez un nouvel article.
              </p>
              <button onClick={() => setShowForm(true)} className="btn-primary">
                Créer le premier article
              </button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className="card-premium group card-hover overflow-hidden relative"
                >
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <img
                      src={post.image || "/placeholder.svg?height=300&width=500&query=tech blog article"}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-500 text-dark-900 px-3 py-1 rounded-full text-sm font-bold shadow-glow-orange">
                        {post.category}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(post)}
                          className="w-8 h-8 bg-card/80 backdrop-blur-sm border border-primary-500/30 rounded-lg flex items-center justify-center hover:bg-primary-500/20 transition-all duration-300 opacity-0 group-hover:opacity-100"
                        >
                          ✏️
                        </button>
                        <button
                          onClick={() => handleDelete(post.id)}
                          className="w-8 h-8 bg-card/80 backdrop-blur-sm border border-red-500/30 rounded-lg flex items-center justify-center hover:bg-red-500/20 transition-all duration-300 opacity-0 group-hover:opacity-100"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{new Date(post.date).toLocaleDateString("fr-FR")}</span>
                      <span>Par {post.author}</span>
                    </div>

                    <h3 className="text-xl font-bold text-cream-200 group-hover:text-gradient transition-all duration-300 leading-tight">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>

                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-primary-500/10 text-primary-500 px-2 py-1 rounded-full border border-primary-500/20"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/blog/${post.id}`}
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
          )}
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
              Restez à la pointe de <br />
              <span className="text-gradient">l'innovation</span>
            </h2>
            <p className="text-xl text-cream-200/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Abonnez-vous à notre newsletter pour recevoir nos derniers articles et insights directement dans votre
              boîte mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-md mx-auto">
              <input type="email" placeholder="Votre adresse email" className="input-premium flex-1" />
              <button className="btn-primary px-8">S'abonner</button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  )
}

export default Blog
