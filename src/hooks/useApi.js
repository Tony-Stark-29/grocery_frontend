import { useEffect, useState } from "react";
import { auth } from "../config/firebaseConfig";
import useFirebaseAuthToken from "./useFirebaseAuthToken";

export const useApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

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
        setError(res.error);
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
