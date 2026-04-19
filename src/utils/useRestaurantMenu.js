import { useEffect, useState } from "react";
import mockData from "./mockMenu.js";

export const useRestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    setResInfo(mockData?.data);
  }, []);

  return resInfo;
};