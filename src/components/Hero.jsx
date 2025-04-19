import React from 'react';
import BannerImg from '../assets/banner.png'
const Hero = () => {
  return (
    <div className='py-12'>
      <img className='w-full mx-auto md: max-w-md' src={BannerImg} alt="Banner Image" />
      
    </div>
  );
};

export default Hero;