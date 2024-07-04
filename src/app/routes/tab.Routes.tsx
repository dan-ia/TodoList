import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const { Navigator, Screen } = createBottomTabNavigator();

import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '@/theme';

import { StackRoutes } from "./stack.Routes"

import Notes from '../pages/Notes';


export function TabRoutes() {
  return (
    <Navigator
      initialRouteName="Home"

      screenOptions={{
        headerShown: false,
        // tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: theme.colors.white,
        tabBarInactiveTintColor: theme.colors.gray[500],

        tabBarStyle: {
          backgroundColor: theme.colors.gray[800],
          borderTopColor: theme.colors.gray[700],
          paddingBottom: 5,
          height: 55,

        }
      }}
    >
      <Screen
        name="Tasks"
        component={StackRoutes}

        options={{
          tabBarLabel: 'Tasks',
          tabBarIcon: ({ focused, color }) => {

            if (focused) {
              return <FontAwesome5 name="tasks" size={23} color={color} />

            }
            return <FontAwesome5 name="tasks" size={19} color={color} />

          }
        }}

      />
      <Screen
        name="Notes"
        component={Notes}

        options={{
          tabBarLabel: 'Notes',
          tabBarIcon: ({ focused, color }) => {

            if (focused) {
              return <MaterialIcons name="grid-view" size={28} color={color} />
            }
            return <MaterialIcons name="grid-view" size={23} color={color} />


          }
        }}
      />
    </Navigator >
  );
}