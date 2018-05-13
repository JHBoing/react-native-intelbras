import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
	const { 
        textStyle,
        viewStyle
    } = styles;

	return (
		<View style={viewStyle}>
			<Text style={textStyle}>Intelbras</Text>
		</View>
	);
};

const styles = {
	textStyle: {
        fontSize: 20,        
	},
	viewStyle: {
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative',
	}
}

export default Header;