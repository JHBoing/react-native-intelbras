import React from 'react';
import { StyleSheet, Button, View, Text, WebView, Linking } from 'react-native';


class PerfilEquipamento extends React.Component {

    

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.title}`,
        headerTitleStyle : {textAlign: 'center', alignSelf:'center'},
        headerStyle:{
            backgroundColor:'white',
        },
    });

    async componentWillMount() {
        let { navigation } = this.props;
        let idEquipamento = navigation.getParam('idEquipamento');
        let listaEquipamentos = navigation.getParam('listaEquipamentos');
        let equipamento = listaEquipamentos[idEquipamento];

        this.setState({ip :equipamento.ip});
       
    }

    removerEquipamento = () => {
        // Pegar lista de clientes, o cliente, pra pegar o equipamento, remover do array, 
        // devolver pro cliente, e devolver o cliente pra lista, e salvar no AsyncStorage
        // igual no removerCliente() e depois dar refresh no PerfilCliente
    }
    renderLink = () => {
        Alert.alert('teste');
        const ip = 'google.com'; 
        
        return (
            <WebView
                ref = {(ref) => {this.webview = ref; }}
                source = {{ ip }}
               
            />   
        );   
    }


    render() {
        let { navigation } = this.props;
        let idEquipamento = navigation.getParam('idEquipamento');
        let listaEquipamentos = navigation.getParam('listaEquipamentos');
        let equipamento = listaEquipamentos[idEquipamento];

        return (
        <View style={{backgroundColor: '#FFFFFF', flex: 1}}>
            <View style={ styles.buttons }>
                <Text 
                style={ styles.buttonExcluir }
                onPress={ this.removerEquipamento }>
                    Excluir
                </Text>
                <Text
                style={ styles.buttonEditar }
                /*onPress={() => this.props.navigation.navigate('CadastroEquipamento', 
                    {idCliente: idCliente, listaClientes: listaClientes, refreshPerfilCliente: this.refresh})}*/
                >
                Editar
                </Text>
            </View>
            <View style={ styles.container }>
                <View>
                    <Text> Nome </Text>
                    <Text> {equipamento.nome} </Text>
                </View>
                <View>
                    <Text> Tipo </Text>
                    <Text> {equipamento.tipo} </Text>
                </View>
                <View>
                    <Text> Modelo </Text>
                    <Text> {equipamento.modelo} </Text>
                </View>
                <View>
                    <Text> Endereço IP </Text>
                    <Text onPress={ () => this.props.navigation.navigate('IpWebView', 
                    {ip:equipamento.ip}) } >  {equipamento.ip} </Text>
                </View>
                <View>
                    <Text> Comentario </Text>
                    <Text> {equipamento.comentario} </Text>
                </View>
            </View>
        </View>
        );
    }    
}

const styles = StyleSheet.create ({ 
    container: {
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1
    },
    button: {
        width: 100,
        height: 50,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
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
    buttonEditar: {
        backgroundColor: '#27BDBE',
        height: 50,
        width: '50%',
        textAlign: 'center',
        textAlignVertical: 'center',
        marginBottom: 10,
        fontSize: 20
    },
});

export default PerfilEquipamento;
