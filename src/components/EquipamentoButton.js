import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


class EquipamentoButton extends React.Component {

    render() {
        let idEquipamento = this.props.id;
        let listaEquipamentos = this.props.listaEquipamentos;
        let equipamento = listaEquipamentos[idEquipamento];
        let nome = this.props.nome;
        return (
            <View>
                <Text
				style={styles.block}
				onPress={() => this.props.navigation.navigate('Equipamento', 
                    {idEquipamento, listaEquipamentos, title: nome})}
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