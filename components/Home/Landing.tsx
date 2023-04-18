import React, { Suspense } from 'react'
import { OutlineButton } from '../core/Buttons'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PresentationControls } from '@react-three/drei'
import { Stage } from '@react-three/drei/core';
import { Material, MeshBasicMaterial } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import WebGiViewer from '../webGiViewer';



// import { BoxGeometry } from '@react-three/fiber';


const Landing = () => {
    const gltfloader = new GLTFLoader()
    // load the gltf model
    const [scene, setScene] = React.useState<any>(null)
    React.useEffect(() => {
        gltfloader.load('/3d/scene.gltf', (gltf) => {
            setScene(gltf.scene)
        })
    }, [gltfloader])


    return (
        <div className='Landing'>
            <div className="Left">
                <h1 className='Title'>The <span className='C2'>Smart</span> Way to <span className='C4'>Manage</span> Your <span className='C5'>Phonebook</span></h1>
                <p className='Description'>Easily organize your phone contacts with PhonePilot.
                    Stay connected and streamline your communication with our advanced features. </p>
                <OutlineButton text="Signup Now" />
            </div>
            <div className="Right">
                {/* <Canvas>
                    <Suspense fallback={null}>
                        <Stage
                            environment="city"
                            intensity={1}
                        >
                            <mesh
                                position={[0, 0, 0]}
                                rotation={[0, 0, 0]}
                                scale={[1, 1, 1]}
                                castShadow
                                receiveShadow
                            >
                                <primitive object={scene} />
                            </mesh>
                        </Stage>
                    </Suspense>
                </Canvas> */}
                {/* <WebGiViewer /> */}

            </div>
        </div >
    )
}

export default Landing