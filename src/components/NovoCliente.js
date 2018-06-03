import React from 'react';
import { StyleSheet, Button, View, Text, TextInput, AsyncStorage, Alert } from 'react-native';


class NovoCliente extends React.Component {

    static navigationOptions = {
        headerTitle: 'Novo Cliente',
    };

    save = () => {
        var { navigation } = this.props;
        var clientes = navigation.getParam('clientes');
        var refreshHomeScreen = navigation.getParam('refreshHomeScreen');

        var novoCliente = {
            nome: this.state.nome,
            telefone: this.state.telefone,
            endereco: this.state.endereco
        };

        clientes.push(novoCliente);
        AsyncStorage.setItem('clientes', JSON.stringify(clientes));
        refreshHomeScreen(clientes);
        navigation.goBack();
    }

    render() {
        const { navigation } = this.props;
        const clientes = navigation.getParam('clientes');

        return (
        <View style={{backgroundColor: '#FFFFFF', flex: 1}}>
            <View style={ styles.container }>
                <View>
                    <Text>Nome</Text>
                    <TextInput onChangeText={(text) => this.setState({nome: text})} />
                    <Text>Telefone</Text>
                    <TextInput onChangeText={(text) => this.setState({telefone: text})}/>
                    <Text>Endereço</Text>
                    <TextInput onChangeText={(text) => this.setState({endereco: text})} autoCapitalize = 'none'/>
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
        backgroundColor: '#27BDBE',
        width: 100,
        height: 50,
    },
});

export default NovoCliente;
