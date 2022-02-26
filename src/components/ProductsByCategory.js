import React, {useRef} from 'react'
import Slider from "react-slick";
import { ChevronRightIcon} from '@heroicons/react/solid'

import Card from './Card';

function NextArrow(props) {
  const { onClick } = props;
 const intervalRef = useRef(null);

  const startCounter = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      onClick()
    }, 100);
  };

  const stopCounter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <div
      className="h-full w-28 bg-gradient-to-l from-black z-40 absolute right-0 top-0 pointer-mouse"
      style={{content: ' '}}
      onMouseOver={startCounter}
      onMouseOut={stopCounter}
      onMouseLeave={stopCounter}
    />
  );
}
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
    <div className="card large h-126 ml-14">
      <h4 className="cursor-pointer">{title}<ChevronRightIcon width="26"/></h4>
      <a src="#">
      <Slider {...settings}>
        {products.map((slide, index) =>  <Card
                        key={index}
        index={title+index+1}
        slide={slide}
        className="text-white h-full flex-1 flex-col bg-center bg-cover"
        customStyle={{backgroundImage: `url('${slide.image_url}')`}}/>)}
      </Slider>
      </a>
    </div>
  )
}

export default ProductsByCategory
