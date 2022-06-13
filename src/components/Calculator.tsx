import React from 'react'

export const Calculator = () => {

  return (
    <div>
      <div className="display container">
        <h2>0</h2>
      </div>
      <div className="two-items container">
        <button className='grey-btn'>C</button>
        <button className='og-btn'>%</button>
      </div>
      <div className="four-items  container">
        <button className='grey-btn'>7</button>
        <button className='grey-btn'>8</button>
        <button className='grey-btn'>9</button>
        <button className='og-btn'>X</button>
      </div>
      <div className="four-items container">
        <button className='grey-btn'>4</button>
        <button className='grey-btn'>5</button>
        <button className='grey-btn'>6</button>
        <button className='og-btn'>-</button>
      </div>
      <div className="four-items container">
        <button className='grey-btn'>1</button>
        <button className='grey-btn'>2</button>
        <button className='grey-btn'>3</button>
        <button className='og-btn'>+</button>
      </div>
      <div className="two-items container">
        <button className='grey-btn'>0</button>
        <button className='og-btn'>=</button>
      </div>
    </div>
  )
}
