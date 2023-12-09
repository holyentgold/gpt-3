import React from 'react';
import './blog.css';
import { Article } from '../../components'
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const Blog = () => {
  return (
    <div className='gpt3-blog section-padding' id='blog'>
      <div className='gpt3-blog-heading'>
        <h1 className='gradient-text'>Discover the buzz! Explore our blog.</h1>
      </div>
      <div className='gpt3-blog-container'>
        <div className='gpt3-blog-container-groupA'>
          <Article imgUrl={blog01} date='Dec 8, 2023' title='Unleashing the Power: A Deep Dive into GPT-3 AI Marvels' />
        </div>
        <div className='gpt3-blog-container-groupB'>
        <Article imgUrl={blog02} date='Dec 8, 2023' title='Beyond Words: Navigating the GPT-3 AI Landscape' />
        <Article imgUrl={blog03} date='Dec 8, 2023' title='GPT-3 Wonders: Decoding the Language Revolution' />
        <Article imgUrl={blog04} date='Dec 8, 2023' title='In the Realm of Infinite Possibilities: GPT-3 AI Chronicles' />
        <Article imgUrl={blog05} date='Dec 8, 2023' title='The Future Speaks: GPT-3 AI Unraveled in Our Latest Blog' />
        </div>
      </div>
    </div>
  )
}

export default Blog