import { IMG_URL } from "../utils/constants.js";

export const RestaurantCard = ({ resData }) => {
  return (
    <div className="res-card w-64 border rounded-lg overflow-hidden m-2 hover:bg-pink-400 hover:cursor-pointer">

      <img
        className="food-image w-full h-60 object-cover p-2"
        src={IMG_URL + resData?.info?.cloudinaryImageId}
        alt="food"
      />

      <h3 className="font-bold p-4">{resData?.info?.name}</h3>

      <h4 className="font-bold p-4">
        {resData?.info?.cuisines?.join(", ")}
      </h4>

      <h4 className="font-bold p-4">
        {resData?.info?.avgRating} stars
      </h4>

      <h4 className="font-bold p-4">
        {resData?.info?.sla?.deliveryTime} minutes
      </h4>
    </div>
  );
};

// ✅ HOC FIXED
export const withOpenLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="bg-green-500 text-white px-2 py-1 absolute top-2 left-2 z-10">
          Open
        </label>

        <RestaurantCard {...props} />
      </div>
    );
  };
};