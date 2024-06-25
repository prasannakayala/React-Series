import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, show, setShowIndex}) => {
  console.log(data);

  const handleClick = () => {
    setShowIndex()
  };
  return (
    <div>
      <div className=" mx-auto bg-gray-50 shadow-lg p-4 my-4">
        <div
          className=" flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data?.itemCards?.length})
          </span>
          <span>⬇️</span>
        </div>
        {show && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
