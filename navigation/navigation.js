import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TodoList from "../components/todoList";
import { Ionicons } from "@expo/vector-icons";
import NotificationStack from "./notificationStack";

const Tab = createBottomTabNavigator();

const Navigation = () => (
  <NavigationContainer>
    <Tab.Navigator initialRouteName="Notification">
      <Tab.Screen
        name="Home"
        component={TodoList}
        options={{
          title: "Todo Home",
          tabBarLabel: "Home",
          tabBarIcon: () => (
            <Ionicons name="ios-home" size={24} color="black" />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Notification"
        component={NotificationStack}
        options={{
          title: "Notification Tab",
          tabBarLabel: "Notification",
          tabBarIcon: () => (
            <Ionicons name="ios-notifications" size={24} color="black" />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  </NavigationContainer>
);

export default Navigation;
