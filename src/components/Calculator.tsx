import React, { useState } from 'react'

type OperationT = (a: number, b: number) => number;

interface CalculatorData {
  firstNum: string,
  secondNum: string,
  operation: OperationT
}


export const Calculator = () => {
  const [data, setData] = useState<Partial<CalculatorData>>({});

  const suma: OperationT = (a: number, b: number) => a + b;
  



  const clean = () => {
    setData({});
  }

  const buildNumber = ( textNumber: string ) => {
    if(!data.operation){
      setData(prev => ({
        ...prev,
        firstNum: !prev.firstNum ? textNumber : prev.firstNum + textNumber      
      }));
    } else {
      setData(prev => ({
        ...prev,
        secondNum: !prev.secondNum ? textNumber : prev.secondNum + textNumber      
      }));
    }
  }

  const handleOperation = (op: OperationT) => {
    const { operation, firstNum, secondNum } = data;
    if (operation && firstNum && secondNum){
      let value = operation(parseInt(firstNum), parseInt(secondNum));
      setData({
        firstNum: value.toString(),
      });
    }

    setData( prev => ({
      ...prev,
      operation: op 
    }));
  }
 
  const handleEqual = () => {
    const { firstNum, secondNum, operation} = data;

    if( !firstNum || !secondNum || !operation)
      return
    
    let value = operation(parseInt(firstNum), parseInt(secondNum));

    setData({
      firstNum: value.toString(),
    });

  }

  return (
    <div>
      <div className="display container">
        <h2>{data.secondNum ? data.secondNum : data.firstNum}</h2>
      </div>
      <div className="two-items container">
        <button onClick={clean} className='grey-btn'>C</button>
        <button className='og-btn'>%</button>
      </div>
      <div className="four-items  container">
        <button onClick={() => buildNumber("7")} className='grey-btn'>7</button>
        <button onClick={() => buildNumber("8")} className='grey-btn' >8</button>
        <button onClick={() => buildNumber("9")} className='grey-btn' >9</button>
        <button className='og-btn'>X</button>
      </div>
      <div className="four-items container">
        <button onClick={() => buildNumber("4")} className='grey-btn'>4</button>
        <button onClick={() => buildNumber("5")} className='grey-btn'>5</button>
        <button onClick={() => buildNumber("6")} className='grey-btn'>6</button>
        <button className='og-btn'>-</button>
      </div>
      <div className="four-items container">
        <button onClick={() => buildNumber("1")} className='grey-btn'>1</button>
        <button onClick={() => buildNumber("2")} className='grey-btn'>2</button>
        <button onClick={() => buildNumber("3")} className='grey-btn'>3</button>
        <button onClick={() => handleOperation(suma)} className='og-btn'>+</button>
      </div>
      <div className="two-items container">
        <button onClick={() => buildNumber("0")} className='grey-btn'>0</button>
        <button onClick={handleEqual} className='og-btn'>=</button>
      </div>
    </div>
  )
}
