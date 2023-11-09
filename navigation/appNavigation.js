import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CalculatorScreen from "../screens/CalculatorScreen";
import BmiScreen from "../screens/BmiScreen";
import KonversiSuhuScreen from "../screens/KonversiSuhuScreen";
import AboutmeScreen from "../screens/AboutmeScreen";
import Icon from "react-native-vector-icons/FontAwesome5";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="HalamanHome"
          options={{ headerShown: false }}
          component={TabNavigator}
        />
        <Stack.Screen
          name="Welcome"
          options={{ headerShown: false }}
          component={WelcomeScreen}
        />
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="SignUp"
          options={{ headerShown: false }}
          component={SignUpScreen}
        />
        <Stack.Screen
          name="Profile"
          options={{ headerShown: false }}
          component={ProfileScreen}
        />
        <Stack.Screen
          name="Calculator"
          options={{ headerShown: false }}
          component={CalculatorScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Icon name="home" size={25} color={"#1F41BB"} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => <Icon name="user" size={25} color={"#1F41BB"} />,
        }}
      />
      <Tab.Screen
        name="Calculator"
        component={CalculatorScreen}
        options={{
          tabBarIcon: () => (
            <Icon name="calculator" size={25} color={"#1F41BB"} />
          ),
        }}
      />
      <Tab.Screen
        name="BmiCalculator"
        component={BmiScreen}
        options={{
          tabBarIcon: () => <Icon name="weight" size={25} color={"#1F41BB"} />,
        }}
      />
      <Tab.Screen
        name="KonfersiSuhu"
        component={KonversiSuhuScreen}
        options={{
          tabBarIcon: () => (
            <Icon name="temperature-low" size={25} color={"#1F41BB"} />
          ),
        }}
      />
      <Tab.Screen
        name="Aboutme"
        component={AboutmeScreen}
        options={{
          tabBarIcon: () => <Icon name="male" size={25} color={"#1F41BB"} />,
        }}
      />
    </Tab.Navigator>
  );
}
