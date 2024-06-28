//import libraries
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import AppNavigation from './navigation/AppNavigation';

const App = () => {
  //In useEffect we can configure latter on based on requirements
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000); //duration will be dependent on future scenario
  });

  return (
        <AppNavigation />
  );
};

//make this component available to the app
export default App;
