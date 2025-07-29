import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  projects: [
    {
      id: 1,
      title: "E-commerce Fashion",
      description: "Plateforme e-commerce moderne pour une marque de mode avec paiement intégré",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "E-commerce",
      url: "https://example.com",
      github: "https://github.com/example",
    },
    {
      id: 2,
      title: "App Mobile Fitness",
      description: "Application mobile de suivi fitness avec tracking GPS et communauté",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React Native", "Firebase", "Redux", "Maps API"],
      category: "Mobile",
      url: "https://example.com",
      github: "https://github.com/example",
    },
    {
      id: 3,
      title: "Dashboard Analytics",
      description: "Tableau de bord analytique en temps réel pour entreprises",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
      category: "Web App",
      url: "https://example.com",
      github: "https://github.com/example",
    },
    {
      id: 4,
      title: "Site Corporate",
      description: "Site vitrine corporate avec CMS intégré et optimisation SEO",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "Strapi", "Tailwind", "Vercel"],
      category: "Website",
      url: "https://example.com",
      github: "https://github.com/example",
    },
  ],
  filteredProjects: [],
}

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    addProject: (state, action) => {
      state.projects.push({ ...action.payload, id: Date.now() })
    },
    updateProject: (state, action) => {
      const index = state.projects.findIndex((project) => project.id === action.payload.id)
      if (index !== -1) {
        state.projects[index] = action.payload
      }
    },
    deleteProject: (state, action) => {
      state.projects = state.projects.filter((project) => project.id !== action.payload)
    },
    filterProjects: (state, action) => {
      if (action.payload === "all") {
        state.filteredProjects = state.projects
      } else {
        state.filteredProjects = state.projects.filter(
          (project) => project.category.toLowerCase() === action.payload.toLowerCase(),
        )
      }
    },
  },
})

export const { addProject, updateProject, deleteProject, filterProjects } = portfolioSlice.actions
export default portfolioSlice.reducer
