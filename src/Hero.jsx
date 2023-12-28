import React from 'react'
import heroImg from './assets/hero.svg'
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Header</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            praesentium saepe reiciendis recusandae rem hic odio quod nobis sint
            quae at eos nam a unde officia, deserunt culpa omnis doloribus?
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero
