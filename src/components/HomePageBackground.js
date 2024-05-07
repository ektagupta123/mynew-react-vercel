import React from 'react';
import logo from '../IMG_2946.JPG';
import './HomePageBackground.css';
import Carousel from '../Carousel';

function HomePageBackground() {
    const images = [
        'https://picsum.photos/seed/picsum/400/300',
        'https://picsum.photos/400/300?grayscale',
        'https://picsum.photos/400/300/?blur',
      ];
  return (
    
      
      <div className="background-container"> {/* Container for background image */}

        <img src={logo} alt="Background" className="background-image" /> {/* Background image */}
            <div className="button-container"> {/* Container for buttons */}
            <button className="btn--primary btn--large">Get Started</button><br />
             <button className="btn--primary btn--large btn--outline">Login</button>
             <Carousel images={images}/>
            </div>
            
        </div>
    
  )
}

export default HomePageBackground
