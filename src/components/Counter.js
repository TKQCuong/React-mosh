import React, { Component, useState } from "react";
import _ from "lodash";

// class Counter extends Component {
//   state = {
//     value: this.props.counter.value,
//   };

//   changeStyleSpan = () => {
//     const value  = this.props.counter.value;
//     let className = "badge badge-primary badge-";
//     return (className += value === 0 ? "warning" : "primary");
//   };

//   handleIncrement = () => {
//     this.setState({ value: this.state.value + 1 });
//   };

//   render() {
//     return (
//       <div>
//         <h4>{this.props.counter.id}</h4>
//         <span className={this.changeStyleSpan()}>
//           {this.state.value}
//         </span>
//         <button
//           type="button"
//           className="btn btn-secondary"
//           onClick={() => this.handleIncrement()}
//         >
//           Increment
//         </button>
//         <button
//           onClick={() => this.props.onDelete()}
//           className="btn btn-danger btn-sm m-2"
//         >
//           Delete
//         </button>
//       </div>
//     );
//   }
// }

// export default Counter;

export default function Counter({ counter, onIncre, onDelete }) {
  const changeStyleSpan = () => {
    const { value } = counter;
    let className = "badge badge-primary badge-";
    return (className += value === 0 ? "warning" : "primary");
  };

  return (
    <div>
      <h4>{counter.id}</h4>
      <span className={changeStyleSpan()}>
        {counter.value === 0 ? "Zero" : counter.value}
      </span>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => onIncre()}
      >
        Increment
      </button>
      <button onClick={() => onDelete()} className="btn btn-danger btn-sm m-2">
        Delete
      </button>
    </div>
  );
}
