import * as Yup from 'yup';

export const articleValidationSchema = Yup.object().shape({
  title: Yup.string()
    .required('Le titre est requis')
    .min(3, 'Le titre doit contenir au moins 3 caractères')
    .max(100, 'Le titre ne peut pas dépasser 100 caractères')
    .trim(),
  
  category: Yup.string()
    .required('La catégorie est requise')
    .min(2, 'La catégorie doit contenir au moins 2 caractères')
    .max(50, 'La catégorie ne peut pas dépasser 50 caractères')
    .trim(),
  
  excerpt: Yup.string()
    .required('L\'extrait est requis')
    .min(10, 'L\'extrait doit contenir au moins 10 caractères')
    .max(200, 'L\'extrait ne peut pas dépasser 200 caractères')
    .trim(),
  
  content: Yup.string()
    .required('Le contenu est requis')
    .min(20, 'Le contenu doit contenir au moins 20 caractères')
    .trim(),
  
  author: Yup.string()
    .required('L\'auteur est requis')
    .min(2, 'Le nom de l\'auteur doit contenir au moins 2 caractères')
    .max(50, 'Le nom de l\'auteur ne peut pas dépasser 50 caractères')
    .trim(),
  
  image: Yup.string()
    .nullable()
    .test('image-url', 'URL d\'image invalide', function(value) {
      if (!value) return true; // Optionnel
      if (value.includes('placeholder') || value.includes('data:image')) return true;
      return /\.(jpg|jpeg|png|gif|svg|webp)$/i.test(value);
    }),
  
  tags: Yup.string()
    .nullable()
    .test('tags-format', 'Format de tags invalide', function(value) {
      if (!value) return true; 
      const tags = value.split(',').map(tag => tag.trim()).filter(tag => tag);
      return tags.length <= 5;
    })
});

export const validateImageFile = (file) => {
  if (!file) return null;
  
  const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
  const maxSize = 5 * 1024 * 1024; 
  
  if (!validTypes.includes(file.type)) {
    return 'Format d\'image non supporté. Utilisez JPG, PNG, GIF ou WebP.';
  }
  
  if (file.size > maxSize) {
    return 'L\'image est trop volumineuse. Taille maximum : 5MB.';
  }
  
  return null;
}; 