import React from 'react';
import PropType from 'prop-types';

const Banner = ({style, customStyle, slide, ...props}) => {
  return (
    <div {...props} style={{...style, ...customStyle, position: 'relative'}}>
      <div className="w-full h-full bg-black absolute top-0 left-0 opacity-40 transition opacity-30"/>
      <h1 className="text-2xl md:text-6xl align-center z-10 mb-4">{slide.title}</h1>
      <p className="text-sm md:text-base w-7/12 z-10">{slide.description}</p>
    </div>
  );
};

Banner.propTypes = {
  style: PropType.shape({}),
  customStyle:PropType.shape({}),
  slide: PropType.shape({
    description: PropType.string,
    title: PropType.string,
  }),
};

export default Banner;
