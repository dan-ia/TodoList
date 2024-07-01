import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from './stack.Routes';
import { TabRoutes } from './tab.Routes';

export default function Routes() {
    return (
        <NavigationContainer>
            <TabRoutes />
        </NavigationContainer>

    );
}