import { useState } from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, sla, costForTwo } =
    resData.info;
  return (
    <div className="m-3 p-2 w-[280px] bg-neutral-100 rounded-lg hover:bg-gray-200 h-[430px]">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
        className="rounded-lg h-[200px] w-72"
      />
      <h4 className="font-bold py-2 text-xl">{name}</h4>
      {cuisines.length > 1 ? (
        <span>{cuisines.join(", ")}</span>
      ) : (
        <span>{cuisines}</span>
      )}
      <h5 className="text-sm">{avgRating} ⭐</h5>
      <h5 className="text-lg">{costForTwo}</h5>

      <h5  className="text-xs">{sla?.deliveryTime} MINS</h5>
    </div>
  );
};

//higher order component

//input- Restaurantcard => RestaurantCardOpen

export const withOpenLabel= (RestaurantCard)=>{

  return (props)=>{
    const [isHovered, setIsHovered]= useState(false);

    return(
      <div className="relative"
      onMouseEnter={()=>setIsHovered(true)}
      onMouseLeave={()=>setIsHovered(false)}>
      {isHovered && (
            <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Opened</label>

      )}
      <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;
