import React from 'react';
import styles from './PageTemplate.scss';
import className from 'classnames/bind';

const cx = className.bind(styles);

const PageTemplate = () => {
  return (
    <div className={cx('page-template')}>
      PageTemplate
    </div>
  );
};

export default PageTemplate;