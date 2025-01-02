import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

{/*Creates the Earth 3D model*/}
const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf')
  return (
    <primitive 
      object={earth.scene}                      //Invokes 3D model
      scale={2.5}                               //Size
      position-y={0}
      rotation-y={0}
    />
  )
}

{/*Creates the canvas where the Earth 3D model will be loaded*/}
const EarthCanvas = () => {
  return(
    <Canvas
      shadows
      frameloop='demand'
      gl={{preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]

      }}
    >
      <Suspense fallback={<CanvasLoader />}>                                      {/*Ensures that while the model is loading, we show the loader*/}
        <OrbitControls                                                            //Allows to move Earth with mouse
          autoRotate                                                              //Rotates by itself
          enableZoom={false}                                                      //Cannot zoom in/out 
          maxPolarAngle={Math.PI /2}                                              //Only able to move it horizontally
          minPolarAngle={Math.PI /2}
        />                   
        <Earth />                                                                 Renders Earth model                                        
      </Suspense>     
    </Canvas>


  )


}
export default EarthCanvas