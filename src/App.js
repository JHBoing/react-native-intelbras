import React from 'react';
import { AppRegistry } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Header from './components/header';
import HomeScreen from './components/HomeScreen';

class Home extends React.Component {
    render() {
        <HomeScreen />
    }
    
}

const RootStack = createStackNavigator (
    {
        Home: HomeScreen,
    },
    {
        initialRouteName: 'Home',
    }
);

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}