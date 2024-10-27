import React, { useState } from 'react'

const RndmValue = () => {
    const [value, setValue] = useState(0);
    
    const getRandomValue = () => {
        const randomValue = Math.floor(Math.random() * 100);
        setValue(randomValue);
    }

  return (
    <div>
      <h2 style={{textAlign: 'center'}}>{value}</h2>
      <button onClick={getRandomValue}>Get random value</button>
    </div>
  )
}

export default RndmValue
