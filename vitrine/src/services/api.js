const API_BASE_URL = 'http://localhost:3000/api';

const apiConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const handleResponse = async (response) => {
  if (!response.ok) {
    let errorMessage = `Erreur ${response.status}`;
    try {
      const error = await response.json();
      errorMessage = error.message || error.error || errorMessage;
    } catch (e) {
      if (response.status === 413) {
        errorMessage = "Données trop volumineuses. Réduisez la taille de l'image ou du contenu.";
      } else if (response.status === 0) {
        errorMessage = "Impossible de se connecter au serveur. Vérifiez que le backend est démarré.";
      }
    }
    throw new Error(errorMessage);
  }
  return response.json();
};

export const articleService = {
  async getArticles() {
    const response = await fetch(`${API_BASE_URL}/articles/list`, {
      method: 'GET',
      ...apiConfig,
    });
    return handleResponse(response);
  },

  async getArticle(articleId) {
    const response = await fetch(`${API_BASE_URL}/articles/article/${articleId}`, {
      method: 'GET',
      ...apiConfig,
    });
    return handleResponse(response);
  },

  async createArticle(articleData) {
    const response = await fetch(`${API_BASE_URL}/articles/create`, {
      method: 'POST',
      ...apiConfig,
      body: JSON.stringify(articleData),
    });
    return handleResponse(response);
  },

  async updateArticle(articleId, articleData) {
    const response = await fetch(`${API_BASE_URL}/articles/article/update/${articleId}`, {
      method: 'PUT',
      ...apiConfig,
      body: JSON.stringify(articleData),
    });
    return handleResponse(response);
  },

  async deleteArticle(articleId) {
    const response = await fetch(`${API_BASE_URL}/articles/article/delete/${articleId}`, {
      method: 'DELETE',
      ...apiConfig,
    });
    return handleResponse(response);
  },

  async testConnection() {
    const response = await fetch(`${API_BASE_URL}/articles/test`, {
      method: 'GET',
      ...apiConfig,
    });
    return handleResponse(response);
  },
}; 