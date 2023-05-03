import { motion } from "framer-motion"
// import { Tilt } from 'react-tilt'
import Image from 'next/image'
import Tilt from 'react-parallax-tilt';
import ShapeMotion from "../../core/ShapeMotion";
import { useRef } from "react";


const Card = (props: any) => {
    const cardRef = useRef(null)
    return (
        <Tilt >
            <motion.div className='Card'
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                whileHover={{
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