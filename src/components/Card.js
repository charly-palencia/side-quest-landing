import React from 'react';
import {StarIcon} from '@heroicons/react/solid';
import {StarIcon as StartIconOutline} from '@heroicons/react/outline';
import PropType from 'prop-types';
import Tag from './Tag';

const Card = ({style, customStyle, slide, className, ...props}) => {
  const roundedRating = Math.round(Number(slide.rating));

  return (
    <div
      {...props}
      style={{...style, ...customStyle, position: 'relative'}}
      className={`${className} group cursor-pointer`}
    >
      <div className="w-full h-full bg-black absolute top-0 left-0 opacity-40 transition opacity-30 hover:opacity-0"/>
      <div className="bg-black transition opacity-0 group-hover:opacity-30 text-white w-full h-32 absolute bottom-0 left-0"></div>
      <div className="card-details text-white w-full h-32 absolute p-4 text-2xl bottom-0 left-0 z-10">
        <div className="flex">
          <Tag>
            {slide.license}
          </Tag>
        </div>
        <div className="flex">
          {[...new Array(5)].map((_, index) =>
            index + 1 <= roundedRating ? (
              <StarIcon width={16} key={index}/>
            ) : (
              <StartIconOutline width={16} key={index}/>
            )
          )}
        </div>
        <p className="truncate overflow-hidden">{slide.name}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  style: PropType.shape({}),
  customStyle:PropType.shape({}),
  className: PropType.string,
  slide: PropType.shape({
    description: PropType.string,
    name: PropType.string,
    rating: PropType.string,
    license: PropType.string,
  }),
};


export default Card;
