import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export const GlobalState = ({ children }) => {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setloading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState({});
  const [favourtiteList, setFavouriteList] = useState([]);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    setloading(true);
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await res.json();
      if (data.data.recipes) {
        setRecipes(data.data.recipes);
        setloading(false);
        setSearchParam("");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  }

  function handleAddFavourite(currentItem) {
    let copyFavouriteList = [...favourtiteList];
    const index = copyFavouriteList.findIndex(
      (item) => item.id === currentItem.id
    );
    if (index === -1) {
      copyFavouriteList.push(currentItem);
    } else {
      copyFavouriteList.splice(index, 1);
    }
    setFavouriteList(copyFavouriteList);
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        loading,
        recipes,
        recipeDetailsData,
        setRecipeDetailsData,
        handleAddFavourite,
        favourtiteList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
