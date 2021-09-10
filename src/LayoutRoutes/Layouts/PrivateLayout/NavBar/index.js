/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Users as UsersIcon } from 'react-feather';
import NavItem from './NavItem';

const navConfig = [
  {
    subheader: 'Public Pages',
    items: [
      {
        title: 'Public',
        icon: UsersIcon,
        href: '/pub',
        items: [
          {
            title: 'Login page',
            href: '/pub/login',
          },
          {
            title: 'Register page',
            href: '/pub/Register',
          },
        ],
      },
    ],
  },
];

function renderNavItems({ items, ...rest }) {
  return (
    <li className='list-none'>
      {items.reduce(
        (acc, item) => reduceChildRoutes({ acc, item, ...rest }),
        []
      )}
    </li>
  );
}

function reduceChildRoutes({ acc, item, pathname, depth = 0 }) {
  const key = item.title + depth;
}

const NavBar = () => {
  return <div>NavBar</div>;
};

export default NavBar;
