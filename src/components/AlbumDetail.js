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
            <Center  width="304" height="46"  bg="#fff" borderRadius={7} _dark={{  bg:"#000"}} >
            <Text position= "absolute"    marginRight={50} >{album.title}</Text>
            <Image
              source={{ uri: album.image }}
              alt="album"
              width="10"
              height="10"
              flex={1}
              
              marginRight={264} 
            /> 
            </Center>
          </HStack>
          {/* <HStack></HStack>
          <HStack></HStack> */}
      </VStack>
      </Center>
      
     
    </Box>
  )};

export default AlbumDetail;
