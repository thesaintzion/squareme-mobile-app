import "react-native-gesture-handler";
import React, { useEffect } from 'react';
// import { ParamListBase, useNavigation } from '@react-navigation/native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootNavigation } from '@src/navigation';
import { UserProvider } from '@src/store';


function App(): JSX.Element {
  return (
    <UserProvider>
      <RootNavigation />
    </UserProvider>
  );
}

export default App;
