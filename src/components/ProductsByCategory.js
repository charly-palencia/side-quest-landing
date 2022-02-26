import React from 'react';
import PropType from 'prop-types';
import Slider from 'react-slick';
import {ChevronRightIcon} from '@heroicons/react/solid';

import NextArrow from './NextArrow';
import Card from './Card';

const ProductsByCategory = ({products, title}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3.1,
    slidestoscroll: 1,
    lazyLoad: true,
    nextArrow: <NextArrow />,
  };

  return (
    <>
      <h4 className="cursor-pointer ml-14 text-white my-6 font-medium text-lg flex">
        {title}
        <ChevronRightIcon width="26" />
      </h4>
      <div className="card large h-126 ml-14">
        <Slider {...settings}>
          {products.map((slide, index) => (
            <Card
              key={index}
              index={title + index + 1}
              slide={slide}
              className="text-white h-full flex-1 flex-col bg-center bg-cover"
              customStyle={{backgroundImage: `url('${slide.image_url}')`}}
            />
          ))}
        </Slider>
      </div>
    </>
  );
};

ProductsByCategory.propTypes = {
  title: PropType.string,
  products: PropType.arrayOf(PropType.shape({
    description: PropType.string,
    title: PropType.string,
  })),
};
export default ProductsByCategory;
