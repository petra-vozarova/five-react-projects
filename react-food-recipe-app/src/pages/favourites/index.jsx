import { useContext } from "react";
import { GlobalContext } from "../../context";
import { Recipe } from "../../components/recipe-item/recipe";

export const Favourites = () => {
  const { favourtiteList } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favourtiteList && favourtiteList.length > 0 ? (
        favourtiteList.map((item, index) => <Recipe key={index} item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            No Favourites Found
          </p>
        </div>
      )}
    </div>
  );
};
