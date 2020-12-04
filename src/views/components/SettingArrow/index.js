// /**
//  * @flow
//  */
// import React, { memo, useCallback } from 'react';
// import Icon from '@bet-core/ui/Icon';
// import classNames from 'classnames';
//
// import { settings } from 'config/settings/constants';
//
// import './styles.scss';
//
// type Props = {
//     onClick: Function,
//     active: boolean,
//     type: string
// }
//
// /**
//  *
//  * @param {string} type - arrow type
//  * @param {boolean} active -
//  * @param {Function} onClick - callBack
//  * @returns {Node}
//  * @constructor
//  */
//
// function SettingArrow({ type, active, onClick }: Props) {
//   const onClickHandler = useCallback(() => active && onClick(type), [onClick, active, type]);
//   return (
//     <div className={`setting-arrow ${classNames({ 'setting-arrow-active': active })}`}>
//       <Icon type={`bc-icon-${type === settings.arrowType.left ? 'below' : 'above'}`} onClick={onClickHandler} />
//     </div>
//   );
// }
//
// SettingArrow.displayName = 'SettingArrow';
//
// export default memo<Props>(SettingArrow);
