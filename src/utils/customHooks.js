// @flow

import React, { useEffect, useCallback } from 'react';
import { NotificationManager } from 'react-notifications';

type Props = {|
    reducer: Object
|};
export const ErrorMessage = (props: Props) => {
  const errorHandler = useCallback(() => {
    if (props.reducer.errorMessage) {
      NotificationManager.error(props.reducer.errorMessage, 'Error', 3000);
    }
  }, [props.reducer.errorMessage]);

  useEffect(errorHandler, [props.reducer.errorMessage]);
};
