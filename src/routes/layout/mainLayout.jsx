import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { Home } from 'lucide-react';

const mainLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className=" min-h-[calc(100vh-172px)]">
        <div className='max-w-screen-2xl mx-auto px-8 md:12 lg:16 xl:24'>
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default mainLayout;