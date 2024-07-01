import React, {useEffect, useCallback, useContext} from 'react';
import {Alert} from 'react-native';
import {APP_STATE} from '../../Constants';
import {useStoreActions, useStoreState} from 'easy-peasy';

const AppStateContext = React.createContext();

export const useAppContext = () => {
  return useContext(AppStateContext);
};

export const AppContextProvider = props => {
  const {loginUser, setState, checkLogin} = useStoreActions(actions => ({
    loginUser: actions.login.loginUser,
    setState: actions.login.changeAppState,
    checkLogin: actions.login.checkLogin,
  }));
  const state = useStoreState(store => store.login.appstate);

  const _logoutUser = useCallback(async () => {
    setState(APP_STATE.PUBLIC);
  }, [setState]);

  const logout = useCallback(() => {
    // Alert.alert(
    //   'Please comfirm Logout',
    //   'Are you sure you want to logout from the app',
    //   [
    //     {
    //       text: 'Yes, Logout',
    //       onPress: _logoutUser,
    //     },
    //     {
    //       type: 'cancel',
    //       text: 'No, Stay here',
    //     },
    //   ],
    // );
    _logoutUser();
  }, [_logoutUser]);

  const login = useCallback(
    reqData => {
      loginUser(reqData);
    },
    [loginUser],
  );

  // check loggedin on mount
  useEffect(() => {
    state === APP_STATE.UNKNOWN && checkLogin();
  }, [checkLogin, state]);

  return (
    <AppStateContext.Provider
      value={{
        state,
        logout,
        login,
      }}>
      {props.children}
    </AppStateContext.Provider>
  );
};

export default AppStateContext;
