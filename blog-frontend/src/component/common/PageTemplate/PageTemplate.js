import React from 'react';
import styles from './PageTemplate.scss';
import className from 'classnames/bind';
import Header from 'components/common/Header';

const cx = className.bind(styles);

const PageTemplate = () => {
  return (
    <div className={cx('page-template')}>
      <Header />
    </div>
  );
};

export default PageTemplate;