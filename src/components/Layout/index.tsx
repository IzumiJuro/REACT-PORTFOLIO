import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';

const Layout = () => {
  return (
    <div className='App'>
      <Sidebar></Sidebar>
      <div className='page'>
        <span className='tags top-tags'>&lt;body&gt;</span>

        <Outlet></Outlet>
        <span className='tags h1-top-tags'>&lt;h1&gt;</span>
        <span className='tags h1-tags'>Hello Adg;</span>
        <span className='tags h1-bottom-tags'>&lt;/h1&gt;</span>
        <span className='tags bottom-tags'>
        &lt;/body&gt;
          <br></br>
          <span className='bottom-tag-html'>&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  );
};

export default Layout;
