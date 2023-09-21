import React from 'react'
import './trust.scss'
const Trusted = () => {
  return (
    <section className="brand-section">
    <div className="container">
      <h3>Trusted By 1000+ Companies</h3>
      <div className="brand-section-slider">
        {/* my 1st img  */}
        <div className="slide">
          <img
            src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png"
            alt="trusted-brands"
          />
        </div>
        <div className="slide">
          <img
            src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"
            alt="trusted-brands"
          />
        </div>
        <div className="slide">
          <img
            src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png"
            alt="trusted-brands"
          />
        </div>
        <div className="slide">
          <img
            src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png"
            alt="trusted-brands"
          />
        </div>
        <div className="slide">
          <img
            src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png"
            alt="trusted-brands"
          />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Trusted
