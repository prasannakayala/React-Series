import { useContext, useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import UserContext from "../utils/UserContext";

const RestaurantMenu = () => {
  const [show, setShow] = useState(false);
const [showIndex, setShowIndex]= useState(0);
const {loggedInUser}= useContext(UserContext)

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  console.log(resInfo);
  if (resInfo === null) return <Shimmer />;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};
  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  //   console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[0]?.itemCards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  const {
    name,
    costForTwoMessage,
    cuisines,
    avgRating,
    locality,
    totalRatings,
    sla,
  } = resInfo?.cards[2]?.card?.card?.info;
  // const {rating, ratingCount}= resInfo?.cards[2]?.card?.card?.info?.ratings?.aggregatedRating
  console.log(resInfo?.cards[2]?.card?.card?.info);
  //ratings.aggregatedRating.rating

  return (
    <div className="flex flex-col items-center p-4 m-4">
      <div className="">
        <h1 className="font-bold text-2xl font-sans">{name}</h1>
      </div>

      <div className="border-1 px-4 w-[600px] py-4 m-4 border-gray-300 shadow-lg rounded-xl">
        <p className="text-dark font-bold text-md">
          ⭐ {avgRating}
          <span className="text-md">
            ({totalRatings / 1000}k+ ratings)
          </span>{" "}
          <span className="text-lg">
            <span className="text-gray-500">.</span>
            {costForTwoMessage}
          </span>
        </p>
        <p className="text-orange-500 font-bold underline">
          {cuisines.join(",")}
        </p>
        <p className="text-black font-bold">
          Outlet <span className="text-gray-500 font-normal"> {locality}</span>
        </p>
        <span className="text-black font-bold">{sla.deliveryTime} minutes</span>
      <p>{loggedInUser}</p>
        </div>

      <h2 className="font-bold my-3">Menu</h2>
      {/*categories */}
      <div className="w-6/12">
        {categories?.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            show={index === showIndex ? true : false}
            setShowIndex = {()=>setShowIndex(index=== showIndex ? -1 : index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
