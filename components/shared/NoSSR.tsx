import dynamic from 'next/dynamic';
import React from 'react';

type NoSsrProps = {
  children: React.ReactNode;
};

const NoSsr: React.FC<NoSsrProps> = ({ children }) => <React.Fragment>{children}</React.Fragment>;

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false,
});
