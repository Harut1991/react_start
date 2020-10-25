// @flow
import React from 'react';

import LoginLayout from '@views/layout/LoginLayout';
import AuthLayout from '@views/layout/AuthLayout';

const Login = React.lazy(() => import('@views/pages/login'));
const Home = React.lazy(() => import('@views/pages/home'));
const About = React.lazy(() => import('@views/pages/about'));

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
