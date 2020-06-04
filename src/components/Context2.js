import React, { useContext } from 'react';
import { UserContext } from '../App';
import { CounterContext } from './Counters';
import _ from "lodash";


const Context2 = () => {
    const { user, setUser, counters, setCounters, greet, setGreet } = useContext(UserContext);
    const { count, setCount } = useContext(CounterContext);
    return (
        <>
            <h1>{greet}</h1>
            <button onClick={() => setGreet('Logout')}>Update</button>
            <h1>{count}</h1>
            <button onClick={() => setCount(9999999999999)}>Update</button>
            {_.map(user, u => {
                return(
                    <ul>
                        <li>Id: {u.id}</li>
                        <li>Name: {u.name}</li>
                        <li>Email: {u.email}</li>
                    </ul>
                )
            })}
            {_.map(counters, c => (
                <ul>
                    <li>Id: {c.id}</li>
                    <li>Value: {c.value}</li>
                    {/* <button onCLick={setCounters(c.value = 10)}></button> */}
                    <button>Edit</button>
                </ul>
            ))}
        </>
    );
}

export default Context2;