import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';


class NovoEquipamento extends React.Component {

    static navigationOptions = {
        headerTitle: 'Novo Equipamento',
    };
    
    render() {
        return (
        <View style={{backgroundColor: '#FFFFFF', flex: 1}}>
            <View style={ styles.container }>
                <View>
                    <Text>Nome</Text>
                    <Text>------</Text>
                    <Text>Telefone</Text>
                    <Text>-------</Text>
                    <Text>Endereço</Text>
                    <Text>-------</Text>
                </View>
                <View>
                    <Button
                        title="Salvar"
                        onPress={() => this.props.navigation.goBack()}
                        style={ styles.button }
                    />
                </View>
            </View>
        </View>
        );
    }    
}

const styles = StyleSheet.create ({ 
    container: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        flex: 1
    },
    button: {
        width: 100,
        height: 50,
    }
});

export default NovoEquipamento;
