import React, { useEffect, useState } from 'react'

const data = [
    { id: 'a', name: 'Devin' },
    { id: 'b', name: 'Gabe' },
    { id: 'c', name: 'Kim' },
  ]

export default function ListKeys (){
    return (
        <div>
            {data.map((item,index)=>{
                return <div key={index.toString()}>{item.name}</div>
            })}
        </div>
    )
}


