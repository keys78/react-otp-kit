import React from 'react';
import { useLocation } from 'react-router-dom';

const BreadCrumbs = () => {
  const location = useLocation();

  const paths = location.pathname.split('/').filter(path => path !== '');

  return (
    <div className='capitalize'>
      <span className='cursor-pointer'>Home</span> ~ {paths.join('>')}
    </div>
  );
};

export default BreadCrumbs;
