import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/postsApi";
import { Post } from "./postsSlice";

export const fetchPosts = createAsyncThunk<Post[]>(
  "posts/fetchPosts",
  async () => {
    const res = await api.get("/post");
    return res.data;
  }
);

export const createPost = createAsyncThunk<Post, { name: string; description: string }>(
  "posts/createPost",
  async (newPost) => {
    const res = await api.post("/post", newPost);
    return res.data;
  }
);

export const deletePost = createAsyncThunk<Post, number>(
  "posts/deletePost",
  async (id) => {
    const res = await api.delete(`/post/${id}`);
    return res.data;
  }
);
