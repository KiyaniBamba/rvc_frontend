import React, { useState } from "react";
import { connect } from "react-redux";
import * as dispatchers from "../../../actions/actionCreators"

import DropDown from "../../dropDown/DropDown";

import CheckIcon from '@material-ui/icons/Check';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from "react-router-dom";
import { TextField, Select, MenuItem } from '@material-ui/core';
import AddCircleOutlineTwoToneIcon from '@material-ui/icons/AddCircleOutlineTwoTone';
import {
  Section1,
  NavigationSection1,
  Addtitle,
  Title,
  Title2,
  Section2b,
  Section2,
  AddItem
} from "../../../globals/form-styles";




const getAllIngredientsUrl = "http://localhost:3333/api/ingredient";
const getAlUnitsUrl = "http://localhost:3333/api/unit";

function Step3(props) {
  const { goForward, recipe, addRecipeIngredientsToBody } = props;

  const [inputState, setInputState] = useState({
    unit_id: "",
    unit_name: "",
    quantity: "",
    ingredient_id: "",
    ingredient_name: ""
  });

  const [cleanState, setCleanState] = useState({
    unit_id: "",
    quantity: "",
    ingredient_id: "",
  });

  const [ingredientsArray, setIngredientsArray] = useState([]);
  const [ingredientsDisplayArray, setIngredientsDisplayArray] = useState([]);


  const inputHandler = e => {
    e.preventDefault();
    setCleanState({ ...cleanState, [e.target.name]: e.target.value })

    if(e.target.name === "quantity"){
      setInputState({ ...inputState, [e.target.name]: e.target.value });
    }
    if (e.target.name === "unit_id") {
      const unitName = e.target.options[e.target.value].text;
      setInputState({ ...inputState, unit_name: unitName });
    }

    if (e.target.name === "ingredient_id") {
      const ingredientName = e.target.options[e.target.value].text;
      setInputState({ ...inputState, ingredient_name: ingredientName });
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    addRecipeIngredientsToBody(ingredientsArray)
    goForward(e);
  };

  const addIngredient = e => {
    e.preventDefault();
    setIngredientsArray([...ingredientsArray, cleanState]);
    setIngredientsDisplayArray([...ingredientsDisplayArray, inputState]);
  };

  return (
    <form onSubmit={onSubmit}>
          <Section1>
      <NavigationSection1>
        <div
          // onClick={prevPage}
          >
          <ArrowBackIcon cgit style={{ fontSize: 40, color: 'white' }} />
        </div>
        <button type='submit' style={{"border":"none", "background": "inherit", "outline":"none"}}>
          <CheckIcon cgit style={{ fontSize: 40, color: 'white', background:'transparent' }} />
        </button>
      </NavigationSection1>
      <Addtitle>
         {/* <h1>Preview of {recipe.title}</h1> */}
        </Addtitle>
      </Section1>
      <Section2b>
      <Title2> Add ingredients </Title2>
      
      <input type="number" name="quantity" onChange={inputHandler} />
      <DropDown
        listUrl={getAlUnitsUrl}
        name="unit_id"
        inputHandler={inputHandler}
      />
      <DropDown
        listUrl={getAllIngredientsUrl}
        name="ingredient_id"
        inputHandler={inputHandler}
      />
      <br></br>
      <div
        style={{"margin" : "0 auto"}}
        onClick={addIngredient}
        >
          <AddCircleOutlineTwoToneIcon cgit style={{ fontSize: 40, color: '#0AB38A' }} />
      </div>
 
      <ul>
        {ingredientsArray.length
          ? ingredientsDisplayArray.map((ing, i) => (
            <AddItem>
              <p key={i}>
                {ing.quantity} {ing.unit_name} {ing.ingredient_name}
              </p>
          </AddItem>
            ))
          : null}
      </ul>
      </Section2b>
    </form>
  );
}

export default connect(state => state, dispatchers)(Step3);

