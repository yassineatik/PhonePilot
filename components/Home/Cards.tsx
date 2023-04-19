import React from 'react'
import Card from './imports/Card'
import ShapeMotion from '../core/ShapeMotion'
import { useRef } from "react"

const Cards = () => {
    const parentRef = useRef(null)
    const DivRef = useRef(null);
    return (
        <div className='Cards' ref={parentRef}>
            <ShapeMotion img="/shapes/Ellipse 2.svg" ref={parentRef}
                dragConstraints={parentRef} />
            <div className="Row">

                <Card
                    text="Create New Contact"
                    icon="create"
                    color="#B3B3B3"
                />
                <Card
                    text="View All Contact"
                    icon="read"
                    color="#C3C34D"
                />
                <ShapeMotion img="/shapes/Vector-1.svg" ref={parentRef}
                    dragConstraints={parentRef} />
            </div>
            <div className="Row"
                ref={DivRef}
            >

                <Card
                    text="Edit Existing Contact"
                    icon="update"
                    color="#E8E856"
                />
                <Card
                    text="Delete Existing Contact"
                    icon="delete"
                    color="#666647"
                />
                <ShapeMotion img="/shapes/Vector.svg" ref={parentRef}
                    className="LastShape"
                    dragConstraints={{ left: 100, right: 200, top: 100, bottom: 100 }} />
            </div>
        </div>
        // <h1>hi</h1>
    )
}

export default Cards