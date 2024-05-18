import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BreadCrumbs = () => {
  const location = useLocation();
  const navigate = useNavigate()

  const paths = location.pathname.split('/');

  const navigateTo = (index: number) => {
    const path = '/' + paths[index];
    navigate(path);
  };

  return (
    <div className='capitalize mb-[16px]'>
      {paths?.map((path, index) => (
        <React.Fragment key={index}>
          <span 
            className={`${index !== paths?.length - 1 && 'cursor-pointer'}`}
            onClick={() => navigateTo(index)}
          >
            {path === '' ? 'Home' : path }
          </span>
          <span className={`${index === paths?.length - 1  && 'hidden'}`}> &gt; </span>
        </React.Fragment>
      ))}
    </div>
  );
};

export default BreadCrumbs;
