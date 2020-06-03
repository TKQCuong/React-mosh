import React, { Component, useState } from "react";
import _ from "lodash";
import Counter from "../components/Counter";

// class Home extends Component {
//     // constructor() {
//     //     super();
//     //     this.state = {
//     //         count: 10,
//     //         tags: ['tag1', 'tag2', 'tag3'],
//     //     }
//     //     // this.modifyFunction = this.modifyFunction.bind(this)
//     // }

//     state = {
//         count: 10,
//         tags: ['tag1', 'tag2', 'tag3'],
//     }

//     changeStyleCount() {
//         const { count } = this.state;
//         let style = 'badge mb-3 badge-';
//         return style += count >= 1 ? 'primary' : 'warning';
//     }
//     startIncrement(e) {
//         this.setState(prevState => {
//             return {count: e === 'add' ? prevState.count + 1 : prevState.count - 1}
//         })
//     }
//     modifyFunction = (e) => {
//         this.setState({ count: this.state.count + 1 })
//     }

//     render() {
//         return (
//             <div>
//                 <span className={this.changeStyleCount()}>{this.state.count}</span>
//                 <button type='submit' onClick={(e) => this.modifyFunction(e)} className="btn btn-primary">Increment</button>
//                 <ul>
//                     {_.isEmpty(this.state.tags)
//                     ? <h1>No tag</h1>
//                     : _.map(this.state.tags, tag => (
//                         <li>{tag}</li>
//                     ))}
//                     {/* {this.state.tags.map(tag => (
//                         <li>{tag}</li>
//                     ))} */}
//                 </ul>
//             </div>
//          );
//     }
// }

// export default Home;

export function Home() {
  const [tags, setTags] = useState(["tag1", "tag2", "tag3"]);
  const [count, setCount] = useState(1);
  const handleIncrement = (e) => {
    e === "add" ? setCount(count + 1) : setCount(count - 1);
  };
  const changeClass = () => {
    let style = "badge mb-3 badge-";
    return (style += count === 0 ? "warning" : "primary");
  };
  return (
    <div>
      <span className={changeClass()}>{count === 0 ? "Zero" : count}</span>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => handleIncrement("add")}
      >
        Increment
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => handleIncrement("minus")}
      >
        Decrement
      </button>
      {_.isEmpty(tags) ? (
        <h1>No tag</h1>
      ) : (
        _.map(tags, (tag) => (
          <ul>
            <li key={tag}></li>
            <li>{tag}</li>
          </ul>
        ))
      )}
      <Counter tags={tags} count={count}/>
    </div>
  );
}

export default function Order() {
  return <h1>here</h1>;
}
