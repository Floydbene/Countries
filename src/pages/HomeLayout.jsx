import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import { subregions } from '../data';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  return (
    <>
      <Navbar />
      <section className='page'>
        {isPageLoading ? <div className='loading' /> : <Outlet />}
      </section>
    </>
  );
};

export default HomeLayout;
