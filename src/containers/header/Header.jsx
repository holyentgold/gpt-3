import React from 'react';
import './header.css';
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt3-header section-padding' id='home'>
      <div className='gpt3-header-content'>
        <h1 className='gradient-text'>Let's embark on a journey to create something extraordinary using the powerful GPT-3 from OpenAI.</h1>
        <p>Leverage GPT-3 by OpenAI for cutting-edge applications, fostering creativity, and revolutionizing problem-solving. Unlock its vast capabilities to propel your projects into realms of unprecedented innovation and success.</p>
        <div className='gpt3-header-content-input'>
          <input type='email' placeholder='Your Email Address' />
          <button type='button'>Start Now</button>
        </div>
     </div>
        <div className='gpt3-header-image'>
          <img src={ai} alt='ai1' />
        </div>
    </div>
  )
}

export default Header