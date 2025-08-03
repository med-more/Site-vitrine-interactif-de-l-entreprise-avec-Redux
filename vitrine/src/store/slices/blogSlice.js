import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { articleService } from "../../services/api"

export const fetchArticles = createAsyncThunk(
  'blog/fetchArticles',
  async (_, { rejectWithValue }) => {
    try {
      const articles = await articleService.getArticles()
      return articles
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const createArticle = createAsyncThunk(
  'blog/createArticle',
  async (articleData, { rejectWithValue }) => {
    try {
      const response = await articleService.createArticle(articleData)
      return { ...articleData, _id: Date.now().toString() } 
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const updateArticle = createAsyncThunk(
  'blog/updateArticle',
  async ({ articleId, articleData }, { rejectWithValue }) => {
    try {
      await articleService.updateArticle(articleId, articleData)
      return { id: articleId, ...articleData }
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const deleteArticle = createAsyncThunk(
  'blog/deleteArticle',
  async (articleId, { rejectWithValue }) => {
    try {
      await articleService.deleteArticle(articleId)
      return articleId
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const initialState = {
  posts: [],
  filteredPosts: [],
  currentFilter: "all",
  searchTerm: "",
  loading: false,
  error: null,
}

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
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
          (post.tags && post.tags.some((tag) => tag.toLowerCase().includes(searchTerm))),
      )
    },
    sortPosts: (state, action) => {
      const sortBy = action.payload 
      state.filteredPosts = [...state.filteredPosts].sort((a, b) => {
        if (sortBy === "date") {
          return new Date(b.createdAt || b.date) - new Date(a.createdAt || a.date)
        }
        return a[sortBy].localeCompare(b[sortBy])
      })
    },
    clearError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loading = false
        state.posts = action.payload.map(article => ({
          ...article,
          id: article._id || article.id || Date.now()
        }))
        state.filteredPosts = state.posts
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
    
    builder
      .addCase(createArticle.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(createArticle.fulfilled, (state, action) => {
        state.loading = false
        const newPost = {
          ...action.payload,
          id: action.payload._id || Date.now(),
          _id: action.payload._id || Date.now().toString(),
          date: new Date().toISOString().split("T")[0],
        }
        state.posts.unshift(newPost)
        state.filteredPosts = state.posts
      })
      .addCase(createArticle.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
    
    builder
      .addCase(updateArticle.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(updateArticle.fulfilled, (state, action) => {
        state.loading = false
        const index = state.posts.findIndex((post) => 
          post.id === action.payload.id || 
          post._id === action.payload.id ||
          post.id === action.payload._id ||
          post._id === action.payload._id
        )
        if (index !== -1) {
          state.posts[index] = { 
            ...state.posts[index], 
            ...action.payload,
            id: action.payload._id || action.payload.id || state.posts[index].id,
            _id: action.payload._id || action.payload.id || state.posts[index]._id
          }
          state.filteredPosts = state.posts
        }
      })
      .addCase(updateArticle.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
    
    builder
      .addCase(deleteArticle.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(deleteArticle.fulfilled, (state, action) => {
        state.loading = false
        state.posts = state.posts.filter((post) => 
          post.id !== action.payload && 
          post._id !== action.payload &&
          post.id !== action.payload.toString() &&
          post._id !== action.payload.toString()
        )
        state.filteredPosts = state.posts
      })
      .addCase(deleteArticle.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const { filterByCategory, searchPosts, sortPosts, clearError } = blogSlice.actions

export default blogSlice.reducer
