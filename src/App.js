import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from "axios"

const App = () => {

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        let res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            Authorization: `Bearer ${response.access_token}`
          }
        })

        console.log(res, "rr");
      } catch (error) {
        console.log(error, "error");
      }
    },
    // scope : ["https://www.googleapis.com/auth/userinfo.email", "openid"]
  });

  return (
    <button onClick={() => login()}>Sign in with Google 🚀</button>
  );
};

export default App;
