import React from 'react';
import { StyleSheet, Button, View, Text, TextInput, AsyncStorage, Alert } from 'react-native';


class NovoEquipamento extends React.Component {

    static navigationOptions = {
        headerTitle: 'Novo Equipamento',
    };
    
    save = () => {
        var { navigation } = this.props;
        var listaClientes = navigation.getParam('listaClientes');
        var idCliente = navigation.getParam('idCliente');
        var refreshPerfilCliente = navigation.getParam('refreshPerfilCliente');
        var cliente = listaClientes[idCliente];

        if (!cliente.equipamentos) {
            cliente.equipamentos = [];
        }

        var novoEquipamento = {
            nome: this.state.nome,
            tipo: this.state.tipo,
            modelo: this.state.modelo,
            ip: this.state.ip,
            comentario: this.state.comentario
        }

        cliente.equipamentos.push(novoEquipamento); 
        listaClientes.slice(idCliente, 1, cliente);
        refreshPerfilCliente(listaClientes);
        AsyncStorage.setItem('clientes', JSON.stringify(listaClientes));
        navigation.goBack();
    }

    render() {
        return (
        <View style={{backgroundColor: '#FFFFFF', flex: 1}}>
            <View style={ styles.container }>
                <View>
                    <Text>Nome</Text>
                    <TextInput onChangeText={(text) => this.setState({nome: text})} />
                    <Text>Tipo</Text>
                    <TextInput onChangeText={(text) => this.setState({tipo: text})} />
                    <Text>Modelo</Text>
                    <TextInput onChangeText={(text) => this.setState({modelo: text})} />
                    <Text>Endereço IP</Text>
                    <TextInput onChangeText={(text) => this.setState({ip: text})} />
                    <Text>Comentario</Text>
                    <TextInput onChangeText={(text) => this.setState({comentario: text})} />
                </View>
                <View>
                    <Button
                        title="Salvar"
                        onPress={ this.save }
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
