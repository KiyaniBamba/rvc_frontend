import React from "react";
import { SeeRecipePopup } from "./IngredientList.styles";

export default function IngredientList({ ingredients, close }) {
  return (
    <SeeRecipePopup>
      <button onClick={close} className="cancel-button">
        x
      </button>
      <h1>Ingredients</h1>
      {/* <h2> 6 Tomatoes </h2> */}
      {ingredients.map((item, id) => (
        <h2 key={`${id}`}>{`${item.quantity} ${
          item.unit.length < 10 ? item.unit + " of" : ""
        } ${item.name}`}</h2>
      ))}
    </SeeRecipePopup>
  );
}
