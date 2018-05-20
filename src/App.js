import React from 'react';
import { AppRegistry } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './components/HomeScreen';
import PerfilCliente from './components/PerfilCliente';
import NovoCliente from './components/NovoCliente';
import NovoEquipamento from './components/NovoEquipamento';
import PerfilEquipamento from './components/PerfilEquipamento';

const RootStack = createStackNavigator ({
    Home: HomeScreen,
    CadastroCliente: NovoCliente,
    Cliente: PerfilCliente,
    CadastroEquipamento: NovoEquipamento,
    Equipamento: PerfilEquipamento
});

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}