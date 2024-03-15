import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {
  const responseMessage = (response) => {
    console.log(response);
  };
  
  const errorMessage = (error) => {
    console.log(error);
  };

  return (
    <div>
      <GoogleOAuthProvider clientId="597268319238-2ajserchhhu55o9na1fnotg4hb6nl4ll.apps.googleusercontent.com">
        <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
      </GoogleOAuthProvider>
    </div>
  );
};

export default App;
