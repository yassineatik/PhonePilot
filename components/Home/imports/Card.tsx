import { motion } from "framer-motion"
// import { Tilt } from 'react-tilt'
import Image from 'next/image'
import Tilt from 'react-parallax-tilt';
import ShapeMotion from "../../core/ShapeMotion";
import { useRef } from "react";


const Card = (props: any) => {
    const defaultOptions = {
        reverse: false,  // reverse the tilt direction
        max: 35,     // max tilt rotation (degrees)
        perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
        speed: 1000,   // Speed of the enter/exit transition
        transition: true,   // Set a transition on enter/exit.
        axis: null,   // What axis should be disabled. Can be X or Y.
        reset: true,    // If the tilt effect has to be reset on exit.
        easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }
    const cardRef = useRef(null)
    return (
        // <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}
        // >
        <Tilt >
            <motion.div className='Card'
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                whileHover={{
                    // cursor: 'grab',
                    scale: 1.00001,
                }}
                ref={cardRef}
            >
                <h1 className='CardTitle'
                    style={{ color: props.color }}
                >{props.text}</h1>
                <ShapeMotion img={`/icons/${props.icon}.svg`}
                    dragConstraints={cardRef}
                    className="CardIcon"
                />
                {/* <Image src={`/icons/${props.icon}.svg`} width={200} height={150} alt='Create' /> */}
            </motion.div>
        </Tilt>
    )
}

export default Card