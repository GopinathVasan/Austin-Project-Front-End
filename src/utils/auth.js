// src/utils/auth.js
export const setToken = (token) => {
    localStorage.setItem('token', token);
};

export const getToken = () => {
    return localStorage.getItem('token');
};

export const removeToken = () => {
    localStorage.clear();
};

// export const isAuthenticated = () => {
//     return !!getToken();
// };
// src/utils/auth.js
export const isAuthenticated = () => {
    const token = getToken();
    console.log('Token:', token); // Debugging line
    return !!token;
};
