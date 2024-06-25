import { useEffect, useState } from "react";
import {MENU_API }from './constants';

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json.data);
    console.log(json.data?.cards[2]?.card?.card?.info.id);
    setResInfo(json.data);
  };
  console.log(resInfo);
  
  return resInfo;
};

export default useRestaurantMenu;
