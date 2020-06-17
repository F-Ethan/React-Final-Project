import React from 'react';

const Counter = ({ count, totalcount, onDecrement, onIncrement, onReset, newValue }) => {

    return (
      <div>
        <div>
          <button onClick={onDecrement}>-</button>
          <span>{count}</span>
          <button onClick={onIncrement}>+</button>
        
    <p>Times the increment/decrement buttons have been clicked {totalcount}</p>
    <input type="number" value={this.state.newValue}></input>
    <button onClick={onReset}>Change Count number</button>
        </div>
      </div>
    );
}


export default Counter;