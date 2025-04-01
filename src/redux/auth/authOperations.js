import axios from "axios";
import { loginSuccess, loginFailure } from "./authSlice"; 

export const login = (credentials) => async (dispatch) => {
  try {
    
    const response = await axios.post("https://wallet.b.goit.study/api/auth/sign-in", credentials);

    
    dispatch(loginSuccess({ user: response.data.user, token: response.data.token }));
    
    console.log("Autentificare reușită", response.data);
  } catch (error) {
    
    console.error("Eroare la autentificare:", error.response ? error.response.data.message : error.message);
    
    
    dispatch(loginFailure(error.response ? error.response.data.message : "Eroare necunoscută"));

    
    alert("Autentificare eșuată. Te rugăm să verifici datele tale.");
  }
};