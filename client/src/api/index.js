import axios from "axios";

const API = axios.create({
  baseURL: "https://abaia-ecomerce.vercel.app/api",
});
//baseURL: "http://localhost:3001/api",
API.interceptors.request.use(req => {
  //console.log(localStorage.getItem("userEcommerce"));
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
export const updateUserById = (id, updates) => API.put(`/user/${id}`, updates);
export const signin = formData => API.post("/user/signin", formData);
export const signup = formData => API.post("/user/signup", formData);
export const updateProfile = (id, updates) =>
  API.put(`/user/updateProfile/${id}`, updates);
export const fetchUserById = id => API.get(`/user/${id}`);
export const fetchFavoraitProducts = id => API.get(`/favorait/${id}`);
export const createFavoraitProduct = newFavorait =>
  API.post(`/favorait`, newFavorait);
//export const fetchFavoraitProducts = id => API.get(`/user/favorait/${id}`);
export const updateFavoraitProductsById = (id, newFavProd) =>
  API.post(`/user/favorait/${id}`, newFavProd);

//products
export const fetchProducts = () => API.get("/products");
export const fetchProductById = id => API.get(`/products/${id}`);
//cart
export const createCart = () => API.post("/cart");
export const updateCart = updates => API.put("/cart", updates);
export const emptyCart = () => API.patch("/cart");
export const deleteCartProductById = id => API.delete(`/cart/${id}`);
export const fetchCart = () => API.get("/cart");
//payment
export const createPay = data => API.post("/payment", data);
//order
export const getUserOrder = id => API.get(`/orders/${id}`);
export const createOrder = order => API.post(`/orders`, order);
export const getMonthlyIncome = () => API.get(`/orders/income`);
