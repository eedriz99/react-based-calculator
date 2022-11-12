import React from 'react';
import './GridContainer.css'
import Screen from './Screen'
import Button from './Button';

const GridContainer = () => {
  return (
    <section className='container'>
      <Screen></Screen>
      <Button buttonType = 'buttonRow4 buttonOn' buttonContent = 'ON/CE' />
      <Button buttonType = 'buttonRow1 button7' buttonContent = '7' />
      <Button buttonType = 'buttonRow2 button8' buttonContent = '8' />
      <Button buttonType = 'buttonRow3 button9' buttonContent = '9' />
      <Button buttonType = 'buttonRow4 buttonDivide' buttonContent = '/' />
      <Button buttonType = 'buttonRow1 button4' buttonContent = '4' />
      <Button buttonType = 'buttonRow2 button5' buttonContent = '5' />
      <Button buttonType = 'buttonRow3 button6' buttonContent = '6' />
      <Button buttonType = 'buttonRow4 buttonMultiply' buttonContent = '*' />
      <Button buttonType = 'buttonRow1 button1' buttonContent = '1' />
      <Button buttonType = 'buttonRow2 button2' buttonContent = '2' />
      <Button buttonType = 'buttonRow3 button3' buttonContent = '3' />
      <Button buttonType = 'buttonRow4 buttonMinus' buttonContent = '-' />
      <Button buttonType = 'buttonRow1 buttonDot' buttonContent = '.' />
      <Button buttonType = 'buttonRow2 buttonDot' buttonContent = '0' />
      <Button buttonType = 'buttonRow3 buttonEqual' buttonContent = '=' />
      <Button buttonType = 'buttonRow4 buttonPlus' buttonContent = '+' />
      
      
    </section>
  )
}


export default GridContainer;