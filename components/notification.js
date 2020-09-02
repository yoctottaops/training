import React from "react";
import {
  Text,
  SafeAreaView,
  Platform,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const NotificationList = ({ notifications }) => {
  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        data={notifications}
        keyExtractor={(item) => "key_" + item.date}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.push("notificationDetails", item);
            }}
          >
            <Text>{item.type}</Text>
          </TouchableOpacity>
        )}
      ></FlatList>
    </View>
  );
};
const Notification = ({ notifications }) => {
  return Platform.OS === "ios" ? (
    <SafeAreaView>
      <NotificationList notifications={notifications}></NotificationList>
    </SafeAreaView>
  ) : Platform.OS === "android" ? (
    <View style={{ paddingTop: 50 }}>
      <NotificationList notifications={notifications}></NotificationList>
    </View>
  ) : (
    <View>
      <NotificationList notifications={notifications}></NotificationList>
    </View>
  );
};

const mapStateToProps = ({ notifications }) => ({ notifications });

export default connect(mapStateToProps, null)(Notification);
