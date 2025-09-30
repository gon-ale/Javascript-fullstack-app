import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts, createPost, deletePost } from "./postsThunks";

export interface Post {
  id: number;
  name: string;
  description: string;
}

interface PostsState {
  items: Post[];
  loading: boolean;
  error: string | null;
  filterName: string;
  filterDescription: string;
}

const initialState: PostsState = {
  items: [],
  loading: false,
  error: null,
  filterName: "",
  filterDescription: "",
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setFilterName: (state, action) => {
      state.filterName = action.payload;
    },
  
  },
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error al cargar";
      })
      // Create
      .addCase(createPost.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      // Delete
      .addCase(deletePost.fulfilled, (state, action) => {
        state.items = state.items.filter((p) => p.id !== action.payload.id);
      });
  },
});

export const { setFilterName } = postsSlice.actions;
export default postsSlice.reducer;
