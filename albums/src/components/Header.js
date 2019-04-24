// import libraries for making the component
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

// make the component
const Header = (props) => {
	const { textStyle, viewStyle } = styles;

	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 40
	},
	viewStyle: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 90,
		paddingTop: 30,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 3},
		shadowOpacity: 0.1,
		elevation: 2,
		position: 'relative'
	},
});

// component available to other parts of the app
export default Header;
