import axios from "axios";

const backendUrl = import.meta.env.VITE_APP_BACKEND_URL;
const backendAxios = axios.create({ baseURL: backendUrl });

export default backendAxios;
