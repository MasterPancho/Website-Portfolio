import {Html, useProgress} from '@react-three/drei'
import React from 'react'

//This component creates the loading screen
const Loader = () => {
  const { progress } = useProgress();           //Progress bar for the loading screen

  return (
    <Html>
      {/*Style of the progress screen*/}
      <span className="canvas-load"></span>
        <p
          style={{
            fontSize: "14",
            color: "#f1f1f1",
            fontWeight: 800,
            marginTop: "40",
          }}
        >
          {progress.toFixed(2)}%
        </p>

      
    </Html>
  )
}

export default Loader