import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

{/* This component generates random stars on the screen */}
const Stars = (props) => {
  const ref = useRef();                                                            //A reference to the Points object
  const sphere = random.inSphere(new Float32Array(1000), { radius: 1.2 })          //Generates 5000 random points inside a sphere wtih radius of 1.2

  //Runs a callback function & performs updates on every animation frame.
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;                                          //Star rotation on the x-axis
    ref.current.rotation.y -= delta / 15;                                          //Star rotation on the y-axis
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>                                         {/* Groups the stars together to apply the same design */}
      {/*Generates the stars*/}
      <Points
        ref={ref}                                                                  //ref attribute is assigned to the "Points" element 
        positions={sphere}                                                         //Place the stars in the sphere created before
        stride={3}                                                                 //Specifies star dimension
        frustumCulled                                                              //Improve performance by not rendering poitns outside the camera's view
        {...props}
      >
        {/*Modifies the star design*/} 
        <PointMaterial
          transparent                                                              //Stars blend into the background
          color="#f272c8"                                                          //Star color
          size={0.002}                                                             //Star size
          sizeAttenuation={true}                                                   //Adjusts the star size based on their camera distance
          depthWrite={false}                                                       //Stars are always rendered behind other objects
        />
      </Points>
    </group>
  )
}

{/* Creates the canvas where the stars will appear. They will be behind the sections */}
const StarsCanvas = () => {
  return(
    <div className='w-full h-auto absolute inset-0 z-[-1]'>           {/*z-[-1] -> Behind other components in the section*/}
      <Canvas camera={{position: [0, 0, 1]}}>                         {/*Positions camera slightly in front of the stars*/}
        <Suspense fallback={null}>
          <Stars />                                                   {/*Invoke the stars model*/}
        </Suspense>

        <Preload all />                                               {/*Ensures assets are preloaded for better performance*/}
      </Canvas>

    </div>
  )
}

export default StarsCanvas