import React from 'react';
import { RideContext } from './ridecontext'
import landRides from '../assets/icons/landRides.svg';
import waterRides from '../assets/icons/waterRides.svg';
import kidsRides from '../assets/icons/kidsRides.svg';
import {slides_land, slides_water, slides_kids} from './video_components.js';
import Carousel from './carousel.jsx';
import { motion } from 'framer-motion';

export default function Body(){
    const [isRide, setisRide]=React.useState(2);
    const clickHandler = (value) => {
        setisRide(value)
    }
    const getScale = (index) => {
        return isRide === (index+1) ? '1.4' : '1'
    }
    return(
        <>
        <RideContext.Provider value={{level:isRide, setLevel:clickHandler, getScale: getScale}}>
        <div className='flex h-full items-center pb-8'>
            <div className='flex items-center justify-center relative basis-1/3 pt-20'>
                <div className='absolute -translate-x-[37.5%]'>
                    <CircularSlider />
                </div>
            </div>

            <div className='flex-4/5 h-full ml-5'>
                <h1 className='text-6xl pt-40 text-white tracking-tighter text font-[900]'>OUR ICONIC RIDES</h1>
                <CarouselProvider />
                <button className='py-4 px-24 mt-20 mb-10 hover:scale-110 transition-all font-extrabold bg-[#FAD504] rounded-full text-text hover:cursor-pointer'
                style={{
                    transition:'all 200ms'
                }}>
                    <div className='flex justify-center items-center gap-1'>
                        <div className='text-sm font-mulish'>
                            Explore All Rides!
                        </div>
                    </div>
                </button>
            </div>
        </div>
        </RideContext.Provider>
        </>
    );
}


const CarouselProvider = () => {
    const { level } = React.useContext(RideContext);
    switch(level) {
        case 1:
            return <Carousel slides={slides_land} />
        case 2:
            return <Carousel slides={slides_water} />
        case 3:
            return <Carousel slides={slides_kids} />
    }
}

const CircularSlider = () => {
    const { level } = React.useContext(RideContext);
    switch(level){
        case 1:
            return <CircularSliderItems deg1='-30deg' deg2='20deg' deg3='70deg' deg4='120deg' topdeg='6.5rem' leftdeg='28.5rem' />
        case 2:
            return <CircularSliderItems deg1='15deg' deg2='65deg' deg3='115deg' deg4='165deg' topdeg='19rem' leftdeg='34.5rem'/>
        case 3:
            return <CircularSliderItems deg1='60deg' deg2='110deg' deg3='160deg' deg4='210deg' topdeg='30.5rem' leftdeg='28.5rem' />
    }
}

const CircularSliderItems = ({deg1, deg2, deg3, deg4, topdeg, leftdeg}) => {
    const { setLevel, getScale }= React.useContext(RideContext);
    return(
        <>
        <motion.div className='h-[600px] w-[600px] rounded-full flex items-center justify-center relative'
        style={{
            '--stop1': deg1, '--stop2': deg2, '--stop3': deg3, '--stop4': deg4, '--stop5': '210deg',
            backgroundImage: `conic-gradient(from 0deg, rgb(232, 233, 241) var(--stop1), rgb(250, 213, 0) var(--stop2), rgb(250, 213, 0) var(--stop3), rgb(232, 233, 241) var(--stop4), rgb(232, 233, 241) var(--stop5))`
        }}
        animate={{
            '--stop1': deg1,
            '--stop2': deg2,
            '--stop3': deg3,
            '--stop4': deg4,
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
            <div className='bg-primary h-[420px] w-[420px] rounded-full'></div>
            <div className='absolute transform -translate-x-1/2 -translate-y-1/2 transition-[top,left] duration-500 ease-in-out'
            style={{
                top: topdeg,
                left: leftdeg
            }}>
                <div className='h-[170px] bg-button w-[170px] rounded-full flex justify-center items-center'>
                    <div className='h-[150px] w-[150px] rounded-full bg-white'></div>
                </div>
            </div>
            {[
                {name: 'land', count: 73, top: 'top-24', iconright: 'right-20', textright: '-right-20', icon: landRides,imgScale: '', value: 1},
                {name: 'water', count: 54, top: 'top-1/2', iconright: '-right-3', textright:'-right-42', icon: waterRides,imgScale:'', value: 2},
                {name: 'kids', count: 35, top: 'bottom-12', iconright: 'right-20', textright:'-right-20', icon: kidsRides, imgScale: 'scale-110', value: 3}].map(({name, count, top, iconright, textright, icon, imgScale, value}, index) => 
                    <React.Fragment key={name}>
                        <div className={`absolute ${top} ${iconright} transform z-20 -translate-x-1/2 -translate-y-1/2 hover:cursor-pointer ${imgScale || ''}`}>
                            <img src={icon} alt='rideicon' 
                            style={{
                                scale: getScale(index), transition: 'scale 0.2s ease-in-out'
                            }} onClick={()=>setLevel(value)} />
                        </div>
                        <div className={`absolute ${top} ${textright} transform -translate-x-1/2 -translate-y-1/2 text-white text-xl capitalize font-medium font-mulish`}>
                            <div>{name}</div>
                            <div className='text-sm rounded-2xl px-3 py-1 bg-buttonbg'>
                                {count} Rides
                            </div>
                        </div>
                    </React.Fragment>
            )}
        </motion.div>
        </>
    );
}


