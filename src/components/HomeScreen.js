import React from 'react';
import ClienteButton from './ClienteButton';
import NovoButton from './NovoButton';
import { StyleSheet, Button, View, Text, AsyncStorage, Alert } from 'react-native';


class HomeScreen extends React.Component {

    static navigationOptions = {
        headerTitle: 'Intelbras',
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
          // Error retrieving data
        }
    }

    refresh = (clientes) => {
        this.setState({clientes: clientes});
    }

    listaClientes() {
        let clientes = this.state.clientes;
        if (!clientes) return;
        return clientes.map((cliente, key) => {
            return (
                <ClienteButton 
                    refreshHomeScreen={this.refresh}
                    listaClientes={clientes}
                    id={key}
                    nome={clientes[key].nome}
                    navigation={this.props.navigation}
                />
            );
        });
    }
  
    render() {
        var clientesProps = {clientes: this.state.clientes, refreshHomeScreen: this.refresh};
        return (
        <View style={{backgroundColor: '#FFFFFF'}}>
            <View>
                <NovoButton 
                navigation={ this.props.navigation }
                navProps={clientesProps}
                nextScreen="CadastroCliente"
                text="Novo cliente"
                />

            </View>
            <View> 
            {this.listaClientes()} 
            </View>

        </View>
        );
    }    
}

export default HomeScreen;

