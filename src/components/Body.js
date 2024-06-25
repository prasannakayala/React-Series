import RestaurantCard, { withOpenLabel } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UseOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardOpened = withOpenLabel(RestaurantCard);
const {setUserName, loggedInUser}= useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.7324917&lng=83.2842438&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    // console.log("fetching data");

    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(listOfRestaurants, "list");
    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(filteredRestaurant, "filtered");
  };

  // console.log("body rendered");

  const onlineStatus = UseOnlineStatus();
  console.log(onlineStatus, "status");
  if (onlineStatus === false)
    return (
      <h1>Looks like you're offine!! Please check your internet connection</h1>
    );

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col items-center">
      <div className="flex flex-col md:flex-row items-center ">
        <div className="flex m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black w-72 p-1 rounded-sm md:w-80 m-2"
            value={searchText}
            placeholder="Search"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="p-1 px-4 py-2 bg-green-100 m-2 rounded-md"
            onClick={() => {
              // console.log(searchText);
              const filteredRestaurant = listOfRestaurants?.filter((res) =>
                res.info.name.toLowerCase().includes(searchText)
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="w-full sm:flex justify-end  md:justify-center p-4 ">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
       {/* <div>
          <input
            type="text"
            className="text-xl font-bold p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>*/}
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredRestaurant?.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            className="no-underline text-dark"
            key={restaurant.info.id}
          >
            {" "}
            {restaurant.info.isOpen ? (
              <RestaurantCardOpened resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
