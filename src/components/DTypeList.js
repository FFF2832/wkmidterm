import React from "react";
import { FlatList } from "native-base";
import DTypeDetail from "./DTypeDetail";

const DTypeList = ({ list, navigation }) => {
  const renderItem = ({ item }) => <DTypeDetail dtype={item} navigation={navigation} />;
  return (
    <FlatList
    _dark={{ bg: "blueGray.900" }}
    _light={{ bg: "white" }}
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.title}
    />    
  );  
}

export default DTypeList;