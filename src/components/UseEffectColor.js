import React, { useState, useEffect } from 'react'
import styled from 'styled-components'


const Card = styled.div`
  padding: 20px;
  text-align: center;
  color: white;
  background-color: ${props => props.color};
`

const Container = styled.div`
  padding: 20px;
`


export default function UseEffectColor() {
  const [count, setCount] = useState(0)
  const color = count % 5 === 0 ? 'red' : 'blue'

  useEffect(() => {
    document.body.style.backgroundColor = color
  }, [color])

  return (
    <Container>
        <Card color={color}>
            <button
            onClick={() => {
                setCount(count + 1)
            }}
            >
            Click HERE to increment: {count}
            </button>

        </Card>

    </Container>
  )
}