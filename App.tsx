import React from 'react';
		import AccSocket from './src/components/accSocket';
		import {View} from 'react-native';

		export const ws = new WebSocket('ws://10.90.30.71:5000');
		const App = () => {
		  ws.onopen = () => {
			ws.send('Conectando al servidor');
			ws.send('Usuario: <nickName>');
		  };
		  return (
			<View style={{flex: 1}}>
			  <AccSocket />
			</View>
		  );
		};
		export default App;