import React from "react";
import { Text, HStack, Pressable } from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const ListItem = ({ title, navigation, destination }) => {
  return (
    <Pressable
      onPress={() => {
        destination ? navigation.navigate(destination) : null;
      }}
    >
      <HStack
        _dark={{
          bg: "blueGray.900",
          borderColor: "blueGray.500",
          borderButtomWidth: 0.6,
        }}
        _light={{ bg: "#E2D5C3" }}
        px="4"
        py="4"
        borderTopWidth={0}
        borderColor="lightgray"
        justifyContent="space-between"
      >
         <MaterialCommunityIcons name="cog-outline" color="#4F5B57" bg="#4F5B57" size={26} />
        <Text fontSize={15}>{title}</Text>
        <AntDesign name="right" color="gray" size={16} />
      </HStack>
    </Pressable>
  );
};

export default ListItem;
