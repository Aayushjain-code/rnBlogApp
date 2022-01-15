import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext';




const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Blogs">
          <Stack.Screen name="Blogs" component={IndexScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}

export default App;


// import React from 'react';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

// import IndexScreen from './src/screens/IndexScreen';

// const navigator = createStackNavigator(
//   {
//     Index: IndexScreen,
//   },
//   {
//     initialRouteName: 'Index',
//     defaultNavigationOptions: {
//       title: 'Blogs',
//     },
//   }
// );

// const App = createAppContainer(navigator);

// export default () => {
//   return <App />;
// };