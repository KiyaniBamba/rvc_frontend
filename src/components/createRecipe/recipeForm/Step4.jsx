import React, { useState } from "react";
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


function Step4(props) {
  const { goForward, addInstructionsToBody } = props;

  const [inputState, setInputState] = useState("");

  const [instructionsArray, setInstructionsArray] = useState([]);

  const inputHandler = e => {
    e.preventDefault();
    setInputState(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    addInstructionsToBody(instructionsArray);
    goForward(e);
  };

  const addInstruction = e => {
    e.preventDefault();
    setInstructionsArray([...instructionsArray, inputState]);
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
        {/* <h1>{title}</h1> */}
        </Addtitle>
      </Section1>
      <br></br>
      <TextField
          id="filled-full-width"
          style={{ margin: 8 }}
          placeholder="Add instruction"
          helperText="click on the plus button to add your instruction!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          onChange={inputHandler}
          type="text"
          name="instruction"
        />
      
      <div
        style={{"margin" : "0 auto"}}
        onClick={addInstruction}
        >
          <AddCircleOutlineTwoToneIcon cgit style={{ fontSize: 40, color: '#0AB38A' }} />
      </div>

      <ul>
        {instructionsArray.length
          ? instructionsArray.map((ing, i) =>
          <AddItem>
           <p key={i}>{ing}</p>
          </AddItem>
           )
          : null}
      </ul> 
    </form>
  );
}

export default connect(state => state, dispatchers)(Step4);
