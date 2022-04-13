
import React from "react";
import { StyleSheet } from "react-native";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable,Center } from "native-base"

const AlbumDetail = ({ album, navigation }) => {
  return (
    <Box 
      marginX={0} marginBottom={2} marginTop={5}  shadow={2} flex={1}
      // _dark={{  borderWidth: 0.6 }}
    >
      
      <Center>
      <VStack>
          <HStack>
            <Center  width="304" height="167"  bg="#B9D2C8" borderRadius={7}  >
            
            <Image
              source={{ uri: album.image }}
              alt="album"
              width="304" height="167" 
              flex={1}
              borderRadius={7}
             
            /> 
             <Center  width="304" height="46"  bg="#B9D2C8" borderRadius={7}   >
             <Text position= "absolute"  fontWeight="bold"  marginRight={50} _dark={{  color:"#4F5B57"}} color="#4F5B57">{album.title}</Text>
             </Center>
            </Center>
          </HStack>
         
      </VStack>
      </Center>
      
     
    </Box>
  )};

export default AlbumDetail;