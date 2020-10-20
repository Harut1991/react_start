/**
 * @flow
 */

import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initAppSelector } from '../store/selectors/initSelector';
import { initApp } from '../store/actions/initActions';
import {ACTION_STATUSES} from "../utils/actionStatus";

/**
 * useInitApp
 * @return {Object} appState -
 */

const useInitApp = () => {
  const dispatch = useDispatch();
  const appState = useSelector(initAppSelector);

  const initialize = useCallback(() => {
    if (appState.data.isReady === null && appState.status !== ACTION_STATUSES.PENDING) {
      dispatch(initApp());
    }
  }, [dispatch, appState]);

  useEffect(initialize, [dispatch, appState]);

  return { appState };
};

export default useInitApp;
