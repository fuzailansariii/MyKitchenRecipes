import React, { useEffect, useState } from "react";
import axios from "axios";
import edamamConfig from "../api/config";
import RecipeDetails from "./RecipeDetails";

function RecipeResults({ searchItem, submitted }) {
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true);
        if (submitted && searchItem) {
          const apiUrl = `https://api.edamam.com/search?q=${searchItem}&app_id=${edamamConfig.apiId}&app_key=${edamamConfig.apiKey}`;
          const response = await axios.get(apiUrl);
          const data = response.data.hits.map((hit) => hit.recipe);
          setRecipe(data);
        }
      } catch (error) {
        console.error("Error fetching data API:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipe();
  }, [searchItem, submitted]);

  const recipeClicked = (selectedRecipe) => {
    setSelectedRecipe(selectedRecipe);
  };

  const clearSelectedRecipe = () => {
    setSelectedRecipe(null);
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {selectedRecipe ? (
        <RecipeDetails
          selectedRecipe={selectedRecipe}
          clearSelectedRecipe={clearSelectedRecipe}
        />
      ) : (
        <div className="grid grid-cols-2 mx-5 mt-10 gap-4 md:grid md:grid-cols-4 md:mx-16 md:mt-16 md:gap-7">
          {recipe.map((recipe) => (
            <div onClick={() => recipeClicked(recipe)} key={recipe.uri}>
              <img
                className="rounded-lg hover:scale-95 transition-all duration-300 cursor-pointer"
                src={recipe.image}
                alt={recipe.label}
              />
              <h1 className=" font-alata font-bold text-xl cursor-pointer">
                {recipe.label}
              </h1>
              <p className="font-alata text-sm">
                Calories: {recipe.calories.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecipeResults;
