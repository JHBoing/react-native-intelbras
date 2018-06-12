import { StackNavigator } from 'react-navigation';

import HomeScreen from '../components/HomeScreen';
import PerfilCliente from '../components/PerfilCliente';
import NovoCliente from '../components/NovoCliente';
import NovoEquipamento from '../components/NovoEquipamento';
import PerfilEquipamento from '../components/PerfilEquipamento';
import IpWebView from '../components/IpWebView';

const RootStackNavigator = StackNavigator({
    Home: HomeScreen,
    CadastroCliente: NovoCliente,
    Cliente: PerfilCliente,
    CadastroEquipamento: NovoEquipamento,
    Equipamento: PerfilEquipamento,
    IpWebView:IpWebView
});

export default RootStackNavigator;