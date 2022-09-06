import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Navbar.module.css';
import naruto from '../assets/image/naruto.png';

const Navbar = () => {
  const navLinks = [
    {
      navId: 1,
      path: '/Characters',
      text: 'Characters',
    },
  ];
  return (
    <header className={styles.header}>
      <div>
        <img src={naruto} className={styles.logo} alt="naruto_logo" />
        <p className={styles.title}>The Most Legendry Ninja</p>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navLink_wrap}>
          <li className={styles.formwrap}>
            <form className={styles.form}>
              <input
                type="search"
                className={styles.query}
                name="input"
                placeholder="Search Ninjas"
              />
              <button type="button" className={styles.searchbtn}>
                <FontAwesomeIcon icon={faSearch} />
                {' '}
              </button>
            </form>
          </li>
          {navLinks.map((link) => (
            <li key={link.navId}>
              <NavLink className={styles.navLink} to={link.path}>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
