import React from 'react';
import styles from './Backdrop.module.scss';

type BackdropPropsType = {
  children?: React.ReactNode;
  onCancel: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const Backdrop: React.FC<BackdropPropsType> = ({ onCancel }) => {
  return <div className={styles['backdrop']} onClick={(e) => onCancel(e)} />;
};

export default Backdrop;
