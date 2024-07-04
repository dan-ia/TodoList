import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Settings from '../pages/Settings'

const { Navigator, Screen } = createNativeStackNavigator();

declare global {

    namespace ReactNavigation {

        interface RootParamList {
            Home: undefined
            Settings: undefined
        }
    }
}

export function StackRoutes() {


    return (

        <Navigator
            screenOptions={{
                title: '',
                headerTintColor: '#fff',
                headerShadowVisible: true,
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
                name='Settings'
                component={Settings}
                options={{
                    animation: 'slide_from_right',
                    headerStyle: {

                        backgroundColor: '#141414'
                    }

                }}
            />
        </Navigator>


    )
}