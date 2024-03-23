import { useContext } from "react";
import { GlobalContext } from "../../context";
import { Recipe } from "../../components/recipe-item/recipe";

export const Home = () => {
  const { loading, recipes } = useContext(GlobalContext);
  if (loading)
    return <div className="text-2xl font-semibold text-center">Loading...</div>;

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipes && recipes.length > 0 ? (
        recipes.map((item, index) => <Recipe key={index} item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            No recipies to show. Begin search by typing in an ingredient
          </p>
        </div>
      )}
    </div>
  );
};
