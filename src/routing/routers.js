import React from "react";

const Home = React.lazy(() => import('../pages/home/Home'));
const About = React.lazy(() => import('../pages/about/About'));
const Users = React.lazy(() => import('../pages/users/Users'));
const UserPosts = React.lazy(() => import('../pages/user_posts/userPosts'));
const Photos = React.lazy(() => import('../pages/photos/photos'));


export default [
    {path: '/', exact: true, component: Home},
    {path: '/index.html',  component: Home},
    {path: '/about',exact: true, component: About},
    {path: '/users', exact: true, component: Users},
    {path: '/photos/:id', exact: true, component: Photos},
    {path: '/users/:id/posts',exact: true, component: UserPosts},
];
