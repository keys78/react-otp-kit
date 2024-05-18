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
    <div className='capitalize mb-[16px] flex items-center'>
      {paths?.map((path, index) => (
        <React.Fragment key={index}>
          <span 
            className={`${index !== paths?.length - 1 && 'cursor-pointer'} ${'/' + path === activePath && 'active'}`}
            onClick={() => navigateTo(index)}
          >
            {path === '' ? 'Home' : path }
          </span>
          <span className={`px-4px] ${index === paths?.length - 1  && 'hidden'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="40" fill="rgba(246,245,245,1)"><path d="M12.1717 12.0005L9.34326 9.17203L10.7575 7.75781L15.0001 12.0005L10.7575 16.2431L9.34326 14.8289L12.1717 12.0005Z"></path></svg>
          </span>
        </React.Fragment>
      ))}
    </div>
  );
};

export default BreadCrumbs;
