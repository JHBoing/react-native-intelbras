import React from 'react';  
import { Text, View, StyleSheet, Alert } from 'react-native';


class EquipamentoClienteButton extends React.Component {
    static navigationOptions = {
        headerTitle: 'Nome do Equipamento',
    };

    render() {
        let idEquipamento = this.props.id;
        let nomeCliente = this.props.nome;
        let clienteEquipamentos = this.props.clienteEquipamentos;
        let equipamento = clienteEquipamentos[idEquipamento];

        return (
            <View>
                <Text
                style={styles.block}
                onPress={() => this.props.navigation.navigate('Equipamento',
                    {idEquipamento, listaEquipamentos: clienteEquipamentos, title: equipamento.nome})}
				>
                {equipamento.nome}- Cliente: {nomeCliente}
                </Text>
            </View>
        );
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
export default EquipamentoClienteButton;