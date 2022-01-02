import * as React from 'react';
import {Text, StyleSheet, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Agents from './src/pages/agents';
import Weapons from './src/pages/weapons';
import Maps from './src/pages/maps';
import AgentsDetail from './src/pages/AgentsDetail';
import WeaponsDetail from './src/pages/WeaponsDetail';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import colors from './src/colors/colors';
const Tab = createBottomTabNavigator();

function BottomNavigator({navigation}) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveBackgroundColor: colors.dark,
        tabBarActiveBackgroundColor: colors.main,

        tabBarStyle: {
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.dark,
          borderColor: colors.dark,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          color: 'white',
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: () => {
            return (
              <Image
                source={require('./assets/breach.png')}
                style={styles.image}
              />
            );
          },
        }}
        name="Agents"
        component={Agents}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => {
            return (
              <Image
                source={require('./assets/vandal.png')}
                style={styles.image}
              />
            );
          },
        }}
        name="Weapons"
        component={Weapons}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => {
            return (
              <Image
                source={require('./assets/ascent.png')}
                style={styles.image}
              />
            );
          },
        }}
        name="Maps"
        component={Maps}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={BottomNavigator} />
        <Stack.Screen name="AgentsDetailPage" component={AgentsDetail} />
        <Stack.Screen name="WeaponsDetailPage" component={WeaponsDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  image: {
    maxWidth: 80,
    height: 45,
    resizeMode: 'contain',
  },
});
