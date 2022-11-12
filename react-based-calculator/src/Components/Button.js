import './Button.css'
import React from 'react'


const Button = (props) => {

  const input = (value) => {
    let inputs = [];
    // create a list variable
    let i = value.split(' ');
    // append the innerHtml of all button clicked to the end of the list
    const myInnerText = document.querySelector("." + i[1]).innerText;
    inputs.push(myInnerText);

    console.log(inputs)
    // if button clicked is "=", then pass the joint list into the eval function and print the outcome
    
    // If button clicked is "on",  enpty the list

  }
    //let buttonType, buttonContent = props
  return (
    <button onClick ={() => input(props.buttonType)} className={props.buttonType}>{props.buttonContent}</button>
  )
}

export default Button;