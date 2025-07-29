import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  services: [
    {
      id: 1,
      title: "Développement Web",
      description: "Création d'applications web modernes et performantes avec React, Vue.js et Angular",
      icon: "🌐",
      features: ["React/Vue/Angular", "API REST", "Responsive Design", "PWA"],
      price: "À partir de 2500€",
    },
    {
      id: 2,
      title: "Applications Mobile",
      description: "Développement d'applications mobiles natives et cross-platform",
      icon: "📱",
      features: ["React Native", "Flutter", "iOS/Android", "App Store"],
      price: "À partir de 3500€",
    },
    {
      id: 3,
      title: "E-commerce",
      description: "Solutions e-commerce complètes avec gestion des paiements et inventaire",
      icon: "🛒",
      features: ["Shopify", "WooCommerce", "Stripe", "Analytics"],
      price: "À partir de 4000€",
    },
    {
      id: 4,
      title: "Consulting",
      description: "Audit technique, architecture et conseils en développement",
      icon: "💡",
      features: ["Audit de code", "Architecture", "Formation", "Mentoring"],
      price: "150€/heure",
    },
  ],
}

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    addService: (state, action) => {
      state.services.push({ ...action.payload, id: Date.now() })
    },
    updateService: (state, action) => {
      const index = state.services.findIndex((service) => service.id === action.payload.id)
      if (index !== -1) {
        state.services[index] = action.payload
      }
    },
    deleteService: (state, action) => {
      state.services = state.services.filter((service) => service.id !== action.payload)
    },
  },
})

export const { addService, updateService, deleteService } = servicesSlice.actions
export default servicesSlice.reducer
