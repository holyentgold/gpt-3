import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featuresData = [
  {
    title:'Instantly build trust',
    text: 'GPT-3 fosters trust swiftly by delivering accurate, context-aware responses, ensuring instant reliability in various applications and interactions'
  },
  {
    title:'Embrace gentle proactivity',
    text: 'Embrace gentle proactivity; foster positive change with thoughtful, intentional actions, creating a harmonious and proactive environment for meaningful progress'
  },
  {
    title:'Communication defines existence',
    text: "Existence finds definition through communication's intricate tapestry, weaving connections, understanding, and the essence of being in a world shaped by words"
  },
  {
    title:'Authentic adherence to county law',
    text: 'GPT-3 models exemplify authentic adherence to county law, generating precise, context-aware responses that uphold ethical standards in diverse applications'
  }
]

const Features = () => {
  return (
    <div className='gpt3-features section-padding' id='features'>
      <div className='gpt3-features-heading'>
        <h1 className='gradient-text'>Seize the present, unlock the future's potential. Act now, step into tomorrow, and shape the possibilities awaiting your creation.</h1>
        <p>Secure early access, start now</p>
      </div>
      <div className='gpt3-features-container'>
        {featuresData.map((item, index) =>(
          <Feature title={item.title}  text={item.text} key={item.title + index} />
        ) )}
      </div>
    </div>
  )
}

export default Features