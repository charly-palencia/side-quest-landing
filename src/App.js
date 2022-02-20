import React from 'react'
import SideBar from './components/SideBar'
import "@fontsource/roboto";

const App = () => {

  return (
    <div className='flex flex-row h-full bg-eerie'>
      <SideBar/>
      <div class="text-gray-700 h-screen w-full">
      <div className="bg-test w-full h-3/4"></div>
      </div>
    </div>
  )
}

export default App
