import React, { Component, useState, useEffect } from "react";
import Counter from "./Counter";
import _ from "lodash";

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

export default function Counters({counters, setCounters}) {
  const [count, setCount] = useState(0);

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

  const handleIncrement = (index) => {
    let newCounter = [...counters];
    newCounter[index].value += 1;
    setCounters(newCounter);
  };

  useEffect(() => {
    if (count) {
      alert(`${count} times`)
    }
  }, [count])

  return (
    <div>
      <button onClick={() => handleReset()} type="button" className="btn btn-secondary">
        Reset
      </button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>Change</button>
      {_.map(counters, (counter, index) => (
        <Counter
          key={counter.id}
          counter={counter}
          onIncre={() => handleIncrement(index)}
          onDelete={() => handleDelete(counter.id)}
        ></Counter>
      ))}
    </div>
  );
}
