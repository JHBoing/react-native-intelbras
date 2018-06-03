import React from 'react';
import NovoButton from './NovoButton';
import EquipamentoButton from './EquipamentoButton';
import { StyleSheet, Button, View, Text, TextInput, AsyncStorage, Alert } from 'react-native';


class PerfilCliente extends React.Component {

    static navigationOptions = {
        headerTitle: 'nomeClienteComoProps',
    };

    async componentWillMount() {
        var { navigation } = this.props;
        var idCliente = navigation.getParam('id');
        var listaClientes = navigation.getParam('listaClientes');
        var cliente = listaClientes[idCliente];

        this.setState({id: idCliente});
        this.setState({telefone: cliente.telefone});
        this.setState({endereco: cliente.endereco});
        this.setState({listaClientes: listaClientes});
    }

    refresh = (equipamentos) => {
        this.setState({equipamentos: equipamentos});
    } 

    removerCliente = () => {
        var listaClientes = this.state.listaClientes;
        listaClientes.splice(this.state.id, 1);
        AsyncStorage.setItem('clientes', JSON.stringify(listaClientes));
        this.props.navigation.state.params.refreshHomeScreen(listaClientes);
        this.props.navigation.goBack();
    }
    
    listaEquipamentos() {
        var { navigation } = this.props;
        var idCliente = navigation.getParam('id');
        var listaClientes = navigation.getParam('listaClientes');
        var cliente = listaClientes[idCliente];

        if (!cliente || !cliente.hasOwnProperty('equipamentos')) return;

        return cliente.equipamentos.map((equipamento, key) => {
            return (
                <EquipamentoButton 
                listaEquipamentos={cliente.equipamentos}
                id={key}
                navigation={this.props.navigation}
                />
                );
        });
    }

    render() {
        var { navigation } = this.props;
        var idCliente = navigation.getParam('id');
        var listaClientes = navigation.getParam('listaClientes');

        return (
        <View style={{backgroundColor: '#FFFFFF'}}>
            <View style={ styles.container }>
                <View>
                    <Text style={ styles.info }> Telefone: { this.state.telefone } </Text>
                </View>
                <View>
                    <Text style={ styles.info }> Endereço: { this.state.endereco } </Text>
                </View>
            </View>
            <View style={ styles.buttons }>
                <Text 
                style={ styles.buttonExcluir }
                onPress={ this.removerCliente }>
                    Excluir cliente
                </Text>
                <Text
                style={ styles.buttonNovoEquipamento }
                onPress={() => this.props.navigation.navigate('CadastroEquipamento', 
                    {idCliente: idCliente, listaClientes: listaClientes, refreshPerfilCliente: this.refresh})}
                >
                Novo equipamento
                </Text>
            </View>
            <View> 
                {this.listaEquipamentos()} 
            </View>
        </View>
        );
    } 
}

const styles = StyleSheet.create ({ 
    container: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    info: {
        marginTop: 15,
        marginBottom: 15,
        textAlign: 'center'
    },
    buttonExcluir: {
        backgroundColor: '#D72736',
        height: 50,
        width: '50%',
        textAlign: 'center',
        textAlignVertical: 'center',
        marginBottom: 10,
        fontSize: 20
    },
    buttonNovoEquipamento: {
        backgroundColor: '#27BDBE',
        height: 50,
        width: '50%',
        textAlign: 'center',
        textAlignVertical: 'center',
        marginBottom: 10,
        fontSize: 20
    },
    button: {
        width: 100,
        height: 50,
    }
});

export default PerfilCliente;