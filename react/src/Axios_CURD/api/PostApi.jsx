import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// GET POSTS
export const getPost = () => api.get("/posts");

// ADD POST
export const postData = (post) => api.post("/posts", post);

// DELETE POST
export const deletePost = (id) => api.delete(`/posts/${id}`);

// UPDATE POST (ONLY for real IDs)
export const updatePost = (id, data) =>
  api.put(`/posts/${id}`, data);
