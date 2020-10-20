/**
 * @flow
 */
import { useCallback, useEffect } from 'react';
import { NotificationManager } from 'react-notifications';

type Props = {
  isFailed?: boolean,
  isSucceed?: boolean,
  errorMessage?: string,
  successMessage?: string
}

/**
 * useMessageHandler
 * @param {boolean} isFailed -  Failed error condition
 * @param {boolean} isSucceed - Succeed condition
 * @param {string} errorMessage - Error message
 * @param {string} successMessage - Success message
 * @returns {undefined}- undefined
 */
const useMessageHandler = ({
  isFailed, isSucceed, errorMessage, successMessage
}: Props) => {
  const showNotification = useCallback(() => {
    if (isFailed) {
      NotificationManager.error(errorMessage, 'Error', 3000);
    }
    if (isSucceed) {
      NotificationManager.success(successMessage, 'Success', 3000);
    }
  }, [isFailed, isSucceed, errorMessage, successMessage]);

  useEffect(showNotification, [isFailed, isSucceed, errorMessage, successMessage]);
};

export default useMessageHandler;
