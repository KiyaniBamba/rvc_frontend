import React, { useState } from "react";
import { connect } from "react-redux";
import * as dispatchers from "../../../actions/actionCreators";
import CheckIcon from '@material-ui/icons/Check';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from "react-router-dom";
import foodplaceholder from "../../../images/foodplaceholder.png";
import {
  Section1,
  NavigationSection1,
  Addtitle,
  Title2,
  Section2b,
  ExportImg
} from "../../../globals/form-styles";


import axios from "axios";

function Step2(props) {
  const [imgUrl, setImgUrl] = useState(false);
  const { goForward, recipe, addImagesToBody } = props;  

  

  const onSubmit = e => {
    e.preventDefault();
    addImagesToBody(imgUrl)
    goForward(e);
  };

  const uploadImage = async e => {
    e.preventDefault();
    try {
      const files = e.target.files;
      const data = new FormData();
      data.append("file", files[0]);
      data.append("upload_preset", "recipe_image");
      const imageUrl = await axios .post("https://api.cloudinary.com/v1_1/dr34bum3p/image/upload", data)
      // Then
      setImgUrl([imageUrl.data.secure_url])
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div>
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
         <h1>Preview of {recipe.title}</h1>
        </Addtitle>
      </Section1>
      <Section2b>
      <Title2>Upload Image</Title2>
      <div>
      <input
        type="file"
        onChange={uploadImage}
        name="imageUrl"
        placeholder="imageUrl"
      />
      <ExportImg>
        <div>
        {imgUrl
          ? <img alt="image to uploaded" src={imgUrl} />
          : <img src={foodplaceholder} alt="A display of the already finished recipe" />
        }
        </div>
      </ExportImg>
        </div>
      </Section2b>
    </form>
    </div>
  );
}

export default connect(state => state, dispatchers)(Step2);

