import React, { useState } from 'react';
import SmallInput from './SmallInput';
import _ from "lodash";

const Input = ({user , setUser}) => {
    return (
        <div>
            {/* {_.map(props.user, u => {
                return (
                    <SmallInput key={u.id} user={u} setUser={props.setUser}></SmallInput>
                )
            })} */}
            <SmallInput key={user.id} user={user} setUser={setUser}></SmallInput>
        </div>
     );
}
 
export default Input;