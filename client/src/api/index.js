import axios from "axios";

const API = axios.create({
  baseURL: "https://abaia-ecomerce.vercel.app/api",
});
//baseURL: "http://localhost:3001/api",
API.interceptors.request.use(req => {
  if (localStorage.getItem("userEcommerce")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("userEcommerce")).token
    }`;
  }
  return req;
});

//AUTH Operation
export const updateUserById = (id, updates) => API.put(`/user/${id}`, updates);
export const updatePasswordUserById = (id, updates) =>
  API.put(`/user/password/${id}`, updates);
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
