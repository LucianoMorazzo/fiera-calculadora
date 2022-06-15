import React, { ChangeEvent, useState } from 'react'

type OperationT = (a: number, b: number) => number;

interface CalculatorData {
  firstNum: string,
  secondNum: string,
  operation: OperationT
}


export const Calculator = () => {
  const [data, setData] = useState<Partial<CalculatorData>>({});

  // const [firstNum, setfirstNum] = useState("0");
  // const [secondNum, setsecondNum] = useState("0");
  // const [preNum, setpreNum] = useState("0");
  // const [Operation, setOperation] = useState<OperationT>( );

  const suma: OperationT = (a: number, b: number) => a + b;
  



  const clean = () => {
    setData({});
  }

  const buildNumber = ( textNumber: string ) => {
    debugger
    if(!data.operation){
      setData(prev => ({
        ...prev,
        firstNum: prev.firstNum === "0" ? textNumber : prev.firstNum + textNumber      
      }));
    } else {
      setData(prev => ({
        ...prev,
        secondNum: prev.secondNum === "0" ? textNumber : prev.secondNum + textNumber      
      }));
    }
  }

  const handleOperation = (op: OperationT) => {
    if (Operation){
      let value = Operation(parseInt(firstNum), parseInt(secondNum));
      setfirstNum(value.toString());
      setsecondNum("");
    }

    setOperation(op);
  }
 
  const handleEqual = () => {
    if( !firstNum || !secondNum || !Operation)
      return
    let value = Operation(parseInt(firstNum), parseInt(secondNum));
    setfirstNum(value.toString());
    setsecondNum("");

    setOperation(undefined);
  }

  return (
    <div>
      <div className="display container">
        <h2>{preNum}</h2>
        <h2>{firstNum}</h2>
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
