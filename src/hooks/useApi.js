import { useState } from "react";

export const useApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
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
        body: body ? JSON.stringify(body) : null,
      });
      const data = await res.json();
      if (!res.ok) {
        setError(res.error);
      }
      return data;
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return {   error, isLoading, requestApi };
};
