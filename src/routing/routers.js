// @flow
import React from 'react';

const Home = React.lazy(() => import('../pages/home/Home'));
const About = React.lazy(() => import('../pages/about/About'));
const Users = React.lazy(() => import('../pages/users/Users'));
const UserPosts = React.lazy(() => import('../pages/user_posts/userPosts'));
const UserPostsClass = React.lazy(() => import('../pages/user_posts/userPostsClass'));
const Photos = React.lazy(() => import('../pages/photos/photos'));

export default [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/users',
    exact: true,
    component: Users,
    children: [
      { path: '/:userId/posts', component: UserPosts },
      { path: '/:userId/postsClass', component: UserPostsClass },
      { path: '/:userId/photos/:id', component: Photos }
    ]
  },
  {
    path: '/about',
    component: About
  }
];
