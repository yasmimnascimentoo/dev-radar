import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'DevRadar'
            },
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Perfil do Github'
            }
        },
    }, {
        defaultNavigationOptions: {
            headerTintColor: '#7d40e7',
            headerTitleAlign: "center",
            headerStyle: {
                backgroundColor: '#FFF',
            },
        },
    })
);

export default Routes;