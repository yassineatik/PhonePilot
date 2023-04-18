import React, { Suspense } from 'react'
import { OutlineButton } from '../core/Buttons'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PresentationControls } from '@react-three/drei'
import { Stage } from '@react-three/drei/core';
import { DirectionalLight, Material, MeshBasicMaterial } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Model from '../Office';



// import { BoxGeometry } from '@react-three/fiber';


const Landing = () => {


    return (
        <div className='Landing'>
            <div className="Left">
                <h1 className='Title'>The <span className='C2'>Smart</span> Way to <span className='C4'>Manage</span> Your <span className='C5'>Phonebook</span></h1>
                <p className='Description'>Easily organize your phone contacts with PhonePilot.
                    Stay connected and streamline your communication with our advanced features. </p>
                <OutlineButton text="Signup Now" />
            </div>
            <div className="Right">
                <Canvas
                // frameloop='demand'
                >
                    <Suspense>


                        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8}
                            // scale={1}
                            maxPolarAngle={Math.PI / 1.6}
                            minPolarAngle={Math.PI / 3.5}
                        />
                        {/* <directionalLight position={[0, 10, 5]} intensity={0.9} /> */}
                        <hemisphereLight intensity={0.7} />
                        <pointLight intensity={1} />
                        <Model />
                    </Suspense>
                </Canvas>

            </div>
        </div >
    )
}

export default Landing