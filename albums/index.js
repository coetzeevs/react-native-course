/**
 * @format
 */
// import library to help create a component
import React, { PropTypes, Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// create the component
const App = () => (
	<View style={{ flex: 1 }}>
		<Header headerText={'Albums'}/>
		<AlbumList />
	</View>
);


// render it to the device
AppRegistry.registerComponent('albums', () => App);