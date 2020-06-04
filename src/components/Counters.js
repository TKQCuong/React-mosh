import React, { useState, useEffect } from "react";
import Counter from "./Counter";
import _ from "lodash";
import Context1 from "./Context1";

// class Counters extends Component {
//   state = {
//     counters: [
//       { id: 1, value: 10 },
//       { id: 2, value: 0 },
//       { id: 3, value: 0 },
//       { id: 4, value: 0 },
//     ],
//   };

//   handleDelete = (e) => {
//     const counters = _.filter(this.state.counters, (c) => c.id !== e);
//     this.setState({ counters });
//   };

//   render() {
//     return (
//       <div>
//         {_.map(this.state.counters, (counter) => (
//           <Counter
//             key={counter.id}
//             onDelete={() => this.handleDelete(counter.id)}
//             counter={counter}
//           />
//         ))}
//       </div>
//     );
//   }
// }

// export default Counters;
export const CounterContext = React.createContext();

export default function Counters({counters, setCounters, totalValue}) {
  const [count, setCount] = useState(totalValue)
  const handleDelete = (e) => {
    setCounters(_.filter(counters, (c) => c.id !== e));
  };

  const handleReset = () => {
    let newCounter = counters.map(c => {
      c.value = 0;
      return c;
    })
    setCounters(newCounter)
  }

  const handleIncrement = (i) => {
    let newCounter = [...counters];
    newCounter[i].value += 1;
    setCounters(newCounter);
  };

  const handleDecrement = (index) => {
    let newCounters = [...counters];
    newCounters[index].value -= 1;
    setCounters(newCounters)
  }

  // useEffect(() => {
  //   if (count) {
  //     alert(`${count} times`)
  //   }
  // }) // Empty array: only run 1st time after render; Pass argument: 1st and re-run only if value in array Changes; Not apply array (should not): run by default (1st time & every update)

  return (
    <div>
      <button onClick={() => handleReset()} type="button" className="btn btn-secondary">
        Reset
      </button>
      <span>Count: {count}</span>

      <CounterContext.Provider value={{count,setCount}}>
        <Context1 />
      </CounterContext.Provider>

      {_.map(counters, (counter, index) => (
        <Counter
          key={counter.id}
          counter={counter}
          onIncre={() => handleIncrement(index)}
          onDelete={() => handleDelete(counter.id)}
          onDe={() => handleDecrement(index)}
        ></Counter>
      ))}
    </div>
  );
}
