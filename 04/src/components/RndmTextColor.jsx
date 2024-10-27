import React, { useState } from 'react'

const RndmTextColor = () => {
    const [textColor, setTextColor] = useState({color: 'red'});

    const getRandomColor = () => {
        const color1 = Math.floor(Math.random() * 255);
        const color2 = Math.floor(Math.random() * 255);
        const color3 = Math.floor(Math.random() * 255);

        return `rgb(${color1}, ${color2}, ${color3})`;
    }

    const changeTextColor = () => {
        setTextColor({color: getRandomColor()});
    }

  return (
    <div>
        <p style={textColor}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus minima esse iure vel dolorem ullam placeat tempora odio voluptates beatae.
        </p>
        <button onClick={changeTextColor}>Change text color</button>
    </div>
  )
}

export default RndmTextColor
