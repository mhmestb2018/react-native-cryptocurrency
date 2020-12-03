import 'react-native-gesture-handler';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './pages/HomeScreen';
import DetailsScreen from './pages/DetailsScreen';
import LiveScreen from   './pages/LiveScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
	return (
		<Stack.Navigator
			initialRouteName="Home"
			screenOptions={{
			headerStyle: { backgroundColor: '#E9F0FB' },
			headerTintColor: '#5B628F',
			headerTitleStyle: { fontWeight: 'bold' }
			}}>
			<Stack.Screen
				name="Home"
				component={HomeScreen}
				options={{ title: 'Home Page' }}/>
			<Stack.Screen
				name="Details"
				component={DetailsScreen}
				options={{ title: 'CryptoCurrency Details' }} />
		</Stack.Navigator>
	);
}

function LiveStack() {
	return (
		<Stack.Navigator
			initialRouteName="Live"
			screenOptions={{
				headerStyle: { backgroundColor: '#E9F0FB' },
				headerTintColor: '#5B628F',
				headerTitleStyle: { fontWeight: 'bold' }
			}}>
			<Stack.Screen
				name="Live"
				component={LiveScreen}
				options={{ title: 'Live Currency' }} />
		</Stack.Navigator>
	);
}

function App() {
  return (
    <NavigationContainer>
		<Tab.Navigator
			initialRouteName="Feed"
			tabBarOptions={{
			activeTintColor: '#4CAF50',
			}}>
			<Tab.Screen
				name="HomeStack"
				component={HomeStack}
				options={{
					tabBarLabel: 'Home',
					tabBarIcon: ({ color, size }) => (
					<MaterialCommunityIcons
						name="home"
						color={color}
						size={size}
					/>
					),
				}}  
			/>
			<Tab.Screen
				name="LiveStack"
				component={LiveStack}
				options={{
					tabBarLabel: 'Live',
					tabBarIcon: ({ color, size }) => (
					<MaterialCommunityIcons
						name="artstation"
						color={color}
						size={size}
					/>
					),
				}} 
			/>
		</Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;