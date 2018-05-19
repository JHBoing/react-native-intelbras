import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';


class HomeScreen extends React.Component {

    static navigationOptions = {
        headerTitle: 'Intelbras',
    };
    
    render() {
        return (
        <View style={{backgroundColor: '#FFFFFF'}}>
            <View style={ styles.container }>
                <Text>Lista de Clientes</Text>
                <Button
                    title="+"
                    onPress={() => this.props.navigation.navigate('Details')}
                    style={ styles.button }
                />
            </View>
            <Text> Oi </Text>
        </View>
        );
    }    
}

const styles = StyleSheet.create ({ 
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 60,
    },
    button: {
        width: 100,
        height: 50,
    }
});

export default HomeScreen;

