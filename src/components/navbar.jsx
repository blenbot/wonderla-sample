import React from 'react';
import '../index.css';
import mainLogo from '../assets/main_logo.png';
import locationIcon from '../assets/icons/location.svg';
import downArrowIcon from '../assets/icons/downarrow.svg';
import Kochi from '../assets/locations/Kochi.jpg';
import Bengaluru from '../assets/locations/Bengaluru.jpg';
import Bhubeneshwar from '../assets/locations/Bhubeneshwar.jpg'
import Hyderabad from '../assets/locations/Hyderabad.jpg'
import offerIcon from '../assets/icons/offer.svg'
import eventsIcon from '../assets/icons/events.svg'
import restrauntsIcon from '../assets/icons/restraunts.svg'
import ridesIcon from '../assets/icons/rides.svg'
import ArrowIcon from './ArrowIcon'
import Resort from '../assets/type/resort.jpg'
import Park from '../assets/type/park.jpg'
import Tickets from '../assets/icons/tickets.svg';
import BurgerMenu from './BurgerMenu';


const NavBar = ()=> {
    let [isBurgerMenuOpen, setIsBurgerMenuOpen] = React.useState(false);
    const toggleBurgerMenu = () => {
        setIsBurgerMenuOpen(!isBurgerMenuOpen);
    }

    return (
        <>
        <nav className="z-15 fixed top-10 left-15 right-15 shadow-md bg-white rounded-xl py-3 px-6 md:px-8 lg:px-12 font-mulish font-white font-[700]">
            <div className="flex justify-between items-center gap-x-7">
                <div className="">
                    <img className="transition-transform duration-300 hover:scale-108 h-12 hover:cursor-pointer" src={mainLogo} alt='wonderla'/>
                </div>
                <div className='hidden md:flex gap-6'>
                    <div className='flex items-center space-x-2 cursor-pointer gap-1 text-sm group relative'>
                        <NavComponent icon={locationIcon} componentName='LOCATIONS' />
                        <img src={downArrowIcon} alt='downarrow' className='m-0 transition-transform duration-200 group-hover:rotate-180'/>
                        <div className="h-10 absolute top-4 w-full"></div>
                        <div className='w-72 hidden transform -translate-x-1/4 group-hover:block absolute font-mulish top-12 z-10 bg-white rounded-3xl p-4 '>
                           <div className='flex flex-col'>
                             <DownArrow img={Kochi} location='Kochi' bottom={true}/>
                             <DownArrow img={Bengaluru} location='Bengaluru' bottom={true} sidepanel={true} sideitemimg1={Resort} type1='Resort' sidepanelbottom1={true} sideitemimg2={Park} type2='Park'/>
                             <DownArrow img={Hyderabad} location='Hyerabad' bottom={true}/>
                             <DownArrow img={Bhubeneshwar} location='Bhubeneshwar'/>
                            </div>
                           </div>
                        </div>
                        <NavComponent icon={offerIcon} componentName='OFFERS' styling={true} />
                        <NavComponent icon={ridesIcon} componentName='RIDES' styling={true}/>
                        <NavComponent icon={restrauntsIcon} componentName='RESTRAUNTS' styling={true}/>
                        <NavComponent icon={eventsIcon} componentName='EVENTS' styling={true}/>
                </div>
                <div className='flex justify-center items-center gap-8'>
                    <div className='invisible sm:visible px-2.5 py-2.5 rounded-lg text-text bg-button transition-transform duration-300 hover:scale-108 hover:cursor-pointer'>
                        <div className='flex justify-center items-center gap-1 '>
                            <div className='text-xs font-black'>
                                BOOK TICKETS!
                            </div>
                            <img src={Tickets} alt='icon' className='h-[12px]' />
                        </div>
                    </div>
                    <button onClick={toggleBurgerMenu} className='cursor-pointer'>
                        <div>
                            <svg width="27" height="17" viewBox="0 0 27 17" xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-4 fill-yellow lg:h-[17px] lg:w-[26px] lg:fill-text">
                            <rect x="0.322266" y="0.0905762" width="26.334" height="3.15699" rx="1.5785" className="origin-center transform transition-transform duration-300"></rect>
                            <rect x="0.322266" y="6.96667" width="26.334" height="3.15699" rx="1.5785" className="transform transition-opacity duration-300"></rect>
                            <rect x="0.322266" y="13.8429" width="26.334" height="3.15699" rx="1.5785" className="origin-center transform transition-transform duration-300"></rect>
                            </svg>
                        </div>
                    </button>
                </div>
            </div> 
        </nav>
        {isBurgerMenuOpen && <BurgerMenu onClose={toggleBurgerMenu} />}
        </>
    )
}

