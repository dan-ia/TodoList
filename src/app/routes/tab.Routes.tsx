import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const { Navigator, Screen } = createMaterialBottomTabNavigator();

import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { StackRoutes } from "./stack.Routes"
import { Notes } from '../pages/Notes';
import { theme } from '@/theme';
import { Text } from 'react-native';
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';


export function TabRoutes() {
  return (
    <Navigator
      initialRouteName="Home"
      barStyle={{
        backgroundColor: theme.colors.gray[800],
        height: 70,
      }}
    // shifting={true}
    >
      <Screen
        name="Tasks"
        component={StackRoutes}

        options={{
          tabBarLabel: 'Tasks',
          tabBarColor: theme.colors.green,
          tabBarIcon: ({ focused, color }) => {

            if (focused) {
              return <FontAwesome5 name="tasks" size={24} color={color} />
            }
            return <FontAwesome5 name="tasks" size={24} color={color} />

          }
        }}

      />
      <Screen
        name="Notes"
        component={Notes}

        options={{
          tabBarLabel: 'Notes',
          tabBarColor: 'blue',
          tabBarIcon: ({ focused, color }) => {

            if (focused) {
              return <MaterialIcons name="grid-view" size={24} color={color} />
            }
            return <MaterialIcons name="grid-view" size={30} color={color} />


          }
        }}
      />
    </Navigator >
  );
}