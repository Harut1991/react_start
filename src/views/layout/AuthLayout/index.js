// @flow
import { NavLink, Redirect } from 'react-router-dom';
import React, { memo, type Node } from 'react';
import './style.css';
import useInitApp from '../../../hooks/useInitApp';

type Props = {|
    children: Node
|};

const AuthLayout = ({ children }: Props) => {
  const { appState } = useInitApp();

  if (appState.data.isReady && !appState.data.isLoggedIn) {
    return <Redirect to="/login" />;
  }
  if (!appState.data.isReady) {
    return 'llllll';
  }
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="link" exact activeClassName="active" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="link" activeClassName="active" to="/about">About</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className="context">
        {children}
      </div>
      <nav className="navbar navbar-dark bg-dark footer">
        @Footer
      </nav>
    </div>
  );
};
export default memo<Props>(AuthLayout);
