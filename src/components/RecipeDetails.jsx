import React from "react";
import { Link } from "react-router-dom";

function RecipeDetails({ selectedRecipe, clearSelectedRecipe }) {
  return (
    <div className="mx-7 my-8 space-y-10 md:flex md:justify-between items-center md:space-x-20 md:mx-16 md:my-16">
      <div className=" justify-center ">
        <img
          className="rounded-lg w-[110%]"
          src={selectedRecipe.image}
          alt={selectedRecipe.label}
        />

        {selectedRecipe.calories && (
          <p className="mt-2 font-alata text-sm">
            Calories: {selectedRecipe.calories.toFixed(2)}
          </p>
        )}
      </div>

      <div className="font-alata">
        <h2 className="font-bold text-2xl">{selectedRecipe.label}</h2>

        {selectedRecipe.ingredients && (
          <ul className=" list-disc">
            Ingredients:
            {selectedRecipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient.text}</li>
            ))}
          </ul>
        )}

        <p className="text-xl cursor-pointer text-blue-900">
          Recipe Link:{" "}
          <Link
            to={selectedRecipe.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Recipe
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RecipeDetails;
