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
import Banner from './components/Banner';
import {newSlideSetting, slideSetting} from './data/slideSettings';

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

const App = () => {
  return (
    <div className='h-full h-screen'>
      <SideBar/>
      <Header/>
      <div className="banner text-gray-700 w-full h-184">
        <Slider {...slideSetting}>
          {DEMO.map((slide, index) => (
            <Banner key={index} index={index+1} slide={slide} className="banner-slider" customStyle={{backgroundImage: `url(${slide.image})`}}
          />)
        )}
        </Slider>
      </div>

      <div class="card w-[calc(100%-3.5rem)] h-96  ml-14">
        <h4 className="cursor-pointer">New releases <ChevronRightIcon width="26"/></h4>
        <Slider {...newSlideSetting}>
          {GAMES_BY_RATING.map((slide, index) => (
            <Card key={"rest" + index} index={index+1} slide={slide} className="card-slider" customStyle={{backgroundImage: `url(${slide.image_url})`}}
          />)
        )}
        </Slider>
      </div>

      { categories.map(({title, products}) => <ProductsByCategory products={products} title={title}/>) }
      </div>
  )
}

export default App