function NavComponent({icon, componentName, styling}){
    if (styling){
        return(
        <>
        <a href>
            <div className='flex items-center space-x-2 hover:cursor-pointer gap-1 text-sm'>
                <img src = {icon} alt='icon' className='h-4.5 m-0'
                style={{
                        color: 'transparent',
                        filter: "brightness(0) saturate(100%) invert(48%) sepia(12%) saturate(368%) hue-rotate(182deg) brightness(94%) contrast(86%)"
                    }}
                />
                <div className='text-[#717D92] m-0 font-[900]'>{componentName}</div>
            </div>
        </a>
        </>
    );
    } else {
        return(
        <>
        <img src = {icon} alt='icon' className='h-4.5 m-0'/>
        <div className='text-[#717D92] font-[900]'>{componentName}</div>
        </>
     );
    }
}

function DownArrow({img, location, bottom, sidepanel, sideitemimg1, type1, sidepanelbottom1, sideitemimg2, type2, sidepanelbottom2}) {
    if (bottom){
        return(
            <>
                <DropDownItem img={img} location={location} sidepanel={sidepanel} sideitemimg1={sideitemimg1} type1={type1} sidepanelbottom1={sidepanelbottom1} sideitemimg2={sideitemimg2} type2={type2} sidepanelbottom2={sidepanelbottom2}/>
                <div className='pt-3 pb-3'>
                    <hr className='border-t-1 border-gray-200'/>
                </div>
            </>
        );
    } else{
        return(
            <>
               <DropDownItem img={img} location={location} sidepanel={sidepanel} sideitemimg1={sideitemimg1} type1={type1} sidepanelbottom1={sidepanelbottom1} sideitemimg2={sideitemimg2} type2={type2} sidepanelbottom2={sidepanelbottom2} />
            </>
        );
    }
}

const DropDownItem = ({img, location, sidepanel, sideitemimg1, type1, sidepanelbottom1, sideitemimg2, type2, sidepanelbottom2}) => {
    if (sidepanel) {
        return(
            <>
            <div className='flex justify-between items-center group/subsection relative'>
                <div className='flex items-center gap-4'>
                    <div>
                        <img src={img} alt={location} className='h-12 w-12 rounded-xl object-cover' />
                    </div>
                    <span className='uppercase'>{location}</span>
                </div>
                <div className='relative'>
                    <div className="h-16 -top-3 w-12 absolute"></div>
                    <div>
                        <ArrowIcon color='#717D92' className='ml-auto' path={<path d="M9 6L15 12L9 18" />}/>
                    </div>
                </div>
                <div className='absolute left-full ml-6 -top-4 opacity-0 group-hover/subsection:opacity-100 transition-opacity duration-200 flex flex-col bg-white rounded-xl p-4 w-40 z-20 pointer-events-none group-hover/subsection:pointer-events-auto shadow-lg'>
                    <DownArrow img={sideitemimg1} location={type1} bottom={sidepanelbottom1} />
                    <DownArrow img={sideitemimg2} location={type2} bottom={sidepanelbottom2} />
                </div>
            </div>
            </>
        );
    } else {
        return(
            <>
            <div className='flex justify-between items-center group/subsection relative'>
            <div className='flex items-center gap-4'>
                <div>
                    <img src={img} alt={location} className='h-12 w-12 rounded-xl object-cover' />
                </div>
                <span className='uppercase'>{location}</span>
            </div>
            </div>
            </>
        )
    }
}

export default NavBar;



