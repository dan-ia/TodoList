import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Profile from '../pages/Profile'

const { Navigator, Screen } = createNativeStackNavigator();

declare global {

    namespace ReactNavigation {

        interface RootParamList {
            Home: undefined
            Profile: undefined
        }
    }
}

export function StackRoutes() {
    return (

        <Navigator
            screenOptions={{
                title: '',
                headerTintColor: '#fff',
            }}
        >
            <Screen
                name='Home'
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
            <Screen
                name='Profile'
                component={Profile}
                options={{
                    headerStyle: {
                        backgroundColor: '#141414'
                    }

                }}
            />
        </Navigator>


    )
}