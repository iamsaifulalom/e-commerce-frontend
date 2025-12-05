import axios from "axios";

const ShopAPI = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL
})

ShopAPI.interceptors.request.use((config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});


export { ShopAPI }
