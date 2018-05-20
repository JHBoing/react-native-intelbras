import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';


class PerfilEquipamento extends React.Component {

    static navigationOptions = {
        headerTitle: 'nomeEquipamentoComoProps',
    };
    
    render() {
        return (
        <View style={{backgroundColor: '#FFFFFF', flex: 1}}>
            <View style={ styles.container }>
                <View>
                    <Text> Nome </Text>
                    <Text> nomeEquipamentoComoProps </Text>
                </View>
                <View>
                    <Text> Tipo </Text>
                    <Text> TipoComoProps </Text>
                </View>
                <View>
                    <Text> Modelo </Text>
                    <Text> ModeloComoProps </Text>
                </View>
                <View>
                    <Text> Endereço IP </Text>
                    <Text> EndereçoIPComoProps </Text>
                </View>
                <View>
                    <Text> Comentario </Text>
                    <Text> ComentarioComoProps </Text>
                </View>
            </View>
        </View>
        );
    }    
}

const styles = StyleSheet.create ({ 
    container: {
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1
    },
    button: {
        width: 100,
        height: 50,
    }
});

export default PerfilEquipamento;
