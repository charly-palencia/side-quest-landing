import React from 'react'
import { StarIcon } from '@heroicons/react/solid'

const Card = ({style, customStyle, slide, className, ...props}) => {
  return (<div {...props}
    style={{...style, ...customStyle, position: "relative"}}
    className={`${className} group cursor-pointer`}
  >
    <div className="shadow transition opacity-30 hover:opacity-0"></div>
    <div className="bg-black transition opacity-0 group-hover:opacity-30 text-white w-full h-48 absolute bottom-0 left-0"></div>
    <div className="card-details text-white w-full h-48 absolute p-4 text-2xl bottom-0 left-0 z-10">
      <div className="flex"><a href="#" className="tag hover:opacity-100">Science Fiction</a></div>
      <div className="flex">{([...new Array(5)]).map(() => <StarIcon width={16}/>)}</div>
      <p className="truncate overflow-hidden">{slide.name}</p>
    </div>
    </div>)
}

export default Card
