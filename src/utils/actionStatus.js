/**
 * Copyright (c), BetConstruct.RMT
 * @author Ruben Aprikyan [ruben.aprikyan@betconstruct.com]
 *
 * @flow
 */

export const ACTION_STATUSES = {
  CANCELED: 'canceled',
  PENDING: 'pending',
  SUCCEED: 'succeed',
  FAILED: 'failed',
  NONE: undefined
};

const isActionStatusCanceled = (status: ?string): boolean => status === ACTION_STATUSES.CANCELED;
const isActionStatusPending = (status: ?string): boolean => status === ACTION_STATUSES.PENDING;
const isActionStatusSucceed = (status: ?string): boolean => status === ACTION_STATUSES.SUCCEED;
const isActionStatusFailed = (status: ?string): boolean => status === ACTION_STATUSES.FAILED;
const isActionStatusNoneDefined = (status: ?string): boolean => !!status;

export default {
  isActionStatusNoneDefined,
  isActionStatusCanceled,
  isActionStatusSucceed,
  isActionStatusPending,
  isActionStatusFailed
};
