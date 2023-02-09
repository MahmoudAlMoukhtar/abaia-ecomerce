import axios from "axios";

const API = axios.create({
  baseURL: "https://abaia-ecomerce.vercel.app/api",
});
//baseURL: "http://localhost:3001/api",
//baseURL: "https://abaia-ecomerce.vercel.app/api"
API.interceptors.request.use(req => {
  if (localStorage.getItem("userEcommerce")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("userEcommerce")).token
    }`;
  }

  return req;
});
//CRUD POSTS
export const fetchPosts = () => API.get("/posts");
export const fetchPostById = id => API.get(`/posts/${id}`);
export const createPosts = newPost => API.post("/posts", newPost);
export const updatePost = (id, updates) => API.patch(`/posts/${id}`, updates);
export const deletePost = id => API.delete(`/posts/${id}`);
export const commentPost = (value, id) =>
  API.post(`/posts/${id}/commentPost`, {value});
export const deleteCommentPost = (idPost, idComment) =>
  API.post(`/posts/${idPost}/commentPost/${idComment}`);
//export const likePost = id => API.patch(`/posts/${id}/likePost`);

//AUTH Operation
export const signin = formData => API.post("/user/signin", formData);
export const signup = formData => API.post("/user/signup", formData);
export const updateProfile = (id, updates) =>
  API.put(`/user/updateProfile/${id}`, updates);

//products
export const fetchProducts = () => API.get("/products");
export const fetchProductById = id => API.get(`/products/${id}`);
export const deleteProductById = id => API.delete(`/products/${id}`);
export const createProduct = formData => API.post("/products", formData);
export const updateProduct = (id, updates) =>
  API.put(`/products/${id}`, updates);
//cart
export const createCart = () => API.post("/cart");
export const updateCart = updates => API.put("/cart", updates);
export const fetchCart = () => API.get("/cart");
//payment
export const createPay = data => API.post("/payment", data);

//users
export const fetchAllUsers = () => API.get("/user");
export const fetchUserById = id => API.get(`/user/${id}`);
export const deleteUserById = id => API.delete(`/user/${id}`);
export const updateUserById = (id, updates) => API.put(`/user/${id}`, updates);

//orders
export const fetchAllOrders = () => API.get(`/orders`);
export const deleteOrderById = id => API.delete(`/orders/${id}`);
export const getMonthlyIncome = () => API.get(`/income`);
export const getAllSales = () => API.get(`/income/allSales`);
export const getAllSalesProductById = id =>
  API.get(`/income/allSalesProduct/${id}`);
