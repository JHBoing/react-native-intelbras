import React from 'react';
import { AppRegistry, View } from 'react-native';

import TabNavigator from './navigators/TabNavigator';

export default class App extends React.Component {
    render() {
        return <TabNavigator/>;
    }
}