import React from "react";
import { Text } from "react-native";

const NotificationDetail = ({ route }) => (
  <Text>{JSON.stringify(route.params)}</Text>
);

export default NotificationDetail;
