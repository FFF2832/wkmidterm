import React from "react";
import { Box, FlatList ,Image} from "native-base";
import DTypeDetail from "./DTypeDetail";

const DTypeList = ({ list, navigation }) => {
  const renderItem = ({ item }) => <DTypeDetail dtype={item} navigation={navigation} />;
  return (
    <Box bg="#E2D5C3"    >
       
        <FlatList
    _dark={{ bg: "#4F5B57"  }}
    _light={{ bg: "#E2D5C3"  }}

      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.title}
      
    />  
    </Box>
      
  );  
}

export default DTypeList;