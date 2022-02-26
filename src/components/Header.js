import React from 'react';
import {UserIcon, CogIcon} from '@heroicons/react/outline';

const Header = () => {
  return (
    <div className="absolute top-0 right-0 flex text-white z-20 my-8 mx-8 md:mx-16">
      <a href="#">
        <UserIcon width="24" className="mr-6 md:mr-12 hover:text-slate-400" />
      </a>
      <a href="#">
        <CogIcon width="24" className="hover:text-slate-400" />
      </a>
    </div>
  );
};

export default Header;
