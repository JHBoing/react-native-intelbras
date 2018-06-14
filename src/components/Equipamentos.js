import React from 'react';
import { Text, View, StyleSheet, AsyncStorage, Alert } from 'react-native';
import EquipamentoClienteButton from './EquipamentoClienteButton';


class Equipamentos extends React.Component {

    static navigationOptions = {
        headerTitle: 'Lista de Equipamentos',
    };

    async componentWillMount() {
        this.setState({clientes: ''});
        try {
            let value = await AsyncStorage.getItem('clientes');
            if (!value) {
                value = [];
            }
            this.setState({clientes: JSON.parse(value)});
        } catch (error) {
            
        }
    }

    listaClientesEquipamentos() {
        let clientes = this.state.clientes;
        
        if (!clientes) return;
        return clientes.map((cliente, key) => {
            return cliente.equipamentos.map((equipamento, key) => {
                return (
                <EquipamentoClienteButton
                    clienteEquipamentos = {cliente.equipamentos}
                    id={key}
                    nome={cliente.nome}
                    navigation={this.props.navigation}
                />);
            });
        });
    }

    render() {
        return (
            <View> 
                {this.listaClientesEquipamentos()} 
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

export default Equipamentos;