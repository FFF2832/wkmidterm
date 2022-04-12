import React from "react";
import { Box ,Center} from "native-base";
import AlbumList from "../components/AlbumList";
import albumData from "../json/albums.json";
import {  ScrollView} from 'react-native';
// import HomeList from "../components/HomeList.js";
// import albumData from "../json/albums.json";
import Counter from"../components/Counter"
const AlbumScreen = ({ navigation }) => {
  return (
    <Box>
        
      < AlbumList 
        list={albumData.albumList}
        navigation={navigation}
        marginTop={10}
        bg="#E2D5C3"
        
      />
      {/* <Box bg="#E2D5C3" width="400" height="500"></Box> */}
      
      {/* <Counter/> */}
    </Box>
    
  );
};

export default AlbumScreen;
