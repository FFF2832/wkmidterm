import React from "react";
import { Box } from "native-base";
import AlbumList from "../components/AlbumList";
import albumData from "../json/albums.json";
// import HomeList from "../components/HomeList.js";
// import albumData from "../json/albums.json";
const AlbumScreen = ({ navigation }) => {
  return (
    <Box>
      < AlbumList 
        list={albumData.albumList}
        navigation={navigation}
      />
      {/* < HomeList 
      list={albumData.albumList}
      navigation={navigation}
    /> */}
    </Box>
  );
};

export default AlbumScreen;
