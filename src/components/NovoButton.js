import React from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';


class NovoButton extends React.Component {

    render() {
        return (
            <View>
                <Text
				style={styles.button}
				onPress={ () => this.props.navigation.navigate(this.props.nextScreen, this.props.navProps) }
				>
                {this.props.text}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create ({ 
    button: {
        backgroundColor: '#27BDBE',
        height: 50,
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
    },
});

export default NovoButton;