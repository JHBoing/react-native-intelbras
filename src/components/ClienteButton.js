import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


class ClienteButton extends React.Component {

    render() {
        var idCliente = this.props.id;
        var listaClientes = this.props.listaClientes;
        var cliente = listaClientes[idCliente];
        var refresh = this.props.refreshHomeScreen;
        let nomeCliente = this.props.nome;

        return (
            <View>
                <Text
				style={styles.block}
				onPress={() => this.props.navigation.navigate('Cliente', {id: idCliente, listaClientes: listaClientes, refreshHomeScreen: refresh, title: nomeCliente  })}
				>
                {cliente.nome}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create ({ 
    block: {
	    backgroundColor: '#00A94C',
        height: 50,
        textAlign: 'center',
        textAlignVertical: 'center',
        marginBottom: 10,
        fontSize: 20
    },
});

export default ClienteButton;