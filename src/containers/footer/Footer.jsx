import React from 'react';
import './footer.css';
import HG from '../../assets/HG.png'

const Footer = () => {
  return (
    <div className='gpt3-footer section-padding'>
      <div className='gpt3-footer-heading'>
        <h1 className='gradient-text'>Would you like to embrace the future ahead of others?</h1>
      </div>
      <div className='gpt3-footer-btn'>
        <p>Claim advance privileges</p>
      </div>
      <div className='gpt3-footer-links'>
        <div className='gpt3-footer-links-logo'>
          <img src={HG} alt='holyentgold' />
        </div>
        <div className='gpt3-footer-links-div'>
          <h4 href>Social Media</h4>
          <a href='https://www.linkedin.com/in/holyentgold' target='_blank' rel="noopener noreferrer">Linkedln</a>
          <a href='https://twitter.com/holyentgold' target='_blank' rel="noopener noreferrer">X(Twitter)</a>
          <a href='https://www.facebook.com/profile.php?id=61551989841522' target='_blank' rel="noopener noreferrer">Facebook</a>
          <a href='https://www.instagram.com/holyentgold1' target='_blank' rel="noopener noreferrer">Instagram</a>
        </div>
        <div className='gpt3-footer-links-div'>
          <h4>Quick links</h4>
          <a href='#home' id='home'>Home</a>
          <a href='#possibility' id='possibility'>Open AI</a>
          <a href='#features' id='features'>Case Study</a>
          <a href='#blog' id='blog'>Library</a>
        </div>
        <div className='gpt3-footer-links-div'>
          <h4>Contact</h4>
          <p>Ilorin, Nigeria</p>
          <p>+2347067828232</p>
          <p>holyentgoldconcept@gmail.com</p>
          <p>idrisabdulqudus2020@gmail.com</p>
        </div>
      </div>
      <div className='gpt3-footer-copyright'>
        <p>Holyentgold Concept 2023</p>
      </div>
    </div>
  )
}

export default Footer