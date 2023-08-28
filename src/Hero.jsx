import React from 'react'
import heroImg from './assets/hero.svg'
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur, error sequi corrupti dicta obcaecati hic impedit quo
            modi unde rem, sapiente illum facilis praesentium est eos! Repellat
            tempore facere deserunt.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="women and the browser" className="img" />
        </div>
      </div>
    </section>
  )
}

export default Hero
