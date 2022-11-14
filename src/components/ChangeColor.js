import React, { useState } from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'

function randomColor() {
    return `#${Math.random()
      .toString(16)
      .substr(-6)}`
  }

const Card = styled.div`
  padding: 20px;
  text-align: center;
  color: white;
  background-color: ${props => props.color};
`

const Container = styled.div`
  padding: 20px;
`



const ChangeColor = ({handleBackground})=>{
    const [colorSetted, setColor] = useState('skyblue')
    return(
        <Container>
            <Card color={colorSetted}>
                <input
                type={'button'}
                value={'Randomize Color'}
                onClick={() => {
                  setColor(randomColor())
                  handleBackground(colorSetted)
                }}
                />
            </Card>
        </Container>
    )
}

export default ChangeColor;