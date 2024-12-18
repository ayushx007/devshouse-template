"use client"
import { FC } from 'react'
interface PrevEventsProps {

}


interface CubeProps {
    size: number
    image: string
    bgColor: string
    borderColor: string
    link: string
    x?: number
    y?: number
    z?: number
    style?: React.CSSProperties
}

const Cube: FC<CubeProps> = ({ size, image, bgColor, borderColor,link, style, x=0, y=0,z=0 }) => {
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
        <a href={link} target='_blank' >
            <div
                style={{
                    position: 'absolute',
                    top:'-3.2em',
                    right:'3em',
                    width: `${size}px`,
                    height: `${size}px`,
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    transform: `translateZ(${size/2}px)`,
                    ...cubeStyle
                }}
            />
            </a>
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
        <div className='bg-bg-black min-h-full p-6 pt-48 -mt-[12em] md:p-24'>
            <div className='heading flex justify-center align-middle pt-10'>
                <h1 className='text-[6em] font-bold text-heading-grey opacity-10 max-md:text-5xl'>GLIMPSES</h1>
                <h1 className='text-[3em] font-medium text-white absolute z-20 pt-10 max-md:text-2xl max-md:pt-3'>Previous Events</h1>
            </div>
            <div className='flex'>
                <div className='flex-col text-[#FF7266]'>
                    <h1 className='text-6xl max-md:text-3xl font-medium '>4000+</h1>
                    <h1 className='text-4xl max-md:text-xl font-medium '>Hackers</h1>
                </div>
                <div className='flex-col text-[#59CE95] ml-auto'>
                    <h1 className='text-6xl max-md:text-3xl font-medium '>30+</h1>
                    <h1 className='text-4xl max-md:text-xl font-medium '>Workshops</h1>
                </div>
            </div>
            <div className='flex max-h-[45vh] mt-24 max-md:scale-[0.6] max-md:-mt-12 scale-150 max-2xl:scale-90 max-sm:scale-50'>
                <div className='first-letter:' style={{ transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg) translate3d(45vw, 0px, 0px) skew(0deg, 0deg) ' }}>
                    <div className='flex justify-center items-center w-80'>
                        <Cube link="#" size={100} image={'../../assets/prev1.jpeg'} bgColor='#0D9C58' borderColor='#59CE95' />
                        <Cube link="https://www.instagram.com/p/CqpRaGhLCUT/?igshid=ODhhZWM5NmIwOQ==" size={100} image={'../../assets/prev2.jpeg'} style={{ marginTop: '80px', marginLeft: '-65px' }} bgColor='#0D9C58' borderColor='#59CE95' />
                        <Cube link="https://www.instagram.com/p/CsnKM-qvBeH/?igshid=ODhhZWM5NmIwOQ==" size={100} image={'../../assets/prev3.jpeg'} style={{ marginTop: '160px', marginLeft: '-65px' }} bgColor='#0D9C58' borderColor='#59CE95' />
                    </div>
                    <div className='flex justify-center items-center w-64' style={{ transform: 'rotateX(0deg) rotateY(180deg) rotateZ(0deg)  translate3d(260px, 0px, 100px) skew(0deg, 0deg)' }}>
                        <Cube link="https://www.instagram.com/p/CWC9068rtJW/?igshid=ODhhZWM5NmIwOQ==" size={100} image={'../../assets/prev4.jpeg'} bgColor='#FBBC08' borderColor='#FFD764' x={-310} y={-5} />
                        <Cube link="https://www.instagram.com/p/CVC1axBMvJw/?igshid=ODhhZWM5NmIwOQ==" size={100} image={'../../assets/prev5.jpeg'} style={{ marginTop: '80px', marginLeft: '-65px' }} bgColor='#FBBC08' borderColor='#FFD764' x={-310} y={-5} />
                    </div>
                    <div className='flex justify-center items-center w-80' style={{ transform: 'rotateX(0deg) rotateY(180deg) rotateZ(0deg)  translate3d(100px, 0px, 100px) skew(0deg, 0deg)' }}>
                        <Cube link="https://www.instagram.com/p/CkP_Ao3r2SJ/?igshid=ODhhZWM5NmIwOQ==" size={100} image={'../../assets/prev10.jpeg'} bgColor='#EA4335' borderColor='#FF7266' x={-1205} y={-2200} z={-1215} />
                        <Cube link="https://www.instagram.com/reel/CxyAQzVPXqN/?igshid=ODhhZWM5NmIwOQ==" size={100} image={'../../assets/prev9.jpeg'} style={{ marginTop: '80px', marginLeft: '-65px' }} bgColor='#EA4335' borderColor='#FF7266' x={-1205} y={-2200} z={-1215} />
                        <Cube link="https://www.instagram.com/p/C0oxd9JLB55/?igshid=ODhhZWM5NmIwOQ==" size={100} image={'../../assets/prev8.jpeg'} style={{ marginTop: '160px', marginLeft: '-65px' }} bgColor='#EA4335' borderColor='#FF7266' x={-1205} y={-2200} z={-1215} />
                    </div>
                    <div className='flex justify-center items-center w-64'>
                        <Cube link="https://www.instagram.com/p/CtPC-6ISn9f/?igshid=ODhhZWM5NmIwOQ==" size={100} image={'../../assets/prev7.jpeg'} bgColor='#4285F4' borderColor='#81B0FF' x={-800} y={-825} z={-130} />
                        <Cube link="https://www.instagram.com/devshouse.tech/" size={100} image={'../../assets/prev6.svg'} style={{ marginTop: '80px', marginLeft: '-65px' }} bgColor='#4285F4' borderColor='#81B0FF' x={-800} y={-825} z={-130} />
                    </div>
                </div>
            </div>
            <div className='flex'>
                <div className='flex-col text-[#81B0FF]'>
                    <h1 className='text-6xl max-md:text-3xl font-medium '>100+</h1>
                    <h1 className='text-4xl max-md:text-xl font-medium '>Projects</h1>
                </div>
                <div className='flex-col text-[#FFD764] ml-auto'>
                    <h1 className='text-6xl max-md:text-3xl font-medium '>500+</h1>
                    <h1 className='text-4xl max-md:text-xl font-medium '>Hack Hours</h1>
                </div>
            </div>
        </div>

    );
}
export default PrevEvents
