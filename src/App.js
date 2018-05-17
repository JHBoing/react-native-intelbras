import React from 'react';
import { AppRegistry } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/DetailsScreen';

const RootStack = createStackNavigator ({
    Home: HomeScreen,
    Details: DetailsScreen,
});

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}