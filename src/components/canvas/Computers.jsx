import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';                            //Allows to place things to it
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';    //Allows to draw on the canvas. useGLTF allows to import 3D models
import CanvasLoader from '../Loader';

useGLTF.preload('./desktop_pc/scene.gltf');

{/*This component creates the 3D model of the computer*/}
const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');                //Imports the 3D model of the computer
  return (
    <mesh>                                          {/*Creates a mesh for the 3D model*/}
      {/*Creates the light for the scene*/}
      <hemisphereLight                              
        intensity={2.5} 
        groundColor="black" 
      />

      {/*Adds the light on the screen*/}
      <pointLight intensity={1.5}/>
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        intensity={3.5}
        penumbra={1}
        castShadow
        shadow-mapSize={1024}
        />

      {/*Adds the 3D model of the computer to the scene + modifies its dimensions.*/}
      <primitive 
      object={computer.scene}
      scale={isMobile? 0.7 : 0.75}
      position={isMobile? [0, -3, -2.2] : [0, -3.25, -1.5]}
      rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

{/*Creates the canvas for the 3D model of the computer*/}
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);                
  
  {/*Checks if the screen is mobile*/}
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 640px)');             //Adds listener for changes in the screen size
    
    setIsMobile(mediaQuery.matches);                                        //Set the initial value of 'isMobile' to true or false if mediaQuery matches the screen size restriction

    const handleMediaQueryChange = (event) => {                             //Callback function for handling media query changes
      setIsMobile(event.matches);                                   
    }
    mediaQuery.addEventListener('change', handleMediaQueryChange);          //Adds the callback function as a listener for 'change' in the media query; updates to mobile if required.

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);     //Removes the listener when the component is unmounted
    }
  }, [])

  return(
    
    <Canvas 
      frameloop="demand"                                                  //Render only when something in the scene changes
      shadows                                                             //Enables shadows in the scene           
      camera={{position: [30, 3, 5], fov: 25}}                            //Sets camera position and field of view for the 3D model
      gl={{preserveDrawingBuffer: true}}                                  //Ensures the canvas keeps the image drawn after rendering
    >
      <Suspense fallback={<CanvasLoader />}>                              {/*Shows the loader while the 3D model is loading*/}
        
        {/* Controls the motion of the 3D object. Camera movement is between 60-90 degrees on the vertical*/}
        <OrbitControls 
          enableZoom={false}                                            //Disables zooming in/out                   
          maxPolarAngle={Math.PI / 2}                                  //Restricts camera's vertical movement to max 90 degrees   
          minPolarAngle={Math.PI / 3}                                  //Restricts camera's vertical movement to min 60 degrees 
        />
        <Computers isMobile={isMobile}/>                             {/*Renders the computer 3D model*/}
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas;