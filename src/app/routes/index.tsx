import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from './stack.Routes';

export default function Routes() {
    return (
        <NavigationContainer>
            <StackRoutes />
        </NavigationContainer>
    );
}