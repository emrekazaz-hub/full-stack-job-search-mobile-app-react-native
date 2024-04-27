import React, { useEffect, useContext } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from './Navigations/DrawerNavigator/DrawerNavigator';
import LoginPage from './LoginPage/LoginPage';
import { UserContext, UserContextProvider } from './Context/UserContext';
import { JobContextProvider } from './Context/JobsContext';

const Routes = () => {


  return (
    <NavigationContainer>
      <UserContextProvider>
        <JobContextProvider>
          <DrawerNavigator />
        </JobContextProvider>
      </UserContextProvider>
    </NavigationContainer>
  );
}

export default Routes;
