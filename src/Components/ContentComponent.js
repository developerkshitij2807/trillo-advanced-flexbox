import React from 'react';
import HotelView from './HotelViewComponent-Content';
import Sidebar from './SidebarComponent-Content';

const Content = () => {
  return (
    <div className='content'>
      <Sidebar />
      <HotelView />
    </div>
  );
};

export default Content;
