import React, { useState } from 'react'

const StateInFunction = (props) => {
    const [data, setData] = useState({
        id:props.id,
        name: props.name,
        counter: 0
    })

    const plusFunction = () => {
        this.setData({ ...data, counter: data.counter + 1 })};
    const minusFunction = () => {
        this.setData({ ...data, counter: data.counter - 1 })};

  return (
    
        <div>
            <h1>State In Function Component</h1>
            <p>
                <b>Name:</b> {data.name}
            </p>
            <p>
              <b>Counter:</b> {data.counter}
            </p>
            <button onClick={this.plusFunction}>+</button>
            <button onClick={this.minusFunction}>-</button>
        </div>
  );
}

export default StateInFunction