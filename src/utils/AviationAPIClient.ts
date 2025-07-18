import axios from "axios";

const API_KEY = process.env.AVIATIONSTACK_API_KEY;
const BASE_URL = "http://api.aviationstack.com/v1";

if (!API_KEY) {
  throw new Error(
    "AviationStack API key is not defined. Please set it in your .env file."
  );
}

const apiClient = axios.create({
  baseURL: BASE_URL,
  params: {
    access_key: API_KEY,
  },
});

export default apiClient; 