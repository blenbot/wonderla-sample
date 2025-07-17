import React from 'react';
import MobileBlock from './components/mobileblock';
import Body from './components/body';
import NavBar from './components/navbar';
import '../src/index.css';


export default function App() {
  return(
    <>
    <div className='bg-primary min-h-screen font-mulish'>
      <MobileBlock />
      <div>
        <NavBar />
      </div>
      <Body />
    </div>
    </>
  );
};