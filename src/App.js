import React from 'react'
import Slider from "react-slick";
import "@fontsource/roboto";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SideBar from './components/SideBar'
import Card from './components/Card'
import { ChevronRightIcon} from '@heroicons/react/solid'
import { GAMES_BY_RATING,CATEGORY_EDUCATIONAL, DEMO, CATEGORY_CLIMBING, CATEGORY_BUILDING, CATEGORY_ADVENTURE, CATEGORY_LABS } from './data/categories';
import ProductsByCategory from './components/ProductsByCategory';
import Header from './components/Header';

const categories = [
  {
    title: "Adventure",
    products: CATEGORY_ADVENTURE,
  },
  {
    title: "Educational",
    products: CATEGORY_EDUCATIONAL
  },
  {
    title: "App Lab",
    products: CATEGORY_LABS
  },
  {
    title: "Building",
    products: CATEGORY_BUILDING
  },
  {
    title: "Climbing",
    products: CATEGORY_CLIMBING
  },
]

const Slide = ({style, customStyle, slide, ...props}) => {
  return <div {...props} style={{...style, ...customStyle, position: "relative"}}  >
    <div className="shadow"></div>
    {/*<div className="flex z-10"><a href="#" className="tag hover:opacity-100">Science Fiction</a></div>
       <div className="flex z-10">{([...new Array(5)]).map(() => <StarIcon width={16}/>)}</div>*/}
    <h1 className="text-6xl align-center z-10 mb-4">{slide.title}</h1>
    <p className="w-7/12 z-10">{slide.description}</p>
  </div>
}

const App = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidestoscroll: 1,
  };
  return (
    <div className='flex flex-row h-full bg-eerie'>
      <SideBar/>
      <Header/>
      <div class="text-gray-700 w-full h-184 ">
        <div className="banner">
          <Slider {...settings}>
            {DEMO.map((slide, index) => <Slide
                      key={index}
            index={index+1}
            slide={slide}
            className="pl-60  bg-center text-white justify-center h-full flex-1 flex-col"
            customStyle={{backgroundImage: `url(${slide.image})`}}/>)}
          </Slider>
        </div>

        <div class="card w-[calc(100%-3.5rem)] h-96 max-h-96 ml-14">
          <h4 className="cursor-pointer">New releases <ChevronRightIcon width="26"/></h4>
          <Slider {...settings} slidesToShow={5} dots={false} responsive={[{
            breakpoint: 1026,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            }
            }, {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
            }
            }]}>
            {GAMES_BY_RATING.map((slide, index) => <Card
                                 key={"rest" + index}
            index={index+1}
            slide={slide}
            className="pl-60  text-white bg-center bg-auto hover:bg-cover h-full flex-1 flex-col"
            customStyle={{backgroundImage: `url(${slide.image_url})`}}/>)}
          </Slider>
        </div>
        {
          categories.map(({title, products}) =>
        <ProductsByCategory products={products} title={title}/>
        )}
      </div>
    </div>
  )
}

export default App
