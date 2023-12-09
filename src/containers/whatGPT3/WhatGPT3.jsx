import React from 'react';
import './whatgpt3.css'
import { Feature } from '../../components';

const WhatGPT3 = () => {
  return (
    <div className='gpt3-whatgpt3 section-margin' id='wgpt3'>
      <div className='gpt3-whatgpt3-feature'>
        <Feature title='What is GPT-3' text='GPT-3, or the Generative Pre-trained Transformer 3, is a state-of-the-art artificial intelligence language model developed by OpenAI. With 175 billion parameters, it excels in natural language processing tasks, enabling applications such as text completion, language translation, and code generation with remarkable sophistication.'/>
      </div>
      <div className='gpt3-whatgpt3-heading'>
        <h1 className='gradient-text'>The potential extends far beyond what you can envision</h1>
        <p>Discover Library Treasures</p>
      </div>
      <div className='gpt3-whatgpt3-container'>
      <Feature title='Chatbots' text='Chatbots streamline interactions, utilizing AI to respond promptly, assist users, and enhance customer engagement across platforms efficiently' />
      <Feature title='Information Repository' text='GPT-3-powered knowledge bases provide vast, dynamic information, fostering learning, problem-solving, and versatile applications in diverse domains' />
      <Feature title='Learning'  text='GPT-3 revolutionizes education, enhancing adaptive learning, content generation, and personalized instruction for profound academic impact' />
      </div>
    </div>
  )
}

export default WhatGPT3