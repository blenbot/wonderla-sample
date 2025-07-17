import React from 'react';
import ArrowIcon from './ArrowIcon';
import mainlogo from '../assets/main_logo.png';
import Park from '../assets/icons/parks.svg';
import Bengaluru from '../assets/locations/Bengaluru.jpg';
import Kochi from '../assets/locations/Kochi.jpg';
import Hyderabad from '../assets/locations/Hyderabad.jpg';
import Bhubeneshwar from '../assets/locations/Bhubeneshwar.jpg';
import offers from '../assets/icons/offers.svg';
import Resorts from '../assets/icons/resorts.svg';
import terms from '../assets/icons/term.svg';
import tour from '../assets/icons/tour.svg';
import group from '../assets/icons/group.svg';
import Partner from '../assets/icons/Partner.svg';
import contact from '../assets/icons/contact.svg';
import quick from '../assets/icons/quick_links.svg';
import about from '../assets/icons/about.svg';
import burgeramusement from '../assets/header-bottom.png';

export default function BurgerMenu({onClose}){
    let [isTileOpen, setisTileOpen] = React.useState(false);
    let [isQTileOpen, setisQTileOpen] = React.useState(false);
    const toggleisTileOpen = () => {
        setisTileOpen(!isTileOpen)
    }
    const toggleisQTitleOpen = () => {
        setisQTileOpen(!isQTileOpen)
    }
    return(
        <>
        <div className='absolute flex flex-row-reverse top-0 left-0 bottom-0 right-0'
        style={{
            zIndex: 50,
            backgroundColor: 'rgba(0, 0, 0, 0.6)'
        }}
        onClick={onClose}
        >
            <div className='h-dvh w-[470px] bg-white overflow-hidden'
            style={{
                transform: 'None'
            }}
            onClick={(e) => e.stopPropagation()}
            >
                <div className='flex justify-between items-center bg-white w-[470px] p-8 pb-3'>
                    <img src={mainlogo} alt='icon' className='h-15 transition-transform duration-300 hover:scale-108' />
                    <div className='mr-4 p-1.5 rounded-full cursor-pointer border-gray-200 border' onClick={onClose}>
                        <ArrowIcon className='size-[18px] text-black' color='#0d101eff'
                        path={<>
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                            </>
                        } />    
                    </div>
                </div>
            <div className='h-full min-h-0 overflow-y-auto p-7'>
                <div className='h-fit flex flex-col overflow-hidden flex-1 pb-24'>
                    <div className='flex-1 cursor-pointer'>
                        <BurgerItem itemImg={Park} itemName='Parks' itemText='Explore Your favourite Wonderla Park' sideArrow={true} onClick={toggleisTileOpen}/>
                        {isTileOpen && <TilePanelParks isOpen={isTileOpen} />}
                        <BurgerMenuBorder />
                        <BurgerItem itemImg={Resorts} itemName='Resorts' itemText='Get a rejuvenating experience at Wonderla Resort' />
                        <BurgerMenuBorder />
                        <BurgerItem itemImg={offers} itemName='Offers & Combos' itemText='Plan the perfect day with exciting offers' />
                        <BurgerMenuBorder />
                        <BurgerItem itemImg={terms} itemName='Terms and conditions' itemText='Know the timings and other guidelines' />
                        <BurgerMenuBorder />
                        <ColorBurgerBox />
                        <BurgerItem itemImg={about} itemName='About Us' itemText='Know all about Wonderla' />
                        <BurgerMenuBorder />
                        <BurgerItem itemImg={quick} itemName='Quick Links' itemText='Explore all other relevant information here' sideArrow={true} onClick={toggleisQTitleOpen}/>
                        {isQTileOpen && <TilePanelQuick isOpen={isQTileOpen} />}
                        <BurgerMenuBorder />
                        <BurgerItem itemImg={contact} itemName='Contact Us' itemText='Get In Touch Wordela Team' />
                        <BurgerMenuBorder />
                    </div>
                </div>
            </div>
            </div>
            <div className='absolute -right-6 bottom-0 aspect-square w-[232px]'>
                <img src={burgeramusement} alt='Amusement park decoration' className='w-full height-[240px] aspect-square object-contain' />
            </div>
        </div>
        </>
    );
}

