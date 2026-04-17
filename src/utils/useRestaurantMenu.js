import { useEffect, useState } from "react";
import {MENU_API_URL} from "./constants.js"

export const useRestaurantMenu = (resId) => {
  const [resinfo, setResinfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, [resId]); // ✅ dependency add

  const fetchData = async () => {
    try {
      console.log("RES ID:", resId);

      const data = await fetch(
        MENU_API_URL+resId
      );

      console.log("STATUS:", data.status);

      const text = await data.text();

      if (!text || text.trim() === "") {
        console.log("❌ Empty response (API blocked)");
        return;
      }

      const json = JSON.parse(text);

      setResinfo(json?.data);
    } catch (err) {
      console.log("FETCH ERROR:", err);
    }
  };

  return resinfo; // ✅ correct variable
};