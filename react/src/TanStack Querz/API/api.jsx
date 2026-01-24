// API/api.jsx
import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// Fetch posts with pagination
export const fetchPosts = async (pageNumber) => {
  const res = await api.get(`/posts?_start=${pageNumber}&_limit=3`);
  return res.status === 200 ? res.data : [];
};

// Fetch single post
export const fetchInvPost = async (id) => {
  try {
    const res = await api.get(`/posts/${id}`);
    return res.status === 200 ? res.data : null;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Delete post
export const deletePost = async (id) => {
  const res = await api.delete(`/posts/${id}`);
  return res.data;
};

// update

export const updatePost = async (id) => {
  const res = await api.patch(`/posts/${id}`, { title: "I have updated" });
  return res.data;
};

// infinite

export const fetchUsers = async ({ pageParam = 1 }) => {
  try {
    const res = await axios.get(
      `https://api.github.com/users?per_page=10&page=${pageParam}`,
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
