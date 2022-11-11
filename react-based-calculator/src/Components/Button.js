import './Button.css'
import React from 'react'


const Button = (props) => {
  const input = (value) => {
    // create a list variable
    let inputs = [];
    let i = value.split(' ');
    // append the innerHtml of all button clicked to the end of the list
    const innerText = document.querySelector()
    // if button clicked is "=", then pass the joint list into the eval function and print the outcome

    // If button clicke is "on",  enpty the list

  }
    //let buttonType, buttonContent = props
  return (
    <button className={props.buttonType}>{props.buttonContent}</button>
  )
}

export default Button;