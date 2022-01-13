import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Agents from './src/pages/agents';
import Weapons from './src/pages/weapons';
import Maps from './src/pages/maps';
import AgentsDetail from './src/pages/AgentsDetail';
import WeaponsDetail from './src/pages/WeaponsDetail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import colors from './src/colors/colors';
import { Provider } from 'react-redux';
import initialState from './src/redux/store';
import translate from './src/translations/translate';
import { useSelector, useDispatch } from 'react-redux';
import { getLanguage } from './src/redux/reducer';

const Tab = createBottomTabNavigator();

function BottomNavigator({ navigation }) {
  useEffect(() => {
    setLanguage('en-US');
    getData();
    return () => {
      setLanguage('');
    };
  }, [language]);
  const [language, setLanguage] = useState('en-US');

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('language');
      if (value !== null) {
        setLanguage(value);
        return value;
      }
    } catch (e) {
      console.log(e);
    }
  };
  console.log(translate(language).ajanlar);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveBackgroundColor: colors.dark,
        tabBarActiveBackgroundColor: colors.main,
        tabBarAllowFontScaling: true,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: colors.main,

        tabBarStyle: {
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.dark,
          borderColor: colors.dark,
        },
        tabBarLabelStyle: {
          fontSize: 14,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => {
            return <Icon name="account" color={color} size={30} />;
          },
          title: translate(language).ajanlar,
          headerStyle: {
            backgroundColor: colors.dark,
          },
          headerTitleStyle: {
            color: colors.main,
            fontSize: 18,
            fontWeight: '800',
          },
          headerTitleAlign: 'center',
        }}
        name="Agents"
        component={Agents}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => {
            return <Icon name="pistol" color={color} size={30} />;
          },
          title: translate(language).silahlar,
          headerStyle: {
            backgroundColor: colors.dark,
          },
          headerTitleStyle: {
            color: colors.main,
            fontSize: 18,
            fontWeight: '800',
          },
          headerTitleAlign: 'center',
        }}
        name="Weapons"
        component={Weapons}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => {
            return <Icon name="map" color={color} size={30} />;
          },
          title: translate(language).haritalar,
          headerStyle: {
            backgroundColor: colors.dark,
          },
          headerTitleStyle: {
            color: colors.main,
            fontSize: 18,
            fontWeight: '800',
          },
          headerTitleAlign: 'center',
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
    <Provider store={initialState}>
      <NavigationContainer>
        <StatusBar backgroundColor={colors.dark} />
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name="Home" component={BottomNavigator} />
          <Stack.Screen name="AgentsDetailPage" component={AgentsDetail} />
          <Stack.Screen name="WeaponsDetailPage" component={WeaponsDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
