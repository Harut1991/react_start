// @flow
import React, { memo, type Node } from 'react';
import { Redirect } from 'react-router-dom';

import useInitApp from '@hooks/useInitApp';

type Props = {|
    children: Node
|};

const LoginLayout = ({ children }: Props) => {
  const { appState } = useInitApp();
  if (appState.data.isReady && appState.data.isLoggedIn) {
    return <Redirect to="/" />;
  }
  if (!appState.data.isReady) {
    return 'llllll';
  }
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        LOGIN LAYOUT
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
export default memo<Props>(LoginLayout);
