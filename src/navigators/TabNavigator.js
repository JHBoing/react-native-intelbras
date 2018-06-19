import { createBottomTabNavigator, StackNavigator } from 'react-navigation';
import RootStackNavigator from './RootStackNavigator';
import Equipamentos from '../components/Equipamentos';
import PerfilEquipamentos from '../components/PerfilEquipamento';

const EquipamentosStackNavigator = StackNavigator ({
    Equipamentos: Equipamentos,
    PerfilEquipamento: PerfilEquipamentos

});

const TabNavigator = createBottomTabNavigator(
    {
        Clientes: RootStackNavigator,
        Equipamentos: EquipamentosStackNavigator 
    },
    {
        tabBarOptions: {
            labelStyle: {
                fontSize: 20
            }
        }
    }
);
export default TabNavigator;