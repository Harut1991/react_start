/**
 * @flow
 */

import { useDispatch, useSelector } from 'react-redux';
import actionStatuses from '@utils/actionStatus';

type Props = {
  selector: () => any
}

export type UseContainerStatuses = {|
  dispatch: any,
  state: any,
  isLoading: boolean,
  isSucceed: boolean,
  isFailed: boolean
|}

/**
 * The custom facade for monitor tab's tables to make api call, handle pagination
 * @param {any} selector - the selector, for getting state
 * @param {Boolean<any>} initiallyIsLoading - default is true
 * @returns {UseContainerStatuses} -
 */
const useContainerStatusHandler = ({ selector }: Props): UseContainerStatuses => {
  const dispatch = useDispatch();
  const state = useSelector(selector);

  const isLoading = actionStatuses.isActionStatusPending(state.status);
  const isSucceed = actionStatuses.isActionStatusSucceed(state.status);
  const isFailed = actionStatuses.isActionStatusFailed(state.status);

  return {
    state,
    dispatch,
    isLoading,
    isSucceed,
    isFailed
  };
};

export default useContainerStatusHandler;
