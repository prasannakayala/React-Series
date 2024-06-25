import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  console.log(items);
  const dispatch= useDispatch();

  const handleAddItem=(item)=>{
    //dispatch and action
    dispatch(addItem(item))
  }
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between border-b-2 p-2 m-2 border-gray-200"
        >
          <div className="w-9/12">
            <div className="py-2 flex flex-col">
              <span className="text-gray-700 font-bold text-lg">
                {item.card.info.name}
              </span>
              <span className="font-bold">
                {" "}
                ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-green-600">
              ⭐{item.card.info.ratings.aggregatedRating.rating}{" "}
              <span className="text-black">
                ({item.card.info.ratings.aggregatedRating.ratingCount}){" "}
              </span>
            </p>
            <p className="text-xs text-left">{item.card.info.description}</p>
          </div>
          <div className="relative top-24 sm:left-12 md:left-14 xl:left-[90px]">
            <button className="p-1 text-green-400 font-bold text-xs md:p-2 rounded bg-white shadow-lg"
            onClick={()=>handleAddItem(item)}>
              ADD+
            </button>
          </div>
          <img
            src={CDN_URL + item.card.info.imageId}
            className="w-3/12 rounded-md h-28"
            alt={item.card.info.name}
          />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
