import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  posts: [
    {
      id: 1,
      title: "L'avenir du développement web avec React",
      content: "React continue d'évoluer avec de nouvelles fonctionnalités...",
      excerpt: "Découvrez les dernières tendances en développement React",
      author: "Marie Dubois",
      date: "2024-01-15",
      category: "React",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "JavaScript", "Frontend"],
    },
    {
      id: 2,
      title: "Redux vs Context API : Quel choix faire ?",
      content: "Comparaison détaillée entre Redux et Context API...",
      excerpt: "Guide complet pour choisir la bonne solution de gestion d'état",
      author: "Jean Martin",
      date: "2024-01-10",
      category: "Redux",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Redux", "Context API", "State Management"],
    },
    {
      id: 3,
      title: "Optimisation des performances avec Vite",
      content: "Vite révolutionne le développement frontend...",
      excerpt: "Comment Vite améliore drastiquement les performances de développement",
      author: "Sophie Laurent",
      date: "2024-01-05",
      category: "Tools",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Vite", "Performance", "Build Tools"],
    },
  ],
  filteredPosts: [],
  currentFilter: "all",
  searchTerm: "",
}

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    addPost: (state, action) => {
      const newPost = {
        ...action.payload,
        id: Date.now(),
        date: new Date().toISOString().split("T")[0],
      }
      state.posts.unshift(newPost)
      state.filteredPosts = state.posts
    },
    updatePost: (state, action) => {
      const index = state.posts.findIndex((post) => post.id === action.payload.id)
      if (index !== -1) {
        state.posts[index] = action.payload
        state.filteredPosts = state.posts
      }
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload)
      state.filteredPosts = state.posts
    },
    filterByCategory: (state, action) => {
      state.currentFilter = action.payload
      if (action.payload === "all") {
        state.filteredPosts = state.posts
      } else {
        state.filteredPosts = state.posts.filter((post) => post.category.toLowerCase() === action.payload.toLowerCase())
      }
    },
    searchPosts: (state, action) => {
      state.searchTerm = action.payload
      const searchTerm = action.payload.toLowerCase()
      state.filteredPosts = state.posts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm) ||
          post.content.toLowerCase().includes(searchTerm) ||
          post.tags.some((tag) => tag.toLowerCase().includes(searchTerm)),
      )
    },
    sortPosts: (state, action) => {
      const sortBy = action.payload // 'date', 'title', 'author'
      state.filteredPosts = [...state.filteredPosts].sort((a, b) => {
        if (sortBy === "date") {
          return new Date(b.date) - new Date(a.date)
        }
        return a[sortBy].localeCompare(b[sortBy])
      })
    },
  },
})

export const { addPost, updatePost, deletePost, filterByCategory, searchPosts, sortPosts } = blogSlice.actions

export default blogSlice.reducer
