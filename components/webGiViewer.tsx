import React, {
    useState,
    useEffect,
    useRef,
    useCallback,
    forwardRef,
    useImperativeHandle,
}
    from 'react'
import {
    ViewerApp,
    AssetManagerPlugin,
    GBufferPlugin,
    timeout,
    ProgressivePlugin,
    TonemapPlugin,
    SSRPlugin,
    SSAOPlugin,
    DiamondPlugin,
    FrameFadePlugin,
    GLTFAnimationPlugin,
    GroundPlugin,
    BloomPlugin,
    TemporalAAPlugin,
    AnisotropyPlugin,
    GammaCorrectionPlugin,

    addBasePlugins,
    ITexture, TweakpaneUiPlugin, AssetManagerBasicPopupPlugin, CanvasSnipperPlugin,

    IViewerPlugin,

} from "webgi";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
const WebGiViewer = () => {
    const canvasRef = useRef(null);
    const setupViewer = useCallback(async () => {


        // Initialize the viewer
        const viewer = new ViewerApp({
            canvas: canvasRef.current,
        })

        // Add some plugins
        const manager = await viewer.addPlugin(AssetManagerPlugin)
        await addBasePlugins(viewer)

        await viewer.addPlugin(CanvasSnipperPlugin)

        viewer.renderer.refreshPipeline()

        await manager.addFromPath("../public/3d/scene.glb")



    }, [])

    useEffect(() => {
        setupViewer();
    }, []);


    return (
        <div>
            <canvas ref={canvasRef} />
        </div>
    )
}

export default WebGiViewer