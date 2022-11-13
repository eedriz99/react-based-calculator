import './Button.css'
import React from 'react'

let inputs = [];
const Button = (props) => {
  const input = (value) => {
    // create a list variable
    let i = value.split(' ');
    // append the innerHtml of all button clicked to the end 
    // of the list
    const myInnerText = document.querySelector("." + i[1]).innerText;
    if (myInnerText !== "=" && myInnerText !== "ON/CE") {
      inputs.push(myInnerText);
    } else if(myInnerText === "="){
      // if button clicked is "=", then pass the joint list into 
      // the eval function and print the outcome
      const joinedInputs = inputs.join("");
      inputs = [];
      inputs.push(eval(joinedInputs));
    } else if(myInnerText === "ON/CE"){
        // If button clicked is "ON/CE",  enpty the list
      inputs = [];
    }
    

    console.log(inputs)

  }

  return (
    <button onClick ={() => input(props.buttonType)} className={props.buttonType}>{props.buttonContent}</button>
  )
}

export default Button;