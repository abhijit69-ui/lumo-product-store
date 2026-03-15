import api from './axios';

// USERS API
export const syncUser = async (userData) => {
  const { data } = await api.post('/users/sync', userData);
  return data;
};

// Products API
export const getAllProducts = async () => {
  const { data } = await api.get('/products');
  return data;
};

// Single product
export const getProductById = async (id) => {
  const { data } = await api.get(`/products/${id}`);
  return data;
};

// User's Product
export const getMyProducts = async () => {
  const { data } = await api.get('/products/my');
  return data;
};

// Create Product
export const createProduct = async (productData) => {
  const { data } = await api.post('/products', productData);
  return data;
};

// Update Product
export const updateProduct = async ({ id, ...productData }) => {
  const { data } = await api.put(`/products/${id}`, productData);
  return data;
};

// Delete Product
export const deleteProduct = async (id) => {
  const { data } = await api.delete(`/products/${id}`);
  return data;
};

// Comment API
export const createComment = async ({ productId, content }) => {
  const { data } = await api.post(`/comments/${productId}`, { content });
  return data;
};

export const deleteComment = async ({ commentId }) => {
  const { data } = await api.delete(`/comments/${commentId}`);
  return data;
};
