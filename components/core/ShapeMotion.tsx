import { motion } from 'framer-motion'
import { useRef } from 'react'
import React from 'react'
import Image from 'next/image'

const ShapeMotion = (props: any) => {
    // console.log(props.ref)
    return (
        <motion.div className='box1' drag
            dragSnapToOrigin={true}
            {...props}
            dragElastic={0.2}
            whileTap={{ scale: 1.2, opacity: 1, cursor: 'grabbing' }}
            whileHover={{
                cursor: 'grab',
                scale: 1.2,
                opacity: 1
            }}
            whileDrag={{
                cursor: 'grabbing',
            }}
            // onDragEnd={(e) => { }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >

            <Image src={props.img} alt="PhonePilot" width={250} height={100} className='Shape Shape3'
                onDragStart={(e) => e.preventDefault()}
            />
        </motion.div>
    )
}

export default ShapeMotion