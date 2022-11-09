import React, { useState } from 'react'

const InputUser = ()=>{
    const [state, setState] = useState('');

    return(
        <div>
            <label htmlFor={'my-input'}>
        Enter text:
            </label>
            <input
            id={'my-input'}
            type={'text'}
            value={state}
            placeholder={'Type here'}
            onChange={event=>{
                setState(event.target.value)
            }}
            >
            </input>
            <br/>
            <br/>
            
            You entered: {state}
        </div>
    )
}

export default InputUser;