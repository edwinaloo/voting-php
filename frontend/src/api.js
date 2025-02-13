import axios from "axios";

const API_URL = "http://localhost/e-voting-system/backend/";

export const registerUser = (user) => axios.post(`${API_URL}register.php`, user);
export const loginUser = (user) => axios.post(`${API_URL}login.php`, user);
export const getCandidates = () => axios.get(`${API_URL}candidates.php`);
export const submitVote = (vote) => axios.post(`${API_URL}vote.php`, vote);
