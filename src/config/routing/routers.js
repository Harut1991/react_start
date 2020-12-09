// @flow
import React, { type Node } from 'react';

import LoginLayout from '@views/layout/LoginLayout';
import AuthLayout from '@views/layout/AuthLayout';

const Login = React.lazy<Node>(() => import('@views/pages/login'));
const Home = React.lazy<Node>(() => import('@views/pages/home'));
const About = React.lazy<Node>(() => import('@views/pages/about'));

export default [
  {
    Layout: LoginLayout,
    key: 'login',
    routers: [
      {
        path: '/login',
        exact: true,
        component: Login
      }
    ]
  },
  {
    Layout: AuthLayout,
    key: 'auth',
    routers: [
      {
        path: '/about',
        exact: true,
        component: About
      },
      {
        path: '/',
        exact: true,
        component: Home
      }
    ]
  }
];
