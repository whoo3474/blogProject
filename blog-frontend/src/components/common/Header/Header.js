import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Header = () => (
  <header className={cx('header')}>
    <div className={cx('header-content')}>
      <div className={cx('brand')}>
      <Link to="/">reactBlog</Link>
      </div>
      <div className={cx('right')}>
      {}
      오른쪽
      </div>
    </div>
  </header>
);

export default Header;