import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  members: [
    {
      id: 1,
      name: "Marie Dubois",
      role: "Lead Developer",
      bio: "Experte React avec 8 ans d'expérience dans le développement frontend",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["React", "TypeScript", "Node.js", "GraphQL"],
      social: {
        linkedin: "https://linkedin.com/in/marie-dubois",
        github: "https://github.com/marie-dubois",
        twitter: "https://twitter.com/marie_dev",
      },
    },
    {
      id: 2,
      name: "Jean Martin",
      role: "Full Stack Developer",
      bio: "Développeur full-stack passionné par les technologies modernes",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["Vue.js", "Python", "Django", "PostgreSQL"],
      social: {
        linkedin: "https://linkedin.com/in/jean-martin",
        github: "https://github.com/jean-martin",
      },
    },
    {
      id: 3,
      name: "Sophie Laurent",
      role: "UI/UX Designer",
      bio: "Designer créative spécialisée dans l'expérience utilisateur",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      social: {
        linkedin: "https://linkedin.com/in/sophie-laurent",
        dribbble: "https://dribbble.com/sophie-laurent",
      },
    },
  ],
}

const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    addMember: (state, action) => {
      state.members.push({ ...action.payload, id: Date.now() })
    },
    updateMember: (state, action) => {
      const index = state.members.findIndex((member) => member.id === action.payload.id)
      if (index !== -1) {
        state.members[index] = action.payload
      }
    },
    deleteMember: (state, action) => {
      state.members = state.members.filter((member) => member.id !== action.payload)
    },
  },
})

export const { addMember, updateMember, deleteMember } = teamSlice.actions
export default teamSlice.reducer
