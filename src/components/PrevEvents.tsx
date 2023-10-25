"use client"
import { FC } from 'react'

interface PrevEventsProps {

}


interface CubeProps {
    size: number
    image: string
    bgColor: string
    borderColor: string
    x?: number
    y?: number
    z?: number
    style?: React.CSSProperties
}

const Cube: FC<CubeProps> = ({ size, image, bgColor, borderColor, style, x=0, y=0,z=0 }) => {
    const cubeStyle = {
        backgroundColor: bgColor,
        animation: 'rotate 1s infinite linear',
        border: borderColor,
        borderStyle: 'solid',
        borderWidth: '5px',
    }
    return (

        <div
            style={{
                position: 'relative',
                margin: '0 auto',
                width: `${size}px`,
                height: `${size}px`,
                transform: `scale3d(1, 1, 1) rotateX(55deg) rotateY(0deg) rotateZ(33deg) translate3d(${x}px, ${y}px, ${z}px) skew(-10deg, 10deg)`,
                transformStyle: 'preserve-3d',
                transition: 'transform 0.25s ease-in-out',
                ...style
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = `scale3d(1, 1, 1) rotateX(55deg) rotateY(0deg) rotateZ(33deg) translate3d(${x}px, ${y}px, ${z+50}px) skew(-10deg, 10deg)`;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = `scale3d(1, 1, 1) rotateX(55deg) rotateY(0deg) rotateZ(33deg) translate3d(${x}px, ${y}px, ${z}px) skew(-10deg, 10deg)`;
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    width: `${size}px`,
                    height: `${size}px`,
                    backgroundImage: `url(${image})`,
                    transform: `translateZ(${size / 2}px)`,
                    ...cubeStyle
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    width: `${size}px`,
                    height: `${size}px`,
                    transform: `translate(${size / 2}px) rotateY(90deg)`,
                    ...cubeStyle
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    width: `${size}px`,
                    height: `${size}px`,
                    transform: `translateZ(-${size / 2}px) rotateY(180deg)`,
                    ...cubeStyle
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    width: `${size}px`,
                    height: `${size}px`,
                    transform: `translateY(${size / 2}px) rotateY(180deg) rotateX(90deg)`,
                    ...cubeStyle
                }}
            />
        </div>
    )
}
const PrevEvents: FC<PrevEventsProps> = ({ }) => {
    return (
        <div style={{ transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg) translate3d(500px, 0px, 0px) skew(0deg, 0deg)' }}>
            <div className='flex justify-center items-center w-80'>
                <Cube size={100} image={'https://picsum.photos/200'} bgColor='#0D9C58' borderColor='#59CE95' />
                <Cube size={100} image={'https://picsum.photos/200'} style={{ marginTop: '80px', marginLeft: '-65px' }} bgColor='#0D9C58' borderColor='#59CE95' />
                <Cube size={100} image={'https://picsum.photos/200'} style={{ marginTop: '160px', marginLeft: '-65px' }} bgColor='#0D9C58' borderColor='#59CE95' />
            </div>
            <div className='flex justify-center items-center w-64' style={{ transform: 'rotateX(0deg) rotateY(180deg) rotateZ(0deg)  translate3d(260px, 0px, 100px) skew(0deg, 0deg)' }}>
                <Cube size={100} image={'https://picsum.photos/200'} bgColor='#FBBC08' borderColor='#FFD764' x={-310} y={-5} />
                <Cube size={100} image={'https://picsum.photos/200'} style={{ marginTop: '80px', marginLeft: '-65px' }} bgColor='#FBBC08' borderColor='#FFD764' x={-310} y={-5} />
            </div>
            <div className='flex justify-center items-center w-80' style={{ transform: 'rotateX(0deg) rotateY(180deg) rotateZ(0deg)  translate3d(100px, 0px, 100px) skew(0deg, 0deg)' }}>
                <Cube size={100} image={'https://picsum.photos/200'} bgColor='#EA4335' borderColor='#FF7266' x={-1205} y={-2200} z={-1215} />
                <Cube size={100} image={'https://picsum.photos/200'} style={{ marginTop: '80px', marginLeft: '-65px' }} bgColor='#EA4335' borderColor='#FF7266' x={-1205} y={-2200} z={-1215} />
                <Cube size={100} image={'https://picsum.photos/200'} style={{ marginTop: '160px', marginLeft: '-65px' }} bgColor='#EA4335' borderColor='#FF7266' x={-1205} y={-2200} z={-1215} />
            </div>
            <div className='flex justify-center items-center w-64'>
                <Cube size={100} image={'https://picsum.photos/200'} bgColor='#4285F4' borderColor='#81B0FF' x={-800} y={-825} z={-130} />
                <Cube size={100} image={'https://picsum.photos/200'} style={{ marginTop: '80px', marginLeft: '-65px' }} bgColor='#4285F4' borderColor='#81B0FF' x={-800} y={-825} z={-130} />
            </div>
        </div>
    );
}
export default PrevEvents
