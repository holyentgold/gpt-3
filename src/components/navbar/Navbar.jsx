import React, { useState} from 'react';
import { RiCloseLine, RiMenu4Fill } from 'react-icons/ri';
import HG from '../../assets/HG.png'
import './navbar.css';

const Menu = () => (
  <>
         <p><a href='#home'>Home</a></p>
         <p><a href='#wgpt3'>What is GPT?</a></p>
         <p><a href='#possibility'>Open AI</a></p>
         <p><a href='#features'>Case Study</a></p>
         <p><a href='#blog'>Library</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  
  return (
    <div className='gpt3-navbar'>
      <div className='gpt3-navbar-links'>
        <div className='gpt3-navbar-links-logo'>
          <img src={HG} alt='logo' /> 
        </div>
       <div className='gpt3-navbar-links-container'>
          <Menu />
        </div>

      </div>
       <div className='gpt3-navbar-sign'>
        <p>Sign In</p>
        <button type='button'>Sign Up</button>
      </div>
      <div className='gpt3-navbar-menu'>
        {toggleMenu ?  <RiCloseLine color='white' size={27} onClick={()=> setToggleMenu(false)} />
        : <RiMenu4Fill color='white' size={27} onClick={()=> setToggleMenu(true)} />  
      }
      {toggleMenu && (
        <div className='gpt3-navbar-menu-container rotate-scale-up'>
          <div className='gpt3-navbar-menu-container'>
            <Menu />
            <div className='gpt3-navbar-menu-container-links-sign'>
               <p>Sign In</p>
               <button type='button'>Sign Up</button>
              </div>
          </div>
        </div>
      )}
      </div>
    </div>
  )
}

export default Navbar