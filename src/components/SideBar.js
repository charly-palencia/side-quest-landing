import React from 'react';
import {
  HomeIcon,
  UserIcon,
  SupportIcon,
  SpeakerphoneIcon,
  LogoutIcon,
} from '@heroicons/react/outline';

const SideBar = () => (
  <nav className="h-screen text-white justify-between flex flex-col w-14 bg-eerie-50 fixed top-0 left-0 z-50">
    <div className="mt-10 mb-10">
      <a href="#">
        <img
          src="/SideQuest-Mark-White.svg"
          alt=""
          className="w-12 h-12 mx-auto"
        />
      </a>
      <div className="mt-10">
        <ul>
          <li className="mb-6">
            <a href="#">
              <span>
                <HomeIcon width="20" className="mx-auto hover:text-slate-400" />
              </span>
            </a>
          </li>
          <li className="mb-6">
            <a href="#">
              <span>
                <UserIcon width="20" className="mx-auto hover:text-slate-400" />
              </span>
            </a>
          </li>
          <li className="mb-6">
            <a href="#">
              <span>
                <SupportIcon
                  width="20"
                  className="mx-auto hover:text-slate-400"
                />
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>
                <SpeakerphoneIcon
                  width="20"
                  className="mx-auto hover:text-slate-400"
                />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="mb-4">
      <a href="#">
        <span>
          <LogoutIcon width="20" className="mx-auto hover:text-slate-400" />
        </span>
      </a>
    </div>
  </nav>
);

export default SideBar;
