import React, { ChangeEvent, useState } from 'react'

export const Calculator = () => {

  const [firstNum, setfirstNum] = useState("0");
  const [preNum, setPreNum] = useState("0");
  const [op, setOp] = useState( () => {} );


  

  const clean = () => {
    setfirstNum("0");
    setPreNum("0");
  }

  const buildNumber = ( textNumber: string ) => {
    if( firstNum === "0")
      setfirstNum( textNumber );
    else
      setfirstNum( firstNum + textNumber);
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
        <button className='og-btn'>+</button>
      </div>
      <div className="two-items container">
        <button onClick={() => buildNumber("0")} className='grey-btn'>0</button>
        <button className='og-btn'>=</button>
      </div>
    </div>
  )
}
