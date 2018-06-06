import React from 'react';
import { Text, View, StyleSheet, WebView, Alert } from 'react-native';


class IpWebView extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.getParam('ip')}`,
        headerTitleStyle : {textAlign: 'center', alignSelf:'center'},
        headerStyle:{
            backgroundColor:'white',
        },
    });

    render () {
        let { navigation } = this.props;
        let ip = navigation.getParam('ip');
        ip = "https://" + ip;
      
      return(
        <WebView
            source={{uri: ip}}
       
          />   
      );
    }





}

export default IpWebView;