import { useState } from "react";
import { useRestaurantMenu } from "../utils/useRestaurantMenu.js";

export const RestaurantMenu = () => {
  const resInfo = useRestaurantMenu();
  const [openIndex, setOpenIndex] = useState(null);

  if (!resInfo) return <h1>Loading...</h1>;

  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Menu</h1>

      {categories.map((cat, index) => {
        const category = cat?.card?.card;

        return (
          <div key={index} className="mb-4 border rounded-lg">
            
            {/* CATEGORY TITLE */}
            <div
              className="bg-gray-200 p-3 font-bold cursor-pointer flex justify-between"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              <span>{category?.title}</span>
              <span>{openIndex === index ? "⬆️" : "⬇️"}</span>
            </div>

            {/* ITEMS */}
            {openIndex === index &&
              category?.itemCards?.map((item) => {
                const info = item?.card?.info;

                return (
                  <div
                    key={info?.id}
                    className="p-3 border-t flex justify-between"
                  >
                    <span>{info?.name}</span>
                    <span>₹ {info?.price / 100}</span>
                  </div>
                );
              })}
          </div>
        );
      })}
    </div>
  );
};

