import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      <div className='min-h-full pt-20'>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
