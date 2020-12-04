// /* eslint-disable react/jsx-props-no-spreading */
// /**
//  * @flow
//  */
// import React, { useCallback, useEffect, useMemo, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import classNames from 'classnames';
//
// import { userSettingsSelector } from 'store/selectors/userSettingsSelectors';
// import FailedDataLoadingError from 'views/components/FailedDataLoadingError';
// import { fetchUserSettings } from 'store/actions/userSettings/actions';
// import SettingColumns from 'views/components/settings/SettingColumns';
// import SettingArrow from 'views/components/settings/SettingArrow';
// import { settings } from 'config/settings/constants';
// import actionStatuses from 'lib/core/actionStatuses';
// import allColumns from 'config/settings/columns';
//
// import './styles.scss';
//
// type Props = {
//   setChanges: Function,
//   multiple: boolean,
//   name: string
// }
//
// /**
//  *
//  * @param {string} name - Settings Name
//  * @param {boolean} multiple
//  * @param {Function} setChanges - callBack
//  * @returns {Node} -
//  * @constructor
//  */
//
// const SettingsContainer = ({ name, multiple, setChanges }: Props) => {
//   const dispatch = useDispatch();
//   const state = useSelector(userSettingsSelector(name));
//   const [currentColumns, setCurrentColumns] = useState([]);
//
//   const [columns, setColumns] = useState({
//     [settings.columnType.possible]: [],
//     [settings.columnType.current]: []
//   });
//   const [activeArrow, setActiveArrow] = useState({
//     [settings.columnType.below]: false,
//     [settings.columnType.above]: false
//   });
//   const possibleColumns = useMemo(() => allColumns[name] || [], [name]);
//
//   const { isLoading, isError, isSuccess } = useMemo(() => {
//     let loading;
//     let error;
//     let success;
//     if (state) {
//       loading = actionStatuses.isActionStatusPending(state.status);
//       error = actionStatuses.isActionStatusFailed(state.status);
//       success = actionStatuses.isActionStatusSucceed(state.status);
//     }
//
//     return {
//       isLoading: loading,
//       isSuccess: success,
//       isError: error
//     };
//   }, [state]);
//
//   const validation = useCallback((changedColumns) => {
//     const condition = JSON.stringify(currentColumns) !== JSON.stringify(changedColumns.map(i => i.name));
//     setChanges({
//       name: condition ? name : null,
//       changedData: condition ? changedColumns.map(i => i.name) : []
//     });
//   }, [currentColumns, setChanges, name]);
//
//   const fetchData = useCallback(() => {
//     if (!state) {
//       dispatch(fetchUserSettings({ name: [name] }));
//     }
//   }, [state, dispatch, name]);
//
//   const checkActiveArrows = useCallback(() => {
//     setActiveArrow({
//       [settings.arrowType.right]: columns[settings.columnType.possible].some(i => i.checked),
//       [settings.arrowType.left]: columns[settings.columnType.current].some(i => i.checked)
//     });
//   }, [setActiveArrow, columns]);
//
//   const onChangeHandler = useCallback((action) => {
//     const changedColumns = { ...columns };
//     if (action.isSelectAll) {
//       changedColumns[action.type] = changedColumns[action.type].map(item => ({
//         name: item.name,
//         checked: action.checked
//       }));
//     } else {
//       const currentColumn = changedColumns[action.type].find(i => i.name === action.name);
//       currentColumn.checked = action.checked;
//     }
//
//     setColumns(changedColumns);
//   }, [columns, setColumns]);
//
//   const dndHandler = useCallback((action) => {
//     const changedColumns = { ...columns };
//     if (action.nextCard) {
//       const changedCard = action.type === settings.columnType.possible
//         ? settings.columnType.current
//         : settings.columnType.possible;
//       changedColumns[action.type].splice(action.hoverIndex, 0,
//         {
//           name: action.name,
//           checked: false
//         });
//       changedColumns[changedCard] = changedColumns[changedCard].filter(i => i.name !== action.name);
//     } else {
//       changedColumns[action.type] = action.columns.filter(i => i);
//     }
//     setColumns(changedColumns);
//     validation(changedColumns[settings.columnType.current]);
//   }, [columns, setColumns, validation]);
//
//   const makeColumns = useCallback(() => {
//     if (isSuccess) {
//       let possible;
//       let current = [];
//       if (state.data) {
//         current = state.data;
//         possible = possibleColumns.filter(x => !current.includes(x));
//       } else {
//         possible = [];
//         current = possibleColumns;
//       }
//       setColumns({
//         [settings.columnType.possible]: possible.map(item => ({ name: item, checked: false })),
//         [settings.columnType.current]: current.map(item => ({ name: item, checked: false }))
//       });
//       setCurrentColumns(current);
//     }
//   }, [state, isSuccess, possibleColumns, setColumns, setCurrentColumns]);
//
//   const onClickArrowHandler = useCallback((type) => {
//     const changedColumns = type === settings.arrowType.right
//       ? {
//         [settings.columnType.possible]: columns[settings.columnType.possible].filter(i => !i.checked),
//         [settings.columnType.current]: [
//           ...columns[settings.columnType.current],
//           ...columns[settings.columnType.possible].filter(i => i.checked).map(item => ({
//             name: item.name,
//             checked: false
//           }))
//         ]
//       }
//       : {
//         [settings.columnType.current]: columns[settings.columnType.current].filter(i => !i.checked),
//         [settings.columnType.possible]: [
//           ...columns[settings.columnType.possible],
//           ...columns[settings.columnType.current].filter(i => i.checked).map(item => ({
//             name: item.name,
//             checked: false
//           }))
//         ]
//       };
//     setColumns(changedColumns);
//     validation(changedColumns[settings.columnType.current]);
//   }, [columns, setColumns, validation]);
//
//   useEffect(fetchData, [state, dispatch]);
//   useEffect(makeColumns, [isSuccess]);
//   useEffect(checkActiveArrows, [columns]);
//
//   if (isError) {
//     return <FailedDataLoadingError onRefresh={fetchData} />;
//   }
//
//   return (
//     <div className="settings-container flex">
//       <div className={`column left-column ${classNames({ 'b-top-none': !multiple })}`}>
//         <SettingColumns
//           columns={[...columns[settings.columnType.possible]]}
//           allColumnsLength={possibleColumns.length}
//           type={settings.columnType.possible}
//           onChange={onChangeHandler}
//           onDnd={dndHandler}
//           isBusy={isLoading}
//         />
//       </div>
//       <div className="center-column">
//         <div className="setting-arrows">
//           <SettingArrow
//             active={activeArrow[settings.arrowType.right]}
//             type={settings.arrowType.right}
//             onClick={onClickArrowHandler}
//           />
//           <SettingArrow
//             active={activeArrow[settings.arrowType.left]}
//             type={settings.arrowType.left}
//             onClick={onClickArrowHandler}
//           />
//         </div>
//       </div>
//       <div className={`column right-column ${classNames({ 'b-top-none': !multiple })}`}>
//         <SettingColumns
//           columns={[...columns[settings.columnType.current]]}
//           allColumnsLength={possibleColumns.length}
//           type={settings.columnType.current}
//           onChange={onChangeHandler}
//           onDnd={dndHandler}
//           isBusy={isLoading}
//         />
//       </div>
//     </div>
//   );
// };
//
// SettingsContainer.displayName = 'SettingsContainer';
//
// export default SettingsContainer;
