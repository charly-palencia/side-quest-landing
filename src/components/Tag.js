import React from 'react';
import PropType from 'prop-types';

const Tag = ({children}) => {
  return (
    <a href="#" className="inline-block rounded-full text-white bg-black hover:bg-gray-500 duration-300 text-xs font-bold mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 opacity-90 hover:opacity-100">
      {children}
    </a>
  );
};

Tag.propTypes = {
  children: PropType.string,
};


export default Tag;
