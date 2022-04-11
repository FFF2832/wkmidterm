import React from "react";
import { Box,Image,Center} from "native-base";
import DTypeList from "../components/DTypeList";
import typeData from "../json/type.json";
// import { Box, HStack, VStack, AspectRatio, Text,  Pressable,Center } from "native-base"
import {  ScrollView} from 'react-native';
const DTypeScreen = ({ navigation }) => {
  return (
    <Box>
    <ScrollView>
    <Box>
          <Image
            
            width="413"
            height="191"
            source={{ uri: "https://github.com/FFF2832/wkmidterm/blob/master/src/images/debby-hudson-zAJcnffG8xw-unsplash.png?raw=true" }}
            alt="1"
            />
             <Center 
            width="178" height="5" bg="#E2D5C3" position= "absolute" zIndex= "999" elevation="2"  marginTop={10}
            >
            
            </Center>
            <Image
             width="172"
             height="54"
             flex="1"
             position= "absolute" zIndex= "999" elevation="2"
             marginTop={6}
            
             marginBack={2}
            source={{uri:"https://github.com/FFF2832/wkmidterm/blob/master/src/images/Persnote.png?raw=true"}}
            alt="1"
            />
           
    </Box>
     
      < DTypeList 
        list={typeData.typeList}
        navigation={navigation}
      
      />
      </ScrollView>
     
    </Box>
  );
};

export default DTypeScreen;