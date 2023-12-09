import React from 'react';
import './possibility.css'
import possibility from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='gpt3-possibility section-padding' id='possibility'>
      <div className='gpt3-possibility-image'>
        <img src={possibility} alt='possibility' />
      </div>
      <div className='gpt3-possibility-content'>
        <h4>Secure early access, start now</h4>
        <h1 className='gradient-text'>The potential extends far beyond what you can envision</h1>
        <p>Leverage GPT-3 by OpenAI for cutting-edge applications, fostering creativity, and revolutionizing problem-solving. Unlock its vast capabilities to propel your projects into realms of unprecedented innovation and success.</p>
        <h4>Secure early access, start now</h4>
      </div>
    </div>
  )
}

export default Possibility