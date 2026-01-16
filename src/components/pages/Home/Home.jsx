import React from 'react'
import Hero from './Hero/Hero'
import Slider from '../../Slider/Slider'
import Article from '../../Article/Article'
import Section from './Section/Section'
import Main from './Main/Main'

const Home = () => {
  return (
    <div>
      <Hero />
      <Section/>
      <Main/>
      <Slider />
      <Article />
    </div>

  )
}

export default Home