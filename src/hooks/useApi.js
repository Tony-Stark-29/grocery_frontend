import { useState } from "react";

import useFirebaseAuthToken from "./useFirebaseAuthToken";

export const useApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const accessToken = useFirebaseAuthToken();
   
  const clearAll = () => {
    setIsLoading(false);
    setError("");
  };
  const requestApi = async (url, method, body) => {
    clearAll();
    try {
      setIsLoading(true);

      const res = await fetch(url, {
        method: method || "GET",
        headers: {
          "Content-Type": method !== "GET" ? "application/json" : null,
          Authorization: accessToken ? `Bearer ${accessToken}` : null,
        },
        body: body ? JSON.stringify(body) : null,
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error);
        console.log("Error : ",data.error);
      }
      return data;
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return { error, isLoading, requestApi };
};
