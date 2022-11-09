import React, { useState } from 'react'
import ChangeColor from './ChangeColor'
import InputUser from './InputUser'
import TitlesConditional from './TitlesConditional'

function CounterButton({onPress, title}){
    return (
        <button onClick={onPress}>
            {title}
        </button>
    )
}
export default function Home() {
  
  const [count,setCount] = useState(0)
  return (
    <div>
        <ChangeColor></ChangeColor>
        <CounterButton title={`Click HERE to increment: ${count}`} onPress={()=> setCount(count + 1)}></CounterButton>
        <InputUser></InputUser>
        <TitlesConditional></TitlesConditional>
    </div>
    
  )
}