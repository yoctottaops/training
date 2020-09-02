import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Notification from "../components/notification";
import NotificationDetail from "../components/notificationDetail";

const NotificationStack = createStackNavigator();

const notificationStack = () => (
  <NotificationStack.Navigator>
    <NotificationStack.Screen
      name="notificationList"
      component={Notification}
      options={{
        title: "Notification List",
        headerStyle: {
          backgroundColor: "#2f95dc",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    ></NotificationStack.Screen>
    <NotificationStack.Screen
      name="notificationDetails"
      component={NotificationDetail}
      options={({ route }) => ({
        title:
          route.params && route.params.payload.name
            ? route.params.payload.name
            : "Notification List",
        headerStyle: {
          backgroundColor: "#2f95dc",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      })}
    ></NotificationStack.Screen>
  </NotificationStack.Navigator>
);

export default notificationStack;
