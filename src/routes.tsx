import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './pages/Home';
import { MyLinks } from './pages/MyLinks';
import Icon from '@expo/vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const Routes: React.FC = () => {
  const { Navigator, Screen } = Drawer;
  return (
    <NavigationContainer>
      <Navigator
        drawerContentOptions={{
          activeBackgroundColor: '#da00ff',
          activeTintColor: '#ffffff',
          labelStyle: {
            fontSize: 19,
          },
        }}
      >
        <Screen
          name='Home'
          component={Home}
          options={{
            title: 'Encurtar link',
            drawerIcon: ({ focused, size, color }) => (
              <Icon
                name={focused ? 'cube' : 'cube-outline'}
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Screen
          name='MyLinks'
          component={MyLinks}
          options={{
            title: 'Meus Links',
            drawerIcon: ({ focused, size, color }) => (
              <Icon
                name={focused ? 'stats-chart' : 'stats-chart-outline'}
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};
