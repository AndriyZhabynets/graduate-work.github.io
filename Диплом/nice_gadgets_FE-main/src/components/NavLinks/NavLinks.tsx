import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavLinks.scss';

type Props = {
  isOpen?: boolean;
  closeMenu?: () => void;
};

export const NavLinks: React.FC<Props> = ({ isOpen, closeMenu }) => {
  return (
    <div
      className={classNames('nav__bar', {
        'nav__bar--menu': isOpen,
      })}
    >
      <NavLink
        to="/"
        className={classNames('nav__link', {
          'nav__link--menu': isOpen,
        })}
        onClick={closeMenu}
      >
        Home
      </NavLink>
      <NavLink
        to="/phones"
        className={classNames('nav__link', {
          'nav__link--menu': isOpen,
        })}
        onClick={closeMenu}
      >
        Phones
      </NavLink>
      <NavLink
        to="/tablets"
        className={classNames('nav__link', {
          'nav__link--menu': isOpen,
        })}
        onClick={closeMenu}
      >
        Tablets
      </NavLink>
      <NavLink
        to="/accessories"
        className={classNames('nav__link', {
          'nav__link--menu': isOpen,
        })}
        onClick={closeMenu}
      >
        Accessories
      </NavLink>

      <a
    href="http://localhost:9000/"
    className={classNames('nav__link', {
      'nav__link--menu': isOpen,
    })}
    onClick={closeMenu}
  >
    Chat
  </a>
    </div>
  );
};
