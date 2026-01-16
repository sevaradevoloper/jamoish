import React from 'react'
import Hero from './Hero/Hero'
<<<<<<< HEAD
import Slider from '../../Slider/Slider'
import Article from '../../Article/Article'


const Home = () => {
  return (
    <div>
      <Hero />
      <Slider />
      <Article />
    </div>
=======
import Section from './Section/Section'
import Main from './Main/Main'
const Home = () => {
  return (
    <>
    <Hero/>
    <Section/>
    <Main/>
    </>
>>>>>>> 4c9592b9abc397cd23641dc1436b2aa9fa66466e
  )
}

export default Home