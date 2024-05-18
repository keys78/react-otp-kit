import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BreadCrumbs = () => {
  const location = useLocation();
  const navigate = useNavigate()

  const [activePath, setActivePath] = useState('') 

  const paths = location.pathname.split('/');

  const navigateTo = (index: number) => {
    navigate('/' + paths[index]);
    setActivePath('/' + paths[index])
  };

  useEffect(() => {
    setActivePath(location.pathname)
  }, [location.pathname])

  return (
    <div className='capitalize mb-[16px]'>
      {paths?.map((path, index) => (
        <React.Fragment key={index}>
          <span 
            className={`${index !== paths?.length - 1 && 'cursor-pointer'} ${'/' + path === activePath && 'active bg-gradient-to-r from-purple-600 via-purple-400 to-green-800 inline-block text-transparent bg-clip-text'}`}
            onClick={() => navigateTo(index)}
          >
            {path === '' ? 'Home' : path }
          </span>
          <span className={`${index === paths?.length - 1  && 'hidden'}`}> ~ </span>
        </React.Fragment>
      ))}
    </div>
  );
};

export default BreadCrumbs;
