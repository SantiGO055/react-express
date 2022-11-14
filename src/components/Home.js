import React, { useEffect, useState } from 'react'
import ChangeColor from './ChangeColor'
import InputUser from './InputUser'
import TitlesConditional from './TitlesConditional'
import CallSoap from './CallSOAP'

function CounterButton({onPress, title}){
    return (
        <button onClick={onPress}>
            {title}
        </button>
    )
}

export default function Home({handleBackground}) {

  

  
  const [count,setCount] = useState(0)


  
  return (
    <div>
        {/* <CallSoap></CallSoap> */}
        <ChangeColor handleBackground={handleBackground}></ChangeColor>
        <CounterButton title={`Click HERE to increment: ${count}`} onPress={()=> setCount(count + 1)}></CounterButton>
        <InputUser></InputUser>
        <TitlesConditional></TitlesConditional>
    </div>
    
  )
}