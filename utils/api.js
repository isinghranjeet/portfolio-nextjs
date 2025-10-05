// // utils/api.js
// import axios from 'axios';

// const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// const api = axios.create({
//   baseURL: API_BASE_URL,
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   timeout: 10000, // 10 seconds
// });

// // Request interceptor for logging
// api.interceptors.request.use(
//   (config) => {
//     console.log(`🔄 API Call: ${config.method?.toUpperCase()} ${config.url}`);
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Response interceptor for error handling
// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     console.error('❌ API Error:', error.response?.data || error.message);
//     return Promise.reject(error);
//   }
// );

// // Contact API
// export const contactAPI = {
//   submit: (data) => api.post('/contact/submit', data),
// };

// // Projects API
// export const projectsAPI = {
//   getAll: () => api.get('/projects'),
//   getFeatured: () => api.get('/projects?featured=true'),
//   getById: (id) => api.get(`/projects/${id}`),
// };

// // Testimonials API
// export const testimonialsAPI = {
//   getAll: () => api.get('/testimonials'),
// };

// export default api;