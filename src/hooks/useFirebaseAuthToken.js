import { useState, useEffect } from 'react';
import { auth } from '../config/firebaseConfig';
 

const useFirebaseAuth = () => {
  const [accessToken, setAccessToken] = useState(auth.currentUser?.accessToken);

  useEffect(() => {
    const checkTokenExpiration = async () => {
      const user = auth.currentUser;
        console.log(user?.accessToken);
      if (user) {
        try {
          const idTokenResult = await user.getIdTokenResult();
          const expirationTime = idTokenResult?.expirationTime || 0;
          const currentTime = Math.floor(Date.now() / 1000);
          if (expirationTime < currentTime) {
            const refreshedToken = await user.getIdToken(true);
            setAccessToken(refreshedToken);
            console.log('Token refreshed:', refreshedToken);
          } else {
            setAccessToken(idTokenResult.token);
          }
        } catch (error) {
          console.error('Error checking or refreshing token:', error);
        }
      }
    };

 
    checkTokenExpiration();

    const intervalid = setInterval(checkTokenExpiration, 6 * 60 * 1000);  

    return () => clearInterval(intervalid);
  }, []); 

  return accessToken;
};

export default useFirebaseAuth;
