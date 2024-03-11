

import React, { useState } from 'react';
import style from "./CalculatorApp.module.css";

const CalculatorApp = () => {
  const [displayValue, setDisplayValue] = useState('');

  const calculatePercentage = () => {
    const currentValue = parseFloat(displayValue);
    const result = currentValue / 100;
    setDisplayValue(result.toString());
  };

  const changeSign = () => {
    setDisplayValue((parseFloat(displayValue) * -1).toString());
  };

  const addToDisplay = (value) => {
    if (value === 'C') {
      clearDisplay();
    } else {
      setDisplayValue(prev => prev + value);
    }
  };

  const clearDisplay = () => {
    setDisplayValue('');
  };

 

  const calculate = () => {
    try {
      const operators = ['+', '-', '/', '*'];
      const operator = operators.find(op => displayValue.includes(op));
      const operands = displayValue.split(operator).map(parseFloat);
  
      const calculatedResult = operator === '+' ? operands.reduce((acc, val) => acc + val)
                            : operator === '-' ? operands.reduce((acc, val) => acc - val)
                            : operator === '/' ? operands.reduce((acc, val) => acc / val)
                            : operator === '*' ? operands.reduce((acc, val) => acc * val)
                            : parseFloat(displayValue);
  
      setDisplayValue(String(calculatedResult));
    } catch (error) {
      setDisplayValue("Error");
    }
  };

  return (
    <div>
      <div className={style.calculator}>
        <input type="text" id="display" className={style.input} readOnly value={displayValue} />
        <div className={style.keys}>
          <button className={style.grey} onClick={clearDisplay}>C</button>
          <button className={style.grey} onClick={changeSign}>+/-</button>
          <button className={style.grey} onClick={calculatePercentage}>%</button>
          <button className={style.orange} onClick={() => addToDisplay('/')}>/</button>
          
          <button onClick={() => addToDisplay('7')}>7</button>
          <button onClick={() => addToDisplay('8')}>8</button>
          <button onClick={() => addToDisplay('9')}>9</button>
          <button className={style.orange} onClick={() => addToDisplay('*')}>x</button>
          
          <button onClick={() => addToDisplay('4')}>4</button>
          <button onClick={() => addToDisplay('5')}>5</button>
          <button onClick={() => addToDisplay('6')}>6</button>
          <button className={style.orange} onClick={() => addToDisplay('-')}>-</button>
          
          <button onClick={() => addToDisplay('1')}>1</button>
          <button onClick={() => addToDisplay('2')}>2</button>
          <button onClick={() => addToDisplay('3')}>3</button>
          <button className={style.orange} onClick={() => addToDisplay('+')}>+</button>
          
          <button className={style.zero} onClick={() => addToDisplay('0')}>0</button>
          <button onClick={() => addToDisplay('.')}>.</button>
          <button className={style.orange} onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
};

export default CalculatorApp;
