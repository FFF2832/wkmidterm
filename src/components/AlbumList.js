import React from "react";
import { FlatList ,Box,Center} from "native-base";
import AlbumDetail from "./AlbumDetail";

const AlbumList = ({ list, navigation }) => {
  const renderItem = ({ item }) => <AlbumDetail album={item} navigation={navigation} />;
  return (

    <FlatList
    _dark={{ bg: "#4F5B57" }}
    _light={{ bg: "#E2D5C3" }}
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.title}
      contentContainerStyle={{paddingBottom:440}}
    />  
     
  );  
}

export default AlbumList;

