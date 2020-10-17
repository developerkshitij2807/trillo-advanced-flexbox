import React from 'react';
import Content from './ContentComponent';
import Header from './HeaderComponent';

const Main = () => {
  return (
    <div className='container'>
      <Header />
      <Content />
    </div>
  );
};

export default Main;
