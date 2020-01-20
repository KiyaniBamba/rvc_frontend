import styled from "styled-components";


export const Section1 = styled.div`
    display:flex;
    flex-direction:column;
    background-color: #0AB28A;
    height: 15rem;
    width:100%;
    box-shadow: 0px 8px 30px #DAD9D9;
    margin-bottom:10px;
`
export const Section1b = styled.div`
    display:flex;
    flex-direction:column;
    background-color: #0AB28A;
    height: 10rem;
    width:100%;
    box-shadow: 0px 8px 30px #DAD9D9;
    margin-bottom:10px;
`

export const NavigationSection1 = styled.div`
display:flex;
justify-content: space-between;
`

export const Addtitle = styled.div `
margin-left:5%;
margin-right:15%;

`

export const Title = styled.h3 `
font-weight: 300;
font-size: 20px;
line-height: 18px;
margin-bottom: 15px;
margin-top:15px;
`

export const Section2 = styled.div `
display:flex;
flex-direction:column;
text-align: left;
margin:5%;
margin-top:8px;
margin-bottom:50px;
font-weight: 300;
font-size: 15px;
`


export const StyledForm = styled.form`
display: flex;
flex-direction: column;
// margin-top: 4rem;
input {
  width: 80%;
  height: 4rem;
  &.category{
  }
}
.section2 {  
  display: flex;
  flex-direction: column;
  align-items: center;  
  margin-top: 3rem;
  font-size: 1.4rem;
  label {
    position: relative;
    top: 0;
    right: 140px;
    margin: 1rem 0;
  }
  select {
    width: 80%;
    height: 40px;
    border-radius: 2rem;
  }

}

.section3 {
  font-size: 1.6rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    display: flex;
    width: 80%;
  }
  .options-paragraph   {
    position: relative;
    top: 0;
    right: 140px;
    margin: 1rem 0;
  }
}
`

export const SwitchDiv = styled.div`
font-size: 1.6rem;
display: flex;
align-items: center;
margin-bottom: 1.5rem;
justify-content: space-between; 
color: rgba(0, 0, 0, 0.51);
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
`

export const Section2b = styled.div `
display: flex;
flex-direction: column;
margin-top:15px;
h1 {
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  margin-bottom:10px;
}
`
export const ExportImg = styled.div `
width: 100%;
height: 397px;
background: rgba(10, 178, 138, 0.21);
padding:0px;
display:flex;
align-items: center; 
align-content: center;
margin-bottom:35px;
margin-top: 35px;
`

export const Title2 = styled.h1 `
font-style: normal;
font-weight: 300;
font-size: 35px;
line-height: 15px;
display: flex;
// align-items: center;
margin-bottom: 15px;
margin-top:15px;
`

export const AddItem = styled.div `
color: currentColor;
  width: 100%;
  border: 0;
  height: 25px;
  margin-top:2%;
display: flex;
align-content:flex-start;
background: rgba(10, 179, 138, 0.08);
border-radius: 2px;
box-sizing: content-box;
    p{
      font-size: 20px;
    }`
