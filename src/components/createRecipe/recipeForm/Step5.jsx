import React from 'react';
import { connect } from "react-redux";
import * as dispatchers from "../../../actions/actionCreators"

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

function Step5(props){
  const {
    postRecipe,
    recipe,
    recipe_categories,
    recipe_tags,
    images,
    recipe_ingredients,
    instructions
  } = props;

  const submitRecipe = () => {
    const body = {
      recipe,
      recipe_categories,
      recipe_tags,
      images,
      recipe_ingredients,
      instructions
    };
    postRecipe(body);
  }

  return(<div>
        <Section1>
      <NavigationSection1>
        <div
          // onClick={prevPage}
          >
          <ArrowBackIcon cgit style={{ fontSize: 40, color: 'white' }} />
        </div>
        <button type='submit' onClick={submitRecipe} style={{"border":"none", "background": "inherit", "outline":"none"}}>
          <CheckIcon cgit style={{ fontSize: 40, color: 'white', background:'transparent' }} />
        </button>
      </NavigationSection1>
      <Addtitle>
         <h1>Preview of {recipe.title}</h1>
        </Addtitle>
      </Section1>
    <img src={images[0]} />
    {/* <button onClick={submitRecipe} >Submit</button> */}
  </div>)
}

function mapStateToProps(state){

}

export default connect(state => state.newRecipe, dispatchers)(Step5);
