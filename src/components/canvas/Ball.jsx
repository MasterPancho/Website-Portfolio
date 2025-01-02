import React, {Suspense} from 'react'
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from '../Loader';

{/* This component creates the 3D ball model */}
const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])        //Tech image
  
  return (
    <Float 
      speed={1.5}                                  //Rotation speed
      rotationIntensity={1}                         //Rotation intensity
      floatIntensity={2}                            //Float intensity   
    >
      <hemisphereLight intensity={3} groundColor="white" />
      <mesh
        castShadow                                       //Objects can cast and recieve shadows
        receiveShadow                                          
        scale={2.75}                                     //Ball size         
      >
        <icosahedronGeometry args={[1, 1]} />       {/*Creates ball texture*/}
        <meshStandardMaterial                       //Creates ball material
          attach="material"
          color="#fff8eb"                           //Ball color (light beige)      
          flatShading
        />

        {/* Adds image to the ball */}
        <Decal 
          position={[0, 0, 1]}
          rotation={[0, 0, 0]}
          map={decal}
          scale={0.7}
        />
      </mesh>
    </Float>
  )
}

{/* This component creates the canvas for the Ball 3D model */}
const BallCanvas = ({ icon }) => {
  return(
    <Canvas 
      frameloop="always"                                                  //Have the ball render every time
      gl={{antialias: false, preserveDrawingBuffer: true}}                //Ensures the canvas keeps the image drawn after rendering
    >
      <Suspense fallback={<CanvasLoader />}>                              {/*Shows the loader while the 3D model is loading*/}
        <OrbitControls enableZoom={false}/>
        <Ball imgUrl={icon} />                                            {/*Renders the Ball 3D model*/}
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default BallCanvas