const BurgerItem = ({itemImg, itemName, itemText, sideArrow, onClick}) => {
    if (sideArrow) {
        return(
            <>
            <div className='flex items-center gap-3 justify-between' onClick={onClick}>
                <div className='flex items-center gap-3'>
                    <div>
                        <img src={itemImg} alt = 'Icon' />
                    </div>
                    <div>
                        <div className='text-xl font-normal mb-1'>
                            {itemName}
                        </div>
                        <div className='text-xs text-gray-600'>
                            {itemText}
                        </div>
                    </div>
                </div>
                <ArrowIcon color='#334DCF' path = {<path d="M6 9L12 15L18 9"></path>} />
            </div>
            </>
        )
    } else {
        return(
        <>
            <div className='flex items-center gap-3 justify-between'>
                <div className='flex items-center gap-3'>
                    <div>
                        <img src={itemImg} alt = 'Icon' />
                    </div>
                    <div>
                        <div className='text-xl font-normal mb-1'>
                            {itemName}
                        </div>
                        <div className='text-xs text-gray-600'>
                            {itemText}
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

const TilePanelParks=({isOpen})=>{
    return(
        <>
        <div className='overflow-hidden transform transition-all ease-out duration-350'
        style={{height: isOpen ? '225px':'0px'}}>
            <div className='grid grid-cols-2 grid-rows-2 gap-3 p-3 pb-1'>
                <TitlePanelItem img={Kochi} location='Kochi' />
                <TitlePanelItem img={Bengaluru} location='Bengaluru' />
                <TitlePanelItem img={Hyderabad} location='Hyderabad' />
                <TitlePanelItem img={Bhubeneshwar} location='Bhubeneshwar' />
            </div>   
        </div>
        </>
    );
}

const TilePanelQuick = ({isOpen}) => {
    return(
        <>
        <div className='overflow-hidden transform transition-all ease-out duration-350' style={{height: isOpen ? '100px':'0px'}}>
            <div className='flex pt-3'>
                <div className='w-10'>
                    <div className='flex flex-col gap-2 text-sm'>
                        <span>Restraunts</span>
                        <span>Merchandise</span>
                        <span>Events</span>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

const TitlePanelItem=({img, location}) => {
    return(
        <>
        <div className='transition-transform duration-300 hover:scale-108'>
        <div className='flex cursor-pointer items-center flex-col border border-gray-200 shadow-md rounded-2xl p-3'>
            <div>
                <img src={img} alt={location} className='rounded-full h-10 w-10 mb-2 object-cover'/>
            </div>
            <div className='capitalize'>
                {location}
            </div>
        </div>
        </div>
        </>
    );
}

function BurgerMenuBorder() {
    return(
        <>
        <div className='pt-4 pb-4'>
            <div className='border-t-1 border-gray-200'></div>
        </div>
        </>
    );
}


const ColorBurgerBox = () => {
    return(
        <>
        <div className='flex flex-col gap-2 mb-6'>
            <ColorBurgerItem bgcolor='rgb(250, 214, 0)' color='rgb(0, 0, 0)' img={group} text='Group Booking' desc='Reach Out To Wanderla Team' />
            <ColorBurgerItem bgcolor='rgb(51, 77, 207)' color='rgb(255, 255, 255)' img={tour} text='Tour Operator Portal' desc='Reach Out To Wanderla Team' textcolor='rgb(255,255,255)' />
            <ColorBurgerItem bgcolor='rgb(250, 214, 0)' color='rgb(0, 0, 0)' img={Partner} text='Partner with us' desc='Reach Out To Wanderla Team' />
        </div>
        </>
    );
}


const ColorBurgerItem = ({bgcolor, color, img, text, desc, textcolor}) => {
    return(
        <>
        <div className='flex-1 p-2 rounded-2xl'
        style={{
            backgroundColor: `${bgcolor}`,
            color: `${color}`
        }}>
            <div className='flex items-center gap-4'>
                <div>
                    <img src={img} alt='icon' className='h-10' />
                </div>
                <div>
                    <div className='text-xl font-normal mb-1' >{text}</div>
                    <div className='text-xs text-gray-600' style={{color:`${textcolor}`}}>{desc}</div>
                </div>
            </div>
        </div>
        </>
    );
}