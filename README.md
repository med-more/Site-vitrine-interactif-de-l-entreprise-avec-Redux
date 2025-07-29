# 404.js - Site Vitrine Interactif

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Redux](https://img.shields.io/badge/Redux-4.2.1-purple.svg)](https://redux.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-38B2AC.svg)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16.0-ff0066.svg)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> Site vitrine moderne et interactif pour la société 404.js, développé avec React, Redux et des animations dynamiques. Présentation des services, équipe, portfolio et blog avec interface responsive et gestion d'état centralisée.

## 🚀 Aperçu du Projet

**404.js** est un site vitrine professionnel développé en React avec Redux pour la gestion d'état. Il propose une expérience utilisateur immersive avec des animations modernes, un système de blog CRUD complet et une présentation dynamique des services et réalisations.

### ✨ Fonctionnalités Principales

- 🏠 **Page d'accueil dynamique** avec présentation générale animée
- 👥 **Section À propos** avec mission, valeurs et présentation d'équipe
- 🛠️ **Services** avec descriptions détaillées et animations
- 💼 **Portfolio** interactif avec projets et études de cas
- 📝 **Blog CRUD complet** avec filtres avancés et catégories
- 📞 **Contact** avec formulaire interactif et validation
- 🎨 **Animations fluides** avec Framer Motion
- 📱 **Design responsive** adapté à tous les écrans

## 🛠️ Stack Technique

### Frontend
- **React 18.2+** - Bibliothèque UI avec hooks modernes
- **Redux Toolkit** - Gestion d'état centralisée et prévisible
- **React Router DOM** - Navigation SPA fluide
- **Tailwind CSS** - Framework CSS utilitaire pour design moderne
- **Framer Motion** - Bibliothèque d'animations avancées

### Outils & Méthodologies
- **ES6+** - Syntaxe JavaScript moderne (arrow functions, destructuring, template literals)
- **Higher-Order Functions** - map(), filter(), reduce(), sort(), includes()
- **Hooks React** - useState, useEffect, useSelector, useDispatch
- **Architecture modulaire** - Components réutilisables et séparation des responsabilités



## 🚀 Installation et Démarrage

### Prérequis
- Node.js 16.0+ 
- npm ou yarn
- Git

### Installation

1. **Cloner le repository**
```bash
git clone [https://github.com/votre-username/404js-vitrine.git](https://github.com/med-more/Site-vitrine-interactif-de-l-entreprise-avec-Redux..git)
cd Site-vitrine-interactif-de-l-entreprise-avec-Redux
```

2. **Installer les dépendances**
```bash
npm install
# ou
yarn install
```

3. **Démarrer le serveur de développement**
```bash
npm start
# ou
yarn start
```

4. **Ouvrir dans le navigateur**
```
http://localhost:3000
```

### Scripts Disponibles

```bash
npm start          # Démarre le serveur de développement
npm run build      # Build de production
npm test           # Lance les tests
npm run lint       # Vérification ESLint
npm run format     # Formatage avec Prettier
```

## 🏗️ Architecture Redux

### Store Configuration
```javascript
// store.js
import { configureStore } from '@reduxjs/toolkit'
import blogReducer from './slices/blogSlice'
import servicesReducer from './slices/servicesSlice'
import portfolioReducer from './slices/portfolioSlice'

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    services: servicesReducer,
    portfolio: portfolioReducer,
  },
})
```

### Slices Principales
- **blogSlice** - Gestion CRUD des articles avec filtres
- **servicesSlice** - Gestion des services et descriptions
- **portfolioSlice** - Gestion des projets et réalisations

## 💡 Fonctionnalités Avancées

### Blog CRUD Complet
- ✅ **Create** - Ajout de nouveaux articles
- ✅ **Read** - Affichage des articles avec pagination
- ✅ **Update** - Modification des articles existants
- ✅ **Delete** - Suppression des articles
- 🔍 **Filtres avancés** par catégorie et mots-clés
- 📊 **Tri dynamique** par date, popularité, etc.

### Higher-Order Functions (HOF)
```javascript
// Exemples d'utilisation des HOF
const filteredPosts = posts.filter(post => 
  post.category.includes(selectedCategory)
)

const sortedPosts = posts.sort((a, b) => 
  new Date(b.date) - new Date(a.date)
)

const searchResults = posts.filter(post =>
  post.title.toLowerCase().includes(searchTerm.toLowerCase())
)
```

### Animations et Transitions
- **Page transitions** fluides avec Framer Motion
- **Scroll animations** pour révéler le contenu
- **Hover effects** interactifs sur les composants
- **Loading states** avec spinners animés

## 📱 Responsive Design

Le site est entièrement responsive avec breakpoints Tailwind :
- **Mobile** : < 768px
- **Tablet** : 768px - 1024px
- **Desktop** : > 1024px
- **Large screens** : > 1280px

## 🎨 Personnalisation

### Couleurs et Thème
Modifiez `tailwind.config.js` pour personnaliser :
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#10B981',
        accent: '#F59E0B',
      }
    }
  }
}
```

### Animations
Configurez les animations dans `framer-motion.config.js`

## 🤝 Contribution



### Conventions de Code
- **ESLint** pour la qualité du code
- **Prettier** pour le formatage
- **Conventional Commits** pour les messages de commit
- **Components fonctionnels** avec hooks

## 📊 Performance

- ⚡ **Lazy loading** des composants
- 🗜️ **Code splitting** automatique
- 🖼️ **Images optimisées** avec lazy loading
- 📦 **Bundle optimisé** pour production





## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👨‍💻 Auteur

**Votre Nom**
- GitHub: [@Medmore]([https://github.com/votre-username](https://github.com/med-more))
- LinkedIn: [Votre Profil](https://www.linkedin.com/in/mohammed-baba-919b28336/)
- Email: mohammedbaba1505@gmail.com



⭐ **Si ce projet vous a aidé, n'hésitez pas à lui donner une étoile !** ⭐

## 📈 Roadmap

- [ ] Intégration API backend
- [ ] Système d'authentification
- [ ] Dashboard administrateur
- [ ] Optimisation SEO avancée
- [ ] Tests unitaires et d'intégration
- [ ] PWA (Progressive Web App)
- [ ] Internationalisation (i18n)

---

*Dernière mise à jour : Juillet 2025*
