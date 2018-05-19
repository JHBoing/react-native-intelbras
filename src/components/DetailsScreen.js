import React from 'react';
import { Button, Text, View } from 'react-native';


class DetailsScreen extends React.Component {

    static navigationOptions = {
        headerTitle: 'Intelbras',
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Button
                    title="Go in Details... again"
                    onPress={() => this.props.navigation.push('Details')}
                />
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go Back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        )
    }
}

export default DetailsScreen;