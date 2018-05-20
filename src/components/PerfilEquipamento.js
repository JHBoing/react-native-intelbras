import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';


class PerfilEquipamento extends React.Component {

    static navigationOptions = {
        headerTitle: 'nomeEquipamentoComoProps',
    };
    
    render() {
        return (
        <View style={{backgroundColor: '#FFFFFF'}}>
            <View style={ styles.container }>
                <View>
                    <Text> Telefone </Text>
                    <Text> NumeroTelefoneComoProps </Text>
                </View>
                <View>
                    <Text> Endereço </Text>
                    <Text> EndereçoComoProps </Text>
                </View>
            </View>
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

export default PerfilEquipamento;
