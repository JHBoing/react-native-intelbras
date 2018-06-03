import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


class EquipamentoButton extends React.Component {

    render() {
        var idEquipamento = this.props.id;
        var listaEquipamentos = this.props.listaEquipamentos;
        var equipamento = listaEquipamentos[idEquipamento];
        return (
            <View>
                <Text
				style={styles.block}
				onPress={() => this.props.navigation.navigate('Equipamento', 
                    {idEquipamento: idEquipamento, listaEquipamentos: listaEquipamentos})}
				>
                {equipamento.nome}
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

export default EquipamentoButton;