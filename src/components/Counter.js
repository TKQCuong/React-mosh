import React, { Component, useState } from "react";
import _ from "lodash";

export default function Counter({ counter, onIncre, onDelete, onDe}) {

  const changeStyleSpan = () => {
    const { value } = counter;
    let className = "badge badge-primary badge- col";
    return (className += value === 0 ? "warning" : "primary");
  };
  
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className={changeStyleSpan()}>{counter.value === 0 ? "Zero" : counter.value}</div>
          <button className="btn btn-secondary" onClick={() => onIncre()}>+</button>
          <button className="btn btn-secondary" disabled={counter.value === 0} onClick={() => onDe()}>-</button>
          <button className="btn btn-danger" onClick={() => onDelete()}>X</button>
        </div>
      </div>
    </div>
  );
}
