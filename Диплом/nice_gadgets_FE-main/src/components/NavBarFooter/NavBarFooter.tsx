import React from 'react';
import { Link } from 'react-router-dom';
import './NavBarFooter.scss';

export const NavBarFooter: React.FC = () => {
  return (
    <div className="nav nav--footer">
      <div className="nav__bar nav__bar--footer">
        <a
          href=""
          target="_blank"
          rel="noreferrer"
          className="nav__link nav__link--footer"
        >
          Github
        </a>
        <Link to="/about-projectt" className="nav__link nav__link--footer">
          About
        </Link>
        <Link to="/rightss" className="nav__link nav__link--footer">
          Rights
        </Link>
      </div>
    </div>
  );
};
