import React from 'react';
import './GridContainer.css'
import Screen from './Screen'
import Button from './Button';

const GridContainer = () => {
  return (
    <section className='container'>
      <Screen></Screen>
      <Button buttonType = 'buttonRow4 buttonOn' buttonContent = 'ON/CE' />
      <Button buttonType = 'buttonRow1 buttonDigit' buttonContent = '7' />
      <Button buttonType = 'buttonRow2 buttonDigit' buttonContent = '8' />
      <Button buttonType = 'buttonRow3 buttonDigit' buttonContent = '9' />
      <Button buttonType = 'buttonRow4 button' buttonContent = '/' />
      <Button buttonType = 'buttonRow1 buttonDigit' buttonContent = '4' />
      <Button buttonType = 'buttonRow2 buttonDigit' buttonContent = '5' />
      <Button buttonType = 'buttonRow3 buttonDigit' buttonContent = '6' />
      <Button buttonType = 'buttonRow4 button' buttonContent = 'x' />
      <Button buttonType = 'buttonRow1 buttonDigit' buttonContent = '1' />
      <Button buttonType = 'buttonRow2 buttonDigit' buttonContent = '2' />
      <Button buttonType = 'buttonRow3 buttonDigit' buttonContent = '3' />
      <Button buttonType = 'buttonRow4 button' buttonContent = '-' />
      <Button buttonType = 'buttonRow1 button' buttonContent = '.' />
      <Button buttonType = 'buttonRow2 buttonDigit' buttonContent = '0' />
      <Button buttonType = 'buttonRow3 button' buttonContent = '=' />
      <Button buttonType = 'buttonRow4 button' buttonContent = '+' />
      
      
    </section>
  )
}


export default GridContainer;